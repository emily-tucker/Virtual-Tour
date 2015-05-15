/*******************************************
 * This file contains all general functions that are called throughout the tour
 * as well as our main calls to functions in other classes the user progresses through the tour
 *
 * functions not defined here are in their respective js files
 *
 * Functions in contextual.js:
 *      GetImage
 *      GetLocation
 *      GetNavs
 *      GetHspots
 *
 * Functions in carousel_items.js
 *      getCIs
 *
 * Functions in menu.js
 *      dispMenu(items)
 *      dispMenu()
 *
 * Constructors for navigation, locations, hotspots, and main images for locations are in contextual.js
 *
 * Constructor for carousel items is in carousel_itmes.js
 *
 * Constructor for MenuItem is in menu_lists
 *
 * TODO: Put all constructors into a master constructor file
 *
 *
 */



/********************************
 * Variables for functions      *
 ********************************/

var video_time = 11740;
var map_slide_time = 1500;
var description_hide_delay = 5000;
var map_state = 1;


/********************************
 *  Map Animation Function for  *
 *  Current Location            *
 ********************************/

function animate_map(locationTag){
    $('#map').animate({
        scrollLeft: locationTag.x - ($('#map').width() / 2),
        scrollTop: locationTag.y - ($('#map').height() / 2)
    }, 1500, 'easeInOutQuad');
}



$(function () {


    /********************************
     *  Mouse move on Map           *
     ********************************/

    var clicking = false;
    var previousX;
    var previousY;

    $('.mapImage').load(function () {


        $('body').on('mousedown', '#map', function (e) {
            e.preventDefault();
            previousX = e.clientX;
            previousY = e.clientY;
            clicking = true;
        });

        $(document).mouseup(function () {
            clicking = false;
        });

        $('body').on('mousemove', '#map', function (e) {
            if (clicking) {
                e.preventDefault();
                var directionX = (previousX - e.clientX) > 0 ? 1 : -1;
                var directionY = (previousY - e.clientY) > 0 ? 1 : -1;
                console.log("X" + directionX);
                console.log("Y" + directionY);
                $("#map").scrollLeft($("#map").scrollLeft() + 10 * directionX);
                $("#map").scrollTop($("#map").scrollTop() + 5 * directionY);
                previousX = e.clientX;
                previousY = e.clientY;
            }
        });
    });

    /********************************
     *  Map Toggle                  *
     ********************************/

//var mapState = 0;
//
//$(".map_button").click(function(){
//
//    if(mapState == 0) {
//        $("#map").animate({width: window.innerWidth * 0.25, height: window.innerHeight * 0.38});
//        mapState += 1;
//    }
//    else if(mapState == 1){
//        $("#map").animate({width: window.innerWidth * 0.75, height: window.innerHeight * 0.80});
//        mapState += 1;
//    }
//    else if(mapState == 2){
//        $("#map").animate({width: 0, height: 0});
//        mapState = 0;
//    }
//});

    /***********************
     *  fancy box things   *
     ***********************/

    $(document).on('click', '.fancybox', function (event) {
        event.preventDefault();
        $.fancybox.open({
            type: 'iframe',
            href: this.href,
            title: this.title
        })
    });


    /******************************************
     * carousel item scaling code, haven't figured it out quiet yet
     ******************************************/


});
