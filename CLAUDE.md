# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based academic website using the [al-folio theme](https://github.com/alshedivat/al-folio). It creates a personal academic portfolio with blog posts, projects, and CV functionality.

## Development Commands

### Local Development (Docker - Recommended)

```bash
# Pull latest image and start development server
docker compose pull
docker compose up

# Alternative with slim image (100MB vs 400MB)
docker compose -f docker-compose-slim.yml up

# Build custom image
docker compose up --build

# For Apple Silicon (ARM64) Macs - use this if getting gem architecture errors
docker compose -f docker-compose-arm.yml up --build
```

The site will be available at `http://localhost:8080` with live reload enabled.

**Architecture Issue Fix:**
If you encounter `Could not find nokogiri-*-aarch64-linux` errors on Apple Silicon Macs, use the ARM-specific configuration:

- Uses `docker-compose-arm.yml` with `Dockerfile.arm`
- Forces regeneration of Gemfile.lock with correct ARM64 gems
- Automatically removes conflicting x86_64 gems during build

### Manual Build Commands

```bash
# Install dependencies
bundle install
pip install jupyter

# Development server
bundle exec jekyll serve

# Production build
export JEKYLL_ENV=production
bundle exec jekyll build

# CSS optimization
npm install -g purgecss
purgecss -c purgecss.config.js
```

### Code Quality

```bash
# Format code (Prettier)
npx prettier . --check
npx prettier . --write
```

## Architecture

### Key Directories

- `_config.yml` - Main Jekyll configuration with theme customization
- `_pages/` - Main site pages (about, blog, projects)
- `_posts/` - Blog posts in Markdown
- `_projects/` - Project pages with descriptions and images
- `_news/` - News/announcements shown on home page
- `_data/` - YAML data files (CV, repositories, etc.)
- `_includes/` - Reusable Jekyll components and templates
- `_layouts/` - Page layout templates
- `_sass/` - SCSS stylesheets
- `assets/` - Static assets (images, CSS, JS, fonts)
- `_bibliography/` - BibTeX files for publications

### Content Management

- **Blog posts**: Add Markdown files to `_posts/` with YAML front matter
- **Projects**: Add Markdown files to `_projects/` with project metadata
- **CV**: Edit `_data/cv.yml` or `assets/json/resume.json`
- **Publications**: Add entries to `_bibliography/papers.bib`
- **News**: Add files to `_news/` for homepage announcements

### Theme Features

- Light/dark mode toggle
- Responsive design with Bootstrap
- MathJax for mathematical expressions
- Syntax highlighting for code
- Publication management with Jekyll Scholar
- Project galleries with image support
- CV generation from JSON/YAML data

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml`:

- Triggers on pushes to master/main branch
- Builds with Ruby 3.2.2 and Jekyll
- Optimizes CSS with PurgeCSS
- Deploys to `gh-pages` branch

### Manual Deployment

Run the "Deploy site" workflow manually from GitHub Actions tab.

## Configuration Notes

- Site URL configured in `_config.yml` as `https://aakashb95.github.io`
- Uses al-folio theme with custom styling in `_sass/`
- Ruby gems defined in `Gemfile` with Jekyll plugins
- Node.js dependencies in `package.json` for Prettier formatting
- Docker setup available for consistent development environment

## Troubleshooting

If encountering dependency issues with Docker:

- Try rebuilding: `docker compose up --build --force-recreate`
- Use slim image: `docker compose -f docker-compose-slim.yml up`
- Check architecture compatibility (x86_64 vs arm64)
