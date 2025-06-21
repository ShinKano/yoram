# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run develop` or `gatsby develop`
- **Build for production**: `npm run build` or `gatsby build`
- **Format code**: `npm run format` (uses Prettier on all JS files)
- **Preload fonts**: `npm run preload-fonts`

## Environment Setup

- **Node.js version**: 20.18.0 (specified in .node-version)
- **Gatsby version**: v5.13.0 (upgraded from v2.19.5)
- **React version**: 18.2.0 (upgraded from 16.12.0)
- **Sass**: Uses modern Sass instead of deprecated node-sass

## Deployment Notes

- Updated all dependencies to modern versions for compatibility with current Node.js and build environments
- Resolved sharp library compilation issues that were preventing builds on modern systems
- Compatible with Netlify and other modern hosting platforms

## Architecture Overview

This is a Gatsby v2 static site built for a Japanese NVC (Nonviolent Communication) workshop event website featuring trainer Yoram Mosenzon's 2021 Japan visit.

### Key Structure

- **Pages**: Located in `src/pages/`, each representing a different route (index, okinawa, yokohama, staff, etc.)
- **Components**: Reusable React components in `src/components/` including Layout, Header, Footer, Banner, Menu, Contact
- **Styling**: SCSS-based architecture in `src/assets/scss/` with modular organization:
  - `main.scss` - Main entry point that imports all modules
  - `libs/` - Variables, functions, mixins, and Skel framework
  - `base/` - Base styles for page and typography
  - `components/` - Component-specific styles
  - `layout/` - Layout-specific styles
- **Assets**: Images, fonts, and CSS in `src/assets/`
- **Utils**: Custom utilities in `src/utils/components/` (currently just SpanBlock component)

### Styling System

- Uses HTML5 UP's "Forty" theme as base with custom modifications
- Custom CSS Grid system (12-column, disabled on mobile)
- Japanese font integration with M PLUS Rounded 1c
- Responsive breakpoints: large (1280px), medium (980px), small (736px), xsmall (480px), xxsmall (360px)
- Uses Skel framework for responsive utilities

### Content Structure

The site is bilingual (Japanese/English) focusing on NVC workshops with:
- Main landing page with event tiles
- Individual workshop pages (Okinawa, Yokohama)
- Staff introductions, requirements, videos, and invitation pages
- Contact form integration

### Key Patterns

- Class-based React components throughout
- Gatsby's Link component for internal navigation
- React Helmet for SEO meta tags
- Image imports handled as ES6 modules
- SCSS follows BEM-like organization with component/layout separation