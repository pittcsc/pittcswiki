---
title: "Getting Started with Git"
---

[Git](https://git-scm.com/) is the most widely used [version control software](https://en.wikipedia.org/wiki/Version_control), and it is also free and open source. In a nutshell, git helps you and multiple others concurrently make changes to your software's source code while preserving version history. You will *without a doubt* encounter git during your CS journey, so getting comfortable with it now is a great way to have a head start at your next internship, job, personal project, etc.

## Git Overview

**Git** is the version control software -- this is the part that is free, open source, and installable on your devices to enable you to use version control through the command line or [git's GUIs](https://git-scm.com/downloads/guis). Git enables you to [create **git repositories**](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), which record the change history of your project so that you can move between historical snapshots of your source code. Git repositories are *local to your device*, existing within the root directory of your project in a directory called `.git/`.

Repositories that exist on your device can also be synchronized with [**remote repositories**](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes), which can exist on computers on your local network or more likely some server on the internet. This is where familiar commands like `git pull` and `git push` come from. These commands are used to synchronize your local repository with the remote repository hosted on the internet. Remote repositories make it easier for multiple people to contribute to a single source code.

[**GitHub**](https://github.com/) is a popular website for hosting remote repositories. It makes use of git for those repositories, hence why working with GitHub often involves working with git. GitHub is a great place to find and host (often for free) [**open source projects**](https://github.com/open-source), which are projects of many kinds that have publicly visible source code and often encourage outsiders to contribute or make spinoffs.

### Git workflows

> This is a more advanced topic, so make sure you understand the basic usage of git before diving into this.

There are many different git workflows (ways to use git effectively to manage your source code), but one popular workflow is the [**feature branch workflow**](https://guides.github.com/introduction/flow/). This involves [branching off](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from the existing source code to make a new version that is now out of sync with the main version (people can continue making changes to the main version that won't be reflected in your branch). The changes to implement a new feature are then added to this new branch. Once the feature is complete, a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) is created to request to merge your changes with the main version of the source code.

## Recommended Resources

* [Learn Git Branching](https://learngitbranching.js.org/) is a great tool for learning git visually. It particularly excels at visualizing git branching.
* [Git and GitHub Crash Course](https://www.youtube.com/watch?v=SWYqp7iY_Tc) by Traversy Media is a good video that goes over both git and GitHub.
* [Pro Git](https://git-scm.com/book/en/v2) is a classic book that gives a comprehensive overview of git fundamentals.

## Opinions

### Richie Goulazian - 5/6/2021

You need to learn git. This is almost definitely the way that you will interact with large codebases. I'd recommend taking your time to really understand the basic structures of git -- repositories, remote repositories, branches -- so that you can *visualize* these structures in your head as you're running git commands.

Once you have a basic understanding of git, just start using it always. You don't need to make a GitHub repository for every project necessarily, but you can always just run a quick `git init` to create a local repository when working on some small project just in case you need to revert changes or something. You ultimately want this stuff to just become muscle memory.

Also take some time to learn the [**feature branch workflow**](https://guides.github.com/introduction/flow/). This is another thing that you will see a lot if you're considering working with projects on GitHub or on large software teams.

In the end though don't feel discouraged if you have to Google things. I've been using git for personal use and for internships for the past year or two and I often find myself looking up more advanced commands on StackOverflow. Especially with something as critical as your entire source code, you don't want to accidentally delete everything you've done in the past day by running the wrong command (I have done this before). So don't resist Googling things.

### Mathew Varughese - 5/6/2021

`git` is a very popular technology for good reason. But, like all technologies, it is important to understand why it exists. Get the basics down, `git add .`, `git commit -m "message"` and `git push`. Over time, this will become muscle memory.

I will say, git has a very weird UX, so even people that really know it well agree it is extremely confusing. Like with all technologies, if you continue to use it, Google problems as you come across them, and understand why they exist, you will learn it well and improve your abilities as an engineer.
