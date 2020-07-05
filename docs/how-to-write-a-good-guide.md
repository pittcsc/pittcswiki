# Guide on Guides

A guide is any article we write that intends to help out another Pitt CS student.

We consider a page that includes useful information to be a 'guide'. It can be short, like "How to become a TA", or it can be a series,
like "Zero to Offer".

Some guides are more structured, and deserve their own folder. Like, the `Zero to Offer` set.

We write them in Markdown.

To add a guide, open a PR, and create an appropiate markdown file in the `srcs/guides` folder.

## How to Create a Guide

Say you wish to create a new guide on how to study abroad.

1. Look in the `src/guides` folder and see what topic it would fit under. Study Abroad seems like it would go under academics.
1. Add a new markdown file under `src/guides/academics`, Call it `study-abroad.md`
1. Make sure to add a frontmatter to your file. This is meta information at the top of your file.

```
---
title: "Study Abroad"
author: "If you want you can put your name!"
search_tags: ["optional list of tags that are searchable"]
---

## Do not use h1's, because the 'title' will automatically turn into an h1.
Studying abroad as a CS major ...
```

Make sure the _very first line_ in your markdown file is the three dashes! If you have an extra newline it will not work.

Note the 'title' will be used as the title of the web page, displayed as a title, and it will be indexed so it can be searchable by the search bar. You can add other search attributes in the search tags field.

3. Submit a PR ([Follow these steps](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))

After you a submit a PR and it is merged to the master branch, you are all set!

### How about a collection of related guides?

Say you want to make 5 different guides about research.

1. Make a new folder in the `src/guides/academics/` folder, called `research` (where academics is the appropiate category)
2. Add an `index.md` in this folder to serve as on overview. (this will be reachable via /guides/academics/research/)
3. Add more markdown files inside the folder!

## Adding Related Guides

If you would like to add a "Related Resources" section to the guide, add a
"related" field to the frontmatter like so:

```
---
title: "Scheduling Classes"
related: ["Stats Major", "/academics/majors/stats", "Course Explorer", "/courses/"]
---
```

The related is a list, and starts with the title of the link, and next is the actual link.

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

When you add a new markdown file to `src/guides`, GatsbyJS (the framework we use), will automatically create a webpage, and transform your markdown into HTML. More information can be found by following this Gatsby tutorial if you wish to learn more - https://www.gatsbyjs.org/tutorial/

If you want to make a guide with interactive components - read how you can do that [here](/docs/how-to-create-an-interactive-guide.md)
