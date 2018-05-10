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

// photo hover functions

/*
 * Url preview script
 * powered by jQuery (https://www.jquery.com)
 *
 * written by Alen Grakalic (http://cssglobe.com)
 * edited by Daan van der Zwaag (https://dvdz.design)
 *
 */

 // function previewImages() {
 //   /* CONFIG */
 //
 //   // get the position of the items
 //   function getPosition(element) {
 //       var xPosition = 0;
 //       var yPosition = 0;
 //
 //       while (element) {
 //           xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
 //           yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
 //           element = element.offsetParent;
 //       }
 //       return {
 //           x: xPosition,
 //           y: yPosition
 //       };
 //    }
 //
 //    // function showDetails() {
 //    //    var ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //width of the window
 //    //    var pos = getPosition(this); //position of the hovered element relative to window
 //    //    var ew = this.offsetWidth; //width of the hovered element
 //    //
 //    //    if (pos.x > (ww / 2)) { //element is on right side of viewport
 //    //        var xOffset = -350;
 //    //        var yOffset = -20;
 //    //    } else { //element is on left side of viewport
 //    //        var xOffset = 350;
 //    //        var yOffset = 20;
 //    //    }
 //    // }
 //
 //    var xOffset = 350;
 //    var yOffset = 20;
 //
 //   // these 2 variable determine popup's distance from the cursor
 //   // you might want to adjust to get the right result
 //
 //   /* END CONFIG */
 //
 //
 //   $("a.screenshot").hover(function(e) {
 //
 //       var ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //width of the window
 //       var pos = getPosition(this); //position of the hovered element relative to window
 //       var ew = this.offsetWidth; //width of the hovered element
 //
 //       if (pos.x > (ww / 2)) { //element is on right side of viewport
 //            xOffset = -350;
 //            yOffset = -20;
 //       } else { //element is on left side of viewport
 //            xOffset = 350;
 //            yOffset = 20;
 //       }
 //
 //       var $this = $(this); // caching $(this)
 //
 //
 //
 //
 //       $("body").append("<div id='previewImage'><img src='" + this.rel + "' alt='rens preview image' />" + "</div>");
 //
 //       $("#previewImage")
 //         .css("top", (e.pageY - xOffset) + "px")
 //         .css("left", (e.pageX + yOffset) + "px")
 //         .fadeIn("fast");
 //     },
 //     function() {
 //
 //       var $this = $(this); // caching $(this)
 //
 //       $("#previewImage").remove();
 //     });
 //
 //   $("a.screenshot").mousemove(function(e) {
 //
 //     $("#previewImage")
 //       .css("top", (e.pageY - xOffset) + "px")
 //       .css("left", (e.pageX + yOffset) + "px");
 //
 //   });
 // };
 //
 //   previewImages();




//
//
//
// /*------------------------------------------------------
//     NEVER ENDING SCROLL
// ------------------------------------------------------*/
// var feed = document.getElementById('sections');
// var lastHeight = feed.lastElementChild.offsetHeight;
//
// // grab the last item and put it first. This will allow us to scroll up from the initial view
// // function lastFirst() {
// // //   ID the last item
// //   lastItm = feed.lastElementChild
// // //  produce a clone of that object
// //   clone = lastItm.cloneNode(true);
// // //  put it above the first section
// //   feed.insertBefore(clone, feed.childNodes[0]);
// // //  take it out of the bottom
// //   feed.removeChild(lastItm);
// // // adjust the initial scrollpoint to align with the real first object
// //   document.documentElement.scrollTop = document.body.scrollTop = lastHeight;
// // }
// // lastFirst()
//
// function appendNextItem() {
// //  Grab the first item in the list—this updates in the DOM as we go
//     affectedNode = feed.firstElementChild;
// //  produce a clone of that object
//     clone = affectedNode.cloneNode(true);
// //  move the clone to the end
//     feed.appendChild(clone);
// //  remove the original from the top
//     feed.removeChild(affectedNode);
//   }
//
// function prependPrevItem() {
// //  Grab the LAST item in the list—this updates in the DOM as we go
//     affectedNode = feed.lastElementChild;
// //  produce a clone of that object
//     clone = affectedNode.cloneNode(true);
// //  move the clone to the top
//     feed.insertBefore(clone, feed.childNodes[0]);
// //  remove the original from the top
//     feed.removeChild(affectedNode);
//   }
//
//
//
// /*
// ========================================================================
// SCROLL LOOP (MAKE APPENDING INFINITE)
//
// This is where we're detect scrolling so we know when to inject the next element
// -------------------------------------------------------------------------
// */
//
// var topOffset = -100;
// var bottomOffset = 100;
//
// // Use this offset to inject the next item before the user scrolls to the absolute last pixel of the page. This way its already there when they arrive
//
//
// /* 🛑STOP 🛑—— Scoll events can fire at a very high rate (one flick of your finger can fire many many scroll events, as each pixel you move is a new event). Therefore, its important to throttle our functions so we're not perfoming unnecessary computations, causing things to get janky.
//
// We'll use RequestAnimationFrame (aka RAF) to handle our scrolling.  RAF is a timed looper than optimizes animations for the browser into a single repaint (see setTimeout for a non-optimized alternative)
//
// 📚Read more about RAF: https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// (PS -- This cross-browser detect is prob not necessary anymore, but I left it in for reference)
// */
// var requestAnimationFrame = window.requestAnimationFrame ||
//              window.webkitRequestAnimationFrame ||
//              window.mozRequestAnimationFrame ||
//              window.msRequestAnimationFrame ||
//              window.oRequestAnimationFrame ||
//              // IE Fallback, you can even fallback to onscroll
//              function(callback){ window.setTimeout(callback, 1000/60) };
//
// // lastPosition will prevent the browser from performing unnecessary functions -- see stop sign below.
// var lastPosition = -1;
//
// // This is the actual magic
// function scrollLoop(){
//
//   // 🛑 If the user has not scrolled since the last time the scrollLoop function ran, we don't need to run our functions
//   if (lastPosition == window.pageYOffset) {
//     // returns true if the lastPosition is the same as current scroll offset
//     requestAnimationFrame(scrollLoop);
//     return false; // quit the loop
//   } else lastPosition = window.pageYOffset; // returning false means the user has scrolled, so we need to update lastPosition to reflect new scroll offset
//
// // 🔥BEGIN ON SCROLL FUNCTIONS
// // -----------------------------------
//   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - bottomOffset)  {
// // Returns true if user has scrolled to within 100px of bottom of the page (as defined by bottomOffset)
//     appendNextItem(); // add the next item so they can keep scrolling
//   }
//
// // if window.pageYOffset < 100  {
// //   console.log("🚭")
// //     // prependPrevItem(); // add the next item so they can keep scrolling
// //   }
//   // END ON SCROLL FUNCTIONS 🔥
//   // -----------------------------------
//
//   requestAnimationFrame( scrollLoop ); // function needs to call itself on scroll so it loops
// }
//
// // Kick it off by calling the loop for the first time
// scrollLoop();
