# SuperDemo

copyright (c) 2022 by dario Passariello

## Welcome

Hi, this is Dario!.
This is the demo about beers labels. Everything there is inventend just to show how I build everything and I came to share all informations.
I use these technologies:

1) Docker for Mongodb as machine on port 27017.
2) Docker api server on node machine port 9000.
3) Docker Client React on node machine on port 3000
4) Docker Client Vue on node machine on port 3001

## save git log to file

If you need to save git log to file use git --no-pager log > git.txt

## Install

Please run docker-compose.yml first. After you can run Client_react. Sorry but Vue version it's not ready at moment.

If you use windows you can mode to project folder and run docker.bat

```js
# NPM INSTALL
# drive:/SuperDemo/client_react/
# drive:/SuperDemo/client_vue/

npm install --prod ( --force if necessary )
```

Fromm shell move to "/client_react/server" and execute "npm install --prod" if necessary
Fromm shell move to "/client_vue/server" and execute "npm install --prod" if necessary

```js
# DO NOT FORGET
# drive:/SuperDemo/client_react/server/
# drive:/SuperDemo/client_vue/server/

npm install --prod
```

I want to make automatic during Docker intallation ... it's a TODO

## Use

From Docker you can run dpSuperDemo.client.react on browser and enjoy my fatique
Inside /client_react/data you have config options.

## manage db

Please, download and install MongoDB Compass from <https://www.mongodb.com/products/compass>.

## what's in this version

1) Docker setup in all parts
2) React version with webpack installed
3) Vue boiler plate works but not project is installed
4) Mongodb server works
5) API punkapi full support

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
10) It's possible to use css, less, sass, scss
11) It's possible to use all kind of image format.
12) All data are global and state and store are stored using dpHelper*
13) Api it's run on node environment
14) x-user is used to validate vote.
15) Same email can't vote more time same item
16) Voting is in realtime.
17) Everyting is SPA
18) All components should be shared between different pages
19) redux is installed but not used... use dpHelper instead.

## Vue version

Caming soon

## dpHelper, stModal

NPM dpHelper and stModal are develop by Dario Passariello.
dpHelper are a collection of globals function and memory state, store management. stModal are a alert, confir replacement.
Copyright by Dario Passariello

## Licence

### Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)

Copyright (c) 2022 Dario Passariello

## Under the following terms

Attribution — You must give appropriate credit, provide a link to the license,
and indicate if changes were made. You may do so in any reasonable manner,
but not in any way that suggests the licensor endorses you or your use.

NonCommercial — You may not use the material for commercial purposes.

NoDerivatives — If you remix, transform, or build upon the material,
you may not distribute the modified material.

No additional restrictions — You may not apply legal terms or technological measures
that legally restrict others from doing anything the license permits.

### Notices

You do not have to comply with the license for elements of the material in the public
domain or where your use is permitted by an applicable exception or limitation.
No warranties are given. The license may not give you all of the permissions necessary
for your intended use. For example, other rights such as publicity, privacy, or moral
rights may limit how you use the material.

## files

.
├───.vscode
├───api
│   ├───bin
│   ├───data
│   ├───public
│   │   └───stylesheets
│   ├───routes
│   └───views
├───client_react
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
│   │   ├───redux
│   │   │   ├───actions
│   │   │   └───reducers
│   │   │       └───shared
│   │   │           ├───auth
│   │   │           └───test
│   │   ├───scripts
│   │   ├───styles
│   │   │   ├───responsive
│   │   │   └───scss
│   │   └───typings
│   └───tests
├───client_vue
│   ├───build
│   ├───config
│   ├───demo
│   ├───dist
│   │   └───static
│   │       ├───css
│   │       └───js
│   ├───server
│   ├───src
│   │   ├───assets
│   │   ├───components
│   │   └───router
│   ├───static
│   └───test
│       ├───e2e
│       │   ├───custom-assertions
│       │   └───specs
│       └───unit
│           └───specs
├───mongo
└───screenShot
