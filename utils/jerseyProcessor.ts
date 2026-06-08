/**
 * JERSEY PROCESSOR
 * ═════════════════════════════════════════════════════════════════════════════
 * Automatically categorizes, filters, and sorts jersey data based on
 * filter configuration. This is the central processor that transforms
 * raw scraper output into properly organized data.
 *
 * USAGE:
 *   import { processJerseyData } from '@/utils/jerseyProcessor';
 *   const jerseys = await fetch('your-scraped-data.json').then(r => r.json());
 *   const processed = processJerseyData(jerseys);
 *   // jerseys are now fully categorized, sorted, and ready to use
 */

import {
  FILTER_CONFIG,
  FEATURED_PRIORITY_ORDER,
  NAME_CORRECTIONS,
  SUBFILTER_MATCHERS,
  type MainFilter,
} from './filterConfig';

export type Jersey = {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  year: number;
  kit: 'Home' | 'Away' | 'Third';
  player: string;
  type: 'Premium' | 'Standard';
  badge: string;
  originalPrice: number;
  discountedPrice: number;
  sizes: string[];
  sizeStock?: Record<string, boolean>;
  inStock: boolean;
  images: string[];
  description: string;
  tags: string[];
  mainCategory?: MainFilter;
  subCategory?: string;
  featured?: boolean;
};

/**
 * Apply name corrections (typo fixes)
 */
function correctProductName(name: string): string {
  return NAME_CORRECTIONS[name] || name;
}

/**
 * Detect main category for a jersey
 */
function detectMainCategory(jersey: Jersey): MainFilter | null {
  for (const [mainFilter, config] of Object.entries(FILTER_CONFIG)) {
    if (config.detector(jersey)) {
      return mainFilter as MainFilter;
    }
  }
  return null;
}

/**
 * Detect sub-category within a main category
 */
function detectSubCategory(jersey: Jersey, mainCategory: MainFilter): string {
  const matchers = SUBFILTER_MATCHERS[mainCategory];
  if (!matchers) return 'All';

  for (const [subFilter, matcher] of Object.entries(matchers)) {
    if (subFilter !== 'All' && matcher(jersey.name)) {
      return subFilter;
    }
  }
  return 'All';
}

/**
 * Check if a jersey should be featured/prioritized
 */
function isFeatured(
  jerseyId: string,
  mainCategory: MainFilter,
  subCategory: string
): boolean {
  const key = `${mainCategory}/${subCategory}`;
  const priorityList = FEATURED_PRIORITY_ORDER[key];
  return priorityList ? priorityList.includes(jerseyId) : false;
}

/**
 * Get priority order index for sorting
 */
function getPriorityIndex(
  jerseyId: string,
  mainCategory: MainFilter,
  subCategory: string
): number {
  const key = `${mainCategory}/${subCategory}`;
  const priorityList = FEATURED_PRIORITY_ORDER[key];
  if (!priorityList) return Infinity;
  const index = priorityList.indexOf(jerseyId);
  return index >= 0 ? index : Infinity;
}

/**
 * Sort jerseys by priority
 * Featured items appear first, then sorted by priority order, then by name
 */
function sortJerseys(jerseys: Jersey[]): Jersey[] {
  return [...jerseys].sort((a, b) => {
    // Sort by featured status first
    if (a.featured !== b.featured) {
      return (a.featured ? 0 : 1) - (b.featured ? 0 : 1);
    }

    // Then by priority index
    const priorityA =
      getPriorityIndex(a.id, a.mainCategory!, a.subCategory!) || Infinity;
    const priorityB =
      getPriorityIndex(b.id, b.mainCategory!, b.subCategory!) || Infinity;

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    // Finally by name
    return a.name.localeCompare(b.name);
  });
}

/**
 * MAIN PROCESSOR
 * Transforms raw jersey data into categorized, filtered, and sorted output
 */
export function processJerseyData(rawJerseys: any[]): Jersey[] {
  return rawJerseys
    .map((jersey) => ({
      ...jersey,
      // Apply name corrections
      name: correctProductName(jersey.name),
    }))
    .map((jersey) => {
      // Detect main category
      const mainCategory = detectMainCategory(jersey) || 'Other';
      const subCategory = detectSubCategory(jersey, mainCategory);
      const featured = isFeatured(jersey.id, mainCategory, subCategory);

      return {
        ...jersey,
        mainCategory,
        subCategory,
        featured,
      } as Jersey;
    })
    .sort((a, b) => {
      // Sort main categories by their defined order
      const configA = FILTER_CONFIG[a.mainCategory!];
      const configB = FILTER_CONFIG[b.mainCategory!];
      const orderA = configA?.order || Infinity;
      const orderB = configB?.order || Infinity;

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      // Within same main category, sort by sub-category priority
      const subFiltersA = configA?.subFilters || [];
      const subFiltersB = configB?.subFilters || [];
      const subOrderA =
        subFiltersA.find((sf) => sf.name === a.subCategory)?.order || Infinity;
      const subOrderB =
        subFiltersB.find((sf) => sf.name === b.subCategory)?.order || Infinity;

      if (subOrderA !== subOrderB) {
        return subOrderA - subOrderB;
      }

      // Finally sort by featured status and priority
      if (a.featured !== b.featured) {
        return (a.featured ? 0 : 1) - (b.featured ? 0 : 1);
      }

      const priorityA = getPriorityIndex(a.id, a.mainCategory!, a.subCategory!);
      const priorityB = getPriorityIndex(b.id, b.mainCategory!, b.subCategory!);

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return a.name.localeCompare(b.name);
    });
}

/**
 * Get jerseys filtered by main category
 */
export function getJerseysByMainCategory(
  jerseys: Jersey[],
  mainCategory: MainFilter
): Jersey[] {
  return jerseys.filter((j) => j.mainCategory === mainCategory);
}

/**
 * Get jerseys filtered by main category and sub-category
 */
export function getJerseysByCategoryAndSub(
  jerseys: Jersey[],
  mainCategory: MainFilter,
  subCategory: string
): Jersey[] {
  return jerseys.filter(
    (j) => j.mainCategory === mainCategory && j.subCategory === subCategory
  );
}

/**
 * Get all unique sub-categories for a main category
 */
export function getSubCategoriesForMain(
  jerseys: Jersey[],
  mainCategory: MainFilter
): string[] {
  const config = FILTER_CONFIG[mainCategory];
  if (!config) return [];

  const subCats = new Set<string>();
  jerseys
    .filter((j) => j.mainCategory === mainCategory)
    .forEach((j) => subCats.add(j.subCategory || 'All'));

  // Return in priority order
  return config.subFilters
    .map((sf) => sf.name)
    .filter((name) => subCats.has(name));
}

/**
 * Get all main categories that have jerseys
 */
export function getAvailableMainCategories(jerseys: Jersey[]): MainFilter[] {
  const categories = new Set<MainFilter>();
  jerseys.forEach((j) => {
    if (j.mainCategory) categories.add(j.mainCategory);
  });

  // Return in priority order from config
  return Object.entries(FILTER_CONFIG)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([name]) => name as MainFilter)
    .filter((name) => categories.has(name));
}

/**
 * Validate jersey data (useful for debugging)
 */
export function validateJerseyData(jerseys: Jersey[]): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  jerseys.forEach((jersey, idx) => {
    if (!jersey.id) errors.push(`Jersey ${idx}: missing id`);
    if (!jersey.name) errors.push(`Jersey ${idx}: missing name`);
    if (!jersey.mainCategory)
      warnings.push(`Jersey ${idx} (${jersey.name}): no main category detected`);
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
