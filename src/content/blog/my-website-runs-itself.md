---
title: My website checks itself every week and publishes my blog while I sleep
slug: my-website-runs-itself
date: 2026-10-29T15:44:00+05:30
cover: /blog/my-website-runs-itself/cover.jpg
excerpt: Google was ignoring most of my portfolio, and my own name ranked sixth. So I built a robot that checks my site every week, fixes what it can, and publishes these very posts.
tags: Portfolio, Automation, Build Story
---
Quick question: if you search your own name on Google, where do you show up?

I tried it. My own website came in **sixth**. 😅

## The problem I couldn't see

My portfolio looked great. Every page worked. I'd rebuilt it three times.

But Google didn't care. When I checked Google's own report on my site, most of my pages were sitting in a pile marked "seen, but not added to search results". About, Projects, Experience: crawled and ignored.

## Why Google was ignoring me 🔍

The cause surprised me.

My website builds each page *inside your browser*, after it loads. You see a full page. But when Google first knocks on the door, every page hands it the exact same empty shell, with the same title and the same description.

Imagine a bookshop where every book has the same blank cover. The shopkeeper won't bother putting them on the shelf.

So I changed how the site is built. Now every page is prepared ahead of time with its own title, its own description and its own content, so Google sees a real cover on every book.

## The bigger idea: make it a routine

Fixing it once wasn't enough. Websites drift. A new page goes up with a mistake, a description gets too long, Google misses an update.

I knew I wouldn't remember to check every week. So I made a robot that does.

**Every week, it:**
- reads Google's report on my site, page by page
- checks the live website the way Google sees it
- fixes small problems by itself and sends me the change to approve
- writes me a plain-English report: what's fine, what's broken, what it did

![The robot's weekly report for 26 October](/blog/my-website-runs-itself/weekly-report.jpg)

## The week it earned its keep ✅

In its 26 October report, it caught something I'd never have noticed. Google had visited my newest blog post *before* a fix went live, and saw a sign on it saying "don't add me to search".

The robot confirmed the live page was fine, asked Google to look again, shortened two page descriptions that were too long for search results, and sent me the changes. I read them, approved them, done.

![The change the robot sent me to approve](/blog/my-website-runs-itself/the-fix.jpg)

## And it publishes this blog

Here's the fun part. The post you're reading was written weeks ago.

Approved posts wait in a queue with a date on them. Every afternoon, a second routine checks which ones are due, puts them live, adds them to the list Google reads, runs its checks and publishes.

I write. The robot posts. 🤖

## The honest bit

Is it working? Slowly. My site still gets far more "seen in search" than "clicked", and my name isn't at #1 yet.

But for the first time, I know *exactly* why, every week, without lifting a finger.

> A website isn't finished when it launches. It's finished when it can look after itself.

## Your turn 👇

Go on, search your own name. Where do you show up? 👀
