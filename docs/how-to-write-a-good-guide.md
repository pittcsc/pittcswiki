# Guide on Guides

A guide is basically any article we write that intends to help out another Pitt CS student.

We consider a page that includes useful information to be a 'guide'. It can be short, like "How to become a TA", or it can be a series,
like "Path through CS".

Some guides are more refined, and deserve their own folder. Like, the `Zero to Offer` set.

We write them in Markdown.

(With MDX (https://www.gatsbyjs.org/docs/mdx/), we can have _interactive_ parts of our guide, which is really cool. Read more about that [here](/docs/how-to-create-an-interactive-guide.md)

To add a guide, open a PR, and create an appropiate markdown file in the `pages` folder.

## How to Create a Guide

Say you wish to create a new guide on how to study abroad.

1. Add a new markdown file under `src/pages/guides`. Say, `study-abroad.md`.
2. Make sure to add a frontmatter to your file. This is basically meta information at the top of your file.

```
---
title: "Study Abroad"
---

Studying abroad as a CS major ...
```

Note the 'title' will be used as the title of the web page, displayed as a title, and it will be indexed so it can be searchable by the search bar.

3. Submit a PR

After you a submit a PR and it is merged to the master branch, you are all set!

## Guiding Principles

(Pun Intended)

We keep these things in mind when writing guides:

- Brief
- Unbiased
- Quality

We aim for brevity.

We try our best to be unbiased and profressional, and we add
disclaimers because at the end of the day we are just college students and do
not really know what we are talking about.

And, we try to maintain a high quality bar by having our content reviewed
by other members.

## How does this all work?

When you add a new markdown file to `src/pages`, GatsbyJS (the framework we use), will automatically create a webpage, and transform your markdown into HTML. More information can be found by following this Gatsby tutorial if you wish to learn more - https://www.gatsbyjs.org/tutorial/
