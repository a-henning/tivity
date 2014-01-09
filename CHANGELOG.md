# 0.1.9 (2014-01-9)

* started testing on iPhone and made some css changes
* made some icons and pictures for retina display
* design changes, using ratchet.
* started working on the presentation and adding a lof of optimization notes
* added angular-promise-tracker to manage promises and show a loading animation and implemented it.
* added implemented foursquare search functionality.
* refactored part of the code, got rid of unnecessary directives and services calls in places where they weren't needed.
* unfortunately the search API does not return photos, so I am putting the basis of a multiple photo requests

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

********* Solve the ngShow issue of disappearing only when the service starts running.

**** three flashing dots ... for listing {{food}} in ... ngShow ?

*** ng-cookie, suggest the user to make a shortcut for the application for a fullscreen experience.
*** when scrolling down, hide the top bar, only when starting to scroll up show it, like chrome does it.

* the footer bar, make it with an arrow, letting the user know he can pull it, to see all the options.
* Implement search?!
* Left-right swipe navigation. Left-right in the sections, always right when opening a venue
* Increase size || lower # of sections so the user can click it better-quicker
* More details on the listing page (#of votes, thumbs up, comments, tips, popularity??)
* Finish venue page
* FINAL STAGES: Implement FastClick
* do loading page animation / splash screen and make it transition automatically to the food section
* Increase utility of the navigation bar, scrollable? more sections, about, dev information (timings, network calls etc)
* Custom number of post listings per page (pagination maybe?)
* Control Radius of found places?
* Sort by rating, distance
* Flow animation: sorting, elements appearance
* Make carousel on the detail page
* FUTURE: login to foursquare to comment, recommend, like/dislike, check-in.
* FUTURE: Aggregate further data from gMaps.

