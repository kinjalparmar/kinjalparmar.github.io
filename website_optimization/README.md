# Website Optimization

### Project Summary

This is the submission for Udacity's **Website Optimization** Project for the **Front-End Web Developer Nanodegree.** 

##### How to run this application
1. Download this project or clone repository through Git. 
2. Open index.html in a web browser
You can also run it from : [kinjalparmar.github.io/website_optimization/](https://kinjalparmar.github.io/website_optimization/)

##### Project Goal :

|Optimizations|Criteria|Goal|
|:-------------:|:-------------:|:-----:|
|Page Speed Score| Critical Rendering Path| For `index.html` achieves PageSpeed score of at least 90 for Mobile and Desktop.|
|Getting Rid of Jank| Frame Rate|Optimise `views/js/main.js` to make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling. |
|Getting Rid of Jank| Computational Efficiency|Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page.|

##### Achieved Goals :  
**1. PageSpeed Score** : `index.html` is optimized to achieved PageSpeed score of 92/100.
* Can check [my optimization score](https://kinjalparmar.github.io/website_optimization/) on : [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)

**2. Getting Rid of Jank** : `main.js` is optimized to achieve a frame rate of *60fps(Frame Rate per second)* when scrolling. Also reduced the time to resize pizzas in `pizza.html` to less than 5 ms.
* To review the `pizza.html` in view folder, open the file in your browser (Chrome is the most preferable) and check the console in the time line. You can see :
    - The time to generate pizzas
    - Average scripting time to generate last 10 frames
    - Average time to resize pizzas when slider is used

##### Project folder information :
* `original.html` is the unoptimized file having low speed score.
*  `index.html` is the optimized file.
*  `css` folder contains the original and minified `.css` files.
*  `js` folder contains the original and minified `.js` files.
*  `img` folder contains the original unoptimized images.
*  `images_new` and `view/images_new` contains optimized images.
*  The main files to focus in `views` folder are `pizza.html` and the optimized `js/main.js`. 

##### Optimization Details :
To achieve the goal, I have made the following optimizations :

**Page Speed Optimizations :**
* **Removed Render Blocking CSS** : 
    - Used `grunt-critical` to find the minimum set of blocking CSS, or the critical CSS and inline it inside `index.html`.
    - Added `media="print"` attribute to the `css/print.css` file so it would  only load if printing.
* Put the `<script></script>` at the bottom of `body` element.
* Optimized Google fonts by adding the WebFont Config Script.
* Added `async` attribute to two `.js` files so they would load asynchronously.
* Used **Grunt** to :
    - minify `.css`
    - uglify `.js`
    - compress images
* Further reduced the size of `pizzeria-100small.jpg` using [http://optimizilla.com/](http://optimizilla.com/) and rename it as : `pizzeria_min.jpg`.

![PageSpeed Optimization](img/pagespeed_screentshot.png)

**Achieving 60 fps in the pizza.html page** 

* **Change CSS** for `.mover` : 
    * Add `transform: translateZ(0)`, `will-change: transform`, `transform translate3d(0,0,0)` and `backface-visibility: hidden`.
* Deleted the determineDx function as it creates a lot of work and was creating forced synchronous layout. 
* Removed the `sizeSwitcher()` function and add the sizing `switch` case inside the `changePizzaSizes()` function which sets the percentage width required according to changes in sliding bar.
* Declared the variables outside the loop to reduce loop complexity.
* Declared the variables querying the DOM everytime outside the loop. 
* Use *getElementByID* and *getElementsByClassName* instead of *querySelector* and *querySelectorALL* to increase scroll and page rendering..
* Made phase for sin wave an array `phase_array`to do 5 calculations once and then use it in for loop.
* Precalculate the variable `scr` to reduce activity in the loop
* Used `TranslateX` instead of `basicLeft` to repositioned pizzas.
* Have made some changes according to the discussions in the forum.
* Used `ticking` to make sure the updatePositions function isn't firing unnecessarily.
* Reduced pizzas from 200 to a dynamically calculated value using viewport height.
* Move `items` at the bottom of the page to stop updatePositions from re-defining items on every scroll event.

### Try to further optimize it :wink:



