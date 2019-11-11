---
title: Safeguard your blog content in Reactjs and CSS
date: "2019-11-06"
description: .......Curious about how to safeguard your blog content in your ReactJS app using CSS? You are about to find out!
---

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1573003584/Safeguard_your_blog_content_in_Reactjs_and_CSS.png"></p>

Most of us have been there: experiencing the point where the content of your article on your blog get's to be copied and reused by someone else on their own blog tagged to their name and zero credit to the writer/owner, the word for this is `PLAGIARISM`, now with the help of a simple css element and small bits of react, you can fix that.

Here is a tweet (#thread) from <b>Prosper Otemuyiwa</b> about his plagiarism experience on one of his articles.

<blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Do something today that your future self will thank you for. Might be for yourself, family or community.<br><br>A few days ago I wanted do something in <a href="https://twitter.com/vuejs?ref_src=twsrc%5Etfw">@vuejs</a> &amp; I googled as usual. I came across an article and started reading, and it was really making sense until I got to....</p>&mdash; Prosper Otemuyiwa (@unicodeveloper) <a href="https://twitter.com/unicodeveloper/status/1143535311303000064?ref_src=twsrc%5Etfw">June 25, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Continue reading thread [here](https://twitter.com/unicodeveloper/status/1143535311303000064)

<br>

```
Table of Contents
- Prerequisites
- Installing create-react-app
- CodeSandbox
- Setting up
- Deploy it to Zeit Now
- Conclusion
```

## Prerequisites

Most of us have been there: experiencing the point where the content of your article on your blog gets to be copied and reused by someone else on their blog tagged to their name and zero credit to the writer/owner, the word for this is `PLAGIARISM`, now with the help of a simple CSS element and small bits of react, you can fix that.

##### To create a new React project you'll need
- [NodeJS](https://nodejs.org/en/) and [NPM CLI](https://docs.npmjs.com/) 
- [Visual Studio Code "VSCode"](https://code.visualstudio.com/download) or your preffered code-editor

##### So as to enable pushing your code to GitHub you'll need
- [GIT](https://git-scm.com/downloads)

##### For deployment, you'll have to install

- [ZEIT NOW](https://zeit.co/docs/now-cli/)


## Installing create-react-app
Let's start with installing `create-react-app`

```bash
$ npx create-react-app safeguard-content
```

## CodeSandbox

But in this case study I would be building this simple feature on [CodeSandbox](https://codesandbox.io)

Start by visiting [codesandbox.io](https://codesandbox.io), sign up/login with GitHub, once that is done you would be redirected to your dashboard then click `Create Sandbox`, you'll get to have five tabs click on the one that says `CLIENT TEMPLATES` under that list you'll file react as a client template, click it.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1573000789/safe1.png"></p>

Once created, you will get a demo app in ReactJS.

## Setting up

Next up, we will setup our ReactJS app with some `HTML` tags.

```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
   return (
	<div className="App">
	  <h1>Hello Developer 🔥🔥🔥🔥</h1>
	  <h2>Start editing to see some magic happen!😄🔥</h2>
	  <h3>Hehehe! sorry, you can't 😅😎🔥🔥</h3>
          <h4>But you can edit this</h4>
      </div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
<br>

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1572995248/gif1.gif"></p>



In the code above you can see the simple output in the GIF below, and you can see in `line 4` that I am trying to import a `style.css` file.

Next, let's write some CSS

```css
.App {
  font-family: sans-serif;
  text-align: center;
}

h1 {
  user-select: none;
}

h2 {
  user-select: none;
}

h3 {
  user-select: none;
}
```

In my `index.js` file I posted earlier I created three tags under the app function which are ` <h1>, <h2> <h3> & <h4>`

```html
<h1>Hello Developer 🔥🔥🔥🔥</h1>
<h2>Start editing to see some magic happen!😄🔥</h2>
<h3>Hehehe! sorry, you can't 😅😎🔥🔥</h3>
<h4>But you can edit this</h4>
```

Which are under a function name `app` and `className` set as App, ref as `.App` in css

```js
function App() {
   return (
     <div className="App">
```
<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1572997195/chrome-capture.gif"></p>

<br>

In the GIF above, the first three texts cannot be selected because I used a CSS element called `user-select` and the attribute set as `none` which automatically disable Copying with mouse and `Ctrl + A` also. 

The `user-select` element with the attribute as `none` which was called for in our `style.css` and was attached to the `HTML` tags we declared in our react code in `index.html` which was referenced above. The as one could be selected because we did not attach a CSS element to the `<h4>` tag.

## Deploy it to Zeit Now

First, we need to create a `now.json` file in our main directory, once done add the code below in it.

```json
{
  "version": 2,
  "name": "Safeguard Content",
  "alias": "safeguard-content.now.sh",
  "builds": [
    {"src": "package.json", "use": "@now/static-build", "config": {"distDir": "build"}}
  ]
} 
```

ZEIT NOW owns two versions which are `Version 1 & Version 2` and in this case, we are using version 2 `"version": 2`. We are setting the name of our app as `Safeguard Content`.

It is a best practice to always alias your domain to a particular one so you do not get a weird link at deployment, here our codebase has been aliased to `safeguard-content.now.sh`. 

For builds, we declared a `now-build` script in our `package.json` file under `scripts` to build our react app on the new server.

```json
 "scripts": {
    ...
    "now-build": "react-scripts build"
  }
```

Now that that is declared we would be rendering our app statically using the Zeit Now static build `@now/static-build`.

Once that is done, we need to deploy to a new repo on GitHub

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1572998837/safe2.png"></p>

Look at the left-hand side of the repo, click the GitHub favicon and it gives you a second-half screen, put in your desired repo name, mine is `safeguard-content`, once written, create a repo. If you visit your GitHub profile you should find your repo there.

Visit your [Zeit dashboard](https://zeit.co/dashboard) and you will find your deployed site there. 

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1572999390/now.png"></p>


You can go to https://safeguard-content.now.sh/ and check it.

## Conclusion

Having your content copied and no credit given to you as the initial writer is sad, and this is a way out, You do not necessarily need to deploy to Zeit Now, you can easily also deploy to [Netlify](https://netlify.com) or other services you use.

I hope you found this tutorial helpful and will be able to secure your blog post, You can find a full source of the project [here](https://github.com/Developerayo/safeguard-content) on GitHub and CodeSandbox [here](https://codesandbox.io/s/safeguard-content-5ut1q)

Like this article? Follow [@developerayo](https://twitter.com/developerayo) on Twitter.
