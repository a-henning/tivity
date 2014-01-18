# 0.2.6 (2014-01-16)

* made a global even listener when the drawer is open, clicking anywhere but on the more button will close the drawer
* hooked in MongoLabs MongoDB service
* created list/add/edit methods for MongoDB Collection and custom ID's
* started working on the cookie - storageManagement - MongoDB communication.
* replaced localStorage service with ngCookies service
* renamed previous storeManagement factory service to mongoService
* created the real storeManagement service which uses mongoService and ngCookies service
* created a object with methods that handle cookie reading and mongoDb inseration, inspirationally called `tellMongo`



# 0.2.5 (2014-01-16)

* friendly URL's for venues (venue_type/id/venue_name) - the foursquare way :)
* updated semantic versioning system, still not there yet.
* meddled with the build configuration, still needs optimization
* searchBar directive made global.


# 0.2.4 (2014-01-14)

* started working on the settings page.
* added icons
* added the about page
* added nodeJS+express barebone server for extra routing capabilities
* started working on a automated production release, inside
* on grunt compile, everything is minified and copied to the nodeJS production folder in views.

# 0.2.3 (2014-01-13)

* gmaps module is now working properly
* used $rootScope to listen to $stateParams change to set a proper body class for each page.
* set the map container functionality.
* finished map opening and closing with it's adjacent functionality.
* made a scroolTo snippet so the map always opens at the top.
* made most the detail page design.
* fixed a error when image count was greater than the actual image objects.
* readding angular-touch for ng-carousel. :(
* added angular-carousel
* disabled hammerJS
* carousel fixes (promise to wait for images to load, overall functionality)


# 0.2.2 (2014-01-12)

* got almost all of the data on the details page.
* tried angular-pull-to-refresh library, I can make it better from scratch.
* integrating google maps files and API.
* switching to angular-google-maps.


# 0.2.1 (2014-01-11)

* Switching to angular 1.2.9
* made search directive linked to the search service
* hooking up ngAnimate.
* made search template for the section pages with ngAnimate.
* added ngTouch angular library
* replaced ngTouch with a more mature touch library, Hammer.js, the bridge to Angular is made by angular-hammer module.


# 0.2.0 (2014-01-10)

* added & implemented foursquare search functionality service.
* refactored part of the code, got rid of unnecessary directives and services calls in places where they weren't needed.
* unfortunately the search API does not return photos, so I am putting the basis of a multiple photo requests
//TODO: this will be a very COSTLY service [network req wise], need to find a better way to do this.
* some graphic updates.
* added ngCookies module
* removed angular cookies and added angular-local-storage

# 0.1.9 (2014-01-9)

* started testing on iPhone and made some css changes
* made some icons and pictures for retina display
* design changes, using ratchet.
* started working on the presentation and adding a lof of optimization notes
* added angular-promise-tracker to manage promises and show a loading animation and implemented it.

# 0.1.8 (2014-01-8)

* finally parametrized all the categories routes, we have only one section template now, which loads all section types depending on the received parameter
* trying to figure out a way to propagate the page title upwards in the config, or maybe after ... ???
* made the detail page route with the proper information passed to it from foursquare.
* I'm leveraging foursquare's api to get the exact image size I need for my current window size. shouldn't be a problem on mobile devices with resizing the window, maybe rotation?

# 0.1.7 (2014-01-7)

* finished the fetchLocations directive, reusability awesomeness
* finished the footer directive
* still have to hook in the footer menu.
* created all the categories, future task: parametrize the categories and all the paths.

# 0.1.6 (2014-01-6)

* made some changes to the way karma and grunt-karma do things, there were some blocking issues after the update
* lost of maintenance
* started moving the entire fetch location logic to a directive, at the benefit of ~400 lines of code and for reusability on all the categories
* parametrized the section type inside the directive
* started to make the footer bar also a directive, economy is the main word.


# 0.1.5 (2014-01-5)

* 'argumentized' the foursquare factory service, need to find a good coding architecture to switch the different categories, considering animations and both pages visible during swipe.
* ordered the readme.md a bit
* implemented geolocation and made the foursquare service to run through it


# 0.1.1 (2013-12-15)

* Took ng-boilerplate-advanced to use for this project.
* added ratchet mobile library
* modified compilation files to compile the ratchet and removed all things related to bootstrap

