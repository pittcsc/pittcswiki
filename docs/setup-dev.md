<h1 align="center">Contributing to the Pitt CS Wiki!</h1>

<div align="center">
  <a href="https://pittcswiki.netlify.app/">
    <img src="https://raw.githubusercontent.com/PittCSWiki/pittcswiki/master/src/images/logo.svg" alt="Pitt CS Wiki" width="400">
  </a>
  <br>
</div>


There are a few different ways that you can contribute, you can add additional material to an existing guide, create a new guide, or work on dev material! We'll walk you through how to do each one below

Before you get started, check out our [tips for writing a good guide](writing-tips.md)!

> Scroll to the bottom for the JavaScript development guide

## Editing an Existing Guide

1. Find the wiki guide you want to edit and scroll to the bottom. Click "edit this guide on GitHub". 
2. You should see the guide in the GitHub editor. Look to the right of the screen for the "edit" button (looks like a pencil) and click on it.
3. Make the changes in the markdown files.
4. At the bottom of the screen, add a description and select "Propose Changes".
5. Select "Create a Pull Request".
6. You can add a comment and click the new "Create a Pull Request".
7. Now, you'll wait for reviewers to approve the pull request. You can still make new commits while you're waiting for the pull request to be approved.

## How to Create a Guide

Say you wish to create a new guide on how to study abroad.

1. Look in the `src/guides` folder and see what topic it would fit under. Study Abroad seems like it would go under academics.
2. Add a new markdown file under `src/guides/academics`, Call it `study-abroad.md`
3. Make sure to add a frontmatter to your file. This is meta information at the top of your file.

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

4. Submit a PR ([Follow these steps](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))

After you a submit a PR and it is merged to the master branch, you are all set!

### How about a collection of related guides?

Say you want to make 5 different guides about research.

1. Make a new folder in the `src/guides/academics/` folder, called `research` (where academics is the appropriate category)
2. Add an `index.md` in this folder to serve as on overview. (this will be reachable via /guides/academics/research/)
3. Add more markdown files inside the folder!

If you would like to add a "Related Resources" section to the guide, add a
"related" field to the frontmatter like so:

```
---
title: "Scheduling Classes"
related: ["Stats Major", "/academics/majors/stats", "Course Explorer", "/courses/"]
---
```

The related is a list, and starts with the title of the link, and next is the actual link.

## Dev Contribution

### Set up development environment

You only have to do below if you want to add new functionality with Javascript!

We recommend using VSCode and these extensions https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack

1. Download Node version 16.20.2 https://nodejs.org/en/ (Versions above 16.20.2 will not work!)
  - run `node -v` to make sure it installed AND that you are using the correct version of Node
2. Download yarn: `npm install -g yarn`
3. Clone this directory - `git clone https://github.com/PittCSWiki/pittcswiki.github.io.git`
4. `yarn install`
5. Ask a CS Officer for the `.env` file (Stored in `PittCSC Folder > Wiki > DATA > .env`). This file has private environment variables that are
used with the site. For example
Google Sheets API key (used for course testimonial data) and Algolia search (Aloglia the API used to make searching fast)
  - Save this file in the root of the directory

Congrats! Now, whenever you are ready to start editing the code, make sure you have the latest code by doing `git pull`. Then,
you can do:

```
yarn start
```

This might take 10ish minutes the first time you do this, but then it will be faster. Eventually, you can open up localhost:8000 in your web browser!

It is likely you will run into caching issues when developing! This is when you make a change, but you can't see it show up. Open up the developer tools, click the Network tab, and then click disable cache (follow [here](https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development) for instructions). You can try hard reloading. Also going in the developer tools, then going to Application -> Clear storage, clear site data will help!

`src/pages` is the folder where all of the website routes live. For example, `localhost:8000/courses` corresponds to 
the page defined in `src/page/courses.js`. 

Markdown files are converted to HTML pages with the `src/components/templates/guides-template` file.

While building you might get stuck on 

```
⠋ onPostBootstrap
⠏ Build manifest and related icons
```

in the console. To fix this is very simple! Just use the shortcut key Ctrl+C to cancel this command and try running it again. 

If you are curious about how this project works and want to become a serious contributor - [read and follow these tutorials](https://www.gatsbyjs.org/tutorial/).

Thanks for contributing!
