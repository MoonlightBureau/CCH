


$( document ).ready(function(){
    $('.cch-open').lettering();
    $('.cch-open').find('span').filter( ':odd' ).addClass('letters-odd');
    $('.cch-open').find('span').filter( ':even' ).addClass('letters-even');


    document.querySelectorAll('.move-vert').forEach((elem) => {
    	const modifier = elem.getAttribute('data-modifier')
        const from = elem.getAttribute('data-from')
        const to = elem.getAttribute('data-to')
    	basicScroll.create({
    		elem: elem,
            from: from,
            to: to,
    		direct: true,
    		props: {
    			'--yu': {
    				from: '0',
    				to: `${ 1 * modifier }rem`
    			}
    		}
    	}).start()
    });

    document.querySelectorAll('.move-horiz').forEach((elem) => {
        const modifier = elem.getAttribute('data-modifier')
        const from = elem.getAttribute('data-from')
        const to = elem.getAttribute('data-to')
        basicScroll.create({
            elem: elem,
            from: from,
            to: to,
            direct: true,
            props: {
                '--yu': {
                    from: '0',
                    to: `${ 1 * modifier }rem`
                }
            }
        }).start()
    });



    document.querySelectorAll('.letters-odd').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--r': {
        			from: '0',
        			to: '45deg'
        		}
        	}
    	}).start()
    });

    document.querySelectorAll('.letters-even').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--rr': {
        			from: '0',
        			to: '-45deg'
        		}
        	}
    	}).start()
    });

    document.querySelectorAll('.moneyPiece').forEach((elem) => {

    	const modifier = elem.getAttribute('data-modifier')

    	basicScroll.create({
    		elem: elem,
            from: 'middle-middle',
        	to: 'bottom-top',
    		direct: true,
    		props: {
    			'--translateY': {
    				from: '0',
    				to: `${ 2.4 * modifier }px`
    			}
    		}
    	}).start()
    });

//————————————> DEBUG ME

    $('.cch-events').lettering();
    $('.cch-events').find('span').filter( ':odd' ).addClass('events-odd');
    $('.cch-events').find('span').filter( ':even' ).addClass('events-even');
    document.querySelectorAll('.events-odd').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--events-rotate': {
        			from: '0',
        			to: '45deg'
        		}
        	}
    	}).start()
    });

    document.querySelectorAll('.events-even').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--events-rotate-r': {
        			from: '0',
        			to: '-45deg'
        		}
        	}
    	}).start()
    });

// DEBUG ME <————————————


// <!-- Smooth scrolling on anchor links. effects any link with a hashtag -->

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -120
        }, 800, 'swing', function () {
            // window.location.hash = target;
        });
    });


    // <!-- Make all external links open in blank tab -->
        $(document.links).filter(function() {
            return this.hostname != window.location.hostname;
        }).attr('target', '_blank');

        $(".nav-item").click(function(){
            $("#nav").prop("checked", false);
        });

    // function infinite(){
    //     $('.text-link').css({backgroundPosition:'0px 0px'}).animate({backgroundPosition:"-5000px -2500px"},12000, infinite);
    // }
    // infinite();


});

// NAV FUNCTIONS

window.onload = function() {
    document.getElementsByClassName("nav-item").onclick = function checkoff() {
        document.getElementById("nav").checked = false;
    }
}

// -----------------------------------

// Get window width and height

var w=window,
d=document,
e=d.documentElement,
g=d.getElementsByTagName('body')[0],
x=w.innerWidth||e.clientWidth||g.clientWidth,
y=w.innerHeight||e.clientHeight||g.clientHeight;




// Track Scroll Position
window.onload = function() {
     firstSection = document.getElementById('firstSection');
     lastSection = document.getElementById('lastSection');
     scrollPosition = 0;
     topReloadPoint = firstSection.clientHeight;
     bottomReloadPoint = document.body.clientHeight - lastSection.clientHeight
     bottom = document.body.clientHeight - window.outerHeight + 194
     feed = document.getElementById('sections');
     sections = feed.getElementsByTagName('section')
     sectionCount = sections.length


     ticking = false;
        window.addEventListener('scroll', function(e) {
          scrollPosition = window.scrollY;
          if (scrollPosition <= topReloadPoint) {
              console.log("I'm at the top!")
          }
        //   if (scrollPosition >= bottom) {
        //       console.log("I'm at the bottom!")
          //
        //     //   newSection = newSectionfx(newestSection);
        //     //   firstSection.remove();
        2//     //   feed.appendChild(feed);
        //     //   feed.appendCount ++;
        //   }
        if (scrollPosition >= bottom) {
            console.log("I'm at the bottom!")
            window.scrollTo(0, 0);

          //   newSection = newSectionfx(newestSection);
          //   firstSection.remove();
          //   feed.appendChild(feed);
          //   feed.appendCount ++;
        }

        });
// fin
};


// function trackScroll(scrollPosition) {
// }
// newSectionfx = function() {
//       newestSection = feed;
//     }

    //     showFeed = function() {
    //     fadeOut(500, function() {
    //       feed.html('');
    //       for (var i = 0; i < feed.sectionCount; i++) {
    //         var $newSection = feed.newSection(feedName);
    //         feed.el.sections.append($newSection);
    //         feed.appendCount ++;
    //       }
    //   });
    //   showFeed();
      //
    //       // Set initial scroll position to middle.
    //       var $theSections = feed.el.sections.find("section"),
    //         initialOffset = $theSections.eq(Math.floor($theSections.length / 2)).offset().top;
    //       page.prevScroll = initialOffset;
    //       $(window).scrollTop(initialOffset);
    //       // Fade in active feed
    //       feed.el.feed.fadeIn(500);

    // };






/*------------------------------------------------------
    Check for Top/Bottom of Page and Load New Section
------------------------------------------------------*/
