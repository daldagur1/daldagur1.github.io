# daldagur1.github.io

Black and neon-pink Jekyll blog for daldaguri's web security posts and CV.

## Local preview

```bash
bundle config --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Writing a post

Create a Markdown file under `_posts`:

```text
_posts/YYYY-MM-DD-title.md
```

Use front matter like this:

```yaml
---
layout: post
title: "Title"
description: "Short summary shown on cards and the post header."
date: 2026-06-16 13:00:00 +0900
categories: [posts]
tags: [writeup, 1-day, cve, django]
image: /assets/images/writeup-cover.svg
---
```

Images work well with normal Markdown:

```markdown
![Alt text](/assets/images/example.png)
```

Use fenced code blocks for VS Code-like syntax highlighting:

````markdown
```python
def poc():
    return "pink on black"
```
````

## Visual direction

- Base: black background with neon-pink accents.
- Code: VS Code-like dark syntax highlighting.
- Images: large writeup covers and clickable in-article images.
- Character assets: if a character is used, prefer Miku or Yoshi direction. Use licensed/original assets for exact characters, or create an original mascot inspired by their color mood.
