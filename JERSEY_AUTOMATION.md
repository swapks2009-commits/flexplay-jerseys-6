# Jersey Filter Automation

## 🚀 Quick Start (3 Steps)

1. **Place scraper JSON in root:**
   ```
   thayyilsports_bestselling.json
   ```

2. **Run one command:**
   ```bash
   npm run update-jerseys
   ```

3. **Done!** Your `constants/jerseys.ts` is auto-updated with all filters applied.

---

## 📝 What It Does

Automatically:
- ✓ Categorizes into: World Cup, Clubs, IPL, F1, Shorts, Jackets, Full Sleeve, Crop Top, Other
- ✓ Detects sub-categories: Brazil, Argentina, Barcelona, RCB, Mumbai, etc.
- ✓ Fixes typos: "Embroidey" → "Embroidery"
- ✓ Marks featured items based on priority order
- ✓ Sorts intelligently by category → sub-category → priority → name

---

## 📋 Files Created

| File | Purpose |
|------|---------|
| `utils/filterConfig.ts` | **ALL filter rules in ONE place** |
| `utils/jerseyProcessor.ts` | Processor library (use in React/API) |
| `scripts/updateJerseys.js` | Master automation script |

---

## 🔧 How to Change Filter Rules

Edit **only** `utils/filterConfig.ts`:

### Add/Remove Keywords
```typescript
'World Cup': {
  detector: (jersey) => {
    const name = jersey.name.toUpperCase();
    return /2026|WORLD|CUP|ARGENTINA|BRAZIL|...|NEWCOUNTRY/.test(name);
  },
},
```

### Fix Typos
```typescript
NAME_CORRECTIONS = {
  'Mumbai Indians 2026 Home Kit Rohit Polo Embroidey': 
    'Mumbai Indians 2026 Home Kit Rohit Polo Embroidery',
};
```

### Change Featured Item Order
```typescript
FEATURED_PRIORITY_ORDER = {
  'World Cup/All': [
    'first-jersey-id',
    'second-jersey-id',
  ],
};
```

Then run: `npm run update-jerseys`

---

## 💻 Commands

```bash
# Auto-detect scraper file
npm run update-jerseys

# Specify custom file
node scripts/updateJerseys.js myfile.json
```

---

## 📊 Categories & Sub-Filters

| Category | Sub-Filters |
|----------|-------------|
| **World Cup** | All, Brazil, Argentina, France, Germany, Spain, England, Italy, Portugal, Mexico, Croatia, Japan, Jamaica, Sao Paulo, Morocco, Norway |
| **Clubs** | All, Barcelona, Manchester, Alnassr, Chelsea, AC Milan, Arsenal, Liverpool, Real Madrid, PSG, Juventus, Inter Milan, Inter Miami, Monaco |
| **IPL** | All, India Cricket, RCB, Chennai, Mumbai, Kolkata, Rajasthan |
| **Full Sleeve** | All |
| **Jackets** | All |
| **F1** | All |
| **Shorts** | All |
| **Crop Top** | All |
| **Other** | (default for unmatched) |

---

## 🎯 Using in Your App

```typescript
import { JERSEYS } from '@/constants/jerseys';
import { getJerseysByMainCategory, getJerseysByCategoryAndSub } from '@/utils/jerseyProcessor';

// All jerseys
console.log(JERSEYS);

// Filter by category
const worldCup = getJerseysByMainCategory(JERSEYS, 'World Cup');

// Filter by category + sub-category
const argentina = getJerseysByCategoryAndSub(JERSEYS, 'World Cup', 'Argentina');
```

---

## 📂 Workflow

```
Your Scraper Output (JSON)
  ↓
npm run update-jerseys
  ↓
Processing:
  • Categorizes into main filters
  • Detects sub-categories
  • Fixes typos
  • Marks featured items
  • Sorts by priority
  ↓
constants/jerseys.ts (UPDATED ✅)
  ↓
Use in your React components
```

---

## ❓ FAQ

**Q: Where do I put scraper JSON?**  
A: Project root folder with name: `thayyilsports_bestselling.json`

**Q: Can I use a different filename?**  
A: Yes, run: `node scripts/updateJerseys.js myfile.json`

**Q: How do I update filter rules?**  
A: Edit `utils/filterConfig.ts` then run `npm run update-jerseys`

**Q: Jersey in wrong category?**  
A: Add/fix keywords in detector function in `filterConfig.ts`

**Q: What if a jersey doesn't match any category?**  
A: It goes to "Other" category. Add keywords to appropriate detector.

---

## 🎉 That's It!

Your workflow is now:
1. Place scraper JSON in root
2. `npm run update-jerseys`
3. Everything auto-categorized, filtered, and sorted ✨
