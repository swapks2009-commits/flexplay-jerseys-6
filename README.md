# FlexPlay Jerseys 🏆

Clean white portfolio site for World Cup 2026 jerseys — orders via WhatsApp.

## Quick Start

```bash
unzip flexplay-jerseys.zip
cd flexplay-jerseys
npm install
npm run dev
# Open http://localhost:3000
```

## ⚠️ Adding Your Product Images (IMPORTANT)

The site currently shows nice SVG jersey placeholders. To show your real product photos:

### Option A – Use Cloudinary (Recommended, Free)
1. Go to https://cloudinary.com and sign up free
2. Upload your jersey photos
3. Copy the image URL (looks like: `https://res.cloudinary.com/your-id/image/upload/v123/jersey.jpg`)
4. Paste into `constants/jerseys.ts` → `images: ['YOUR_URL_HERE']`

### Option B – Use any image hosting
- Google Drive (with direct share link)
- Imgur
- Your own server/Netlify CDN

### Option C – Add to public folder
- Put images in `public/images/jerseys/` folder
- Name them exactly as in `constants/jerseys.ts` (e.g. `arg-home-2026.jpg`)
- They'll automatically show up

---

## Environment Variables

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919156165683` (already set) |

---

## Editing Products

All data is in `constants/jerseys.ts`:

```ts
{
  id: 'unique-id',
  name: 'FULL NAME (shown in modal)',
  shortName: 'Short name (on card)',
  country: 'Argentina',
  flag: '🇦🇷',
  kit: 'Home' | 'Away' | 'Third',
  player: 'Messi #10',
  type: 'Premium' | 'Standard',
  badge: 'Embroidery Premium',
  originalPrice: 599,      // crossed-out price
  discountedPrice: 399,    // sale price
  sizes: ['S','M','L','XL','XXL'],
  inStock: true,
  images: ['https://your-image-url.jpg'],
  description: 'Product description',
  tags: ['argentina','messi'],
}
```

---

## Deploy to Netlify

1. Push to GitHub
2. Import on Netlify → build settings auto-detected
3. Add env var: `NEXT_PUBLIC_WHATSAPP_NUMBER=919156165683`
4. Deploy ✅

Or via CLI:
```bash
npm run build
netlify deploy --prod --dir=out
```
