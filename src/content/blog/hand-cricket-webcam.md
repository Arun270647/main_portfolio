---
title: I turned a childhood game into an AI that watches your hand
slug: hand-cricket-webcam
date: 2026-10-29T15:34:00+05:30
cover: /blog/hand-cricket-webcam/cover.jpg
excerpt: Hand cricket always needed two kids and a lot of shouting. I taught my webcam to be the other player.
tags: AI, Games, Build Story
---
Quick question: what was *your* childhood game?

If you grew up in India, there's a good chance the answer is hand cricket. 🏏

## The game every kid knows

Two players. Fingers out. You both throw a number with your hand at the same time.

If the numbers match, the batter is out. If they don't, the batter scores those runs. Simple, loud and endlessly addictive. We played it on school benches, in buses and in every exam hall that had a lazy invigilator.

There was just one catch: you always needed another person.

## The idea 🖐️

What if the other person was the computer?

Open a website, turn on your webcam and play. No buttons, no typing. You show a number with your fingers, the computer reads it, and throws its own number back.

Just your hand, like on the school bench.

![The hand cricket start screen](/blog/hand-cricket-webcam/how-to-play.jpg)

## Teaching a computer to count fingers

A computer doesn't see a "hand". It sees a grid of coloured dots.

So the game uses a hand-tracking model that runs right inside your browser. It finds the joints of your fingers in the camera picture, the way you'd join the dots in a colouring book, and from that it works out how many fingers you're holding up.

Nothing gets uploaded anywhere. Your camera feed never leaves your laptop.

## The twist: "at the same time" is hard

On a school bench, "at the same time" is easy. You both shout, you both throw.

A computer is different. Hands move. Fingers are halfway up while you're still deciding. If it reads your hand a moment too early, it counts the wrong number, and nobody likes losing a wicket to a half-raised finger.

## The turn: a countdown

So the game does what kids do: it counts down.

*"Show number in 3… 2… 1…"*, then it takes one snapshot of your hand, shows **"Captured!"**, and only then reveals the computer's number. Same moment for both players, no cheating either way.

There's a proper toss, you choose to bat or bowl, and if the numbers match… **OUT!** Then the second innings starts, with a target to chase.

![OUT! The moment the numbers match](/blog/hand-cricket-webcam/out.jpg)

## Today

The game is live at [handcricket.arunvignesh.my](https://handcricket.arunvignesh.my). Open it, raise your hand and play. No sign-up, no download.

> Some of the best projects start with "I miss this."

## Your turn 👇

What was your childhood game? Do you think AI could learn to play it? Drop it below and I might build the next one. 😄
