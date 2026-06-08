#!/usr/bin/env node

/**
 * JERSEY UPDATE MASTER SCRIPT
 * ═════════════════════════════════════════════════════════════════════════════
 * Automates the entire workflow:
 * 1. Finds your scraper JSON in root
 * 2. Processes it with all filter rules
 * 3. Converts to TypeScript
 * 4. Updates constants/jerseys.ts automatically
 *
 * Usage:
 *   npm run update-jerseys
 *   npm run update-jerseys -- thayyilsports_bestselling.json
 */

const fs = require('fs');
const path = require('path');

// ─── CONFIG ────────────────────────────────────────────────────────────────

const FILTER_CONFIG = {
  'World Cup': {
    order: 1,
    subFilters: [
      { name: 'All', order: 0 },
      { name: 'Brazil', order: 1 },
      { name: 'Argentina', order: 2 },
      { name: 'France', order: 3 },
      { name: 'Germany', order: 4 },
      { name: 'Spain', order: 5 },
      { name: 'England', order: 6 },
      { name: 'Italy', order: 7 },
      { name: 'Portugal', order: 8 },
      { name: 'Mexico', order: 9 },
      { name: 'Croatia', order: 10 },
      { name: 'Japan', order: 11 },
      { name: 'Jamaica', order: 12 },
      { name: 'Sao Paulo', order: 13 },
      { name: 'Morocco', order: 14 },
      { name: 'Norway', order: 15 },
    ],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /2026|WORLD|CUP|ARGENTINA|BRAZIL|FRANCE|GERMANY|SPAIN|ENGLAND|ITALY|PORTUGAL|MEXICO|CROATIA|JAPAN|JAMAICA|SAO PAULO|MOROCCO|NORWAY/.test(name);
    },
  },
  'Clubs': {
    order: 2,
    subFilters: [
      { name: 'All', order: 0 },
      { name: 'Barcelona', order: 1 },
      { name: 'Manchester', order: 2 },
      { name: 'Alnassr', order: 3 },
      { name: 'Chelsea', order: 4 },
      { name: 'AC Milan', order: 5 },
      { name: 'Arsenal', order: 6 },
      { name: 'Liverpool', order: 7 },
      { name: 'Real Madrid', order: 8 },
      { name: 'PSG', order: 9 },
      { name: 'Juventus', order: 10 },
      { name: 'Inter Milan', order: 11 },
      { name: 'Inter Miami', order: 12 },
      { name: 'Monaco', order: 13 },
    ],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      const clubs = [
        'BARCELONA', 'MANCHESTER', 'ALNASSR', 'CHELSEA', 'AC MILAN', 'ARSENAL',
        'LIVERPOOL', 'REAL MADRID', 'PSG', 'JUVENTUS', 'INTER', 'MONACO',
      ];
      return clubs.some(club => name.includes(club));
    },
  },
  'Full Sleeve': {
    order: 3,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /FULLSLEEVE|FULL.SLEEVE|FULL SLEEVES|LONG.SLEEVE/.test(name);
    },
  },
  'Jackets': {
    order: 4,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /JACKET|WINDBREAKER|RAIN.COAT/.test(name);
    },
  },
  'F1': {
    order: 5,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /F1|FORMULA.1|FORMULA1|MCLAREN|FERRARI|REDBULL|MERCEDES/.test(name);
    },
  },
  'Shorts': {
    order: 6,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /^SHORTS|SHORTS\s*$|SHORTS\s*\d+/.test(name) && !/JERSEY.*SHORTS|KIT.*SHORTS/.test(name);
    },
  },
  'IPL': {
    order: 7,
    subFilters: [
      { name: 'All', order: 0 },
      { name: 'India Cricket', order: 1 },
      { name: 'RCB', order: 2 },
      { name: 'Chennai', order: 3 },
      { name: 'Mumbai', order: 4 },
      { name: 'Kolkata', order: 5 },
      { name: 'Rajasthan', order: 6 },
    ],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /IPL|RCB|MUMBAI|KOLKATA|RAJASTHAN|CHENNAI|CHELSEA SUPER|DELHI|PUNJAB|LUCKNOW|INDIA\s*CRICKET/.test(name);
    },
  },
  'Crop Top': {
    order: 8,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey) => {
      const name = jersey.name.toUpperCase();
      return /CROP.TOP|CROP\s*TOP|CROP/.test(name);
    },
  },
};

