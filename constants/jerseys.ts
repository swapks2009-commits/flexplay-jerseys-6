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
  // Put your own image URLs here — Cloudinary, Google Drive direct link, or your hosting
  // For now using placeholder service with jersey colors so cards look great
  images: string[];
  description: string;
  tags: string[];
};

// ─── PASTE YOUR OWN IMAGE URLs IN THE images[] ARRAYS BELOW ───────────────────
// You can use: https://res.cloudinary.com/... or any direct image link
// The placeholder colors below match each jersey's actual colors
export const JERSEYS: Jersey[] = [
  {
    "id": "argentina-2026-home-kit-messi-embroidery-premium-1",
    "name": "Argentina 2026 Home Kit Messi Embroidery With Knitted Rib Premium",
    "shortName": "Argentina 2026 Home – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Messi",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 549,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": false,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": true,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F_-_2026-02-23T182259.777.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F_-_2026-02-23T182259.777.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C_-_2026-02-23T182302.605.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C_-_2026-02-23T182305.427.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2025-12-01T114006.791_1854bdba-aedb-43ef-8e56-13e19b0d65f9.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B_-_2026-02-23T182308.911.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring Messi's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "portugal-2026-black-kit-ronaldo-fullsleeve-polo-embroidery-premium-2",
    "name": "Portugal 2026 Black Kit Ronaldo Fullsleeve Polo Embroidery Premium",
    "shortName": "Portugal 2026 Third – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Third",
    "player": "Ronaldo",
    "type": "Premium",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 549,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2025-12-30T201416.709_8fac869b-e096-4553-9740-b1776e381ea7.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2025-12-30T201416.709_8fac869b-e096-4553-9740-b1776e381ea7.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2025-12-30T201419.563_e9e27ea8-5a07-4f88-a106-636c532006d5.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2025-12-30T201422.543_c2283c23-1017-4b72-a636-a08c6949d4eb.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Third Kit featuring Ronaldo's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Third",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "Full Sleeve"
    ]
  },
  {
    "id": "argentina-2026-away-kit-messi-embroidery-premium",
    "name": "Argentina 2026 Away Kit Messi Embroidery Premium",
    "shortName": "Argentina 2026 Away – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Messi",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 539,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": true,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T195610.082.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T195610.082.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-23T195612.951.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-23T195616.046.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-23T195618.818.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring Messi's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Away",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "argentina-2026-away-kit-messi",
    "name": "Argentina 2026 Away Kit Messi",
    "shortName": "Argentina 2026 Away – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Messi",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T184705.594.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T184705.594.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-04T184708.446.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring Messi's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Away",
      "2026"
    ]
  },
  {
    "id": "portugal-2026-away-kit-ronaldo-embroidery-premium-1",
    "name": "Portugal 2026 Away Kit Ronaldo Embroidery Premium",
    "shortName": "Portugal 2026 Away – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Away",
    "player": "Ronaldo",
    "type": "Premium",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": true,
      "XXL": false,
      "3XL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T195243.112.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T195243.112.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-23T195245.747.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-23T195249.059.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-23T195253.442.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Away Kit featuring Ronaldo's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Away",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "spain-2026-away-kit-pedri-embroidery-premium",
    "name": "Spain 2026 Away Kit Pedri Embroidery Premium",
    "shortName": "Spain 2026 Away – Pedri",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Away",
    "player": "Pedri",
    "type": "Premium",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 539,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/f-2026-04-27T162318.743.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/f-2026-04-27T162318.743.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-27T162324.426.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-27T162331.473.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-27T162328.453.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Away Kit featuring Pedri's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Pedri",
      "Away",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "germany-2026-home-kit-fivesleeve-v-knitted-polo-embroidery-premium",
    "name": "Germany 2026 Home Kit Fivesleeve V Knitted Polo Embroidery Premium",
    "shortName": "Germany 2026 Home",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 549,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2025-12-20T180719.447_c6f8cd5b-bfe0-41b8-9c29-a04be7181ffa.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2025-12-20T180719.447_c6f8cd5b-bfe0-41b8-9c29-a04be7181ffa.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2025-12-20T180722.028_78627df3-6e3a-49ad-b559-75addf3fe4b5.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2025-12-20T180725.278_7e34daa6-c0f5-42ff-8ef9-211580019770.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2025-12-20T180729.507_2b437903-2855-4d63-9547-5d5c99f62768.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "Five Sleeve"
    ]
  },
  {
    "id": "spain-2026-away-kit-pedri",
    "name": "Spain 2026 Away Kit Pedri",
    "shortName": "Spain 2026 Away – Pedri",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Away",
    "player": "Pedri",
    "type": "Standard",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": true,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T205506.421.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T205506.421.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-01T205509.275.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Away Kit featuring Pedri's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Pedri",
      "Away",
      "2026"
    ]
  },
  {
    "id": "brazil-2026-home-kit-neymer-embroidery-premium",
    "name": "Brazil 2026 Home Kit Neymer Embroidery Premium",
    "shortName": "Brazil 2026 Home – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Neymer",
    "type": "Premium",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "3XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T210627.100.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T210627.100.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-01T210631.034.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-01T210633.957.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Home Kit featuring Neymer's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "portugal-2026-away-kit-ronaldo",
    "name": "Portugal 2026 Away Kit Ronaldo",
    "shortName": "Portugal 2026 Away – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Away",
    "player": "Ronaldo",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-18T222603.170.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-18T222603.170.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-18T222606.495.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Away Kit featuring Ronaldo's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Away",
      "2026"
    ]
  },
  {
    "id": "brazil-2026-away-kit-neymer-embroidery-premium-1",
    "name": "Brazil 2026 Away Kit Neymer Embroidery Premium",
    "shortName": "Brazil 2026 Away – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Neymer",
    "type": "Premium",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": false,
      "XXL": false,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-18T215742.572.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-18T215742.572.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C_-_2026-04-18T215745.865.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B_-_2026-04-18T215748.398.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Neymer's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Away",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "brazil-2026-home-kit-neymer-1",
    "name": "Brazil 2026 Home Kit Neymer",
    "shortName": "Brazil 2026 Home – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Neymer",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-21T212252.268.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-21T212252.268.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-21T212255.093.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Home Kit featuring Neymer's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Home",
      "2026"
    ]
  },
  {
    "id": "portugal-2026-home-kit-ronaldo-embroidery-premium-3",
    "name": "Portugal 2026 Home Kit Ronaldo Embroidery Premium",
    "shortName": "Portugal 2026 Home – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Home",
    "player": "Ronaldo",
    "type": "Premium",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T194639.287.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-23T194639.287.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-23T194641.964.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-23T194645.141.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Home Kit featuring Ronaldo's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "spain-2026-away-kit-pedri-embroidery",
    "name": "Spain 2026 Away Kit Pedri Embroidery",
    "shortName": "Spain 2026 Away – Pedri",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Away",
    "player": "Pedri",
    "type": "Standard",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-13T193537.296.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-13T193537.296.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-13T193540.266.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-13T193543.417.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Away Kit featuring Pedri's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Pedri",
      "Away",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "france-2026-home-kit-mbappe-polo-1",
    "name": "France 2026 Home Kit Mbappe Polo",
    "shortName": "France 2026 Home – Mbappe",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Mbappe",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 449,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-01T201951.345.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-01T201951.345.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-01T201953.732.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Home Kit featuring Mbappe's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Mbappe",
      "Home",
      "2026",
      "Polo"
    ]
  },
  {
    "id": "brazil-1998-home-kit-ronaldo-embroidery-premium",
    "name": "Brazil 1998 Home Kit Ronaldo Embroidery Premium",
    "shortName": "Brazil 1998 Home – Ronaldo",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 1998,
    "kit": "Home",
    "player": "Ronaldo",
    "type": "Premium",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-03-05T180201.854.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-03-05T180201.854.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-05T180204.377.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-05T180206.933.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-05T180210.178.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "1998 Brazil Home Kit featuring Ronaldo's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Ronaldo",
      "Home",
      "1998",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "mexico-2026-home-kit-embroidery-premium-1",
    "name": "Mexico 2026 Home Kit Embroidery Premium",
    "shortName": "Mexico 2026 Home",
    "country": "Mexico",
    "flag": "🇲🇽",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "MEX",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-03-05T175818.664.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-03-05T175818.664.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-05T175823.746.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-05T175821.002.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-05T175826.488.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Mexico Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Mexico",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "brazil-2026-away-kit-vini",
    "name": "Brazil 2026 Away Kit Vini",
    "shortName": "Brazil 2026 Away – Vini",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Vini",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-03-27T221943.512.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-03-27T221943.512.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-27T221945.899.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Vini's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Vini",
      "Away",
      "2026"
    ]
  },
  {
    "id": "japan-2026-away-kit-minamino",
    "name": "Japan 2026 Away Kit Minamino",
    "shortName": "Japan 2026 Away – Minamino",
    "country": "Japan",
    "flag": "🇯🇵",
    "year": 2026,
    "kit": "Away",
    "player": "Minamino",
    "type": "Standard",
    "badge": "JPN",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T221228.211.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T221228.211.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T221230.944.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Japan Away Kit featuring Minamino's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Japan",
      "Minamino",
      "Away",
      "2026"
    ]
  },
  {
    "id": "argentina-2026-home-kit-messi-1",
    "name": "Argentina 2026 Home Kit Messi",
    "shortName": "Argentina 2026 Home – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Messi",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-24T200806.168.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-24T200806.168.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-24T200808.771.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring Messi's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Home",
      "2026"
    ]
  },
  {
    "id": "brazil-2026-away-kit-neymer-1",
    "name": "Brazil 2026 Away Kit Neymer",
    "shortName": "Brazil 2026 Away – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Neymer",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T220354.903.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T220354.903.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T220357.481.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Neymer's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Away",
      "2026"
    ]
  },
  {
    "id": "brazil-2019-away-kit-neymer-embroidery-1",
    "name": "Brazil 2019 Away Kit Neymer Embroidery",
    "shortName": "Brazil 2019 Away – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2019,
    "kit": "Away",
    "player": "Neymer",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-02-06T204336.418.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-02-06T204336.418.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-02-06T204339.382.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-02-06T204343.001.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2019 Brazil Away Kit featuring Neymer's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Away",
      "2019",
      "Embroidery"
    ]
  },
  {
    "id": "argentina-2026-home-kit-messi-embroidery-premium",
    "name": "Argentina 2026 Home Kit Messi Embroidery Premium",
    "shortName": "Argentina 2026 Home – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Messi",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-15T170831.301.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-15T170831.301.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-15T170845.936.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-15T170848.937.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-15T170852.835.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring Messi's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "germany-2026-black-concept-kit-musiala-fivesleeve-polo",
    "name": "Germany 2026 Black Concept Kit Musiala Fivesleeve Polo",
    "shortName": "Germany 2026 Third – Musiala",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Third",
    "player": "Musiala",
    "type": "Standard",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T204547.037.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T204547.037.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-29T204549.458.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Third Kit featuring Musiala's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Musiala",
      "Third",
      "2026",
      "Polo",
      "Five Sleeve"
    ]
  },
  {
    "id": "england-2026-away-kit-belingham",
    "name": "England 2026 Away Kit Belingham",
    "shortName": "England 2026 Away – Belingham",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Away",
    "player": "Belingham",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-07T164644.161.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-07T164644.161.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-07T164648.646.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Away Kit featuring Belingham's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Belingham",
      "Away",
      "2026"
    ]
  },
  {
    "id": "france-2026-home-kit-mbappe-polo-embroidery-premium-1",
    "name": "France 2026 Home Kit Mbappe Polo Embroidery Premium",
    "shortName": "France 2026 Home – Mbappe",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Mbappe",
    "type": "Premium",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 529,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": false,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-03-22T202105.462.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-03-22T202105.462.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-22T202111.326.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-22T202108.251.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-22T202115.646.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Home Kit featuring Mbappe's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Mbappe",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo"
    ]
  },
  {
    "id": "spain-2026-home-kit-lamine-yamal-embroidery-premium",
    "name": "Spain 2026 Home Kit Lamine Yamal Embroidery Premium",
    "shortName": "Spain 2026 Home – Lamine Yamal",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Home",
    "player": "Lamine Yamal",
    "type": "Premium",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": false,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false,
      "XXXL": false
    },
    "inStock": false,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-03-17T180518.877.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-03-17T180518.877.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-03-17T180521.199.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-17T180523.774.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-03-17T180527.467.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Home Kit featuring Lamine Yamal's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Lamine Yamal",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "argentina-2026-training-kit-messi-embroidery-1",
    "name": "Argentina 2026 Training Kit Messi Embroidery",
    "shortName": "Argentina 2026 Home – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Messi",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-02-26T175236.601.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-02-26T175236.601.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-02-26T175240.494.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-02-26T175243.944.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring Messi's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Home",
      "2026",
      "Embroidery",
      "Training"
    ]
  },
  {
    "id": "argentina-2026-tiro-polo-embroidery-premium",
    "name": "Argentina 2026 Tiro Polo Embroidery Premium",
    "shortName": "Argentina 2026 Home",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T210109.835_6087cdd8-d121-4d40-a45a-954a324cfe24.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T210109.835_6087cdd8-d121-4d40-a45a-954a324cfe24.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-05T210113.199_198e571c-8948-4600-be48-912a13911df9.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T210116.716_bce6bfaf-dca1-4c9d-bede-09744c1718fb.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo"
    ]
  },
  {
    "id": "france-2026-away-kit-dembele",
    "name": "France 2026 Away Kit Mbappe",
    "shortName": "France 2026 Away – Mbappe",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Mbappe",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T200944.547.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T200944.547.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T200947.185.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Away Kit featuring Mbappe's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Mbappe",
      "Away",
      "2026"
    ]
  },
  {
    "id": "brazil-2026-away-kit-neymer-embroidery-1",
    "name": "Brazil 2026 Away Kit Neymer Embroidery",
    "shortName": "Brazil 2026 Away – Neymer",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Neymer",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": false,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-02-07T181716.920.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-02-07T181716.920.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-02-07T181719.676.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-02-07T181722.500.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Neymer's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Neymer",
      "Away",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "uruguay-2026-home-kit-valverde",
    "name": "Uruguay 2026 Home Kit Valverde",
    "shortName": "Uruguay 2026 Home – Valverde",
    "country": "Uruguay",
    "flag": "🇺🇾",
    "year": 2026,
    "kit": "Home",
    "player": "Valverde",
    "type": "Standard",
    "badge": "URU",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T200046.609.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T200046.609.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T200049.589.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Uruguay Home Kit featuring Valverde's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Uruguay",
      "Valverde",
      "Home",
      "2026"
    ]
  },
  {
    "id": "france-2026-away-kit-olise",
    "name": "France 2026 Away Kit Olise",
    "shortName": "France 2026 Away – Olise",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Olise",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": false,
      "L": true,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-24T200614.190.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-24T200614.190.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-24T200617.525.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Away Kit featuring Olise's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Olise",
      "Away",
      "2026"
    ]
  },
  {
    "id": "spain-2026-home-kit-lamine-yamal",
    "name": "Spain 2026 Home Kit Lamine Yamal",
    "shortName": "Spain 2026 Home – Lamine Yamal",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Home",
    "player": "Lamine Yamal",
    "type": "Standard",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-30T174340.351.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-30T174340.351.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-30T174343.249.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Home Kit featuring Lamine Yamal's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Lamine Yamal",
      "Home",
      "2026"
    ]
  },
  {
    "id": "norway-2026-away-kit-haaland",
    "name": "Norway 2026 Away Kit Haaland",
    "shortName": "Norway 2026 Away – Haaland",
    "country": "Norway",
    "flag": "🇳🇴",
    "year": 2026,
    "kit": "Away",
    "player": "Haaland",
    "type": "Standard",
    "badge": "NOR",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T203250.995.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T203250.995.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-29T203254.448.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Norway Away Kit featuring Haaland's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Norway",
      "Haaland",
      "Away",
      "2026"
    ]
  },
  {
    "id": "netherlands-2026-away-kit-de-jong",
    "name": "Netherlands 2026 Away Kit De Jong",
    "shortName": "Netherlands 2026 Away – De Jong",
    "country": "Netherlands",
    "flag": "🇳🇱",
    "year": 2026,
    "kit": "Away",
    "player": "De Jong",
    "type": "Standard",
    "badge": "NED",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": true,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T201109.305.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T201109.305.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T201111.738.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Netherlands Away Kit featuring De Jong's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Netherlands",
      "De Jong",
      "Away",
      "2026"
    ]
  },
  {
    "id": "japan-2026-away-kit-embroidery-premium",
    "name": "Japan 2026 Away Kit Embroidery Premium",
    "shortName": "Japan 2026 Away",
    "country": "Japan",
    "flag": "🇯🇵",
    "year": 2026,
    "kit": "Away",
    "player": "",
    "type": "Premium",
    "badge": "JPN",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": false,
      "XXL": false,
      "XXXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-15T165435.152.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-15T165435.152.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-15T165438.608.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-15T165442.346.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Japan Away Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Japan",
      "Away",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "tshirt-portugal-red-polo-embroidery-premum",
    "name": "Tshirt Portugal Red Polo Embroidery Premum",
    "shortName": "Portugal 2026 Home",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": false,
      "L": false,
      "XL": false,
      "XXL": true,
      "XXXL": true,
      "XXXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T185214.244.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T185214.244.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T185216.873.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T185220.743.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Home",
      "2026",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "tshirt-argentina-black-polo-embroidery-premum",
    "name": "Tshirt Argentina Black Polo Embroidery Premium",
    "shortName": "Argentina 2026 Home",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": true,
      "L": false,
      "XL": false,
      "XXL": false,
      "XXXL": false,
      "XXXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T190114.263.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T190114.263.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T190117.196.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T190120.976.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "brazil-2026-away-kit-raphina",
    "name": "Brazil 2026 Away Kit Raphina",
    "shortName": "Brazil 2026 Away – Raphina",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Raphina",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T220808.406.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T220808.406.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T220812.037.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Raphina's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Raphina",
      "Away",
      "2026"
    ]
  },
  {
    "id": "portugal-2026-home-kit-ronaldo-embroidery-with-shorts",
    "name": "Portugal 2026 Home Kit Ronaldo Embroidery With Shorts",
    "shortName": "Portugal 2026 Home – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Home",
    "player": "Ronaldo",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 649,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-02-02T182738.750.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-02-02T182738.750.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-02-02T182741.995.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-02-02T182745.267.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F_-_2026-02-02T182937.305.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C_-_2026-02-02T182940.253.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C_-_2026-02-02T182943.534.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Home Kit featuring Ronaldo's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Home",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "england-2026-home-kit-belingham-embroidery",
    "name": "England 2026 Home Kit Belingham Embroidery",
    "shortName": "England 2026 Home – Belingham",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Home",
    "player": "Belingham",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-12T202844.225.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-12T202844.225.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-12T202846.951.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-12T202850.334.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Home Kit featuring Belingham's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Belingham",
      "Home",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "portugal-2026-away-kit-ronaldo-fullsleeve-embroidery",
    "name": "Portugal 2026 Away Kit Ronaldo Fullsleeve Embroidery",
    "shortName": "Portugal 2026 Away – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Away",
    "player": "Ronaldo",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T194947.402.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T194947.402.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-19T194950.123.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T194954.100.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Away Kit featuring Ronaldo's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Away",
      "2026",
      "Embroidery",
      "Full Sleeve"
    ]
  },
  {
    "id": "tshirt-germany-black-polo-embroidery-premium",
    "name": "Tshirt Germany Black Polo Embroidery Premium",
    "shortName": "Germany 2026 Home",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": true,
      "L": false,
      "XL": true,
      "XXL": true,
      "XXXL": true,
      "XXXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194009.400.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194009.400.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194013.191.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T190120.976_c08b28e6-47cb-46a7-b0cb-e356c387e4b1.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "argentina-2026-gk-kit-e-martinez",
    "name": "Argentina 2026 Gk Kit E.Martinez",
    "shortName": "Argentina 2026 Home – E.Martinez",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "E.Martinez",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F31_6_c63d78bf-b54a-4428-9a0b-99633ad3b6e7.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F31_6_c63d78bf-b54a-4428-9a0b-99633ad3b6e7.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2025-11-22T163118.580_758affb1-a715-4f6b-ae88-b0ff7e2f0015.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring E.Martinez's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "E.Martinez",
      "Home",
      "2026",
      "Goalkeeper"
    ]
  },
  {
    "id": "croatia-2026-away-kit-modric",
    "name": "Croatia 2026 Away Kit Modric",
    "shortName": "Croatia 2026 Away – Modric",
    "country": "Croatia",
    "flag": "🇭🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Modric",
    "type": "Standard",
    "badge": "CRO",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T195812.775.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T195812.775.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T195815.958.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Croatia Away Kit featuring Modric's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Croatia",
      "Modric",
      "Away",
      "2026"
    ]
  },
  {
    "id": "tshirt-italy-green-black-polo-embroidery-premium",
    "name": "Tshirt Italy Green Polo Embroidery Premium",
    "shortName": "Italy 2026 Home",
    "country": "Italy",
    "flag": "🇮🇹",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "ITA",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": false,
      "L": false,
      "XL": false,
      "XXL": true,
      "XXXL": true,
      "XXXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194431.018.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194431.018.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194437.332.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194433.876.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Italy Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Italy",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
 
  {
    "id": "brazil-2026-away-gk-kit-a-becker",
    "name": "Brazil 2026 Away Gk Kit A.Becker",
    "shortName": "Brazil 2026 Away – A.Becker",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "A.Becker",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T201413.687.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T201413.687.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T201416.404.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring A.Becker's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "A.Becker",
      "Away",
      "2026",
      "Goalkeeper"
    ]
  },
  {
    "id": "tshirt-portugal-black-polo-embroidery-premium",
    "name": "Tshirt Portugal Black Polo Embroidery Premium",
    "shortName": "Portugal 2026 Home",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": true,
      "L": true,
      "XL": false,
      "XXL": true,
      "XXXL": true,
      "XXXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194655.918.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194655.918.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194658.405.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T190120.976_0f13ed38-8437-402a-8bf1-639bc5550304.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "norway-2026-home-kit-odegaard",
    "name": "Norway 2026 Home Kit Odegaard",
    "shortName": "Norway 2026 Home – Odegaard",
    "country": "Norway",
    "flag": "🇳🇴",
    "year": 2026,
    "kit": "Home",
    "player": "Odegaard",
    "type": "Standard",
    "badge": "NOR",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T193834.786.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T193834.786.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T193837.059.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Norway Home Kit featuring Odegaard's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Norway",
      "Odegaard",
      "Home",
      "2026"
    ]
  },
  {
    "id": "norway-2026-home-kit-haaland-embroidery",
    "name": "Norway 2026 Home Kit Haaland Embroidery",
    "shortName": "Norway 2026 Home – Haaland",
    "country": "Norway",
    "flag": "🇳🇴",
    "year": 2026,
    "kit": "Home",
    "player": "Haaland",
    "type": "Standard",
    "badge": "NOR",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T190234.447.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T190234.447.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-04T190237.615.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-04T190241.844.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Norway Home Kit featuring Haaland's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Norway",
      "Haaland",
      "Home",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "spain-2026-away-kit-rodrigo",
    "name": "Spain 2026 Away Kit Rodrigo",
    "shortName": "Spain 2026 Away – Rodrigo",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Away",
    "player": "Rodrigo",
    "type": "Standard",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T201320.457.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T201320.457.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-29T201323.237.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Away Kit featuring Rodrigo's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Rodrigo",
      "Away",
      "2026"
    ]
  },
  {
    "id": "england-2026-home-kit-kane-embroidery",
    "name": "England 2026 Home Kit Kane Embroidery",
    "shortName": "England 2026 Home – Kane",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Home",
    "player": "Kane",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T190439.153.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-04T190439.153.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-04T190442.246.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-04T190445.828.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Home Kit featuring Kane's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Kane",
      "Home",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "netherland-2026-home-kit-de-jong",
    "name": "Netherland 2026 Home Kit De Jong",
    "shortName": "Netherland 2026 Home – De Jong",
    "country": "Netherland",
    "flag": "🇳🇱",
    "year": 2026,
    "kit": "Home",
    "player": "De Jong",
    "type": "Standard",
    "badge": "NED",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173158.312.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173158.312.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T173201.145.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Netherland Home Kit featuring De Jong's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Netherland",
      "De Jong",
      "Home",
      "2026"
    ]
  },
  {
    "id": "france-2026-away-kit-dembele-1",
    "name": "France 2026 Away Kit Dembele",
    "shortName": "France 2026 Away – Dembele",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Dembele",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T194252.547_530d3590-b086-41b9-8cd3-13fa03929c1d.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T194252.547_530d3590-b086-41b9-8cd3-13fa03929c1d.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T194255.130_244baaa7-2cec-4d84-b7e6-6b116dad983a.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Away Kit featuring Dembele's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Dembele",
      "Away",
      "2026"
    ]
  },
  {
    "id": "brazil-2026-away-kit-raphina-embroidery",
    "name": "Brazil 2026 Away Kit Raphina Embroidery",
    "shortName": "Brazil 2026 Away – Raphina",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Raphina",
    "type": "Standard",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-13T193243.422.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-13T193243.422.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-13T193246.129.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-13T193249.248.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Away Kit featuring Raphina's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Raphina",
      "Away",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "tshirt-brazil-black-polo-embroidery-premium",
    "name": "Tshirt Brazil Black Polo Embroidery Premium",
    "shortName": "Brazil 2026 Home",
    "country": "Brazil",
    "flag": "🇧🇷",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "BRA",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": true,
      "L": false,
      "XL": true,
      "XXL": true,
      "XXXL": true,
      "XXXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194228.317.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194228.317.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194231.436.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T190120.976_4ff2b1af-92b2-42a8-834c-bd1c3ea0d107.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Brazil Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Brazil",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "england-2026-away-kit-bellingham-embroidery",
    "name": "England 2026 Away Kit Bellingham Embroidery",
    "shortName": "England 2026 Away – Bellingham",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Away",
    "player": "Bellingham",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-30T174859.330.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-30T174859.330.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-04-30T174902.661.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-30T174905.785.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Away Kit featuring Bellingham's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Bellingham",
      "Away",
      "2026",
      "Embroidery"
    ]
  },
  {
    "id": "japan-2026-home-kit",
    "name": "Japan 2026 Home Kit",
    "shortName": "Japan 2026 Home",
    "country": "Japan",
    "flag": "🇯🇵",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "JPN",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": false,
      "L": false,
      "XL": false,
      "XXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2025-12-16T163436.458_503fb0ef-5dad-4770-88de-651557efaa53.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2025-12-16T163436.458_503fb0ef-5dad-4770-88de-651557efaa53.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2025-12-16T163439.970_28729079-6147-467d-a830-e8cf8248eb07.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Japan Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Japan",
      "Home",
      "2026"
    ]
  },
  {
    "id": "england-2026-away-kit-belingham-1",
    "name": "England 2026 Away Kit Belingham",
    "shortName": "England 2026 Away – Belingham",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Away",
    "player": "Belingham",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T202138.501.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-29T202138.501.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-29T202141.628.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Away Kit featuring Belingham's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Belingham",
      "Away",
      "2026"
    ]
  },
  {
    "id": "japan-2026-away-kit",
    "name": "Japan 2026 Away Kit",
    "shortName": "Japan 2026 Away",
    "country": "Japan",
    "flag": "🇯🇵",
    "year": 2026,
    "kit": "Away",
    "player": "",
    "type": "Standard",
    "badge": "JPN",
    "originalPrice": 599,
    "discountedPrice": 449,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T175307.165.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T175307.165.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-05T175310.111.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T175313.472.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Japan Away Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Japan",
      "Away",
      "2026"
    ]
  },
  {
    "id": "argentina-2026-away-kit-messi-fullsleeve-embroidery-premium",
    "name": "Argentina 2026 Away Kit Messi Fullsleeve Embroidery Premium",
    "shortName": "Argentina 2026 Away – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Messi",
    "type": "Premium",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 549,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T202525.383.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T202525.383.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T202529.277.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T202531.980.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring Messi's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Away",
      "2026",
      "Premium",
      "Embroidery",
      "Full Sleeve"
    ]
  },
  {
    "id": "portugal-2026-home-kit-ronaldo-1",
    "name": "Portugal 2026 Home Kit Ronaldo",
    "shortName": "Portugal 2026 Home – Ronaldo",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Home",
    "player": "Ronaldo",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T185601.974.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T185601.974.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T185605.201.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Home Kit featuring Ronaldo's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Ronaldo",
      "Home",
      "2026"
    ]
  },
  {
    "id": "france-2026-home-kit-doue-polo",
    "name": "France 2026 Home Kit Doue Polo",
    "shortName": "France 2026 Home – Doue",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Doue",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T193458.584.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T193458.584.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T193501.070.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Home Kit featuring Doue's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Doue",
      "Home",
      "2026",
      "Polo"
    ]
  },
  {
    "id": "france-2026-home-kit-mbappe-fullsleeve-polo-embroidery",
    "name": "France 2026 Home Kit Mbappe Fullsleeve Polo Embroidery",
    "shortName": "France 2026 Home – Mbappe",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Mbappe",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 549,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T192739.301.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T192739.301.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-19T192742.321.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T192745.668.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Home Kit featuring Mbappe's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Mbappe",
      "Home",
      "2026",
      "Embroidery",
      "Polo",
      "Full Sleeve"
    ]
  },
  {
    "id": "tshirt-france-white-polo-embroidery-premium",
    "name": "Tshirt France White Polo Embroidery Premium",
    "shortName": "France 2026 Home",
    "country": "France",
    "flag": "🇫🇷",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "FRA",
    "originalPrice": 599,
    "discountedPrice": 599,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "XXXXL"
    ],
    "sizeStock": {
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": true,
      "XXXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194857.634.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T194857.634.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T194901.992.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T194905.366.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 France Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo",
      "T-Shirt"
    ]
  },
  {
    "id": "argentina-2026-away-kit-depaul",
    "name": "Argentina 2026 Away Kit De Paul",
    "shortName": "Argentina 2026 Away – De Paul",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "De Paul",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T204832.983_ae9bd35e-af8c-44f8-85b2-d11e209cda38.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-01T204832.983_ae9bd35e-af8c-44f8-85b2-d11e209cda38.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-01T204852.199.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring De Paul's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "De Paul",
      "Away",
      "2026"
    ]
  },
  {
    "id": "argentina-2026-away-kit-alvarez",
    "name": "Argentina 2026 Away Kit Alvarez",
    "shortName": "Argentina 2026 Away – Alvarez",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Alvarez",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": false,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173649.416.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173649.416.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T173652.802.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring Alvarez's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Alvarez",
      "Away",
      "2026"
    ]
  },
  {
    "id": "germany-2026-home-gk-kit-neuer",
    "name": "Germany 2026 Home Gk Kit Neuer",
    "shortName": "Germany 2026 Home – Neuer",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "Neuer",
    "type": "Standard",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T183915.105.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T183915.105.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T183918.576.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit featuring Neuer's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Neuer",
      "Home",
      "2026",
      "Goalkeeper"
    ]
  },
  {
    "id": "spain-2026-home-kit-pedri-embroidery-premium-1",
    "name": "Spain 2026 Home Kit Pedri Embroidery Premium",
    "shortName": "Spain 2026 Home – Pedri",
    "country": "Spain",
    "flag": "🇪🇸",
    "year": 2026,
    "kit": "Home",
    "player": "Pedri",
    "type": "Premium",
    "badge": "ESP",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T210519.628.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T210519.628.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T210716.035.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T210718.218.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T210721.031.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Spain Home Kit featuring Pedri's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Spain",
      "Pedri",
      "Home",
      "2026",
      "Premium",
      "Embroidery"
    ]
  },
  {
    "id": "argentina-2026-training-kit-messi",
    "name": "Argentina 2026 Training Kit Messi",
    "shortName": "Argentina 2026 Home – Messi",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Messi",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "M",
      "S"
    ],
    "sizeStock": {
      "M": false,
      "S": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2025-12-16T163606.194_24aeeddb-17ec-4938-a4da-6bbc010091a4.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2025-12-16T163606.194_24aeeddb-17ec-4938-a4da-6bbc010091a4.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2025-12-16T163609.156_f23e14db-d47f-4d61-880c-4705710d84a9.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit featuring Messi's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Messi",
      "Home",
      "2026",
      "Training"
    ]
  },
  {
    "id": "germany-2026-home-kit-writz-knitted-polo-embroidery-premium-1",
    "name": "Germany 2026 Home Kit Writz Knitted Polo Embroidery Premium",
    "shortName": "Germany 2026 Home",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Premium",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T203446.373.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T203446.373.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T203449.228.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T203452.066.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Home",
      "2026",
      "Premium",
      "Embroidery",
      "Polo"
    ]
  },
  {
    "id": "england-2026-away-kit-saka",
    "name": "England 2026 Away Kit Saka",
    "shortName": "England 2026 Away – Saka",
    "country": "England",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "year": 2026,
    "kit": "Away",
    "player": "Saka",
    "type": "Standard",
    "badge": "ENG",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T202239.809.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-04-19T202239.809.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-04-19T202242.159.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 England Away Kit featuring Saka's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "England",
      "Saka",
      "Away",
      "2026"
    ]
  },
  {
    "id": "germany-2026-away-kit-musiala-knitted-polo-embroidery-premium",
    "name": "Germany 2026 Away Kit Musiala Knitted Polo Embroidery Premium",
    "shortName": "Germany 2026 Away – Musiala",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Away",
    "player": "Musiala",
    "type": "Premium",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 499,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true,
      "XXXL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T205528.167.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T205528.167.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T205530.514.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T205534.306.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Away Kit featuring Musiala's name & number. Premium quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Musiala",
      "Away",
      "2026",
      "Premium",
      "Embroidery",
      "Polo"
    ]
  },
  {
    "id": "mexico-2026-away-kit",
    "name": "Mexico 2026 Away Kit",
    "shortName": "Mexico 2026 Away",
    "country": "Mexico",
    "flag": "🇲🇽",
    "year": 2026,
    "kit": "Away",
    "player": "",
    "type": "Standard",
    "badge": "MEX",
    "originalPrice": 599,
    "discountedPrice": 449,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T181846.503.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-09T181846.503.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-09T181850.290.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-09T181854.147.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Mexico Away Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Mexico",
      "Away",
      "2026"
    ]
  },
  {
    "id": "germany-2026-training-kit-embroidery",
    "name": "Germany 2026 Training Kit Embroidery",
    "shortName": "Germany 2026 Home",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 479,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": false
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-02-27T182257.107.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-02-27T182257.107.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-02-27T182300.610.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-02-27T182304.385.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Home",
      "2026",
      "Embroidery",
      "Training"
    ]
  },
  {
    "id": "germany-2026-home-kit-wirtz",
    "name": "Germany 2026 Home Kit Wirtz",
    "shortName": "Germany 2026 Home – Wirtz",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Home",
    "player": "Wirtz",
    "type": "Standard",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T183119.088.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T183119.088.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T183122.041.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Home Kit featuring Wirtz's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Wirtz",
      "Home",
      "2026"
    ]
  },
  {
    "id": "acmilan-2006-third-kit-with-shorts-imported",
    "name": "Acmilan 2006 Third Kit With Shorts Imported",
    "shortName": "Unknown 2006 Third",
    "country": "Acmilan",
    "flag": "🏳",
    "year": 2006,
    "kit": "Third",
    "player": "",
    "type": "Standard",
    "badge": "UNK",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T184800.939.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T184800.939.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F_-_2026-05-20T185234.738.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T184807.628.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T184804.237.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T184811.645.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2006 Unknown Third Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Third",
      "2006"
    ]
  },
  {
    "id": "columbia-2026-away-kit-luis-diaz",
    "name": "Columbia 2026 Away Kit Luis Diaz",
    "shortName": "Columbia 2026 Away – Luis Diaz",
    "country": "Columbia",
    "flag": "🇨🇴",
    "year": 2026,
    "kit": "Away",
    "player": "Luis Diaz",
    "type": "Standard",
    "badge": "COL",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173850.574.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T173850.574.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T173853.300.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Columbia Away Kit featuring Luis Diaz's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Columbia",
      "Luis Diaz",
      "Away",
      "2026"
    ]
  },
  {
    "id": "germany-2026-away-kit-wirtz-1",
    "name": "Germany 2026 Away Kit Wirtz",
    "shortName": "Germany 2026 Away – Wirtz",
    "country": "Germany",
    "flag": "🇩🇪",
    "year": 2026,
    "kit": "Away",
    "player": "Wirtz",
    "type": "Standard",
    "badge": "GER",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T191426.242.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T191426.242.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T191429.280.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Germany Away Kit featuring Wirtz's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Germany",
      "Wirtz",
      "Away",
      "2026"
    ]
  },
  {
    "id": "croatia-2026-home-kit-modric",
    "name": "Croatia 2026 Home Kit Modric",
    "shortName": "Croatia 2026 Home – Modric",
    "country": "Croatia",
    "flag": "🇭🇷",
    "year": 2026,
    "kit": "Home",
    "player": "Modric",
    "type": "Standard",
    "badge": "CRO",
    "originalPrice": 599,
    "discountedPrice": 439,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T174333.577.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-05T174333.577.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-05T174336.872.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Croatia Home Kit featuring Modric's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Croatia",
      "Modric",
      "Home",
      "2026"
    ]
  },
  {
    "id": "portugal-2026-away-kit-with-shorts-imported-copy",
    "name": "Portugal 2026 Away Kit With Shorts Imported",
    "shortName": "Portugal 2026 Away",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Away",
    "player": "",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": false,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T201531.512.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T201531.512.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T201529.641.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T201354.267.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T201356.445.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T201359.165.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Away Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Away",
      "2026"
    ]
  },
  {
    "id": "barcelona-2008-09-home-kit-with-shorts-imported",
    "name": "Barcelona 2008-09 Home Kit With Shorts Imported",
    "shortName": "Unknown 2008 Home",
    "country": "Barcelona",
    "flag": "🏳",
    "year": 2008,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "UNK",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195021.405.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195021.405.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195238.966.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T195023.741.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T195026.535.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2008 Unknown Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Home",
      "2008"
    ]
  },
  {
    "id": "portugal-2026-black-kit-with-shorts-imported",
    "name": "Portugal 2026 Black Kit With Shorts Imported",
    "shortName": "Portugal 2026 Third",
    "country": "Portugal",
    "flag": "🇵🇹",
    "year": 2026,
    "kit": "Third",
    "player": "",
    "type": "Standard",
    "badge": "POR",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T202016.336.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T202016.336.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T202032.507.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T202018.514.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T202021.109.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Portugal Third Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Portugal",
      "Third",
      "2026"
    ]
  },
  {
    "id": "real-madrid-2006-away-kit-with-shorts-imported",
    "name": "Real Madrid 2006 Away Kit With Shorts Imported",
    "shortName": "Unknown 2006 Away",
    "country": "Real",
    "flag": "🏳",
    "year": 2006,
    "kit": "Away",
    "player": "",
    "type": "Standard",
    "badge": "UNK",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195825.673.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195825.673.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195844.468.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T195850.543.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T195828.245.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T195834.220.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2006 Unknown Away Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Away",
      "2006"
    ]
  },
  {
    "id": "france-1998-home-kit-with-shorts-imported",
    "name": "France 1998 Home Kit With Shorts Imported",
    "shortName": "France 1998 Home",
    "country": "France",
    "flag": "🇫🇷",
    "year": 1998,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "FRA",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195439.593.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T195439.593.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F_-_2026-05-20T195450.972.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T195442.318.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T195444.955.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T195447.798.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "1998 France Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "France",
      "Home",
      "1998"
    ]
  },
  {
    "id": "argentina-2026-home-kit-with-shorts-imported",
    "name": "Argentina 2026 Home Kit With Shorts Imported",
    "shortName": "Argentina 2026 Home",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T194517.728.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T194517.728.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T194530.633.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T194523.967.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T194520.770.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T194527.513.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Home",
      "2026"
    ]
  },
  {
    "id": "manchester-united-2008-home-kit-with-shorts-imported",
    "name": "Manchester United 2008 Home Kit With Shorts Imported",
    "shortName": "Unknown 2008 Home",
    "country": "Manchester",
    "flag": "🏳",
    "year": 2008,
    "kit": "Home",
    "player": "",
    "type": "Standard",
    "badge": "UNK",
    "originalPrice": 899,
    "discountedPrice": 899,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T175850.243.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T175850.243.webp",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-20T175836.419.webp",
      "https://www.thayyilsports.in/cdn/shop/files/C-2026-05-20T175839.991.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-20T175843.743.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2008 Unknown Home Kit. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Home",
      "2008"
    ]
  },
  {
    "id": "argentina-2026-away-gk-kit-martinez",
    "name": "Argentina 2026 Away Gk Kit Martinez",
    "shortName": "Argentina 2026 Away – Martinez",
    "country": "Argentina",
    "flag": "🇦🇷",
    "year": 2026,
    "kit": "Away",
    "player": "Martinez",
    "type": "Standard",
    "badge": "ARG",
    "originalPrice": 599,
    "discountedPrice": 419,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeStock": {
      "S": true,
      "M": true,
      "L": true,
      "XL": true,
      "XXL": true
    },
    "inStock": true,
    "images": [
      "http://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T184649.107.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo_blk.svg",
      "https://www.thayyilsports.in/cdn/shop/files/F-2026-05-19T184649.107.webp",
      "https://www.thayyilsports.in/cdn/shop/files/B-2026-05-19T184651.934.webp",
      "https://www.thayyilsports.in/cdn/shop/files/thayyilsports_logo.svg"
    ],
    "description": "2026 Argentina Away Kit featuring Martinez's name & number. Standard quality replica available from Thayyil Sports.",
    "tags": [
      "Argentina",
      "Martinez",
      "Away",
      "2026",
      "Goalkeeper"
    ]
  }
]

export const SIZES_ALL = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '3XL'];
export const COUNTRIES = [...new Set(JERSEYS.map((j) => j.country))];
