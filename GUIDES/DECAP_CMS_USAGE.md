# Using Decap CMS to Manage Content

Your site is now live with Decap CMS. Here's how to add and edit content.

---

## First Time Setup: Enable Netlify Identity

**Before accessing the CMS, you must enable Identity on Netlify:**

### Step 1: Enable Identity Service
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click your site name (mocgiabao)
3. Go to **Project settings** → **Identity** (left sidebar)
4. Click **Enable Identity**
5. Under **Registration**, set to **Invite only**

### Step 2: Enable Git Gateway
1. On the same **Identity** page, scroll to **Services** section
2. Click **Enable Git Gateway**
3. Authorize GitHub if prompted (use your GitHub account)

### Step 3: Invite Yourself
1. On **Identity** page → click **Users** tab
2. Click **Invite user**
3. Enter your email address
4. Check your email for invite link
5. Click the link in the email
6. Set your password
7. You're now invited to the CMS!

---

## Accessing the CMS

1. Go to `https://YOUR_SITE.netlify.app/admin`
   - Example: `https://mocgiabao.netlify.app/admin`
2. Log in with your email and password (the one you set in Step 3 above)
3. You'll see collections on the left sidebar

---

## Collections Overview

### 1. **Homepage** (Single File)
Manages the main page hero section, map, and about us.

**Fields:**
- **Company Description** — Text shown in hero section
- **Map Iframe URL** — Google Maps embed URL (or any iframe)
- **About Us** — Text in product/about section

**To edit:**
1. Click **Homepage** in sidebar
2. Edit the fields
3. Click **Publish** (bottom right)

**Example map URL:**
```
https://www.google.com/maps?q=YOUR_LOCATION&ll=LATITUDE,LONGITUDE&z=12&output=embed
```

---

### 2. **Wood Types** (Folder Collection)
Manages the 6 wood cards in the lookbook section.

**Fields per wood:**
- **Name** — Wood type name (e.g., "Beech", "Thông")
- **Image** — Upload wood photo
- **Offer** — Discount/offer text (leave blank if no offer)
- **Price** — Price text (e.g., "VND: 100tr", "€2,140")
- **Availability** — Status (e.g., "2 Cont", "Available", "Tạm Hết")
- **Order** — Display order (1-6)

**To add a new wood type:**
1. Click **Wood Types**
2. Click **New Wood Type** (top right)
3. Fill in the fields
4. Upload image by clicking the **Image** field
5. Set Order (1-6)
6. Click **Publish**

**To edit existing:**
1. Click the wood type name
2. Make changes
3. Click **Publish**

**To delete:**
1. Click the wood type
2. Click **Delete** (top right)
3. Confirm

---

### 3. **Locations** (Single File)
Manages the 2 office locations (TPHCM, Bình Dương).

**Fields:**
- List of locations with:
  - **City** — Location name
  - **Address** — Full address or details

**To edit:**
1. Click **Locations**
2. Click **Edit** on each location
3. Update City and Address
4. Click **Publish**

**To add new location:**
1. Click the **+** button next to "Locations"
2. Fill in City and Address
3. Click **Publish**

---

### 4. **Contact People** (Folder Collection)
Manages the 2 people shown in the signature/contact section.

**Fields per person:**
- **Name** — Full name
- **Position** — Job title or description
- **Email** — Email address
- **Phone** — Phone number
- **Order** — Display order

**To add a new contact:**
1. Click **Contact People**
2. Click **New Contact Person**
3. Fill in all fields
4. Set Order (1-2 or higher)
5. Click **Publish**

**To edit existing:**
1. Click the person's name
2. Make changes
3. Click **Publish**

---

## Uploading Images

### Where do images go?
- **Upload folder:** `public/img/uploads/`
- **Preview:** Images appear immediately in the CMS preview
- **URL in markdown:** `/img/uploads/filename.jpg`

### How to upload:

**For Wood Types:**
1. Click the **Image** field
2. Click **Choose different image**
3. A file browser opens
4. Click **Upload** tab
5. Drag & drop or click to select from computer
6. Wait for upload to complete
7. Image is now linked to that wood type