const FEATURED_PRIORITY_ORDER = {
  'World Cup/All': [
    'spain-2026-away-kit-pedri-embroidery-premium',
    'portugal-2026-black-kit-ronaldo-fullsleeve-polo-embroidery-premium-2',
    'argentina-2026-home-kit-messi-embroidery-premium-1',
    'argentina-2026-away-kit-messi-embroidery-premium',
    'argentina-2026-away-kit-messi',
    'portugal-2026-away-kit-ronaldo-embroidery-premium-1',
    'brazil-2026-away-kit-neymer-embroidery-premium-1',
    'portugal-2026-away-kit-ronaldo',
    'brazil-2026-home-kit-neymer-embroidery-premium',
    'germany-2026-home-kit-fivesleeve-v-knitted-polo-embroidery-premium',
    'portugal-2026-home-kit-ronaldo-embroidery-premium-3',
    'argentina-2026-home-kit-messi-embroidery-premium',
    'spain-2026-away-kit-pedri',
    'brazil-2026-home-kit-neymer-1',
    'argentina-2026-home-kit-messi-1',
    'france-2026-home-kit-mbappe-polo-1',
  ],
  'IPL/All': [
    'india-cricket-test-jersey-polo-embroidery-premium',
    'rcb-2026-home-kit-virat-polo-embroidery',
    'rcb-2026-green-kit-virat-polo-premium',
    'rcb-2026-grey-striper-polo',
    'rcb-2026-maroon-striper-polo',
    'chennai-super-kings-2026-kit-dhoni-polo-embroidery-premium',
    'chennai-super-kings-2026-kit-dhoni-polo-premium',
    'chennai-super-kings-2026-kit-samson-polo-premium',
    'mumbai-indians-2026-kit-rohit-polo-embroidery-premium',
    'mumbai-indians-2026-home-kit-rohit-polo-embroidery',
    'mumbai-indians-2026-kit-hardik-polo-embroidery-premium',
    'kolkata-knight-riders-2025-kit-ajinkya',
    'rajasthan-royals-2025-kit-sanju-samson-polo',
  ],
};

const NAME_CORRECTIONS = {
  'Mumbai Indians 2026 Home Kit Rohit Polo Embroidey': 'Mumbai Indians 2026 Home Kit Rohit Polo Embroidery',
};

