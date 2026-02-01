# Push Drivour to GitHub - Step by Step

## Quick 3-Step Process

### Step 1: Create GitHub Repository (1 minute)

1. Go to: **https://github.com/new**

2. Fill in:
   - **Repository name:** `drivour`
   - **Description:** `Open-source route discovery app - find interesting stops along your drive`
   - **Visibility:** ✅ **Public**
   - **Initialize:** ❌ **DON'T check** "Add README" (we have one!)
   
3. Click **"Create repository"**

---

### Step 2: Get Your GitHub Username

After creating the repo, you'll see a URL like:
```
https://github.com/iamnawin/drivour
```

**Copy YOUR_USERNAME** - you'll need it in the next step.

---

### Step 3: Push the Code

**Open terminal in the `drivour` folder**, then run these commands:

```bash
# Add your GitHub repo as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/iamnawin/drivour.git

# Push the code
git push -u origin main
```

**You'll be asked for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (NOT your GitHub password)

---

## How to Create Personal Access Token

GitHub doesn't accept passwords anymore. You need a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name it: `Drivour Development`
4. Select scopes: ✅ **repo** (check the entire repo section)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## Verify It Worked

After pushing, go to:
```
https://github.com/iamnawin/drivour
```

You should see:
- ✅ README.md displayed
- ✅ All your files
- ✅ 3 commits
- ✅ "Open-source route discovery app" description

---

## Update Links in Documentation

Now that you have a GitHub URL, update these files:

### 1. README.md
Find and replace all instances of:
- `https://github.com/iamnawin/drivour` → Your actual URL

### 2. CONTRIBUTING.md
Same replacement for issue links

### 3. SOCIAL_MEDIA_TEMPLATES.md
Replace `[GitHub link]` with your actual repo URL

**After updating, commit the changes:**
```bash
git add .
git commit -m "docs: update GitHub links with actual repository URL"
git push
```

---

## Enable GitHub Features

On your repo page (github.com/YOUR_USERNAME/drivour):

### 1. Add Topics
- Click the ⚙️ gear next to "About"
- Add topics: `react-native`, `expo`, `open-source`, `maps`, `travel`, `mobile-app`, `route-planning`, `discovery`

### 2. Enable Issues
- Go to **Settings** → **General**
- Scroll to **Features**
- ✅ Enable **Issues**

### 3. Enable Discussions
- Same section
- ✅ Enable **Discussions**

### 4. Add Website (Optional)
- In "About" section
- Add: Your website or leave blank for now

---

## Create Issue Templates (Optional but Good)

This helps contributors file better issues.

1. Go to your repo → **Issues** → **New Issue**
2. Click **"Set up templates"**
3. Choose: "Bug report" and "Feature request"
4. GitHub creates template files automatically

---

## What to Do After Pushing

### Immediate:
- [ ] Star your own repo (why not! 😊)
- [ ] Pin it to your GitHub profile
- [ ] Take a screenshot of the repo

### Next Hour:
- [ ] Update all documentation links (README, etc.)
- [ ] Commit and push updates
- [ ] Share on Twitter!

### Next Day:
- [ ] Create first issues (use ideas from LAUNCH_CHECKLIST.md)
- [ ] Tag some as "good first issue"
- [ ] Post on Reddit

---

## Troubleshooting

**"Fatal: repository not found"**
→ Check you used the correct username

**"Permission denied"**
→ Use Personal Access Token, not password

**"Updates were rejected"**
→ Try: `git pull origin main --rebase` then `git push`

**"Remote already exists"**
→ Run: `git remote remove origin` then add it again

---

## You're Done! 🎉

Your code is now public at:
```
https://github.com/iamnawin/drivour
```

**Next steps:**
1. Read LAUNCH_CHECKLIST.md
2. Use SOCIAL_MEDIA_TEMPLATES.md to share
3. Wait for your first star! ⭐

---

## Quick Commands Reference

```bash
# Check current status
git status

# Add changes
git add .

# Commit changes  
git commit -m "your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# See commit history
git log --oneline
```

---

**Good luck with the launch!** 🚀