**Supported formats:** JPG, PNG, WebP (WebP is best for web—smaller file size)

### Image best practices:
- **Size:** Keep under 2-3 MB (CMS limit is 5 MB)
- **Format:** Use WebP for smaller file size, JPG for wide browser support
- **Dimensions:** Same size as original HTML images (e.g., 1200×800)

---

## Workflow: Add a New Wood Type

**Step 1: Prepare the image**
- Take a photo or screenshot of the wood
- Save as `wood-name.jpg` (e.g., `wood-walnut.jpg`)
- Resize to ~1200px wide if very large

**Step 2: Add in CMS**
1. Go to `https://YOUR_SITE.netlify.app/admin`
2. Click **Wood Types**
3. Click **New Wood Type**
4. Fill in:
   - **Name:** "Walnut"
   - **Image:** Click field → Upload tab → select file
   - **Offer:** "Giảm còn: 150tr" (or leave blank)
   - **Price:** "VND: 180tr"
   - **Availability:** "3 Cont"
   - **Order:** 7 (or next number)
5. Click **Publish**

**Step 3: Verify**
1. Wait 1-2 minutes for Netlify to redeploy
2. Refresh your site
3. New wood type appears in the lookbook section

---

## Workflow: Update Contact Information

**Step 1: Edit existing contact**
1. Go to `https://YOUR_SITE.netlify.app/admin`
2. Click **Contact People**
3. Click the person's name
4. Update **Name**, **Position**, **Email**, **Phone**
5. Click **Publish**

**Step 2: Wait for deployment**
- Netlify auto-deploys when you publish
- Takes 1-2 minutes
- New contact info appears on the site

---

## Common Issues

| Issue | Solution |
|-------|----------|
| **"Your Git Gateway backend is not returning valid settings"** | **Git Gateway not enabled!** Go to Netlify → Project settings → Identity → Services → Enable Git Gateway. Both Identity AND Git Gateway must be enabled. Hard refresh `/admin` after enabling. |
| "Image path shows `/public/img/uploads/...` (wrong)" | Image was saved with wrong path. Fix: Remove `/public/` prefix so it's just `/img/uploads/filename.jpg`. This is a known Decap CMS issue on first upload. Future uploads should use correct path. |
| "Login failed" | Check email/password. If forgot password, Netlify should send reset link |
| "Image won't upload" | File too large (max 5MB) or unsupported format. Try JPG or PNG |
| "Changes not appearing" | Wait 1-2 min for Netlify deploy. Hard refresh (Ctrl+Shift+R) browser |
| "Draft vs Publish" | Only **Publish** button saves to git. Draft is temporary preview |
| "Markdown formatting" | Use `**bold**`, `*italic*`, `- bullets` in text fields |

---

## Git Commits

Every time you click **Publish** in the CMS:
1. Changes are saved to markdown files in `content/`
2. A new git commit is automatically created
3. Netlify rebuilds and deploys
4. You can see commits on GitHub

Example commit message from CMS:
```
Update Post "wood-type"
```

---

## Preview Before Publishing

Before clicking **Publish**:
1. Check the **Preview** pane on the right
2. You'll see how the content looks on the site
3. Make sure images uploaded correctly
4. Then click **Publish**

---

## Summary

| Task | Steps |
|------|-------|
| **Edit company description** | Homepage → Company Description → Publish |
| **Add wood type** | Wood Types → New → Fill fields → Publish |
| **Update contact person** | Contact People → Name → Edit → Publish |
| **Change map location** | Homepage → Map Iframe URL → Paste new URL → Publish |
| **Upload image** | Click Image field → Upload → Select file → Auto-linked |

---

## Next: Customize Your Content

1. **Update images** — Replace placeholder images with real wood photos
2. **Add more wood types** — Click New, fill fields, repeat
3. **Update contact info** — Edit phone, email, positions
4. **Test on live site** — Publish a change, wait 2 min, refresh to verify

Questions? Check the Decap CMS docs: [decapcms.org/docs](https://decapcms.org/docs)
