# tivity.



Based on the ng-boilerplate-advanced (which is based on ng-boilerplate by ngpb [https://github.com/ngbp/ng-boilerplate]), is a small mobile application made with Angular and all the best and latest 'good practices'.

The app itself serves like a small location aggregator near your location based on your preferences.

The challenge here is to make it as lightweight as possible and to try and get a near to native performance out of it on different mobile devices.


## ~~The concept~~
Not yet ready from prime time

## ~~Conceptual details~~
Not yet ready from prime time

## ~~Technical Details~~
Not yet ready from prime time

## For the tinkerers
### Setup

To have everything up and running:

* you must be running a local server

* install NodeJS

* clone and run the project

```
$ git clone git://github.com/ArthurianX/tivity.git
$ cd tivity
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```
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
 

I also implemented beautiful (read: normal) links, as I will TOTALLY not support any version on IE lower or equal to 10 (if you choose to see it with that). This is for mobile devices only, most of which already support HTML5.




### Build System

The build system is based on ng-boilerplate's build system, so all thanks go there, I just fine tuned it a bit, updated the libraries, worked out some kinks, for IN-depth details and a good read on best practices (IMHO) go to https://github.com/ngbp/ng-boilerplate
