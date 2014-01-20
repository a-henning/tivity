# tivity.



tivity is a small mobile application made with Angular and all the best and latest 'good practices'.

The app itself serves like a small location aggregator near your location based on your preferences.

The challenge here is to make it as lightweight as possible and to try and get a near to native performance out of it on different mobile devices.

------------
#### You can access the webapp directly on http://ac.tivity.in (have to do something about the naming). The domain is linked to a heroku app wich has the `production` folder from this repo, builds are updated automagically to the domain.
------------
## ~~The concept~~
Not yet ready from prime time

## ~~Conceptual details~~
Not yet ready from prime time

## ~~Technical Details~~
Not yet ready from prime time

## For the tinkerers

### Update

I installed protractor for tests.

### Setup

To have everything up and running:

* you must be running a local server

* install NodeJS

* clone and run the project

```
$ git clone git://github.com/ArthurianX/tivity.git
$ cd tivity
```
* node package manager will install globally grunt-cli, the cli command line for grunt, karma for testing and bower  web package manager

```
$ sudo npm -g install grunt-cli karma bower
```
* npm install will get all the dependencies from `package.json`, this dependencies are for the build/deployment system of the project

```
$ npm install
```
* bower install will run the contents of `bower.json` to install all the necesarry libraries for the project in the newly created vendor folder

```
$ bower install
```
* now we can run the project in different combinations:
- `grunt` will create a development build that will be placed in the `build` folder
- `grunt watch --force` will create a build and watch for any file changes in the `src` folder and rebuild the entire project in the `build` folder
- `grunt compile` will create a production version of the project, minifying all the templates and JavaScript, compressing CSS into 3 files and one folder placed in `bin` and `production/views` folder. We will have the index file, ONE Javascript file containing everything minimized (even the partials/templates are converted to JS Code), one CSS file and the assets.

* after you run `grunt watch`, grunt will make a build directory, setup a vhost to that with the following rules:

```
<VirtualHost *:80>
    ServerName tivity.localhost
    ServerAlias tivity.localhost.*.xip.io
    DocumentRoot "/your/path/tivity/build"
    ServerAdmin your-email@gmail.com
        <Directory "/your/path/tivity/build">
            Options Indexes FollowSymLinks
            AllowOverride All
            Order allow,deny
            Allow from all
            RewriteEngine on

            # Don't rewrite files or directories
            RewriteCond %{REQUEST_FILENAME} -f [OR]
            RewriteCond %{REQUEST_FILENAME} -d
            RewriteRule ^ - [L]

            # Rewrite everything else to index.html to allow html5 state links
            RewriteRule ^ index.html [L]
        </Directory>
</VirtualHost>
```
* now you can test the page in your browser, or if you have pow.cx you can quickly create a project-name.IP-ADRESS.xip.io link to see it on your device.
* if you don't have a local server and you just want to run the node production:
- run `grunt compile`
- cd to the `production` folder
- run `npm install` to run/fetch NodeJs's dependencies
- run the NodeJS server with `node server.js`
- open `localhost:3000` in your preferred browser
 
## Voila! Instant gratification code soup

 

I also implemented beautiful (read: normal) links, as I will TOTALLY not support any version on IE lower or equal to 10 (if you choose to see it with that). This is for mobile devices only, most of which already support HTML5.




### Build System

* incoming description
