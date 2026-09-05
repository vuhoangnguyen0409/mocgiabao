# Setting Up Decap CMS + Vercel

## GitHub OAuth Setup

### Step 1: Create GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click **Developer settings** (left sidebar)
3. Click **OAuth Apps** → **New OAuth App**
4. Fill in:
   - **Application name:** `mocgiabao-cms`
   - **Homepage URL:** `https://mocgiabao.vercel.app` (your Vercel domain)
   - **Authorization callback URL:** `https://mocgiabao.vercel.app/admin`
5. Click **Register application**
6. You'll see:
   - **Client ID** (save this)
   - **Client Secret** (save this - keep secret!)

### Step 2: Add to Vercel Environment Variables

1. Go to [vercel.com](https://vercel.com) → your **mocgiabao** project
2. Go to **Settings** → **Environment Variables**
3. Add:
   - `GITHUB_APP_ID` = your Client ID
   - `GITHUB_APP_SECRET` = your Client Secret
4. Redeploy

### Step 3: Update Config (Already Done)

The config.yml is already set to:
```yaml
backend:
  name: github
  repo: vuhoangnguyen0409/mocgiabao
  branch: main
  auth_type: github_app
  app_id: YOUR_GITHUB_CLIENT_ID
```

### Step 4: Deploy

1. Commit changes:
```bash
git add .
git commit -m "Configure GitHub OAuth for Decap CMS on Vercel"
git push
```

2. Vercel auto-deploys

### Step 5: Test Login

1. Go to `https://mocgiabao.vercel.app/admin`
2. You should see **Login with GitHub** button
3. Click it → authorize → you're in!

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Still showing Netlify login | Hard refresh (Ctrl+Shift+R), clear cookies |
| "OAuth error: invalid_client_id" | Check `app_id` in config matches GitHub Client ID |
| "Redirect URI mismatch" | Verify GitHub OAuth app callback is exactly `https://mocgiabao.vercel.app/admin` |
| "Login not working" | Make sure environment variables are set in Vercel |

---

## Publishing Changes

Once logged in:
1. Click collection (Homepage, Wood Types, etc.)
2. Edit content
3. Click **Publish**
4. Changes commit to GitHub automatically
5. Vercel rebuilds (~2 min)
