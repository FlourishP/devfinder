# DevFinder — GitHub User Finder

Find any GitHub user and view their profile stats, public repositories, contribution graph, and follower/following counts.

## Features
- Search by GitHub username with debounced API calls
- Profile card with avatar, bio, location, blog, and company
- Repository list with language tags, stars, and forks
- Contribution graph visualization
- Responsive design with Tailwind CSS
- Server-side API route with caching

## Tech Stack
Next.js 14, TypeScript, Tailwind CSS, GitHub REST API

## Getting Started
```bash
npm install
cp .env.local.example .env.local  # add your GitHub token
npm run dev
```

## Live Demo
Deployed on Vercel: https://devfinder-flourishp.vercel.app
