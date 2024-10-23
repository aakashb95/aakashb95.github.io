---
layout: post
title: Dev Setup for macOS and Linux
date: 2024-10-23 17:01:00
description: A comprehensive guide to setting up a development environment on macOS and Linux, including package managers, productivity tools, development tools, and useful shortcuts
tags: tech
categories: tech
---

Here's a rundown of the tools and applications I use to set up my development environment on both macOS and Linux. These have proven useful in my workflow, but your mileage may vary.

## macOS Setup

First thing I do is go to Settings -> Trackpad -> Enable Tap to click.

### Package Management

- [Homebrew](https://brew.sh/): The go-to package manager for macOS. Pretty much essential. But I am thinking of learning [nix](https://nixos.org/) for more package management goodness and reproducibility.

### Terminal Enhancements

- [Oh My Zsh](https://ohmyz.sh/): A framework for managing Zsh configuration. Makes the terminal a bit more user-friendly.
  - Plugins I use:
    - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions): Suggests commands as you type based on history and completions.
    - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting): Provides syntax highlighting for the shell zsh.
    - [autojump](https://github.com/wting/autojump): A faster way to navigate your filesystem.

### Productivity Tools

- [Raycast](https://www.raycast.com/): A launcher that's more powerful than Spotlight. I use it for quick calculations and most importantly clipboard history. This also has window management, but i am too lazy to switch from rectangle.
- [Rectangle](https://rectangleapp.com/): Simple but effective window management app. Have gotten very used to the shortcuts, never looked back even with the latest MacOS window management.
- [Notion Calendar](https://www.notion.so/product/calendar): This was Cron earlier. Basically alerts me before my meetings and shows it in the menu bar.

### Development Tools

- [Docker client](https://orbstack.dev/download): I use OrbStack as a lightweight Docker client. It is super useful on M1 apps. This works fine for 99% of my use cases. The one time I needed some rosetta customization, I had to use the full Docker Desktop.
- [Warp](https://www.warp.dev/): A new terminal app that supports multiple tabs, multiline editing, longer command history. I don't like that it asks for signup at the start because it is VC driven so 🤷‍♂️. Skill issue on my part.
- [Cursor](https://www.cursor.com/): An IDE with AI capabilities. I am faster with this.

### Web Browsing

- [Brave browser](https://brave.com/): A Chromium-based browser with built-in ad-blocking and tracking prevention.

### Utilities

- [Mos App](https://mos.caldis.me/): I use an external mouse and the scrolling direction is reversed. This app fixes that, along with some smoothening of the scrolling.

### Command Line Tools

- [bat](https://github.com/sharkdp/bat): A `cat` clone with syntax highlighting. Nice for quick file views.
- [fzf](https://github.com/junegunn/fzf): Fuzzy finder for the command line. Great for searching through command history.

### Note-taking

- Notes: Apple Notes, Google Docs, Cursor

### Python Environment

- [uv](https://docs.astral.sh/uv/): A fast Python package installer and virtual environment manager. I recently switched to this from [miniconda](https://docs.anaconda.com/miniconda/miniconda-install/), which I used previously. So far, uv seems faster and more lightweight, but I'm still in the process of fully transitioning.

### Some useful mac shortcuts

- `fn + delete` to delete a word backwards (windows delete key)
- Press `fn` twice to get emoji picker
- `cmd + shift + .` to view hidden files in finder
- `cmd + shift + 3` to take a screenshot of the entire screen and save it to the desktop
- `ctrl + cmd + shift + 3` to take a screenshot of the entire screen and copy it to the clipboard
- `cmd + shift + 4` to take a screenshot of the selected window
- `ctrl + cmd + shift + 4` to take a screenshot of the selected window and copy it to the clipboard
- `cmd + shift + 5` to screen record via Quicktime
- `cmd + ~` to switch between multiple windows of the same app
- `cmd + tab` to switch between apps

### Some useful chrome shortcuts

- `cmd + option + arrow-keys` to switch between tabs in browser (Chrome based ig)
- `cmd + shift + t` to reopen the last closed tab

### Some useful Cursor/VSCode shortcuts (MacOS)

- `cmd + shift + p` to bring up the command palette
- `cmd + p` to bring up the file navigator
- `cmd + shift + e` to explore the file system
- `cmd + shift + f` to search for files
- `cmd + shift + d` to open debugger
- If you want to move up/down the current line or selection, `alt` + `arrow-keys` works.
- `cmd + left-arrow` to move to the beginning of the line
- `cmd + right-arrow` to move to the end of the line
- `cmd + delete` to delete the entire line to the left of the cursor
- Select a word and do `cmd + d` to find occurrences of the word in the file. Match for case and exactness on the tooltip that appears.
- Multiple cursors can be done using `cmd + d` or `option + click`.

## Linux Setup

### Terminal Enhancements

- [Oh My Zsh](https://ohmyz.sh/): Same setup as on macOS.
  - Plugins: zsh-autosuggestions, zsh-syntax-highlighting, autojump

### Docker Installation

For Linux, I typically install Docker using the official script:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### Nvidia drivers

Command to install the recommended drivers:

```bash
sudo ubuntu-drivers autoinstall
```

Will add more here soon.

### Some useful terminal shortcuts (Linux)

- `ctrl + a` to move to the beginning of the line
- `ctrl + e` to move to the end of the line
- `ctrl + l` to clear the screen
- `ctrl + u` to delete the entire line
- `ctrl + w` to delete the word before the cursor
- `ctrl + r` to search through command history
- `ctrl + shift + r` to reverse search through command history and execute
- `ctrl + c` to cancel the current command
- `ctrl + shift + c` to copy the current selection (`cmd + c` on macOS)
- `ctrl + shift + v` to paste the copied text (`cmd + v` on macOS)
- `ctrl + z` to suspend the current command
- `ctrl + d` to exit the current shell
