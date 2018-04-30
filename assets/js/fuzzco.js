/*

home.js
--

This script takes the JSON data from the home page for posts and tweets and
randomly displays them into a randomly selected template which is then


Variables from Home HTML:

var TWEETS (json)
var POSTS (json)

These arrays will hold the "id"s of feed.used Tweets/Instagrams/Posts so we don't
repeat content until we're out of unfeed.used content, then we reset.
*/

/* Breakpoints
-------------------------- */
var bp = {
  xl: 1600.0,
  l: 1200.0,
  m: 880.0,
  s: 700.0,
  xs: 420.0
};


// Wrap it all in a jQuery style closure
(function($){
  // Make sure we can push to GA

  $(document).ready(function(){
    //
    // // Hide monster crossing
    // if(Modernizr.touch || $(window).width() < bp.s) {
    //   $('.monster-scare').remove();
    // }

    // // Speed for firefox
    // if(navigator.userAgent.match(/firefox/i)) {
    //   $('body').addClass('firefox');
    //   var osDisplace = 5;
    // }
    //
    // // Speed for ios things
    // if(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
    //   $('body').addClass('ios');
    //   var osDisplace = 10;
    //   var skierSpeed = 1;
    // }

    if($('body').hasClass('home')) {


      /*===================================================

          + PAGE

      ===================================================*/

      var page = {
        goingDown: false,
        stopScrolling: false,
        startScrollTimer: null,
        prevScroll: null,
        newScroll: null,
        scrollSpeed: 1,
        scrollInterval: 30
      };

      page.autoScroll = function() {
        if (!page.stopScrolling && $(window).width() > bp.l) {
          if (page.goingDown) {
            window.scrollBy(0, -page.scrollSpeed);
          } else {
            window.scrollBy(0, page.scrollSpeed);
          }
        }
      };

      page.watchScroll = function() {
        var scrollTop = $(window).scrollTop();

        page.autoScroll();
        // Stop automatic scroll when user is scrolling, and change direction if need be.
        // Adding/subtracting an extra 2 pixels for padding to prevent false positive on scroll.
        if (page.prevScroll + 2 < scrollTop || page.prevScroll - 2 > scrollTop) {
          page.stopScrolling = true;
          clearTimeout(page.startScrollTimer);
          page.startScrollTimer = setTimeout(function() {
            page.stopScrolling = false;
          }, 50);
          if (page.prevScroll + 30 < scrollTop) {
            page.goingDown = false;
          }
          if (page.prevScroll - 30 > scrollTop) {
            page.goingDown = true;
          }
        }
        page.prevScroll = scrollTop;
      };

      /*===================================================

          + FEED

      ===================================================*/

      var feed = {
        sectionCount: 10,
        appendCount: 0,
        currentName: 'curated',
        isLoadingSection: false
      };

      // DOM elements
      feed.el = {
        feed: $("#feed"),
        sections: $("#feed .sections"),
        firstSection: $(".first"),
        lastSection: $(".lasy"),
        toggle: $('.feed-toggle')
      };

      // Source of single templates
    //   feed.source = {
    //     curated: $(".section-curated-template").html(),
    //     work: $(".work-template").html(),
    //     instagram: $(".instagram-template").html(),
    //     twitter: $(".tweet-template").html()
    //   };

      // Compiled templates
      /*
      feed.templates = {
        instagram: Handlebars.compile(feed.source.instagram),
        twitter: Handlebars.compile(feed.source.twitter),
        work: Handlebars.compile(feed.source.work)
      };
      */

    //   // Track used data
    //   feed.used = {
    //     instagram: [],
    //     twitter: [],
    //     work: []
    //   };

      // Setup
      feed.setup = function() {
        if($(window).width() > bp.s) {
          var offCenter = 140;
        } else {
          var offCenter = 80;
        }
        // Set initial scroll position to middle.
        var $theSections = feed.el.sections.find("section"),
          initialOffset = 0;
        initialOffset = $theSections.eq(Math.floor($theSections.length / 2)).offset().top - offCenter;
        page.prevScroll = initialOffset;
        $(window).scrollTop(initialOffset);
        page.goingDown = false;
      };

      // Add a new section
    //   feed.newSection = function(feedName) {
    //     feed.isLoadingSection = true;
    //     if (feedName === 'curated') {
    //       // Prep Curated Source
    //       var $newSection = $(feed.source.curated);
    //     } else {
    //       // Prep Dynamic Source
    //       var sectionSource = $(".section-all-template").html();
    //       var sectionTemplate = Handlebars.compile(sectionSource),
    //         numberOfPosts = 7,
    //         numberOfTweets = 3,
    //         numberOfInstagrams = 2;
    //       // Data source that we'll put post items and tweets into.
    //       var data = {};

        //   // GET POSTS
        //   for (var i = 0; i < numberOfPosts; i++) {
        //     var randomIndex, post = null;
        //     // If this is the last post that isn't in feed.usedPosts, reset feed.usedPosts.
        //     if (feed.used.work.length + 1 == POSTS.length) { feed.used.work = [] };
        //     // Get a random post until it finds one that's not already been feed.used.
        //     while (!post) {
        //       randomIndex = Math.floor(Math.random() * (POSTS.length - 1)),
        //         post = POSTS[randomIndex];
        //       if (feed.used.work.indexOf(post.id) > -1) {
        //         post = null;
        //       }
        //     }
        //     feed.used.work.push(post.id);
        //     // Compile the handlebars template using the post data.
        //     data["work-" + (i + 1)] = templates.work(post);
        //   }

        //   // GET TWEETS
        //   for (var i = 0; i < numberOfTweets; i++) {
        //     var randomIndex, tweet = null;
        //     // If this is the last post that isn't in feed.usedPosts, reset feed.usedPosts.
        //     if (feed.used.twitter.length + 1 == TWEETS.length) feed.used.twitter = [];
        //     // Get a random post until it finds one that's not already been feed.used.
        //     while (!tweet) {
        //       randomIndex = Math.floor(Math.random() * (TWEETS.length - 1)),
        //         tweet = TWEETS[randomIndex];
        //       if (feed.used.twitter.indexOf(tweet.id) > -1) {
        //         tweet = null;
        //       }
        //     }
        //     feed.used.twitter.push(tweet.id);
        //     // Compile the handlebars template using the post data.
        //     data["tweet-" + (i + 1)] = templates.twitter(tweet);
        //   }

        //   // GET INSTAGRAMS
        //   for (var i = 0; i < numberOfInstagrams; i++) {
        //     var randomIndex, instagram = null;
        //     // If this is the last post that isn't in feed.usedPosts, reset feed.usedPosts.
        //     if (feed.used.instagram.length + 1 == INSTAGRAMS.length) feed.used.instagram = [];
        //     // Get a random post until it finds one that's not already been feed.used.
        //     while (!instagram) {
        //       randomIndex = Math.floor(Math.random() * (INSTAGRAMS.length - 1)),
        //         instagram = INSTAGRAMS[randomIndex];
        //       if (feed.used.instagram.indexOf(instagram.id) > -1) {
        //         instagram = null;
        //       }
        //     }
        //     feed.used.instagram.push(instagram.id);
        //     // Compile the handlebars template using the post data.
        //     data["instagram-" + (i + 1)] = templates.instagram(instagram);
        //   }
        //   var $newSection = $(sectionTemplate(data));
        // }
    //     feed.isLoadingSection = false;
    //     return $newSection;
    //   };

      feed.loadImages = function() {
        $('.grid-item').each(function() {
          var gridItem = $(this);
          var $imgs = gridItem.find('img');
          if($imgs.length) {
            $imgs.each(function() {
              var $img = $(this);
              var src = $img.data('src');
              var hdsrc = $img.data('src-hd');

              // If there's an img src
              if(src) {
                if($(window).width() > bp.s) {
                  if(hdsrc) {
                    src = hdsrc;
                  }
                }
                var tmpImg = new Image();
                tmpImg.src = src;
                tmpImg.onload = function() {
                  $img.attr('src', src);
                  if(feed.appendCount === feed.sectionCount) {
                    // Fade in first batch of images
                    $img.fadeIn(200).css({display: 'block'});
                  } else {
                    // Show additional batches immediately
                    $img.show().css({display: 'block'});
                  }
                }
              }
            });
          }
        });
      };
      //
    //   feed.showFeed = function(feedName) {
    //     feed.el.feed.fadeOut(500, function() {
    //       feed.el.sections.html('');
    //       for (var i = 0; i < feed.sectionCount; i++) {
    //         var $newSection = feed.newSection(feedName);
    //         feed.el.sections.append($newSection);
    //         feed.appendCount ++;
    //       }
    //       feed.el.firstSection = feed.el.sections.find("section:first");
    //       feed.el.lastSection = feed.el.sections.find("section:last");
      //
    //       // Image lazy loading
    //       feed.loadImages();
      //
    //       // Set initial scroll position to middle.
    //       var $theSections = feed.el.sections.find("section"),
    //         initialOffset = $theSections.eq(Math.floor($theSections.length / 2)).offset().top;
    //       page.prevScroll = initialOffset;
    //       $(window).scrollTop(initialOffset);
    //       // Fade in active feed
    //       feed.el.feed.fadeIn(500);
      //
    //     });
    //   };

    //   // Toggle between feeds (everything on / off)
    //   feed.el.toggle.click(function(e) {
    //     e.preventDefault();
    //     if (feed.currentName == 'curated') {
    //       feed.showFeed('dynamic');
    //     } else {
    //       feed.showFeed('curated');
    //     }
    //   });


      feed.watchScroll = function() {
        var scrollTop = $(window).scrollTop();
        /*------------------------------------------------------
            Check for Top/Bottom of Page and Load New Section
        ------------------------------------------------------*/
        if (!feed.isLoadingSection) {
          var topReloadPoint = feed.el.firstSection.height();
          var bottomReloadPoint = feed.el.feed.outerHeight() - $(window).height() - feed.el.lastSection.height();
          // Add section to TOP of current feed
          if (scrollTop <= topReloadPoint) {
            $newSection = feed.newSection(feed.currentName);
            feed.el.sections.prepend($newSection);
            feed.appendCount ++;
            feed.loadImages();
            feed.el.lastSection.remove();
            feed.el.lastSection = feed.el.sections.find("section:last");
            feed.el.firstSection = feed.el.sections.find("section:first");
            page.newScroll = scrollTop + feed.el.firstSection.height();
            // Set page.prevScroll to the new scroll so our "page.stopScrolling" check doesn't get conffeed.used.
            page.prevScroll = page.newScroll;
            // Set the scroll.
            $(window).scrollTop(page.newScroll);
          }
          // Add section to BOTTOM of current feed
          if (scrollTop >= bottomReloadPoint) {
            $newSection = feed.newSection(feed.currentName);
            feed.el.firstSection.remove();
            feed.el.sections.append($newSection);
            feed.appendCount ++;
            feed.loadImages();
            feed.el.lastSection = feed.el.sections.find("section:last");
            feed.el.firstSection = feed.el.sections.find("section:first");
            page.newScroll = scrollTop - feed.el.firstSection.height();
            // Set page.prevScroll to the new scroll so our "page.stopScrolling" check doesn't get conffeed.used.
            page.prevScroll = page.newScroll;
            // Set the scroll.
            $(window).scrollTop(page.newScroll);
          }
        }
      };



      /*===================================================

          + INIT

      ===================================================*/

      // Show curated feed initially
      feed.showFeed('curated');

      // Set scrollTop after 1ms to prevent browser from remembering previous scroll position
      setTimeout(function() {
        feed.setup();
        feed.interval = setInterval(page.watchScroll, page.scrollInterval);
        page.interval = setInterval(feed.watchScroll, page.scrollInterval);
      }, 1);

    }

  });
})(jQuery);
