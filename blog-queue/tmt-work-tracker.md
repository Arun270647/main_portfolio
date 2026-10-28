---
title: At a small startup, nobody knew who was working on what
slug: tmt-work-tracker
date: 2026-11-17T10:00:00+05:30
cover: /blog/tmt-work-tracker/cover.jpg
excerpt: Work at TrackMy Tech lived in chats and in people's heads. I built a work tracker in a day, and the hard part wasn't tracking work at all.
tags: TrackMy Tech, Teamwork, Build Story
---
Quick question: how does your team know who's working on what?

A tool? A shared sheet? Or the classic "any updates?" message at 7 PM? 👀

## The problem

TrackMy Tech is a small team: founders, a few developers and interns.

In a small team, everyone assumes everyone else knows what's going on. And that works, until it doesn't.

Work lived in chats and in people's heads. Ask "who's on this?", "is it done?" or "who's stuck?" and you'd get three different answers, or none.

## Built in a day ⚡

On 26 September I built the TMT Work Tracker, and it was live the same day.

The idea is simple. Every task has an owner, a status and a place where everyone can see it. No more digging through chats.

## The twist: who gets to see what?

The first design followed a classic "reporting chain". Each person sees what the people under them are doing, like an org chart.

It looked neat on paper. In practice it was messy:

- Should a developer see an intern's work, or only their manager?
- Who's allowed to add a new person to the team?
- What happens when someone reports to two people?

Every answer created two more questions.

## The turn: five clear seats 🪑

So I threw out the chain and redrew it as five clear seats:

1. **Organisation**: the owner of the whole workspace
2. **Super-admin**: sees and manages everything
3. **Admin**: runs their part of the team
4. **Worker**: sees and updates their own work
5. **Intern**: a focused view, just what they need to learn and deliver

![The five seats, from Organisation down to Intern (demo data)](/blog/tmt-work-tracker/five-seats.jpg)

Each seat sees exactly what it needs and nothing else. And only the Organisation can add people, so there's never a question about who let someone in.

![What an intern sees: just their own work (demo data)](/blog/tmt-work-tracker/intern-view.jpg)

Think of a cinema: your ticket says which seat is yours, and nobody argues about where to sit.

## Today

Today the whole team, from founders to interns, works from one place. "Who's on this?" has an answer you can click instead of a message you have to send.

> The hard part of a work tracker isn't tracking work. It's deciding who gets to see it.

## What I took away

1. **Simple rules beat clever ones.** The org chart was clever. Five seats were clear.
2. **Build fast, then fix the shape.** Going live on day one showed us the real questions.
3. **Permissions are a people problem dressed up as a tech problem.**

## Your turn 👇

How does your team know who's working on what: a tool, a sheet, or a daily "any updates?"
