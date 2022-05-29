eleventy version

TOC plugin generates table of contents based off headers & their ids.
it generates an <aside> with class TOC & TOCempty

to generate index page, use
    layout: auto-index.njk
    indexTag: <tag to generate list of>


### creating new articles
Posts/articles should use the article or articleWithTOC layout.
The contents should be taken as the contents of a <main> tag, and the <main> tag itself should not be included.
The article should consist of <section> and <article> tags.


### package.json scripts:

    "watch:eleventy": "npx @11ty/eleventy --serve",
    "watch:sass": "npx sass src/sass:build/css --watch",
    "start": "concurrently \"npm run watch:eleventy\" \"npm run watch:sass\""
    
start uses *concurrently* to run eleventy and sass concurrently (duh)