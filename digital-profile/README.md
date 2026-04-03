# Melamar Faustino – Digital Profile

A dynamic, single-page digital profile built with vanilla HTML, CSS, and JavaScript. No build tools or dependencies required — just open `index.html` in a browser.

---

## 🚀 Quick Start

```bash
# Clone your repo (after pushing to GitHub)
git clone https://github.com/<your-username>/digital-profile.git
cd digital-profile

# Open in browser (no server needed)
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

Or drag `index.html` into any browser window.

---

## ✏️ How to Edit Your Profile

**All content lives in one file:**

```
data/profile.js
```

Edit the sections below to update your info. Save the file and refresh the browser — no rebuilding needed.

| Section | Key in `profile.js` |
|---|---|
| Name, email, phone, location | `name`, `email`, `phone`, `location` |
| Typewriter phrases | `taglines` |
| Hero stat counters | `stats` |
| About paragraph | `about` |
| Skills groups | `skills` |
| Work experience | `experience` |
| Projects | `projects` |
| Education | `education` |
| Certifications | `certifications` |
| Awards & activities | `awards` |

### Adding a new job

Open `data/profile.js` and add an object to the `experience` array:

```js
{
  role:     'Senior Engineer',
  company:  'New Company',
  period:   'Jan 2026 – Present',
  dotColor: 'blue',   // 'blue' or 'green'
  bullets: [
    'First achievement here.',
    'Second achievement here.'
  ]
}
```

### Adding a new project

```js
{
  icon:        '🤖',
  title:       'My New Project',
  subtitle:    'One-line description',
  org:         'Company / University',
  date:        'March 2026',
  award:       '🏆 Award Name',  // remove this line if no award
  description: 'Longer description of the project.',
  tech: ['Python', 'Azure', 'React']
}
```

---

## 📁 Project Structure

```
digital-profile/
├── index.html          ← Page shell (nav + hero static structure)
├── css/
│   └── styles.css      ← All styles (dark/light theme, layout, animations)
├── js/
│   └── main.js         ← Rendering engine + interactions (typewriter, scroll, etc.)
├── data/
│   └── profile.js      ← ✏️  YOUR CONTENT — edit this file
├── .gitignore
└── README.md
```

---

## 🌐 Deploy for Free

### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source → `main` branch → `/root`**.
3. Your profile will be live at `https://<username>.github.io/digital-profile`.

### Netlify (drag & drop)
1. Go to [netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `digital-profile/` folder onto the page.
3. Done — you get a live URL instantly.

### Vercel
```bash
npm i -g vercel
vercel
```

---

## 🔧 Customisation Tips

| What to change | Where |
|---|---|
| Colour palette (accent, background) | `css/styles.css` → `:root` / `[data-theme="light"]` |
| Font | `css/styles.css` → `body { font-family: … }` |
| Avatar emoji | `index.html` → `.avatar-inner` |
| Section order | `js/main.js` → `defs` array in `buildSections()` |
| Add a new section | Add to `data/profile.js` + add a render fn + entry in `defs` |

---

## 📌 Git Workflow

```bash
# First-time setup
git init
git add .
git commit -m "Initial commit: digital profile"
git branch -M main
git remote add origin https://github.com/<your-username>/digital-profile.git
git push -u origin main

# After editing profile.js
git add data/profile.js
git commit -m "Update: add new job at XYZ"
git push
```

---

© Melamar Faustino
