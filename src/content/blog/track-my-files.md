---
title: We were tired of uploading files to random websites
slug: track-my-files
date: 2026-11-24T13:00:00+05:30
cover: /blog/track-my-files/cover.jpg
excerpt: Every day someone at TrackMy Tech uploaded company files to a random free converter. So we built our own, and the best feature we shipped was deleting the sign-up page.
tags: TrackMy Tech, Product, Build Story
---
Quick question: which "free online converter" have you trusted with a file you probably shouldn't have?

Be honest. We all have one. 😅

## The daily habit nobody questioned

At TrackMy Tech, someone needed a file changed almost every day.

Turn this PDF into Word. Shrink this image. Merge these three documents.

And every time, the solution was the same: search "free PDF converter", click the first website and upload company files to a stranger's server.

It worked. It was also a little scary once you thought about it.

## Version one: a converter for everything 🔄

So we built our own tool: **Track My Files.**

It started as a converter for every common file type. Then the requests came in, and it grew:

- **Merge PDFs** into one
- **Remove backgrounds** from images
- **Make a zip** of a bunch of files
- **Compress to a target size**, for those forms that say "file must be under 2 MB"

Each one, a single tap away.

![Track My Files: drop a file, pick what to do with it](/blog/track-my-files/pick-action.jpg)

![Compress a file to a size limit](/blog/track-my-files/compress-to-size.jpg)

## The twist: nobody wanted to sign up

Being responsible, I added logins. Your files, your account, nice and secure.

Then I watched how people actually used it. They'd open it, see a sign-up page… and go back to the random website.

Nobody wants to create an account for an internal tool they use for ten seconds.

So I removed the logins.

## The big turn: a real app

Then came the bigger idea. What if it didn't need a website at all, and the files never left your computer?

So Track My Files became a real **Windows and Mac app.** The target: everything under **15 MB**, smaller than a few phone photos.

Hitting that size meant rebuilding the engine in a leaner language. Think of moving from a truck to a scooter: same trips, a fraction of the weight.

> The best feature we shipped was deleting the sign-up page.

## What I took away

1. **Watch the workaround.** If people keep using a random website, there's a product hiding there.
2. **Security nobody uses isn't security.** Keeping files on your own computer beat a login screen.
3. **Small is a feature.** A 15 MB app gets installed. A huge one gets "later".

## Your turn 👇

Which "free online converter" have you trusted with a file you shouldn't have? No judgement. 👀
