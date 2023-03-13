# Vintage Theme

This is my brand new theme created off of Bootstrap 5.2

## What this project does

This repository includes a project structure with a build script that builds a custom CSS version of Bootstrap 5, using Gulp. You can
clone this repository, run the Gulp task and go right into modifying variables and adding styles. There's also an HTML file that contains
a neatly organized collection of those Bootstrap components that are currently used in my bigger project that this theme is used on.

Theme used on this site: https://www.vintagelakasdekor.hu/

## Prerequisites

- This works on Windows, macOS and Linux.
- Node Package Manager and Gulp are required. Make sure you can run `gulp -v` and `npm -v`.
- You can get Node at [nodejs.org](https://nodejs.org), then install gulp using `npm install gulp-cli -g`

## Getting started

2. Clone this repo
3. Run `npm install`
4. Run `gulp watch`
4. Look at `index.html` (ideally with a local development webserver)
5. Add any Bootstrap Sass variables into `scss/_vintage-variables.scss`
6. Add any custom styles into byb creating your `scss` file either in `scss/addons` or `scss/sections` folders. You can use Bootstrap's mixins here.
7. Repeat steps 4 to 6 until you like what you see :-)

## Thanks

Special shout out to [Alexander Rechsteiner](https://hackerthemes.com/kit/) who's tutorial I followed in creating this themme. 

## Copyright and license

Code released under the [MIT License](https://opensource.org/licenses/MIT).
