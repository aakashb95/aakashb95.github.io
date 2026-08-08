---
title: One year of vibe coding later
description: I rebuilt my cards game with current LLMs. The difference is hard to miss.
date: 2026-07-12 17:31:00
tags: [tech, llm]
draft: false
featured: false
---

Almost exactly a year ago, I [vibe coded Badam Satti](/blog/2025/vibe-coding-a-cards-game/).

It was my first attempt at building a functional end-to-end project with LLMs. I used Claude 4 Opus to write a tech spec, pasted it into Claude Code, then built one feature at a time. I manually tested every change, kept updating `Claude.md`, started fresh sessions when the context got too large and used playwright-mcp to make Claude play the game in multiple tabs.

The game worked. My family could play it. That was the bar and it cleared it.

One year later, I built [Game Desk](https://games.aakashb.xyz/): a home for Badam 7 and King's Corner.

The difference is hard to miss.

<figure class="phone-shot">
    <img src="/img/game-desk/mobile/game-desk-home-phone.png" alt="Game Desk home screen on a phone, with Badam 7 and King's Corner" />
    <figcaption>Two games, one table. No accounts, no fuss.</figcaption>
</figure>

### TLDR

- A year ago, getting a working multiplayer game out of an LLM felt slightly miraculous. It also needed a lot of hand-holding.
- Current coding agents are much better at carrying a product's taste across screens, following existing patterns and polishing the boring-but-important edges.
- I built King's Corner in half a day. Not a demo—the multiplayer flow, rules, game table and the small product decisions around them.
- The biggest change isn't that they write more code. They can stay with the problem for longer.
- The agent did not only wait for instructions. It nudged me on product decisions and made me think about things I had not specified.
- I still have to decide what good looks like. The model is much better at helping me get there.
- I learnt less about individual lines of frontend code, but more about directing, reviewing and iterating on a product.

### The first version

The original Badam Satti was built to solve a real problem: my family wanted to play together when everyone was not physically around.

It had private rooms, shareable links, real-time multiplayer, mobile support and auto-play so one distracted player would not hold up the entire table. It was useful, and that mattered much more than whether every screen looked perfect.

But the seams were visible.

The UI was designed one problem at a time. I would paste a screenshot, ask Claude to fix a card placement or make a screen responsive, test it and repeat. It could make a decent screen, but it did not always feel like it remembered the _product_ while working on the next one.

In the original post I wrote:

> Is the UI pixel perfect? _No._

That was fine. Shipping the game was the experiment.

### The second version feels like a product

Game Desk is not just a reskin of Badam Satti. There is a common entry point, a consistent visual language and a second game, King's Corner. The lobby tells you what each game is, how many people can play and gets out of the way.

There is still no sign-up. You enter a name, host a private room and send a six-character code or invite link. This was one of the better product choices from the first version, so I kept it.

<div class="phone-gallery" role="region" aria-label="Badam 7 from five players' phones" tabindex="0">
    <figure>
        <img src="/img/game-desk/mobile/badam7-jake-phone.png" alt="Jake's phone view of a five player Badam 7 game" loading="lazy" />
        <figcaption>Jake</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-amy-phone.png" alt="Amy's phone view of a five player Badam 7 game" loading="lazy" />
        <figcaption>Amy</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-holt-phone.png" alt="Holt's phone view of a five player Badam 7 game" loading="lazy" />
        <figcaption>Holt</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-rosa-phone.png" alt="Rosa's phone view of a five player Badam 7 game" loading="lazy" />
        <figcaption>Rosa</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-terry-phone.png" alt="Terry's phone view of a five player Badam 7 game" loading="lazy" />
        <figcaption>Terry</figcaption>
    </figure>
</div>
<div class="caption">The same five player game from Jake, Amy, Holt, Rosa and Terry's phones. Swipe to see every seat.</div>

The polish is in small things:

- The playable cards are obvious without making the rest of the hand unreadable.
- The current player, dealer, round and timer have a clear hierarchy.
- Empty suit piles still communicate what belongs there.
- Room creation and joining feel like parts of the same flow.
- Help is inside the game instead of being something you need to explain separately.
- Text size controls and inactivity handling are treated as product features, not afterthoughts.

Playable cards rise from the hand and get a gold outline. Here is what each player sees on their turn.

<div class="phone-gallery" role="region" aria-label="Eligible cards on five players' phones" tabindex="0">
    <figure>
        <img src="/img/game-desk/mobile/badam7-jake-eligible-cards.png" alt="Eligible cards highlighted on Jake's phone" loading="lazy" />
        <figcaption>Jake</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-amy-eligible-cards.png" alt="Eligible cards highlighted on Amy's phone" loading="lazy" />
        <figcaption>Amy</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-holt-eligible-cards.png" alt="Eligible cards highlighted on Holt's phone" loading="lazy" />
        <figcaption>Holt</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-rosa-eligible-cards.png" alt="Eligible cards highlighted on Rosa's phone" loading="lazy" />
        <figcaption>Rosa</figcaption>
    </figure>
    <figure>
        <img src="/img/game-desk/mobile/badam7-terry-eligible-cards.png" alt="Eligible cards highlighted on Terry's phone" loading="lazy" />
        <figcaption>Terry</figcaption>
    </figure>
</div>
<div class="caption">Each phone shows the playable cards without hiding the rest of the hand.</div>

None of these is individually impressive. Together they are the difference between a project that works and a product that feels considered.

### King's Corner took half a day

King's Corner makes the comparison more obvious because it was not part of the original project.

I built it in half a day.

That includes understanding the rules, fitting it into the existing Game Desk, building the multiplayer flow and making it usable for somebody who has never played before. A year ago, half a day would have got me a rough first version and a long TODO list. This time I had something I could actually send to people.

<figure class="phone-shot">
    <img src="/img/game-desk/mobile/kings-corner-guide-phone.png" alt="King's Corner game guide on a phone" loading="lazy" />
    <figcaption>The rules are inside the product, with a visual example instead of a wall of text.</figcaption>
</figure>

The surprising part was not just the speed of writing code. The agent nudged me on product decisions.

What happens if somebody knows Badam Satti but has never heard of King's Corner? Should the rules live on another page, appear before every game or stay one click away? How do we explain alternating colours without making somebody read a manual? When should an inactive player be helped along? Does the same room flow make sense for a game with a maximum of four players?

I did not arrive with a detailed PRD covering all of this. Some decisions came from looking at the game, noticing friction and going back and forth with the agent. It would point out an edge case or suggest a clearer flow, I would decide whether it made sense for the people actually playing, and we would iterate.

That felt different from the first Badam Satti build. In 2025, I was mostly breaking work into small features and feeding them to Claude Code. With King's Corner, the model felt closer to a product collaborator. It could hold the rules, the codebase and the experience in context at the same time.

It still did not make the final decisions. I did. But it made sure there were more decisions in front of me than the ones I happened to think of.

### What changed in the models?

In 2025, I had to decompose nearly everything into small tasks. One feature at a time so the model did not get lost in the context. I regularly cleared the session and relied on `Claude.md` as external memory.

That workflow worked, but I was also acting as a very patient task queue.

Current LLMs are much more polished. They explore the repo, form a plan, implement across files, run the app, inspect the result and iterate. More importantly, they are better at preserving intent. If I establish a visual direction or an interaction pattern, I can expect it to show up again on the next screen.

This is the part that is easy to miss in model benchmarks. A coding agent does not need to produce one spectacular answer. It needs to make hundreds of mostly correct decisions without slowly turning the product into a mess.

The improvement feels less like a smarter autocomplete and more like a collaborator with better working memory and taste.

### What did not change?

The model still does not know what I want unless I do.

I had to decide that this should feel like a game table and not a SaaS dashboard. I had to care about getting friends into a room quickly, about playing on a phone, about what happens when somebody walks away mid-game and about whether a person new to King's Corner can understand the rules.

The agent can propose answers, challenge missing assumptions and execute them much better now. It cannot replace having an opinion.

I also still have the same uncomfortable answer to a question from the first post:

**Did I learn frontend by building this?**

Not in the traditional sense. I cannot reproduce every CSS decision from memory, and I did not personally type most of the implementation.

But I understand the product better. I got better at spotting when a screen feels wrong, turning that feeling into a concrete instruction, checking the result and deciding what is worth another iteration. That is not the same as learning frontend engineering, but it is not nothing either.

### Reflections

Last year, vibe coding made me feel like I could ship software without fully knowing how to build it.

This year, it feels like I can keep polishing after the first working version.

That is a much bigger change than it sounds. Most side projects do not die because the first version is impossible. They die in the long tail: mobile layouts, reconnect states, empty states, rules, accessibility, timers, error handling and the fifty tiny inconsistencies that make you stop wanting to work on them.

The newer agents are much better in that long tail.

Would I use them to build something where my only goal is to learn the underlying technology? Not on autopilot. I would still ask for the Socratic method, slow down and use the model as a pair programmer.

Would I use them to turn an idea into something my friends and family can actually use?

_100% yes._

The first Badam Satti made me optimistic about what one person could ship.

Game Desk makes that first version look like a prototype.
