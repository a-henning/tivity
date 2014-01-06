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

## ~~For the tinkerers~~
Not yet ready from prime time

### Setup

To have everything up and running:

* `npm install` to get all the packages through NodeJs's npm
* `bower install` to install vendor specific libraries (Angular, blah blah)
* and finally to kick it off and have it rebuilt everytime you make a change start it with `grunt watch`
* karma runs continuously and live reload makes sure it automatically refreshes your page.
* the project is generated inside the build directory, make sure to point your vhost there if you want to.

I also implemented beautiful links, as I will TOTALLY not support any version on IE lower or equal to 10 (if you choose to see it with that). This is for mobile devices only, most of which already support HTML5.

To have the beautiful (normal :) ) links you have to place this in your .htaccess or in the vhost declaration:

```
RewriteEngine on
# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Rewrite everything else to index.html to allow html5 state links
RewriteRule ^ index.html [L]
```



### Build System

The build system is based on ng-boilerplate's build system, so all thanks go there, I just fine tuned it a bit, updated the libraries, worked out some kinks, for IN-depth details and a good read on best practices (IMHO) go to https://github.com/ngbp/ng-boilerplate
