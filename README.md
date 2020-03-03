# Exp.i - The music info getter.

---

Expi (Expanded Information) can show extra track information such as BPM, Key, and other interesting metrics, as well as find songs based on the provided data.

## Dependencies

- Gatsby.js
- Reac.js
- Typography.js
- [chroma-js](https://github.com/gka/chroma.js/)

## Local Development

1.  **Build Locally**

```shell
  npm install -g gatsby
  yarn install
  gatsby develop
```

2. **Adding a Package**

```shell
  yarn add <package name>
```

3. **Upgrading Packages**

Upgrade an individual package

```shell
  yarn upgrade <package name>
```

Upgrade all packages

```shell
  yarn upgrade
```

## Appendix

### 1. Good Resources

#### Front-end

- [Easing Gradient Generation Tool](https://larsenwork.com/easing-gradients/)

## Tour

Here are some "nice to knows" if you're unfamiliar with Gatsby.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

4.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

8.  **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

9.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
