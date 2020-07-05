## Interactive Guide (Markdown + React Components)

Regular guides are cool, but guides that have Javascript in them are cooler.

To acheive this, we use [MDX](https://mdxjs.com/). This combines the ease of writing of Markdown with the
power of React components.

To create one, all you need to do is create a `.mdx` file. To understand more about
how this works, we suggest reading https://www.gatsbyjs.org/docs/mdx/getting-started/.

This tutorial will give more explanation on the set up.

Then, decide on a component you would like to use. For example, if you want to
use the `<CourseGraph>` component in a markdown file, first make sure it is a `.mdx` file.

Then, the `gatsby-mdx-plugin` will automatically set it up. Check out the `src/components/templates/mdx-guide-template.js` file to see how the page is rendered.
`shortcodes` contains the components that get passed in.

If you do not need to use an interactive guide, try not too. It adds overhead and
increases the page size. So, make sure your interactive guide is really
cool if you do use it. (See cons below)

If you do this - I suggest this VSCode plugin - https://github.com/mdx-js/vscode-mdx

Thanks for contributing!

## Cons of using MDX

- cannot do redirects
- slower (includes more JavaScript on the page)
