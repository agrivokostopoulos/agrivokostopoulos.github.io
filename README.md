# Academic Website - Aristeidis Grivokostopoulos

This is a static single-page academic website built with HTML5, CSS3, and Vanilla JavaScript. It is designed to be lightweight, fast, and easy to maintain.

## Project Structure

```
/
├── index.html       # Main content file
├── css/
│   └── styles.css   # All visual styling and variables
├── js/
│   └── main.js      # Interaction logic (menu, toggles)
├── assets/
│   ├── img/         # Images (headshot, etc.)
│   └── pdf/         # Documents (CV)
└── README.md
```

## How to Edit

### 1. Updating Content (Text)
Open `index.html` in any code editor (VS Code, Cursor, Notepad++). 
- **Sections**: Look for comments like `<!-- About Section -->` to find specific areas.
- **Papers**: To add a new working paper, copy an entire `<article class="paper-card">...</article>` block and paste it into the "Working Papers" subsection.
- **Teaching**: Edit the `<ul>` list items in the `#teaching` section.

### 2. Updating Personal Details
- **Headshot**: Replace `assets/img/headshot.jpg` with your photo. Ensure it is roughly square or portrait aspect ratio (e.g., 500x600px).
- **CV**: Replace `assets/pdf/Grivokostopoulos_CV.pdf` with your new PDF file. **Important**: Keep the filename the same, or update the link in `index.html`.

### 3. Change Colors / Fonts
Open `css/styles.css`. At the top, you will see a `:root` block with variables:

```css
:root {
  --color-primary: #1a365d; /* Navy Blue */
  --color-accent: #b8860b;  /* Gold */
  /* ... */
}
```
Change these hex codes to update the site's theme globally.

## Publishing

### GitHub Pages (Recommended)
1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Select "Deploy from a branch" and choose `main` / `master`.
4. Your site will be live at `yourusername.github.io/repo-name`.

---
*Built December 2025*
