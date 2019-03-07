---
title: Understanding the concept behind AIML
date: "2017-12-08"
description: AIML or Artificial Intelligence Markup Language is an XML base language used for creating chatbots(AI), it is always saved with the extension (.aiml).
---

![main image](https://res.cloudinary.com/developerayo/image/upload/v1551555821/aiml.png)

What is AIML?

AIML or Artificial Intelligence Markup Language is an XML base language used for creating chatbots(AI), it is always saved with the extension (.aiml).

The tag always used in AIML used to specify a new function is the <mark style="background-color: #9a69c2;">category</mark> tag which has two other tags running under it that i s the <mark style="background-color: #9a69c2;">pattern</mark> tag and the <mark style="background-color: #9a69c2;">template</mark> tag. Inside the template tage we cound also have other tags inbute “Depnds on the type of BOT you are building” eg <mark style="background-color: #9a69c2;">set</mark>, <mark style="background-color: #9a69c2;">br/</mark>, <mark style="background-color: #9a69c2;">srai</mark>…etc

But note something just as in HTML or any other programming Language or Scripting Language Even Markup Languages have a closing tag, here in AIML there is really not much a difference, the closing tags are <mark style="background-color: #9a69c2;">/category</mark>, <mark style="background-color: #9a69c2;">/template</mark>, <mark style="background-color: #9a69c2;">/srai></mark>, <mark style="background-color: #9a69c2;">/set</mark>…etc


## Example

```AIML
<category><pattern>WHO IS ABRAHAM LINCOLN</pattern>

<template>was a great President of the United States, during the American Civil War.<br/>

</template>

</category>
```
When the user inputs this in on some very close to this, the bot will respond to the input

“WHO IS ABRAHAM LINCOLN” with the response “was a great President of the United States, during the American Civil War.”.

Now lets create a simple bot using AIML

```AIML
<?xml version=”1.0" encoding=”UTF-8"?>

<aiml version=”1.0">

<category><pattern>Hi</pattern>

<template>Hi, I’m Oscar I was developed by Shodipo Ayomide 2017, <br/>How may I be of help</template>

</category>

<category><pattern>What are you </pattern>

<template>I said, My name is Oscar and I was developed by Shodipo Ayomide ok! </template>

</category>

<category><pattern>Why are you rude </pattern>

<template>Oh sorry, Please forgive my manners do not report me PLEASE!!! </template>

</category>

<category><pattern>ok </pattern>

<template>PLEASE!!! </template>

</category>

</aiml>
```
## Now lets explain Templates

A template specifies the response to a matched pattern.

**I am Oscar by name**

A template may use variables such as

You told me you are <mark style="background-color: #9a69c2;">get name=”user-age”</mark> years old
which will fetch the users age if in db.

Thanks for reading! 🔥🚀 </br>

<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-via="developerayo" data-hashtags="developerayo" data-related="" data-show-count="false">Share on Twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
