---
title: 140 students applied. Our system wasn't ready for them.
slug: internship-platform-140-students
date: 2026-10-29T15:35:00+05:30
cover: /blog/internship-platform-140-students/cover.jpg
excerpt: We launched an internship and 140+ students applied. Then emails stalled, links expired and passwords vanished. Here's how we rebuilt the journey around the students.
tags: Internship, Product, Build Story
---
Quick question: what broke the first time real people showed up to something you built?

For me it was everything, all in the same week. 😅

## The launch

Adsysinfo launched an internship program, and I built the platform behind it.

I added a pop-up on the website, a QR code and a poster. Scan, apply, done.

![The internship pop-up on the website](/blog/internship-platform-140-students/application-popup.jpg)

And they came. **140+ applications.** For a small program, that's a flood.

## The cracks 🧱

Then the cracks started showing.

**Crack #1: the emails stopped.** Our email service only allowed 100 emails a day. So halfway through sending invitations, it just… stopped. Half the students got their invite. The other half got silence.

**Crack #2: the links expired.** Every student got a "Set your password" link. Many of them clicked it a day later, and by then the link had expired.

**Crack #3: the passwords disappeared.** The students who *did* set a password forgot it by the first class.

None of this showed up while I was testing. Testing with five accounts is like checking a bridge by walking across it alone.

## The turn: build around the student, not the system

So I stopped asking "how does the system want this?" and started asking "what would a student actually do?"

- **No passwords at all.** Students sign in with a one-time code sent to their email, the same way you log in to many banking apps.
- **A mentor page** where adding the Google Meet link for a class unlocks that class and emails every student automatically.
- **A reminder 30 minutes before every class**, because people forget.
- **Slides that unlock only when class starts**, so nobody's confused about which lesson they're on.

![Signing in with a one-time code instead of a password](/blog/internship-platform-140-students/one-time-code.jpg)

## The first class

Then came a live class where 10 students tried to log in at the very same moment… and the one-time code didn't reach everyone.

The system wasn't broken. Many of them simply hadn't registered for the course yet, and the code only goes to registered students. One WhatsApp message fixed it: *register first, then log in.*

Sometimes the fix isn't code. It's one clear sentence at the right time.

> Your system isn't tested until real people use it on the same night.

## What I took away

1. **Every limit you ignore becomes a problem on launch day.** 100 emails a day sounds like plenty, until it isn't.
2. **Passwords are friction.** If you can avoid them, your users will thank you by actually showing up.
3. **Design for the forgetful version of your user.** That version is everyone, including me.

## Your turn 👇

What broke the first time real users showed up to something you built? I promise mine was worse. 😄
