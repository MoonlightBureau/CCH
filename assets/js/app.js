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
