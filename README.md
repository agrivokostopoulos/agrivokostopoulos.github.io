# Academic website of Aristeidis Grivokostopoulos

A static, single-page site served by GitHub Pages at https://agrivokostopoulos.github.io. It is plain HTML and CSS with no JavaScript.

## Files

```
/
├── index.html       # All page content
├── css/
│   └── styles.css   # All styling; colours and widths are variables at the top
├── assets/
│   ├── img/         # Portrait and images
│   └── pdf/         # CV and paper PDFs
└── README.md
```

## How to edit

### Content
Open `index.html`. Each section is a `<section>` with an id (`about`, `research`, `policy`, `teaching`, `industry`, `cv`, `contact`).

- **Research papers.** Copy an existing `<article class="paper">` block. Each has a title (`h3`), a `subtitle` line, a grey `keywords` line, a `meta` line with status and link, and the abstract inside a `<details>` element, which the browser opens and closes on its own.
- **Policy and applied work.** Same idea, with `<article class="project">` blocks and the description shown in full.
- **Teaching and industry.** Plain rows, with the years or role in a `<span class="when">`.

### CV
Replace `assets/pdf/Aristeidis_Grivokostopoulos_CV.pdf` with the new PDF, keeping the same file name. The LaTeX source, `Aristeidis_Grivokostopoulos_CV.tex`, is also in this repository.

### Colours and fonts
The `:root` block at the top of `css/styles.css` holds the colours (`--bg`, `--text`, `--muted`, `--rule`, `--accent`), the font (`--serif`, Source Serif 4 from Google Fonts) and the column widths. A second block under `prefers-color-scheme: dark` sets the dark-mode colours, which follow the visitor's system setting.

## Publishing
Pushing to `main` publishes the site through GitHub Pages, usually within a minute or two.
