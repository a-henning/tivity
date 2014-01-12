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








# TO DO

****************** Investigate the cause of two or multiple digests running all the time ?
********* define error handling and messages.
*** Implement settings page with dev switches.
*** On the drawer make the button change from more to less when open
*** ng-cookie, suggest the user to make a shortcut for the application for a fullscreen experience.
*** when scrolling down, hide the top bar, only when starting to scroll up show it, like chrome does it.

!!!! On a mobile device, if a user enters directly on a link, he's redirected to 404 not found, I GUESS,
as an idea, we can redirect him to the home page and save the parameter then pass it to
* need to start working the TDD way.
* implement favorites, remove from favorites
* crate map for storing objects in localStorage
* Left-right swipe navigation. Left-right in the sections, always right when opening a venue
* Increase size || lower # of sections so the user can click it better-quicker
* More details on the listing page (#of votes, thumbs up, comments, tips, popularity??)
* Finish venue page
* FINAL STAGES: Implement FastClick
* do loading page animation / splash screen and make it transition automatically to the food section
* Custom number of post listings per page (pagination maybe?)
* Control Radius of found places?
* Sort by rating, distance
* Flow animation: sorting, elements appearance
* Make carousel on the detail page
* FUTURE: login to foursquare to comment, recommend, like/dislike, check-in.
* FUTURE: Aggregate further data from gMaps.

