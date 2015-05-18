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
 * TODO: Put all get methods into a this file
 *
 * TODO: Get a new flyin, crossfade at the end of the video
 *
 * TODO: Make the map button a little more apparently associated with the map
 *
 *
 */



/********************************
 * Variables for functions      *
 ********************************/

var video_time = 12000;
var map_slide_time = 1500;
var description_delay = 5000;
var video_fade = 2500;
var map_state = 1;


/********************************
 *  Map Animation Function for  *
 *  Current Location            *
 ********************************/

function animate_map(locationTag, time){
    $('#map').animate({
        scrollLeft: locationTag.x - ($('#map').width() / 2),
        scrollTop: locationTag.y - ($('#map').height() / 2)
    }, time, 'easeInOutQuad');
}

/**************************
 *  Video Out Animation   *
 **************************/

function video_out(location, mapTime) {
    $("#video").remove();
    $("#map").show();
    animate_map(location, mapTime);
    $("#carousel").show();
}



$(function () {

    if (location.hash !== "") {
        $("#start").removeClass("show");
    }
    $("#start").find("a").on("click", function () {
        $(".contextual_assets").animate({opacity: 0}, 0);
        $("#start").removeClass("show");
        document.getElementById('video').innerHTML = '<video z-index="10000" width="100%" height="100%"  controls autoplay>' +
            '<source src="video/output.webm" type="video/webm"></video>';
        $("#map").hide('blind');
        $("#carousel").hide('blind');
        $(this).off("click");
        $("#video").click(function () {
            video_out(currentLocation, map_slide_time);
            $(".contextual_assets").animate({opacity: 1}, 0);
        });

        $(function () {
            setTimeout(function () {
                $("#video").animate({opacity: 0}, video_fade, 'easeOutQuart', function(){
                    video_out(currentLocation, map_slide_time);
                });
            }, video_time);
        });
    });

    $(window).on('hashchange', function () {
        getImage(location.hash);
        getLocation(location.hash);
        getNavs(location.hash);
        getHspots(location.hash);
        loadMap(location.hash);
        getCIs(location.hash);
        animate_map(currentLocation, map_slide_time);
    });

    if (window.location.hash) {
        dispMainMenu();
        $('#drilldown-1').dcDrilldown({
            speed: 'fast',
            saveState: false,
            showCount: false,
            linkType: 'backlink',
            defaultText: ''
        });
        $(window).trigger('hashchange');
    }


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
                $("#map").scrollLeft($("#map").scrollLeft() + 10 * directionX);
                $("#map").scrollTop($("#map").scrollTop() + 10 * directionY);
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
