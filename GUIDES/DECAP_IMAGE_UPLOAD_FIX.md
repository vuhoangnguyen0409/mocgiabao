# Decap CMS Image Upload - /public/ Path Fix

## The Issue

When uploading images via Decap CMS, paths are saved with `/public/` prefix:
```
❌ image: /public/img/uploads/filename.jpg
✅ image: /img/uploads/filename.jpg
```

Next.js serves `public/` folder from root `/`, so `/public/...` is wrong.

## Quick Fix (Do This Every Time)

1. Upload image via CMS
2. Image appears in preview
3. Click **Preview** or **Edit**
4. **Remove `/public/` from image path**
5. Click **Publish**

Example:
```yaml
# Before
image: /public/img/uploads/my-image.jpg

# After  
image: /img/uploads/my-image.jpg
```

## Why It Happens

Decap CMS reads `media_folder: public/img/uploads` literally and includes it in the path. This is a known quirk with this setup.

## Verification

After fixing the path:
1. Go to your site
2. Image should load at: `https://mocbaogia.netlify.app/img/uploads/filename.jpg`
3. Not at: `https://mocbaogia.netlify.app/public/img/uploads/filename.jpg`

## Bulk Fix (If Multiple Images Have This Issue)

If many images have `/public/` prefix:

```bash
# Find all files with /public/ in image paths
grep -r "image: /public/img/uploads" content/

# Manually edit each file and remove /public/
```

Or contact support if this becomes repetitive.
