---
title: I came back after 15 minutes. My AI hadn't even started.
slug: claude-prompter
date: 2026-11-30T13:00:00+05:30
cover: /blog/claude-prompter/cover.jpg
excerpt: My AI coding assistant kept stopping to ask "may I?" while I was away from my desk. So I built a small free app that answers for me.
tags: AI, Side Project, Open Source, Build Story
---
Quick question: have you ever come back to your desk expecting work to be done, and found it waiting for *you*?

That happened to me so often that I built an app to fix it. ⏳

## The assistant that always asks first

I write a lot of my code with Claude, an AI assistant that works right inside my computer. You tell it what you want, and it reads your files, writes the code and runs it.

Claude was good. It had only one issue: **it asked permission for everything.**

Before it reads a file: *"May I?"* Before it runs a command: *"May I?"* Think of a new employee who checks with you before opening every drawer.

The first time, that felt great. It's careful, and careful is good.

## Then I walked away

I usually have more than one project going at the same time. So my routine was simple: type one big, detailed instruction, let Claude work, and step away for 15 minutes.

Then I'd come back and find it **stuck on the very first "May I?"**, the one it asked the moment I hit Enter.

Fifteen minutes gone. Nothing done. It had been sitting there the whole time, politely waiting for a click.

It happened again and again, and it cost me a lot of time.

![Claude Code asks permission to read a file, write code or run a command, 50+ times a session](/blog/claude-prompter/the-problem.jpg)

## So I built Claude Prompter

The question was simple: *how do I answer "May I?" when I'm not there?*

The answer became **Claude Prompter**, a small app that sits quietly in the background and keeps an eye on the screen where Claude works. When the permission question pops up, the app answers for me in about a third of a second, and Claude carries on.

Like a friend sitting by your phone while you're out: *"Yes, they can come in."*

## Saying yes, safely

An app that says "yes" for you needs to be careful about *what* it says yes to. So I made it cautious:

- **It only says "yes for this project".** It never gives Claude a free pass for everything.
- **It works only on your own computer.** It never touches the internet and collects nothing.
- **It slows itself down.** It waits a few seconds between answers and double-checks before it presses anything.

![How Claude Prompter works: it watches the terminal, spots the permission question and approves it for this project](/blog/claude-prompter/how-it-works.jpg)

## Today

Claude Prompter is free and open source: anyone can download it, read every line of it, or change it. It works on Windows and Mac.

My new routine: type the instruction, walk away, come back to work that's actually *done*.

👉 Try it: [claudeprompter.arunvignesh.my](https://claudeprompter.arunvignesh.my/)

> The slowest part of my AI was waiting for me.

## What I took away

1. **Small annoyances add up.** One click isn't a problem. One click that blocks 15 minutes, every day, is.
2. **Build the fix you keep wishing for.** I didn't plan to make an app. I just got tired of losing time.
3. **Automation needs manners.** A tool that acts for you should say yes carefully, not to everything.

## Your turn 👇

What's the one small thing that steals the most time from your day? Have you ever thought about building your way out of it?
