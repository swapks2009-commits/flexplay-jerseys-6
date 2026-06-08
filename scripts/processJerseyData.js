#!/usr/bin/env node

/**
 * JERSEY DATA PROCESSOR SCRIPT
 * ═════════════════════════════════════════════════════════════════════════════
 * Usage: node scripts/processJerseyData.js <input-file> [output-file]
 *
 * Example:
 *   node scripts/processJerseyData.js thayyilsports_bestselling.json
 *   This will output to: thayyilsports_bestselling_processed.json
 *
 *   Or specify custom output:
 *   node scripts/processJerseyData.js input.json output.json
 *
 * Then copy the output to constants/jerseys.ts
 */

const fs = require('fs');
const path = require('path');

// ─── FILTER CONFIGURATION (mirrored from utils/filterConfig.ts) ──────────────

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
      return /IPL|RCB|MUMBAI|KOLKATA|RAJASTHAN|CHELSEA SUPER|DELHI|PUNJAB|LUCKNOW|INDIA\s*CRICKET/.test(name);
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
    'csk-2026-kit-dhoni-polo-embroidery-premium',
    'csk-2026-kit-dhoni-polo-premium',
    'csk-2026-kit-samson-polo-premium',
    'mi-2026-kit-rohit-polo-embroidery-premium',
    'mi-2026-home-kit-rohit-polo-embroidery',
    'mi-2026-kit-hardik-polo-embroidery-premium',
    'kkr-2025-kit-ajinkya',
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

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

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

// ─── MAIN EXECUTION ────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('❌ Missing input file');
    console.log('Usage: node scripts/processJerseyData.js <input-file> [output-file]');
    console.log('Example: node scripts/processJerseyData.js thayyilsports_bestselling.json');
    process.exit(1);
  }

  const inputFile = args[0];
  const outputFile = args[1] || inputFile.replace('.json', '_processed.json');

  console.log(`\n📂 Reading: ${inputFile}`);

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    process.exit(1);
  }

  try {
    const rawData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
    const processed = processJerseyData(rawData);

    fs.writeFileSync(outputFile, JSON.stringify(processed, null, 2), 'utf-8');

    console.log(`✅ Processed ${processed.length} jerseys`);
    console.log(`💾 Output: ${outputFile}\n`);

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
    console.log(`\n⭐ Featured jerseys: ${featured}`);
  } catch (error) {
    console.error(`❌ Error processing file: ${error.message}`);
    process.exit(1);
  }
}

main();
