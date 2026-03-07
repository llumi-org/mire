# Mire Research Hub

A static site for publishing student research papers, built with [Astro](https://astro.build) and deployed via GitHub Actions.

## How to Submit Research

1. **Fork the Repository**
2. **Create a New File** in `src/content/research/` following the format: `your-title.md`.  
   - The filename must be **all lowercase**, **in English**, and use **hyphens** to separate words (e.g., `aesthetic-illness-and-reflection-from-macro-trends-to-campus-cases.md`).  
   - Only filenames matching this pattern are accepted.
3. **Use the Template**: Copy the contents of `TEMPLATE.md` and fill in your details.
4. **Frontmatter Metadata**:
   - The `author`, `abstract`, and `tags` fields must be written in English.
   ```yaml
   ---
   title: "Your Title"
   author: "Your Name"         # Must be in English
   date: 2026-03-01
   abstract: "Short summary..." # Must be in English
   language: "en" # or "zh"
   tags: ["Tag1", "Tag2"]      # Must be in English
   ---
   ```
5. **Submit a Pull Request**. Once merged, your paper will be published automatically.
6. **No Edits or Deletions Allowed**: After submission, papers cannot be modified or deleted except in cases of:
   - Legal violations (e.g., copyright infringement, plagiarism)
   - Serious ethical concerns (e.g., hate speech, discrimination)
   - Privacy breaches or exposure of sensitive personal information
   - Requests from authorities or regulatory bodies

## Features

- **Markdown Publishing:** Students submit research as Markdown files via Pull Requests.
- **Modern Design:** Clean, responsive UI.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```
   node scripts/generate-pdfs.js
   ```

## Requirements for PDF Generation
To generate PDFs locally, you need:
- [Pandoc](https://pandoc.org/)
- LaTeX (e.g., TeX Live or MikTeX) with XeLaTeX support for multilingual characters.
