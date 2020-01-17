var arrow = '<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="revisions" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="take2-copy-14" transform="translate(-1310.000000, -2374.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Group-4" transform="translate(1232.000000, 2357.000000)"><g id="Group-3"><g id="Group-6-Copy-2" transform="translate(0.480000, 0.000000)"><path d="M88.4546919,36.0602346 L96.7166879,27.7982802 C97.1162035,27.402998 97.1162035,26.7570328 96.7166879,26.3575172 L88.4546919,18.0997962 C88.0594512,17.7002806 87.4134445,17.7002806 87.0139704,18.0997962 L86.0704645,19.0433021 C85.6624821,19.4470511 85.6709489,20.1057995 86.0874811,20.5010402 L91.2087182,25.3800196 L78.9942322,25.3800196 C78.4289919,25.3800196 77.9742348,25.8347768 77.9742348,26.4000171 L77.9742348,27.7600137 C77.9742348,28.325254 78.4289919,28.7800111 78.9942322,28.7800111 L91.2087182,28.7800111 L86.0874811,33.6589906 C85.6752238,34.0542313 85.6667155,34.7129797 86.0704645,35.1167287 L87.0139704,36.0602346 C87.4092112,36.4597502 88.0552178,36.4597502 88.4546919,36.0602346 Z" id="A"></path></g></g></g></g></g></svg>';

$(document).ready(function(){
  $('.varietyCarousel').slick({
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-next">'+ arrow +'</button>',
    nextArrow: '<button type="button" class="slick-next">'+ arrow +'</button>'
  });
});


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
            from: 'middle-bottom',
        	to: 'bottom-middle',
    		direct: true,
    		props: {
    			'--translateY': {
    				from: '0',
    				to: `${ 2.4 * modifier }px`
    			}
    		}
    	}).start()
    });

// ————————————> DEBUG ME

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


});

function checkoff() {
   document.getElementById("nav").checked = false;
   console.log("howdy")
}

// Make all external links open in a new tab

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
// -----------------------------------


// Remove old events---------------------

    var d = new Date()
    var e = (d.getTime() / 1000)
    var f = parseInt(e)
    var weekOut = (f + 700000 )
    var event = Array.from(document.getElementsByClassName('event-item'))

    event.forEach(function(event) {
        eventDate = event.dataset.date
        g = parseInt(eventDate)

        if (g < f) {
            event.parentNode.removeChild(event)
        }

        if (g > weekOut) {
            event.parentNode.removeChild(event)
        }
    });


// ------------------------------------------





function previewImages() {
  function getPosition(element) {
      var xPosition = 200;
      var yPosition = 80;

      while (element) {
          xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
          yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
          element = element.offsetParent;
      }
      return {
          x: xPosition,
          y: yPosition
      };
   }
   var xOffset = 50;
   var yOffset = 20;


  $("a.screenshot").hover(function(e) {

      var ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //width of the window
      var pos = getPosition(this); //position of the hovered element relative to window
      var ew = this.offsetWidth; //width of the hovered element

      if (pos.x > (ww * 0.75)) { //element is on right side of viewport
           xOffset = -850;
           yOffset = 400;
      }
        else if (pos.x > (ww / 2)) { //element is in the middle of viewport
            xOffset = -500;
            yOffset = 400;
        }
      else { //element is on left side of viewport
           xOffset = -300;
           yOffset = 400;
      }

      var $this = $(this); // caching $(this)


      $("body").append("<div id='previewImage'><img src='" + this.rel + "' alt='rens preview image' />" + "</div>");

      $("#previewImage")
        .css("top", (e.pageY - xOffset) + "px")
        .css("left", (e.pageX + yOffset) + "px")
        .fadeIn("fast");
    },
    function() {

      var $this = $(this); // caching $(this)

      $("#previewImage").remove();
    });

  $("a.screenshot").mousemove(function(e) {

    $("#previewImage")
      .css("top", (e.pageY - yOffset) + "px")
      .css("left", (e.pageX + xOffset) + "px");

  });
};

  previewImages();
