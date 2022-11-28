# My Movie Listing App
My Movie Listing App


## Table of contents

- Introduction
- How to run the app
- Points to note
- Points can be improved

## Introduction

This app is all about listing a movie list and its details using [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction) and Angular js and its best practices.

## How to run the app

Step 1: Use Git clone to close the repo 
Step 2: npm install
Step 3: nx serve movie
Step 4: open http://localhost:4200 in browser

## Points to note

- Created this entire project using [nx.dev](https://nx.dev) repo
- Created a libaray project named common-ui for common used component ( movie tile,  listing) and potentially reusable pipe and interfaces. 
- All the components are created as Stanalone-components 
- Lazy loading is used to load routes for trending and top rated movies

## Points can be improved

- Currently movie listing is loading only first page items from api, so the listing is limited and we can either add pagiation in the bottom of the page or virual scrolling 
- Images are loading directly and can be lazy loaded via https://www.npmjs.com/package/ng-lazyload-image
- Test needs to be written to cover all functionality 

