/**
 * FILTER CONFIGURATION
 * ═════════════════════════════════════════════════════════════════════════════
 * All filter definitions, priorities, and display orders defined in one place.
 * Update this file when filter requirements change, and the processor will
 * automatically apply the rules to all jersey data.
 */

export type MainFilter = 
  | 'World Cup'
  | 'Clubs'
  | 'Full Sleeve'
  | 'Jackets'
  | 'F1'
  | 'Shorts'
  | 'IPL'
  | 'Crop Top'
  | 'Other';

export const FILTER_CONFIG = {
  // ─── WORLD CUP FILTER ─────────────────────────────────────────────────────
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
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /2026|WORLD|CUP|ARGENTINA|BRAZIL|FRANCE|GERMANY|SPAIN|ENGLAND|ITALY|PORTUGAL|MEXICO|CROATIA|JAPAN|JAMAICA|SAO PAULO|MOROCCO|NORWAY/.test(name);
    },
  },

  // ─── CLUBS FILTER ──────────────────────────────────────────────────────────
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
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      const clubs = [
        'BARCELONA', 'MANCHESTER', 'ALNASSR', 'CHELSEA', 'AC MILAN', 'ARSENAL',
        'LIVERPOOL', 'REAL MADRID', 'PSG', 'JUVENTUS', 'INTER', 'MONACO',
      ];
      return clubs.some(club => name.includes(club));
    },
  },

  // ─── FULL SLEEVE FILTER ────────────────────────────────────────────────────
  'Full Sleeve': {
    order: 3,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /FULLSLEEVE|FULL.SLEEVE|FULL SLEEVES|LONG.SLEEVE/.test(name);
    },
  },

  // ─── JACKETS FILTER ────────────────────────────────────────────────────────
  'Jackets': {
    order: 4,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /JACKET|WINDBREAKER|RAIN.COAT/.test(name);
    },
  },

  // ─── F1 FILTER ─────────────────────────────────────────────────────────────
  'F1': {
    order: 5,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /F1|FORMULA.1|FORMULA1|MCLAREN|FERRARI|REDBULL|MERCEDES/.test(name);
    },
  },

  // ─── SHORTS FILTER ─────────────────────────────────────────────────────────
  'Shorts': {
    order: 6,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      // Must be shorts, not jerseys with shorts
      return /^SHORTS|SHORTS\s*$|SHORTS\s*\d+/.test(name) && !/JERSEY.*SHORTS|KIT.*SHORTS/.test(name);
    },
  },

  // ─── IPL FILTER ────────────────────────────────────────────────────────────
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
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /IPL|RCB|MUMBAI|KOLKATA|RAJASTHAN|CHENNAI|CHELSEA SUPER|DELHI|PUNJAB|LUCKNOW|INDIA\s*CRICKET/.test(name);
    },
  },

  // ─── CROP TOP FILTER ───────────────────────────────────────────────────────
  'Crop Top': {
    order: 8,
    subFilters: [{ name: 'All', order: 0 }],
    detector: (jersey: any) => {
      const name = jersey.name.toUpperCase();
      return /CROP.TOP|CROP\s*TOP|CROP/.test(name);
    },
  },
} as const;

/**
 * FEATURED PRIORITY ORDER
 * ═════════════════════════════════════════════════════════════════════════════
 * These jerseys appear FIRST in the "All" filters when browsing.
 * Order matters — first in array = first in list.
 */
export const FEATURED_PRIORITY_ORDER: Record<string, string[]> = {
  // World Cup "All" and main "All" filter priority
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

  // IPL filter priority
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

/**
 * PRODUCT NAME CORRECTIONS
 * ═════════════════════════════════════════════════════════════════════════════
 * Auto-correct product names that have typos or inconsistencies.
 */
export const NAME_CORRECTIONS: Record<string, string> = {
  'Mumbai Indians 2026 Home Kit Rohit Polo Embroidey': 'Mumbai Indians 2026 Home Kit Rohit Polo Embroidery',
};

/**
 * Sub-filter matching rules
 * ═════════════════════════════════════════════════════════════════════════════
 * Matches jersey names to sub-filters within each main filter.
 */
export const SUBFILTER_MATCHERS: Record<string, Record<string, (name: string) => boolean>> = {
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
