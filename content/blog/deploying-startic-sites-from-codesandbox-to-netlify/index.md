---
title: Deploying Static Sites to Netlify from CodeSandbox
date: "2019-04-15"
description: In this article we are going to be having a walk, through deploying your static application from CodeSandbox to Netlify.
---

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554445009/csb_to_netlify.png"></p>


CodeSandbox and Netlify are like a passanger and an uber driver, the passanger enters into the car and the uber driver starts the car and keeps on moving, CodeSandbox started with a super amazing idea by [Ives van Hoorne](https://twitter.com/CompuIves) the Creator of CodeSandbox and now works fulltime developing it.

```
# Table of Contents
- What is CodeSandbox
- What is Netlify
- Clients Templates on CodeSandbox
- File Structure
- File Structure Content
- Claim your site
- Closing Thoughts
- Resources
```

# What is CodeSandbox

CodeSandbox is an online VSCode-like editor built for web applications development, It was built with a mindset to make projects sharing easy across teams and people. Get started with CodeSandbox here https://codesandbox.io.

# What is Netlify

Netlify is a developers platform that automates codes, built in a way users will be able to simply push their code and the platform handles the rest.


# Let's get started

Firstly, visit your https://codesandbox.io dashboard and create a simple static site from one of the client templates.

## List of client Templates on CodeSandbox
- React.js (create-react-app)
- Vue.js (vue-cli)
- Angular.js (angular-cli)
- Preact.js (preact-cli)
- Vanilla (parcel)
- Cx.js (cxjs)
- Dojo (dojo/cli-create-app)
- Reason (reason)
- Svelte (svelte)
- Static (static)

In this scenario we would be using the React create-react-app template.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554201857/csb01.png" width="600px"></p>

# File Structure

```
my-app/
  package.json
  public/
    index.html
  src/
    index.js
    index.css
```
For the project to build, these files must exist with exact filenames:

- `public/index.html` is the page template;
- `src/index.js is` the JavaScript entry point.

You can delete or rename the other files.

## File Structure Content

**src/index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>CodeSandbox X Netlify</h2>
      <h3>Deploying Static Sites to Netlify from CodeSandbox.</h3>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

**src/index.css**

```css
.App {
  font-family: sans-serif;
  text-align: center;
}
```

**public/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  <title>CodeSandbox X Netlify</title>
</head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
</body>
</html>
```

You can create other files inside the `src` folder for faster rebuilds because only files inside the `src` folder are processed by Webpack. You need to put any JavaScript and CSS files inside `src`, otherwise, Webpack won’t see them.

Next, you would have to click on **file** and Fork the Sandbox, Awesome! Now you have it all to yourself. you can customize it whichever way you desire.

# Deploy to Netlify

<p align="center"><img src="http://res.cloudinary.com/developerayo/image/upload/v1554202547/csb02.png" width="700px"></p>

Once that's done you should have something similar to what I have below.

<p align="center"><img src="http://res.cloudinary.com/developerayo/image/upload/v1554240311/csb03.png" width="700px"></p>

Now, let's create our GitHub repository directly from our CodeSandbox dashboard, click on the GitHub icon on the icon tag across your left.

<p align="center"><img src="http://res.cloudinary.com/developerayo/image/upload/v1554243397/csb04.png" width="700px"></p>

Put in your desired name of repo and then click **create repository**, you should get the below, but then wait a few seconds for it to deploy.

<p align="center"><img src="http://res.cloudinary.com/developerayo/image/upload/v1554243397/csb04.png" width="700px"></p>

You should get a loading screen like the below for some seconds.

<p align="center"><img src="http://res.cloudinary.com/developerayo/image/upload/v1554244125/csb05.png" width="700px"></p>

Once that's done, click on the Plus sign and refork the repo, Click again on the rocket button and click deploy on Netlify.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554244126/csb06.png" width="700px"></p>

Once deploy is clicked on Netlify, you will get a unique domain like csb-mqpoxl7wjx wait few seconds for it to build and deploy.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554244125/csb07.png" width="700px"></p>

Awesome🔥🔥🔥, You should get two buttons **Visit** and **Claim Site** click **Visit** to view the deployed site.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554244125/csb08.png" width="700px"></p>

Your deployed site should look like the image below if all steps were followed.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554244125/csb09.png" width="700px"></p>

# Claim your site

Once deployed you would see a blue button named Claim Site click it,

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554583068/csb_claim.png" width="700px"></p>

Once that's clicked, you would be redirected to a new page on Netlify that looks like the image below, you just have to add it to your netlify dashboard.

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554583068/csb_claim2.png" width="700px"></p>

Your CodeSandbox site has successfully been added to the list of your site's hosted on Netlify

<p align="center"><img src="https://res.cloudinary.com/developerayo/image/upload/v1554583067/csb_claim3.png" width="700px"></p>


# Closing Thoughts

We’ve only scratched the surface with this Deploying Static Sites from CodeSandbox to netlify article. I hope you've enjoyed learning how to Deploying Static Sites from CodeSandbox to netlify.

Read more on Netlify via the official Netlify Docs and use CodeSandbox as your default live editor its amazing if you are looking forward to collaborating with multiple people on a single project. Read more here, [Documentation - CodeSandbox Documentation](https://codesandbox.io/docs)

Thanks to [Ives van Hoorne](https://twitter.com/CompuIves), [Sara Vieira](https://twitter.com/NikkitaFTW)  and others behind this helping us maintain and improve this amazing platfrom.

# Resources

Link to [GitHub](https://github.com/Developerayo/react-codesandbox-to-netlify)<br>
Link to [CodeSandbox](https://codesandbox.io/s/mqpoxl7wjx)<br>
CodeSandbox-client on [GitHub](https://github.com/CompuIves/codesandbox-client).
