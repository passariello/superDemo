# SuperDemo

copyright (c) 2022 by dario Passariello

![TypeScript](https://img.shields.io/badge/TypeScript-006b98?logo=TypeScript&logoColor=white)
![Node-js](https://img.shields.io/badge/Node-js-006b98?logo=Node-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-006b98?logo=Express&logoColor=white)
![React-js](https://img.shields.io/badge/React-js-006b98?logo=React-js&logoColor=white)
![Api](https://img.shields.io/badge/Api-006b98?logo=Api&logoColor=white)
![dpHelper](https://img.shields.io/badge/dpHelper-npm-green?logo=dpHelper&logoColor=white)
![stModal](https://img.shields.io/badge/stModal-npm-green?logo=stModal&logoColor=white)

![screenShot](https://raw.githubusercontent.com/passariello/container/refs/heads/main/superdemo/screenShot/000.png)

## Welcome

Hi, this is Dario!.
This is the demo about beer labels. Everything there is invented just to show how I build everything and I came to share all the information.
I use these technologies:

1) Docker api server on node machine port 9000.
2) Docker Client React on node machine on port 3000

## Live Demo link

If you want to make a look in a live version:
<https://superdemo.picla.net/>

## save git log to file

If you need to save git log to file use git --no-pager log > git.txt

## Install

Please run docker-compose.yml first. After that you can run client.

If you use windows you can mode to project folder and run docker.bat

```js
# NPM INSTALL
# drive:/SuperDemo/client/

npm install --prod ( --force if necessary )
```

From shell move to "/client/server" and execute "npm install --prod" if necessary

```js
# DO NOT FORGET
# drive:/SuperDemo/client/server/

npm install --prod
```

I want to make it automatic during Docker installation ... it's a TODO

## Use

From Docker you can run superDemo.client on the browser and enjoy my fatigue.
Inside /client/data you have config options.

## what's in this version

1) Docker setup in all parts
2) React version with webpack installed
3) API punkapi full support

## about project

1) UI / UX is almost done
2) light and dark UI can be switched
3) Theme is drived by OS system
4) API came from punkAPI to our API and it's cached using dpHelper*
5) Rating system works and store all vote to our db
6) Search works
7) Pagination works
8) images and vectors works properly
9) Modals are controlled by stModal*
10) It's possible to use css, sass, scss
11) It's possible to use all kinds of image formats.
12) All data are global and state and store are stored using dpHelper*
13) Api it's run on node environment
14) x-user is used to validate votes.
15) Same email can't vote more time same item
16) Voting is in realtime.
17) Everything is SPA
18) All components should be shared between different pages

## dpHelper

NPM dpHelper are developed by Dario Passariello.
dpHelper is a collection of global function and memory state, store management. Layerpro are an alert, confirm replacement.
Copyright by Dario Passariello

## License

### MIT

Copyright (c) 2022 Dario Passariello

### Notices

You do not have to comply with the license for elements of the material in the public
domain or where your use is permitted by an applicable exception or limitation.
No warranties are given. The license may not give you all of the permissions necessary
for your intended use. For example, other rights such as publicity, privacy, or moral
rights may limit how you use the material.

## files

```
.
├───.vscode
├───server
│   ├───bin
│   ├───data
│   ├───public
│   │   └───stylesheets
│   ├───routes
│   └───views
├───client
│   ├───public
│   │   └───assets
│   │       ├───fonts
│   │       ├───icons
│   │       ├───images
│   │       ├───loaders
│   │       ├───logos
│   │       ├───themes
│   │       └───vectors
│   ├───server
│   ├───src
│   │   ├───components
│   │   │   ├───general
│   │   │   │   ├───castVote
│   │   │   │   ├───loaders
│   │   │   │   │   ├───circular
│   │   │   │   │   │   ├───progress
│   │   │   │   │   │   └───progressWithLabel
│   │   │   │   │   └───horizontal
│   │   │   │   │       ├───progress
│   │   │   │   │       └───save
│   │   │   │   ├───lock
│   │   │   │   ├───music
│   │   │   │   ├───social
│   │   │   │   └───uiSelector
│   │   │   └───shared
│   │   │       ├───audio
│   │   │       ├───code
│   │   │       ├───fieldset
│   │   │       ├───input-checkbox
│   │   │       ├───input-email
│   │   │       ├───input-password
│   │   │       ├───input-radio
│   │   │       ├───input-reset
│   │   │       ├───input-search
│   │   │       ├───input-submit
│   │   │       ├───input-switch
│   │   │       ├───input-text
│   │   │       ├───legend
│   │   │       ├───textarea
│   │   │       └───video
│   │   ├───config
│   │   ├───data
│   │   ├───layout
│   │   │   ├───aside
│   │   │   ├───footer
│   │   │   ├───header
│   │   │   ├───main
│   │   │   └───nav
│   │   ├───pages
│   │   │   ├───about
│   │   │   ├───help
│   │   │   ├───home
│   │   │   ├───notFound
│   │   │   └───vote
│   │   ├───scripts
│   │   ├───styles
│   │   │   ├───responsive
│   │   │   └───scss
│   │   └───types
│   └───tests
└───screenShot

``

---------------------------------------
Dario Passariello
<dariopassariello@gmail.com>
