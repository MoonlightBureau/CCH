


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

// MAILCHIMP FUNCTION--leaving this for now
//
// $('.myform').submit(function(e) {
//   var $this = $(this);
//   $.ajax({
//       type: "GET", // GET & url for json slightly different
//       url: "http://capitolciderhouse.list-manage2.com/subscribe/post-json?c=?",
//       data: $this.serialize(),
//       dataType    : 'json',
//       contentType: "application/json; charset=utf-8",
//       error       : function(err) { alert("Could not connect to the registration server."); },
//       success     : function(data) {
//           if (data.result != "success") {
//               // Something went wrong, parse data.msg string and display message
//           } else {
//               // It worked, so hide form and display thank-you message.
//           }
//       }
//   });
//   return false;
// });

// END DOCUMENT READY
});

// NAV FUNCTIONS

window.onload = function() {
    document.getElementsByClassName("nav-item").onclick = function checkoff() {
        document.getElementById("nav").checked = false;
    }
}
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
// -----------------------------------

// Get window width and height

// var w=window,
// d=document,
// e=d.documentElement,
// g=d.getElementsByTagName('body')[0],
// x=w.innerWidth||e.clientWidth||g.clientWidth,
// y=w.innerHeight||e.clientHeight||g.clientHeight;
//
//
//
// newSection = function() {
//     console.log("you're doing it peter")
// }
//
//
//
// var feed = document.getElementById('content-wrapper');
// var sections = document.getElementsByTagName('section');
// var itm = feed.lastElementChild;
// function myFunction() {
//  var clone = itm.cloneNode(true);
//  feed.appendChild(clone);
// }
//
// // Track Scroll Position
// window.onload = function() {
//      firstSection = document.getElementById('firstSection');
//      lastSection = document.getElementById('lastSection');
//      scrollPosition = 0;
//      topReloadPoint = firstSection.clientHeight;
//      bottomReloadPoint = document.body.clientHeight - lastSection.clientHeight - 200
//      bottom = document.body.clientHeight - window.outerHeight + 194
//     //  feed = document.getElementById('sections');
//     //  sections = feed.getElementsByTagName('section')
//      sectionCount = sections.length
//
//      var feed = {
//        sectionCount: 10,
//        appendCount: 0,
//        currentName: 'curated',
//        isLoadingSection: false
//      };
//
//      feed.el = {
//        feed: d.getElementById('feed'),
//        sections: d.getElementById('sections'),
//        firstSection: d.getElementById('firstSection'),
//        lastSection:d.getElementById('lastSection'),
//      };
//
//
//      ticking = false;
//         window.addEventListener('scroll', function(e) {
//           scrollPosition = window.scrollY;
//           if (scrollPosition <= topReloadPoint) {
//               console.log("I'm at the top!")
//           }
//         if (scrollPosition >= bottomReloadPoint) {
//             console.log("I'm at the bottom!")
//
//         }
//
//         });
// fin
// };

// MailChimp function






/*------------------------------------------------------
    Check for Top/Bottom of Page and Load New Section
------------------------------------------------------*/
