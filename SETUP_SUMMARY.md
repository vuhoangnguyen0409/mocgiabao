# Decap CMS + Next.js Migration Complete

## What's Been Set Up

### 1. **Decap CMS Configuration** (`public/admin/config.yml`)
- **Homepage Settings**: Company description, map iframe URL, about us
- **Wood Types**: 6 wood items (Beech, Thông, ASH, Bedroom, Light) with image, offer, price, availability
- **Locations**: 2 office locations (TPHCM, Bình Dương)
- **Contact People**: 2 contacts (Phạm Thị Tuyết, Nguyễn Văn A) with position, email, phone

### 2. **Content Structure** (`content/` folder)
- `homepage.md` — Company description, map URL, about us
- `locations.md` — Office locations (TPHCM & Bình Dương)
- `woods/` — 6 markdown files for each wood type
- `contacts/` — 2 markdown files for contact people

### 3. **Next.js Pages** 
- `src/app/page.js` — Homepage that reads from markdown via `src/lib/content.js`
- `src/app/layout.js` — Updated with Netlify Identity widget and CSS links
- `src/lib/content.js` — Server-side content helper functions using `gray-matter`

### 4. **Public Assets**
- `public/tooplate-ivory-style.css` — Copied from html-theme
- `public/tooplate-ivory-script.js` — Copied from html-theme
- `public/images/` — Copied from html-theme
- `public/admin/index.html` — Decap CMS admin interface

### 5. **Dependencies Added**
```json
{
  "decap-cms-app": "^3.0.0",
  "gray-matter": "^4.0.3",
  "next-mdx-remote": "^5.0.0"
}
```

## How to Use Locally

```bash
npm run dev
# Homepage: http://localhost:3000
# CMS: http://localhost:3000/admin (won't work locally — Git Gateway requires Netlify deployment)
```

## How to Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Decap CMS setup"
   git push origin main
   ```

2. **Deploy on Netlify** (see GUIDES/DECAP_CMS_SETUP.md Part 5)
   - Connect your GitHub repo
   - Build: `npm run build`
   - Publish: `.next`

3. **Enable Netlify Identity & Git Gateway** (Part 5.2-5.3)
   - Identity → Enable
   - Git Gateway → Enable

4. **Invite yourself to CMS** (Part 5.6)
   - Identity → Users → Invite user
   - Set password from email link
   - Visit `https://YOUR_SITE.netlify.app/admin`

## CMS Fields Reference

### Homepage Section
- **Company Description** — Hero section text (`.hero-desc`)
- **Map Iframe URL** — Google Maps embed (`.product-map`)
- **About Us** — Product section description (`.product-desc`)

### Wood Types
- **Name** — Card label (`.lookbook-card-label`)
- **Image** — Card image
- **Offer** — Offer text (`.lookbook-card-offer`)
- **Price** — Price text (`.lookbook-card-tag`)
- **Availability** — Status text (`.lookbook-card-tag--available`)
- **Order** — Sort order (1-6)

### Contact People
- **Name** — Person name (`.signature-heading`)
- **Position** — Job title or description (`.signature-text`)
- **Email** — Email address
- **Phone** — Phone number (`.signature-phone`)
- **Order** — Display order

## File Mapping (HTML → Decap CMS)

| HTML Element | Decap CMS Field | Collection |
|---|---|---|
| `.hero-desc` | Company Description | Homepage |
| `.lookbook-card` | Wood Type | Woods |
| `.lookbook-card-offer` | Offer | Woods |
| `.lookbook-card-tag` | Price | Woods |
| `.lookbook-card-tag--available` | Availability | Woods |
| `.product-map` | Map Iframe URL | Homepage |
| `.product-desc` | About Us | Homepage |
| `.product-spec` | Locations | Locations |
| `.signature-heading` | Name | Contact People |
| `.signature-text` | Position | Contact People |
| `.signature-phone` | Phone | Contact People |

## Next Steps

1. **Copy images to CMS uploads**: Download images from `html-theme/images/` and upload via Decap CMS to populate `public/img/uploads/`
2. **Test on Netlify**: Deploy to Netlify and verify CMS works
3. **Customize theme**: Adjust `tooplate-ivory-style.css` as needed
4. **Add social links**: Update Zalo, Facebook, TikTok links in signature section
