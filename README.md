TinStreet-client
================

First Time Setup
================

* clone the repo
* run `npm install` at the root
* run `bower install` at the root
* run `grunt server` at the root

Deploy to Github Pages
======================

* run `grunt server:dist` at the root
* commit your changes to master
* when you're happy `git subtree push --prefix dist origin gh-pages` will push to the gh-pages branch