---
title: I gave my AI assistant away
slug: i-gave-my-ai-assistant-away
date: 2026-11-29T10:00:00+05:30
cover: /blog/i-gave-my-ai-assistant-away/cover.jpg
excerpt: My own JARVIS runs my laptop. Friends wanted their own. Turning my personal assistant into something anyone can install meant starting where my own setup ended.
tags: AI, Open Source, Build Story
---
Quick question: if you had your own AI assistant, what would you name it?

Hold that thought. It's the first question my assistant asks you now. 👀

## Where this started

A few weeks ago I wrote about [building my own JARVIS](/blog/building-my-own-jarvis), the assistant I built for my laptop. It opens my apps, finds my files and starts my projects when I ask.

Then friends started asking: *"Can I get one?"*

## The problem: my JARVIS is full of me

Mine knows *my* folders. *My* accounts. *My* rules. It's like a house built exactly around one person: the light switches are where I reach, the shelves are at my height.

Handing that to someone else wouldn't work. Nothing would be where they expect it.

## The rebuild: a clean copy for everyone

So I built a clean, public version of **Jarvis** that anyone can install, with one rule:

**You should never need to open a terminal.** No commands. No setup guides. Download, open, done.

It starts with a setup wizard, and the very first question is: **"Name your AI."**

Whatever you type becomes its name, everywhere. Your assistant, your name for it.

![The first screen of the setup wizard: Name your AI](/blog/i-gave-my-ai-assistant-away/name-your-ai.jpg)

## The twist: 718 MB 😳

Then I built the first download and checked the size.

**718 MB.**

My first reaction, word for word: *"why is it 718 bro???"*

Nobody downloads a 718 MB app from a friend's link. So I spent days shrinking it: removing everything it didn't need, packing the rest tighter.

## Today

Jarvis now has proper Windows and Mac installers, plus its own website.

718 MB became **143 MB**: about a fifth of the size, for the same assistant.

![The Jarvis download page](/blog/i-gave-my-ai-assistant-away/download.jpg)

Try it at [jarvis.arunvignesh.my](https://jarvis.arunvignesh.my). It's still an early alpha, so tell me what breaks.

> The product starts where your own setup ends.

## What I took away

1. **Building for yourself and building for others are two different jobs.** The second one starts where the first ends.
2. **The first screen sets the tone.** "Name your AI" makes it yours before it does anything.
3. **Size is part of the experience.** Every extra megabyte is a reason to click "later".

## Your turn 👇

So, what would you name your AI? Drop it below. I'm collecting the best ones. 😄
