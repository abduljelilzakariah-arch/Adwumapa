# Adwumapa

**Adwumapa** is a job and apprenticeship platform UI for Ghana. Browse local opportunities, explore featured listings, and try apply/post flows — all with static sample data (no backend).

## Features

- Browse local jobs and apprenticeships (Accra, Kumasi, Takoradi, Tamale)
- Featured listings carousel and dedicated featured page
- Post job / apprenticeship forms (UI preview)
- Apply modal (UI preview)
- Dashboard layout ready for a real backend
- Mobile-friendly UI with Bootstrap 5

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Tech stack

- React (Vite)
- Bootstrap 5 + Bootstrap Icons
- React Router
- Static seed data in `src/data/seed.js`

## Note

This is a **front-end UI**. Listings come from sample data. Apply, post, and dashboard actions show success messages but do not persist until you connect a backend.
