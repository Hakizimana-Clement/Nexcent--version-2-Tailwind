# NEXCENT - Lessons and insights from 8 years design by M Kamran Abid

This web page Nexcent, a design by <b>M Kamran Abid</b>. <br>
The resource is [Nexcent](https://www.behance.net/gallery/178321717/Nexcent?tracking_source=search_projects)

## Table of contents

- [Installation](#installation)
- [Overview](#overview)
  - [The task](#the-task)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Challenges](#challenges)
- [Acknowledgments](#acknowledgments)

## Installation

To use the Nexcent website locally, follow these steps:

1. Clone the repository: git clone https://github.com/Hakizimana-Clement/Nexcent.git

2. Navigate to the project directory: "cd Nexcent".

3. Type "npm install" in terminal.

4. Type "npm run dev".

5. Open browser and type "http://localhost:5173/"

## Overview

### The Task

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size.
- On mobile screen size, the humbuge icon needs to be interactive.
- Make button, link to have hover state.

### Links

- Github repository URL: [Nexcent](https://github.com/Hakizimana-Clement/Nexcent)

<!-- - Live Site URL: [Nexcent](coming soon....) -->

## My process

### Built with

- Tailwind css
- Semantic HTML5 markup
- CSS
- Flexbox
- css Grid
- javaScript
- vite as local server.

### My learning outcomes

1. How to configure Tailwind and vite, follow these steps:

a. Enter this command in terminal:

```bash
npm create vite@latest
```

b. Make a new project folder and give it a name.

Choose “vanilla” as the template and “javascript” as the language.
Install Tailwind CSS, by entering these commands in terminal:

```bash

npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
```

c. Add the paths to all of your template files in your tailwind.config.js file. change this:

```js

content: [],
```

Copy
To this:

```js

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```

d.Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. How to arrange the project and files folder structure.

```bash
-public
-index.html
-src
 - main.js
 - utils
   - mobile-nav.js
-styles
 - style.css
```

3.  How to make a mobile navigation bar.

```js
const menuIcon = document.querySelector(".menu-icon");
const openNavbar = document.querySelector(".navbar-close");

const mobileNav = () => {
  // state
  let isOpen = false;

  // open/close navbar function
  const openOpenNavbar = () => {
    isOpen = openNavbar.classList.toggle("open-navbar");
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  };

  // clicke event
  menuIcon.addEventListener("click", openOpenNavbar);
};
export default mobileNav;
```

### Continued development

I’m working on:

- Improving my code (enlarge font size, widen letter spacing, increase line height…....etc)

### Useful resources

- [Tailwind CSS v2.0: From Zero to Production](https://www.youtube.com/watch?v=elgqxmdVms8&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0) - From this youtube channel playlist, I learned the basics of using tailwind.

- [Tailwind CSS Full Course 2023 | Build and Deploy a Nike Website](https://www.youtube.com/watch?v=tS7upsfuxmo) - This youtube video helped me learn some tips and tricks for tailwinds, and how to use tailwind in simple ways.

- [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/) - This helps me to reinforce and accelerate my learning process.

## Challenges

As I was working on this project, I came across the following challenges:

- On footer section : To create an input with placeholder text and icon on opposite sides.

## Author

- Github - [Hakizimana Clement](https://github.com/Hakizimana-Clement/)
- Twitter - [@HakizimanaClem5](https://www.twitter.com/HakizimanaClem5)