const SUBFILTER_MATCHERS = {
  'World Cup': {
    'Brazil': (name) => /BRAZIL/.test(name.toUpperCase()),
    'Argentina': (name) => /ARGENTINA/.test(name.toUpperCase()),
    'France': (name) => /FRANCE/.test(name.toUpperCase()),
    'Germany': (name) => /GERMANY/.test(name.toUpperCase()),
    'Spain': (name) => /SPAIN/.test(name.toUpperCase()),
    'England': (name) => /ENGLAND/.test(name.toUpperCase()),
    'Italy': (name) => /ITALY/.test(name.toUpperCase()),
    'Portugal': (name) => /PORTUGAL/.test(name.toUpperCase()),
    'Mexico': (name) => /MEXICO/.test(name.toUpperCase()),
    'Croatia': (name) => /CROATIA/.test(name.toUpperCase()),
    'Japan': (name) => /JAPAN/.test(name.toUpperCase()),
    'Jamaica': (name) => /JAMAICA/.test(name.toUpperCase()),
    'Sao Paulo': (name) => /SAO.PAULO/.test(name.toUpperCase()),
    'Morocco': (name) => /MOROCCO/.test(name.toUpperCase()),
    'Norway': (name) => /NORWAY/.test(name.toUpperCase()),
  },
  'Clubs': {
    'Barcelona': (name) => /BARCELONA/.test(name.toUpperCase()),
    'Manchester': (name) => /MANCHESTER/.test(name.toUpperCase()),
    'Alnassr': (name) => /ALNASSR/.test(name.toUpperCase()),
    'Chelsea': (name) => /CHELSEA/.test(name.toUpperCase()),
    'AC Milan': (name) => /AC.MILAN|ACMILAN/.test(name.toUpperCase()),
    'Arsenal': (name) => /ARSENAL/.test(name.toUpperCase()),
    'Liverpool': (name) => /LIVERPOOL/.test(name.toUpperCase()),
    'Real Madrid': (name) => /REAL.MADRID|REALMADRID/.test(name.toUpperCase()),
    'PSG': (name) => /PSG|PARIS/.test(name.toUpperCase()),
    'Juventus': (name) => /JUVENTUS/.test(name.toUpperCase()),
    'Inter Milan': (name) => /INTER.MILAN|INTERMILAN/.test(name.toUpperCase()) && !/MIAMI/.test(name.toUpperCase()),
    'Inter Miami': (name) => /INTER.MIAMI|INTERMIAMI/.test(name.toUpperCase()),
    'Monaco': (name) => /MONACO/.test(name.toUpperCase()),
  },
  'IPL': {
    'India Cricket': (name) => /INDIA.*CRICKET|INDIA.*TEST|INDIA.*JERSEY/.test(name.toUpperCase()),
    'RCB': (name) => /RCB|ROYAL.CHALLENGERS/.test(name.toUpperCase()),
    'Chennai': (name) => /CHENNAI|CSK|SUPER.KINGS/.test(name.toUpperCase()),
    'Mumbai': (name) => /MUMBAI|MI\s|MI\s*2/.test(name.toUpperCase()),
    'Kolkata': (name) => /KOLKATA|KKR|KNIGHT.RIDERS/.test(name.toUpperCase()),
    'Rajasthan': (name) => /RAJASTHAN|ROYALS/.test(name.toUpperCase()),
  },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────

function correctProductName(name) {
  return NAME_CORRECTIONS[name] || name;
}

function detectMainCategory(jersey) {
  for (const [mainFilter, config] of Object.entries(FILTER_CONFIG)) {
    if (config.detector(jersey)) {
      return mainFilter;
    }
  }
  return 'Other';
}

function detectSubCategory(jersey, mainCategory) {
  const matchers = SUBFILTER_MATCHERS[mainCategory];
  if (!matchers) return 'All';

  for (const [subFilter, matcher] of Object.entries(matchers)) {
    if (subFilter !== 'All' && matcher(jersey.name)) {
      return subFilter;
    }
  }
  return 'All';
}

function isFeatured(jerseyId, mainCategory, subCategory) {
  const key = `${mainCategory}/${subCategory}`;
  const priorityList = FEATURED_PRIORITY_ORDER[key];
  return priorityList ? priorityList.includes(jerseyId) : false;
}

function getPriorityIndex(jerseyId, mainCategory, subCategory) {
  const key = `${mainCategory}/${subCategory}`;
  const priorityList = FEATURED_PRIORITY_ORDER[key];
  if (!priorityList) return Infinity;
  const index = priorityList.indexOf(jerseyId);
  return index >= 0 ? index : Infinity;
}

function processJerseyData(rawJerseys) {
  return rawJerseys
    .map((jersey) => ({
      ...jersey,
      name: correctProductName(jersey.name),
    }))
    .map((jersey) => {
      const mainCategory = detectMainCategory(jersey);
      const subCategory = detectSubCategory(jersey, mainCategory);
      const featured = isFeatured(jersey.id, mainCategory, subCategory);

      return {
        ...jersey,
        mainCategory,
        subCategory,
        featured,
      };
    })
    .sort((a, b) => {
      const configA = FILTER_CONFIG[a.mainCategory];
      const configB = FILTER_CONFIG[b.mainCategory];
      const orderA = configA?.order || Infinity;
      const orderB = configB?.order || Infinity;

      if (orderA !== orderB) return orderA - orderB;

      const subFiltersA = configA?.subFilters || [];
      const subFiltersB = configB?.subFilters || [];
      const subOrderA =
        subFiltersA.find((sf) => sf.name === a.subCategory)?.order || Infinity;
      const subOrderB =
        subFiltersB.find((sf) => sf.name === b.subCategory)?.order || Infinity;

      if (subOrderA !== subOrderB) return subOrderA - subOrderB;

      if (a.featured !== b.featured)
        return (a.featured ? 0 : 1) - (b.featured ? 0 : 1);

      const priorityA = getPriorityIndex(a.id, a.mainCategory, a.subCategory);
      const priorityB = getPriorityIndex(b.id, b.mainCategory, b.subCategory);

      if (priorityA !== priorityB) return priorityA - priorityB;

      return a.name.localeCompare(b.name);
    });
}

// ─── FIND INPUT FILE ──────────────────────────────────────────────────────

function findInputFile(customFile) {
  if (customFile) {
    const filePath = path.join(process.cwd(), customFile);
    if (fs.existsSync(filePath)) return filePath;
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  // Look for common scraper output files in root
  const commonNames = [
    'thayyilsports_bestselling.json',
    'thayyilsports.json',
    'jerseys.json',
    'scraper-output.json',
  ];

  for (const name of commonNames) {
    const filePath = path.join(process.cwd(), name);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  console.error(`❌ No scraper output found in root directory`);
  console.error(`   Expected one of: ${commonNames.join(', ')}`);
  console.error(`   Or pass filename: npm run update-jerseys -- yourfile.json`);
  process.exit(1);
}

// ─── GENERATE TYPESCRIPT ──────────────────────────────────────────────────

function generateTypeScriptFile(jerseys, filename) {
  const basename = path.basename(filename, '.json');
  const timestamp = new Date().toISOString();

  const tsContent = `// AUTO-GENERATED BY: scripts/updateJerseys.js
// Generated: ${timestamp}
// Source: ${basename}

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
  mainCategory?: string;
  subCategory?: string;
  featured?: boolean;
};

export const JERSEYS: Jersey[] = ${JSON.stringify(jerseys, null, 2)};
`;

  return tsContent;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────

function main() {
  const customFile = process.argv[2];
  const inputFile = findInputFile(customFile);
  const inputBasename = path.basename(inputFile);

  console.log(`\n📂 Found input: ${inputBasename}`);

  try {
    const rawData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
    const processed = processJerseyData(rawData);

    // Write TypeScript file
    const outputPath = path.join(process.cwd(), 'constants', 'jerseys.ts');
    const tsContent = generateTypeScriptFile(processed, inputBasename);
    fs.writeFileSync(outputPath, tsContent, 'utf-8');

    console.log(`✅ Processed ${processed.length} jerseys`);
    console.log(`💾 Updated: constants/jerseys.ts\n`);

    // Summary
    const categories = {};
    processed.forEach((j) => {
      categories[j.mainCategory] = (categories[j.mainCategory] || 0) + 1;
    });

    console.log('📊 Summary by category:');
    Object.entries(categories)
      .sort(([, a], [, b]) => b - a)
      .forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count}`);
      });

    const featured = processed.filter((j) => j.featured).length;
    console.log(`\n⭐ Featured: ${featured}`);
    console.log(`\n🎉 Ready to use! Your app now has updated jersey data.\n`);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    process.exit(1);
  }
}

main();
