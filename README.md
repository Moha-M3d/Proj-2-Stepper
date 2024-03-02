## Simple Stepper Project

### 1. The Project
This poject is about creating a simple stepper, which is a container that have multiple step indicators. Each step is activated when the user reaches it, with the help of a next and prev button. I've also added up a form sections section to simulate the use cases of this project.
### 2. The Projet SetUp
Initial Project Setup, which includes creating a `README.md` file, `index.html`, `assets/css/main.css` for the main css file, `assets/css/all.min.css` and `assets/webfonts` for the fontAwesome icons, and file `main.js` containing `JavaScript`code.
### 3. The Project Styling & Responsiveness
For the main component in this project which is the stepper container, I've used `FlexBox` to lay everything out, I also did use it for the container children(steps) to easily make it responsive. The steps have three different states; the default which pending, active and completed. and I've managed to give each state a CSS class to make the steps visually distinguished. The most part that I found chanllenging here is how to deal with transitions.
### 4. The Project Behavior 
Overall the logic of this project is simple with `JavaScript`, but what I found a little bit chanllenging was how to better organize my code and avoid repetition. I placed the code handling the stepper inside a module so that it can be imported whenever we need it in the page.