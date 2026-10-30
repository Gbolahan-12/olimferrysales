# Deployment Guide (100% free)

Stack: static HTML site (hosted free) + Supabase (free database, login, image storage).
No domain needed: you get a free address like `yourshop.netlify.app`.

## 1. Create the backend (Supabase)
1. Sign up at supabase.com, click **New project** (pick any region, save the DB password).
2. Open **SQL Editor > New query**, paste all of `supabase-setup.sql`, click **Run**.
3. Go to **Authentication > Users > Add user > Create new user**. Enter your admin email + password (tick auto-confirm).
4. Go to **Authentication > Sign In / Providers** and turn **off** "Allow new users to sign up" so only you can be admin.
5. Go to **Project Settings > API**. Copy the **Project URL** and the **anon public key**.

## 2. Configure the site
Open `config.js` and paste the URL and key; change `SITE` to your shop name. (The anon key is meant to be public; the database rules in the SQL file stop strangers from editing anything.)

## 3. Host it free (choose one)
**Netlify (easiest):** go to app.netlify.com/drop and drag the whole `shop` folder in. Done. Rename the site under Site settings > Change site name.
**Cloudflare Pages:** Workers & Pages > Create > Pages > Upload assets > upload the folder.
**GitHub Pages:** push the files to a repo, then Settings > Pages > Deploy from branch `main`.

## 4. Use it
- Admin: open `https://your-site/login.html`, sign in, and you land on the dashboard (`admin.html`). Add categories first, then products.
- Until you add real products (or if config.js is not filled in), the store shows demo products so it never looks empty.
- Add multiple images per product in one go; remove any with the ✕.
- Paste your AliExpress **affiliate link** (from the Portals link generator) in each product.
- Updating the design later: edit files and re-upload/push. Products live in Supabase so they are never lost.

## Free-tier notes
Supabase free projects pause after about a week of inactivity (just click Restore). Storage is 1 GB; resize photos to ~800px before upload to save space. Later, a custom domain can be added to Netlify any time.
