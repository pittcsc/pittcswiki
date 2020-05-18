# How to get started developing!

If you want to just contribute text - you can just follow this page. You only have to do this if you want to add new
functionality or interactive elements.!

## Set up

I recommened using VSCode and these extensions https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack

1. Download Node https://nodejs.org/en/
  - run `node -v` to make sure it installed
2. Download yarn: `npm install -g yarn`
3. Clone this directory - `git clone https://github.com/PittCSWiki/pittcswiki.github.io.git`
4. `yarn install`
5. Ask a CS Officer for the `.env` file (Stored in `Wiki > DATA > .env`). This file has private environment variables that are
used with the site. For example
Google Sheets API key (used for course testimonial data) and Algolia search (Aloglia the API used to make searching fast)
  - Save this file in the root of the directory

Congrats! Now, whenever you are ready to start editing the code, make sure you have the latest code by doing `git pull`. Then,
you can do:

```
yarn start
```

This might take 10ish minutes the first time you do this, but then it will be faster. Eventually, you can open up localhost:8000 in your web browser!

`src/pages` is the folder where all of the website routes live. For example, `localhost:8000/courses` corresponds to 
the page defined in `src/page/courses.js`. 

Markdown files are converted to HTML pages with the `src/components/templates/guides-template` file.  Read more about guides

If you are curious about how this project works and want to become a serious contributer - [read and follow these tutorials](https://www.gatsbyjs.org/tutorial/) 

Thanks for contributing!
