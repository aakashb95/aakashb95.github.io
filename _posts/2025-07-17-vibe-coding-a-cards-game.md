---
layout: post
title: Vibe coded a multiplayer cards game
date: 2025-07-17 12:31:00
description: A note on vibe coding with Claude Code
tags: tech, llm
categories: tech
---

### Why and what did I vibe code?

I wanted to see if I could vibe code a functional end-to-end project with LLMs, one that my family could use.

Check out the [Badam Satti project]({{ site.baseurl }}/projects/1_badam_satti/) for more details.

### TLDR

- I have a $20/month claude pro subscription. I used claude 4 opus on the website to generate a tech spec.
- Pasted that into claude code and asked it to code it out
- It could not one-shot it so I started giving step by step instructions. One feature at a time so it doesn't get lost in the context.
- For every code change, I tested it manually. Asked it to commit changes and also update the Claude.md file with latest changes, TODOs for future and a summary so far.
- Used keywords like DEEPTHINK, ULTRATHINK to really get more out of the model.
- Since at every iteration Claude.md was updated, whenever I found context was ballooning in a session or it was going off track, I started a fresh session.
- Finally, used [playwright-mcp](https://www.npmjs.com/package/@playwright/mcp) to give it access to the game and watched it play and debug some edge cases :D

#### Where to begin?

Use the most powerful models available, I chose Claude 4 Opus and OpenAI o3 and asked them to lay out the tech spec, project structure for another LLM to implement. Full prompts can be seen here:

- [OpenAI o3](https://chatgpt.com/share/68781186-4570-8012-b063-5cb3ca490a66)
- [Claude 4 Opus](https://claude.ai/public/artifacts/a2e6404a-222a-4586-804e-a51108f1955c)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/badam-satti/claude-4-opus-prompt.png" title="Claude 4 Opus Prompt" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Game rules and my loud thinking
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/badam-satti/claude-4-opus.png" title="Claude 4 Opus" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Claude 4 Opus response and my realization
        </div>
    </div>
</div>

<br>

Be very verbose in your prompts, do a thought dump, LLMs are smart enough to understand the context. If they don't, you can always clarify further.

#### [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)

I had used it with my API keys and was fascinated by how fast it was compared to Cursor. The subtle animations, verbs before starting a task were fun to watch.

To install: `npm install -g @anthropic-ai/claude-code`

Then navigate to the project folder and run `claude`. <br>
For an existing repo, run `claude init` and it creates a `Claude.md` file with it's understanding of the codebase.

I actually installed it within cursor as an extension, so i could see the changes in my IDE.

I pasted the Opus tech spec into the Claude Code and asked it to code it out straightaway. I thought the auto-accept edits would give it permissions to keep executing while I was away.

It was not to be.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">me: damn claude code has been running for a while it probably cooked so many things by now, let me check on it<br><br>claude code: <a href="https://t.co/W5ah15FB24">pic.twitter.com/W5ah15FB24</a></p>&mdash; kitze (@thekitze) <a href="https://twitter.com/thekitze/status/1944720840446406726?ref_src=twsrc%5Etfw">July 14, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

You will get a permission message from claude code occasionally (initially) to do some tasks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/claude-code-permission.png" title="Claude Code Permission" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Choose `Yes and don't ask again in this session` for it to auto-pilot.

There is a plan mode and an auto-accept edits mode, you can cycle through them using `shift+tab`.

With full autonomy, it created a simple version with pure HTML, CSS and JS.

Now I had a list of features to implement.

#### Building

Claude code keeps track of how much context window has been used up for a task. At some threshold, it says use `/compact` to summarize the context to have more context window available. I almost never used that. The moment I saw that suggestion, I would ask it to update claude.md with the latest changes and then create a new session. I used `/clear` very often.

Each new feature or improvement, would be in a separate branch, built on top of a latest working branch. I had claude do all of this.

#### Quality of responses

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using Claude Code either feels like God is writing your code or a monkey is and there’s no in-between.</p>&mdash; Mckay Wrigley (@mckaywrigley) <a href="https://twitter.com/mckaywrigley/status/1943722608371151222?ref_src=twsrc%5Etfw">July 11, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

On fresh chats, the responses were mostly accurate but sometimes I would get the feeling if the model was lobotomized.

So i used keywords like DEEPTHINK or ULTRATHINK to really get more out of the model. When you use these keywords, you will see what it thinks, implements a change then corrects itself by saying "oh wait, but this is not what the user wants, i have made a mistake". Pretty intriguing to see it correct itself.

What caught my eye was how it grepped the filesystem, it can just find the file it needs to get context. This makes me think I can use it not just to code but across variety of data, photos, documents, notes, etc.

What would be better - RAG or giving an agent autonomy to explore the search space? Needs an experiment and would be an interesting post for another day.

#### Providing more context


You can use the `@filename` to refer to a file in the project. Cursor habits. <br>
On a mac: <br/>
`cmd+v` works for pasting text into the chat. <br/>
`control+v` pastes images.<br/>

I found myself regularly pasting screenshots of the UI, asking it to make it responsive, cater to different screen sizes, etc.<br>
When there were some server errors, it would know because it ran `node` commands. <br>

to give better context, especially about UI and gameplay, I gave access to a playwright-mcp server.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/claude-code-mcp.png" title="Playwright MCP" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This worked really well because it would navigate to the site, open multiple tabs to play the game

<div class="row">
      <div class="col-sm mt-3 mt-md-0">
          <video controls class="img-fluid rounded z-depth-1" title="Claude 
  Code Game">
              <source src="{{ '/assets/video/claude-code-gameplay-web.mp4' | 
  relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
      </div>
  </div>

### Reflections

The game turned out really well, I was able to get a lot of features done well in a really short time, and got praised heavily by my family.
<br>

On the one hand, I was really happy I could ship something that they can play and use. On the other hand, I couldn't say _I made this_ because this wasn't _my_ code. It was claude's.

- Did I learn about Frontend? Migrating from vanilla JS, HTML, CSS to React, React router, Node, Express, Socket.io? _No._
- Did I learn how to take care of different screen sizes, zoom levels, card placements, usage of screen real estate with css, etc? _No._
- Is the UI pixel perfect? _No._
- **Can I make this better myself, without prompting?** <br/>
  It would take me some time to understand the codebase, given FE isn't my strong suit.

From a programmer's perspective, I learnt very little. I knew a lot of shallow stuff, like using a CDN to serve the card images, caching it on the client side for faster loading, etc., and I could direct it to do that, conduct security checks, etc.

In the excitement, I did not do test driven vibe coding. This I will not advise inspite of knowing that claude is notorious to remove test cases

<iframe width="560" height="315" src="https://www.youtube.com/embed/m0b_D2JgZgY?si=Qsf4AWSsv4URVFsa&amp;start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

I also realized, deployment isn't really solved yet, and I much prefer [@levelsio](https://x.com/levelsio) way of deploying to a VPS, FE and BE on the same server along with a SQLite file.

From a Product Manager's perspective, I learnt a lot.

- Get the core product right and get it out there.
- Prioritize gameplay and time to value. Remove friction like sign in, registration, etc.
- User empathy: Cater to different screen sizes, zoom levels, etc.
- Think of product specific edge cases. Pick the one with the highest impact.

Would I use claude code to build something where I want to learn? <br/>
Not like I did for this project. I would ask it to use the [Socratic method](https://en.wikipedia.org/wiki/Socratic_method) to help me solve my doubts, and use it as a pair programmer to bounce off ideas.

Would I use it to get something done quickly? _100% yes._
