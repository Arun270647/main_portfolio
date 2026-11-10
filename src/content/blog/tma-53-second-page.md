---
title: A coach waited 53 seconds for a page to load. Here's why.
slug: tma-53-second-page
date: 2026-11-10T13:00:00+05:30
cover: /blog/tma-53-second-page/cover.jpg
excerpt: A page in Track My Academy took 53 seconds to load. The fix brought it down to 0.6 seconds, and it had nothing to do with faster servers.
tags: Track My Academy, Performance, Build Story
---
Quick question: what's the longest you've waited for an app before giving up?

Five seconds? Ten? Our coaches were being asked to wait **53**. ⏳

## Where coaches use Track My Academy

Coaches don't use Track My Academy at a desk. They use it on the ground: phone in one hand, whistle in the other, thirty kids waiting for the next drill.

They open the app to see their players. That's it. That's the whole job of that screen.

![A coach's player list on the phone (demo data)](/blog/tma-53-second-page/coach-players-mobile.jpg)

## The problem

The player list was taking **53 seconds** to load.

Nobody waits 53 seconds. A coach would open it, give up, and go back to the paper register. And a product that loses to paper has failed.

## The detective work 🔍

My first guess was the usual one: the servers must be slow, or the internet on the ground must be bad.

Neither was true.

The real cause was hiding inside each player's record. Every player's photo was packed *into* their record. So when the app asked for "the list of names", it also received every photo of every player, every single time.

It's like asking the school office for the class register and getting handed the entire school photo album.

## The fix

The list stopped carrying photos. Names and the basics come first, and a photo loads only when you actually need to see it.

The result:

- Player list: **53 seconds → 0.6 seconds**
- Coaches page: **46 seconds → 0.5 seconds**, same cause, same fix

![The coaches page, now loading in half a second (demo data)](/blog/tma-53-second-page/coaches-page.jpg)

Nothing got bigger or more expensive. We just stopped sending what nobody asked for.

## While we were in there…

The same week we fixed two smaller annoyances that had been quietly frustrating people:

- Tabs that reloaded everything every time you switched between them
- Logins that kicked you out whenever you refreshed the page

Neither was dramatic, but every small annoyance is a reason for someone to go back to paper.

> Slow isn't a speed problem. It's usually something being sent that nobody asked for.

## What I took away

1. **Measure before you guess.** My first guess was wrong. The numbers weren't.
2. **Ask "what does this screen actually need?"** Usually it's far less than what it's getting.
3. **Speed is a feature.** A coach on a ground won't read your feature list. They'll just close the app.

## Your turn 👇

What's the longest you've ever waited for an app before giving up? And which app was it? 👀
