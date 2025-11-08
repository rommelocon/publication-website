# 🚀 GitHub Pages Deployment Guide

## Quick Start - Automated Deployment

Your project is now configured for **automatic deployment** to GitHub Pages! 🎉

Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your website.

---

## 📝 Step-by-Step Setup

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/rommelocon/publication-website`
2. Click on **Settings** (top navigation)
3. Scroll down and click on **Pages** (left sidebar)
4. Under **"Build and deployment"** section:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
5. Click **Save** if there's a save button

### Step 2: Push Your Code

Make sure all your changes are committed and pushed:

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Setup GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 3: Watch the Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for both jobs (build and deploy) to complete (green checkmarks ✅)

### Step 4: Access Your Website

Once deployed, your website will be available at:

🌐 **https://rommelocon.github.io/publication-website/**

---

## 🔧 What Was Configured

### 1. Vite Configuration (`vite.config.ts`)
- Added `base: '/publication-website/'` to handle GitHub Pages subdirectory routing

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically triggers on push to `main` branch
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

---

## 🐛 Troubleshooting

### Issue: Actions tab shows no workflows

**Solution:** Make sure the `.github/workflows/deploy.yml` file is pushed to your repository.

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### Issue: Deployment fails with permissions error

**Solution:** 
1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### Issue: 404 error when accessing the site

**Solution:** 
- Wait 2-3 minutes after deployment completes
- Clear your browser cache
- Make sure you're using the correct URL: `https://rommelocon.github.io/publication-website/`

### Issue: CSS/Images not loading

**Solution:** Check that:
1. `vite.config.ts` has `base: '/publication-website/'`
2. All images are in the `public` folder
3. Image references start with `/` (e.g., `/logo.png`, not `./logo.png`)

---

## 📦 Manual Deployment (Alternative Method)

If you prefer to deploy manually or the automated method doesn't work:

### Install gh-pages package:

```bash
npm install -D gh-pages
```

### Add to `package.json` scripts:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

### Build and deploy:

```bash
npm run build
npm run deploy
```

---

## 🔄 Updating Your Website

After the initial setup, updating your website is simple:

1. Make your changes to the code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy! ✨

---

## 📊 Monitoring Deployments

- **Actions Tab**: See all deployment runs and their status
- **Deployments Section**: Shows deployment history
- **Pages Settings**: Shows the current live URL

---

## ✅ Checklist

- [ ] GitHub Pages enabled in Settings → Pages
- [ ] Source set to "GitHub Actions"
- [ ] `.github/workflows/deploy.yml` file exists and is pushed
- [ ] `vite.config.ts` has the correct `base` path
- [ ] Pushed all changes to main branch
- [ ] Workflow completed successfully in Actions tab
- [ ] Website is accessible at the GitHub Pages URL

---

## 🎉 That's It!

Your website should now be live at:
### 🌐 https://rommelocon.github.io/publication-website/

Share this link with your users and enjoy your automated deployment workflow! 🚀
