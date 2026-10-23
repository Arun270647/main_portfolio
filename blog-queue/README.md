# Blog queue

Approved posts wait here until their publish date. A weekly routine (Saturdays, 11:10 IST)
moves every post whose `date` has passed (Asia/Kolkata) into the live blog and pushes to `main`.

## Adding a post

1. Write `blog-queue/<slug>.md` with the front-matter described in `src/data/blog.ts`:

   ```md
   ---
   title: I built Tinder for attendance. Then I swiped left on it.
   slug: tinder-for-attendance
   date: 2026-10-31T10:45:00+05:30
   cover: /blog/tinder-for-attendance/cover.png
   excerpt: One-line summary for the list page and social cards.
   tags: Track My Academy, UX
   ---

   Post body in Markdown...
   ```

   The file name must match `slug`.

2. Put its images in `blog-queue/assets/<slug>/`. They are served from `/blog/<slug>/`
   once published, so reference them as `/blog/<slug>/<file>` in the post.

## What the routine does

- `git mv blog-queue/<slug>.md src/content/blog/<slug>.md`
- `git mv blog-queue/assets/<slug> public/blog/<slug>`
- adds `https://www.arunvignesh.my/blog/<slug>` to `public/sitemap.xml`
- runs `npm ci`, `npm run typecheck` and `npm run lint`, then commits
  "Publish blog post: <slug>" and pushes to `main`

Post text is never edited. This README is ignored.
