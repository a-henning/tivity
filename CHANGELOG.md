# 0.1.8 (2014-01-8)

* finally parametrized all the categories routes, we have only one section template now, which loads all section types depending on the received parameter
* trying to figure out a way to propagate the page title upwards in the config, or maybe after ... ???
* made the detail page route with the proper information passed to it from foursquare.
** I'm leveraging foursquare's api to get the exact image size I need for my current window size. shouldn't be a problem on mobile devices with resizing the window, maybe rotation?

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


