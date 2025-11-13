# Wall of Voices

Wall of Voices is a calming space built with AdonisJS 6, Edge templates, and Tailwind CSS. It allows visitors to share anonymous notes of appreciation or open up about the challenges they carry. Messages are stored in PostgreSQL and surfaced on the collective "History Wall."

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment file and update credentials as needed:

   ```bash
   cp .env.example .env
   # update APP_KEY and database connection variables
   ```

   Generate a fresh `APP_KEY` with Adonis:

   ```bash
   node ace generate:key
   ```

3. Run database migrations and seed demo data:

   ```bash
   node ace migration:run
   node ace db:seed
   ```

4. Start the development server with live reload and Vite asset bundling:

   ```bash
   node ace serve --watch
   ```

   The application will be available at `http://localhost:3333`.

## Features

- Landing page with a Begin flow that generates an anonymous UUID and stores it in a cookie
- Two serene cards for offering appreciation or sharing burdens anonymously
- Messages persisted in PostgreSQL via Lucid ORM
- History Wall aggregates every message by type with timestamps
- TailwindCSS-powered, gentle UI for an emotionally calm experience

## Database structure

Messages are persisted in a single `messages` table containing:

| Column     | Type                | Notes                                 |
| ---------- | ------------------- | -------------------------------------- |
| id         | integer (PK)        | Auto-incrementing identifier           |
| user_id    | uuid                | Anonymous visitor identifier           |
| type       | enum                | Either `praise` or `issue`             |
| content    | text                | The anonymous message                  |
| created_at | timestamp with tz   | Automatically set when message stored  |

## Scripts

- `node ace serve --watch` – Run the HTTP server with file watching.
- `node ace migration:run` – Apply database migrations.
- `node ace db:seed` – Seed the database with sample messages.

## TailwindCSS

Tailwind is already wired via Vite. Update styles in `resources/css/app.css` or extend the design system through `tailwind.config.js`.
