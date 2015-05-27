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
 * TODO: Get a new flyin
 *
 *
 */



/********************************
 * Variables for functions      *
 ********************************/
var prevCampus = true;
var video_time = 15000;
var map_slide_time = 1500;
var description_delay = 5000;
var video_fade = 2500;
var map_state = 1;
var map_in_time = 1500;
var map_button_in_time = 750;
var first_time = false;
var is_mobile = false;
var tour_track = 0;

var currentLocation; //used by just about everything, initialized here
var previousLocation = locations[0]; //used for off campus/on campus switch



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

/*************************************************
 * Map and map_button animate in
 *************************************************/

function map_in(map_time, button_time){
    $("#map").animate({right: 0}, map_time, 'easeInOutQuad', function(){
        $(".map_button_initial").animate({right: 0}, 0, function(){
            $(".map_button_initial").animate({top: 0 + ($("#map").height() - ($(".map_button_initial").height() * 2.15))}, button_time, 'easeInOutQuad')
        });
    });
}

/******************************************
 * Get location method which takes a tag from the hash to create the current location
 *
 * @param locationTag
 *******************************************/

function getLocation(locationTag) {
    $('.caption_wrapper').hide();
    var inner_html = "";
    for (var i in locations) {
        if (locationTag === locations[i].tag) {
            inner_html = "<div class='caption_wrapper'><div class='caption'><div id='caption_title'>" +
                locations[i].name + "</div><div id='caption_text' class='description'>" + locations[i].description +
                "</div></div></div>";
            $('#text_overlay').html(inner_html);
            $('.description').delay(description_delay).slideUp("slow");
            $("#caption_title").click(function () {
                $(".description").slideToggle("slow");
            });
            currentLocation = locations[i];
            if (currentLocation && currentLocation.onCampus) {
                previousLocation = currentLocation;
            }
            break;
        }
    }
}


/*******************************************************
 *
 *  Render all navigation items at the current location
 *
 *  Including buttons
 *
 * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
 *
 * ******************************************************/

function getNavs(locationTag) {
	console.log(tour_track);
    $('.tipsy:last').remove();
	 if (currentLocation.locationType === "default") {
        var inner_html = "<img onclick=javascript:window.location.hash='#begin' class='to_begin " +
            "arrow' src='imgs/right_slate.png' " +
            "onmouseover=this.src='imgs/nav_arrows/right_offcampus_hover.png'" +
            " onmouseout=this.src='imgs/nav_arrows/right_offcampus.png " +
            "title = 'to Athletics' />" +
            "<img onclick=javascript:window.location.hash='#library' class='to_studentlife " +
            "arrow' src='imgs/nav_arrows/left_crimson.png' " +
            "onmouseover=this.src='imgs/nav_arrows/left_newtype_hover.png'" +
            " onmouseout=this.src='imgs/nav_arrows/left_crimson.png' " +
            "title = 'to the Default tour' />";
	 }
    /*
    if (currentLocation.locationType === "academic" || currentLocation.locationType === "walkway") {
        var inner_html = "<img onclick=javascript:window.location.hash='#fieldhouse' class='to_athletics " +
            "arrow' src='imgs/right_slate2.png' " +
            "onmouseover=this.src='imgs/right_newtype_hover2.png'" +
            " onmouseout=this.src='imgs/right_slate2.png' " +
            "title = 'to Athletics' />" +
            "<img onclick=javascript:window.location.hash='#library' class='to_studentlife " +
            "arrow' src='imgs/left_crimson.png' " +
            "onmouseover=this.src='imgs/left_newtype_hover.png'" +
            " onmouseout=this.src='imgs/left_crimson.png' " +
            "title = 'to Student Life' />";
    }
    if (currentLocation.locationType === "studentlife") {
        inner_html = "<img onclick=javascript:window.location.hash='#fieldhouse' class='studentlife_to_athletics " +
            "arrow' src='imgs/left_slate2.png' " +
            "onmouseover=this.src='imgs/left_newtype_hover2.png'" +
            " onmouseout=this.src='imgs/left_slate2.png' " +
            "title = 'to Athletics' />" +
            "<img onclick=javascript:window.location.hash='#taylor' class='to_academics " +
            "arrow' src='imgs/right_whiteSL.png' " +
            "onmouseover=this.src='imgs/right_whiteSL_hover.png'" +
            " onmouseout=this.src='imgs/right_whiteSL.png' " +
            "title = 'to Academics' />";
    }
    if (currentLocation.locationType === "athletic") {
        inner_html = "<img onclick=javascript:window.location.hash='#library' class='to_studentlife " +
            "arrow' src='imgs/left_crimson.png' " +
            "onmouseover=this.src='imgs/left_newtype_hover.png'" +
            " onmouseout=this.src='imgs/left_crimson.png' " +
            "title = 'to Student Life' />" +
            "<img onclick=javascript:window.location.hash='#taylor' class='to_academics " +
            "arrow' src='imgs/right_whiteSL.png' " +
            "onmouseover=this.src='imgs/right_whiteSL_hover.png'" +
            " onmouseout=this.src='imgs/right_whiteSL.png' " +
            "title = 'to Academics' />";
    }
    */
    var items = [];
    for (var i in navs) {
        if (currentLocation.onCampus) {
            if (navs[i].tag === locationTag){
                if(first_time){
                    inner_html += "<button class='map_button_initial'>Expand Map</button>"
                }
                else{
                    if(map_state === 2) {
                        inner_html += "<button class='map_button'>Collapse Map</button>"
                    }else if(map_state === 1) {
                        inner_html += "<button class='map_button'>Expand Map</button>"
                    }else if(map_state === 0) {
                        inner_html += "<button class='map_button'>Show Map</button>"
                    }
                }
                inner_html +=

                    "<button class='switch_button' onclick=javascript:window.location.hash='#mainstreet'>Go Off Campus</button>" + "<button class='hide_button' id='hide'>x</button>" + "<button class='restart_button' onclick=javascript:window.location='#begin'>Restart Tour</button>";
					if(tour_track === navs[i].tourTracks && tour_track === 0){
						inner_html +=
                    "<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                    navs[i].styleClass + " arrow' src='imgs/" + navs[i].direction + "_white.png'" +
                    "onmouseover=" + "this.src='imgs/" + navs[i].direction + "_hover.png'" +
                    " onmouseout=" + "this.src='imgs/" + navs[i].direction + "_white.png' " +
                    "title='" + navs[i].ttip + "' />";
					items.push(navs[i].styleClass);
					}
					if(tour_track === navs[i].tourTracks && tour_track === 1){
						inner_html +=
                    "<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                    navs[i].styleClass + " arrow' src='imgs/" + navs[i].direction + "_white.png'" +
                    "onmouseover=" + "this.src='imgs/" + navs[i].direction + "_hover.png'" +
                    " onmouseout=" + "this.src='imgs/" + navs[i].direction + "_white.png' " +
                    "title='" + navs[i].ttip + "' />";
					items.push(navs[i].styleClass);
					}
					if(tour_track === navs[i].tourTracks && tour_track === 2){
						inner_html +=
                  	"<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                    navs[i].styleClass + " arrow' src='imgs/" + navs[i].direction + "_red.png'" +
                    "onmouseover=" + "this.src='imgs/" + navs[i].direction + "_red_hover.png'" +
                    " onmouseout=" + "this.src='imgs/" + navs[i].direction + "_red.png' " +
                    "title='" + navs[i].ttip + "' />";
					items.push(navs[i].styleClass);
					}
					if(tour_track === navs[i].tourTracks && tour_track === 3){
						inner_html +=
                    "<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                    navs[i].styleClass + " arrow' src='imgs/" + navs[i].direction + "_slate.png'" +
                    "onmouseover=" + "this.src='imgs/" + navs[i].direction + "_slate_hover.png'" +
                    " onmouseout=" + "this.src='imgs/" + navs[i].direction + "_slate.png' " +
                    "title='" + navs[i].ttip + "' />";
					items.push(navs[i].styleClass);
					}
					
					
					
            }
            $("#navigation").html(inner_html);
            $(".arrow").tipsy({gravity: 's', fade: true, html: true});
            for (var i in items) {
                for (var j in navs) {
                    if (items[i] === navs[j].styleClass) {
                        $("." + navs[j].styleClass).css({bottom: navs[j].y + "%", "left": navs[j].x + "%"});
                    }
                }
            }
        }
        if (!currentLocation.onCampus){
            if (navs[i].tag === locationTag) {
                inner_html += "<button class='map_button'>Map</button> +  <button class='switch_button' onclick=javascript:window.location.hash='"+previousLocation.tag+"'>Go On Campus</button><img onclick=javasript:window.location.hash='" + navs[i].dest + "' class='" +
                    navs[i].direction + "_offcampus arrow' src='imgs/" + navs[i].direction + "_offcampus.png'" +
                    "onmouseover=" + "this.src='imgs/" + navs[i].direction + "_offcampus_hover.png'" +
                    " onmouseout=" + "this.src='imgs/" + navs[i].direction + "_offcampus.png' " +
                    "title='" + navs[i].ttip + "' />";
            }

            $("#navigation").html(inner_html);
            $(".arrow").tipsy({gravity: 's', fade: true, html: true});
        }
            $(".map_button_initial").click(function () {
                if (map_state === 0) {
                    $(".map_button_initial").text("Expand Map");
                    $("#map").show(function () {
                        $("#map").animate({
                            width: window.innerWidth * 0.25,
                            height: window.innerHeight * 0.38
                        }, function () {
                            animate_map(currentLocation, map_slide_time);
                        });
                    });
                    map_state += 1;
                }
                else if (map_state === 1) {
                    $(".map_button_initial").text("Collapse Map");
                    $("#map").animate({
                        width: window.innerWidth * 0.75,
                        height: window.innerHeight * 0.85
                    }, function () {
                        animate_map(currentLocation, map_slide_time);
                    });
                    $(".map_button_initial").animate({right: window.innerWidth * 0.75});
                    map_state += 1;
                }
                else if (map_state === 2) {
                    $(".map_button_initial").text("Show Map");
                    $("#map").animate({width: '0', height: '0'}, function () {
                        $("#map").hide('blind');
                    });
                    $(".map_button_initial").animate({right: window.innerWidth * 0.001});
                    map_state = 0;
                }
            });
            $(".map_button").click(function () {
                if (map_state === 0) {
                    $(".map_button").text("Expand Map");
                    $("#map").show(function () {
                        $("#map").animate({
                            width: window.innerWidth * 0.25,
                            height: window.innerHeight * 0.38
                        }, function () {
                            animate_map(currentLocation, map_slide_time);
                        });
                    });
                    map_state += 1;
                }
                else if (map_state === 1) {
                    $(".map_button").text("Collapse Map");
                    $("#map").animate({
                        width: window.innerWidth * 0.75,
                        height: window.innerHeight * 0.85
                    }, function () {
                        animate_map(currentLocation, map_slide_time);
                    });
                    $(".map_button").animate({right: window.innerWidth * 0.75});
                    map_state += 1;
                }
                else if (map_state === 2) {
                    $(".map_button").text("Show Map");
                    $("#map").animate({width: '0', height: '0'}, function () {
                        $("#map").hide('blind');
                    });
                    $(".map_button").animate({right: window.innerWidth * 0.001});
                    map_state = 0;
                }
            });
        }
    if(!first_time && map_state != 0){
        $(".map_button").animate({top: 0 + ($("#map").height() - ($(".map_button").height() * 2.15))}, 0);
    }
    else if (map_state === 0){
        $(".map_button").animate({top: window.innerHeight * 0.3}, 0);
    }
    if(first_time){
        first_time = false;
    }
}

/**************************************************************
 * Render all hotspots at the current location
 * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#Hurst"
 *****************************************************************/
function getHspots(locationTag) {
    $('.tipsy:last').remove();
    var inner_html = "";
    var items = [];
    for (var i in hotspots) {
        if (hotspots[i].tag === locationTag) {
            inner_html += "<a href=" + hotspots[i].dest + " " + "target='_blank'><img class='" +
                hotspots[i].styleClass + " hotspot' src='imgs/logo_hotspot.png'" +
                "onmouseover=" + "this.src='imgs/logo_hotspot_hover.png'" +
                " onmouseout=" + "this.src='imgs/logo_hotspot.png' " +
                "title='" + hotspots[i].ttip + "' /></a>";
            items.push(hotspots[i].styleClass);
        }
        $("#hotspots").html(inner_html);
        $(".hotspot").tipsy({gravity: 'sw', fade: true, html: true});
        for (var i in items) {
            for (var j in hotspots) {
                if (items[i] === hotspots[j].styleClass) {
                    $("." + hotspots[j].styleClass).css({bottom: hotspots[j].y + "%", "left": hotspots[j].x + "%"});
                }
            }
        }
    }
}

/******************************************************
 * Render main image for the current location
 * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
 * locationTag should match image file, i.e "hurst_main.jpg" (substring removes "#")
 *******************************************************/
function getImage(locationTag) {
    var mainImageDiv = "#main_image";
    $(mainImageDiv).html("<img src='imgs/" + locationTag.substring(1) + "_main.jpg'/>");
}


/**********************************
 * Load static image map screen
 * for on and off campus
 *********************************/

var prevCampus = true;

function loadMap(locationTag) {
    for (var i in locations) {
        if (locations[i].tag === locationTag) {
            if (prevCampus != locations[i].onCampus) {
                if (!locations[i].onCampus) {
                    document.getElementById("map").innerHTML = '<img class="mapImage" src="imgs/offcampusmap.png">';
                }
                else{
                    document.getElementById("map").innerHTML = '<img class="mapImage" src="imgs/oncampusmap.jpg">';
                }
            }
            $('.mapImage').load(function ()
            {
                //animate_map(currentLocation);
            });
            prevCampus = locations[i].onCampus;
        }
    }
}



/*************************************************
 * Calling of all functions
 *************************************************/


$(function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        is_mobile = true;
    }

    detectIE();
	
/*****************************
		Tour Instances
*****************************/
	console.log(tour_track);
	
	$('body').on('click', '.to_default', function () {
		tour_track = 0;
		/*console.log(tour_track);*/
	});
	
	$('body').on('click', '.to_academics', function () {
		tour_track = 1;
		/*console.log(tour_track);*/
	
	});
	
	$('body').on('click', '.to_studentlife', function () {
		tour_track = 2;
		/*console.log(tour_track);*/
	});
	
	$('body').on('click', '.to_athletics', function () {
		tour_track = 3;
		/*console.log(tour_track);*/
	});
function detectIE() {
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if (ms_ie) {
        $(function(){
            $("#start").removeClass("show");
            window.location.hash='#begin'

        });

    }
    else{
        $("#start").find("a").on("click", function () {
            first_time = true;
            $("#start").removeClass("show");
            document.getElementById('video').innerHTML = '<video z-index="10000" width="100%" height="100%"  controls autoplay>' +
                '<source src="video/fly-in2.webm" type="video/webm"></video>';
            $("#map").css({"right" : "-30%"});
            $("#map").hide('blind');
            $("#carousel").hide('blind');
            $(this).off("click");
            $("#video").click(function () {
                video_out(currentLocation, map_slide_time);
                map_in(map_in_time, map_button_in_time);
            });

            $(function () {
                setTimeout(function () {
                    $("#video").animate({opacity: 0}, video_fade, 'easeOutQuart', function(){
                        video_out(currentLocation, map_slide_time);
                        map_in(map_in_time, map_button_in_time);
                    });
                }, video_time);
            });
        });
        if (location.hash !== "") {
            $("#start").removeClass("show");
        }
    }
}





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
            setTimeout(function(){
            if (clicking) {
                e.preventDefault();
                var directionX = (previousX - e.clientX) > 2 ? 1 : (previousX - e.clientX) < -2 ? -1 : 0;
                var directionY = (previousY - e.clientY) > 2 ? 1 : (previousY - e.clientY) < -2 ? -1 : 0;
                $("#map").scrollLeft($("#map").scrollLeft() + 10 * directionX);
                $("#map").scrollTop($("#map").scrollTop() + 10 * directionY);
                previousX = e.clientX;
                previousY = e.clientY

                console.log(previousX);


            }
        }, 1000/24)});
    });

    /***********************
     *  fancy box things   *
     *  for the carousel   *
     ***********************/

    $(document).on('click', '.fancybox', function (event) {
        event.preventDefault();
        $.fancybox.open({
            type: 'iframe',
            href: this.href,
            title: this.title
        })
    });
});

/***********************
     *  Carousel Items generator   *
	     ***********************/
            
            /**Functions that shows or hides Carousel based on mobility**/

var is_mobile=false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 is_mobile=true;
}
var showHide = true;
if(is_mobile){
    showHide = false;
}else{
    /*alert("Showhide: "+showHide);*/
}

 $(document).ready(function(){
    $("#hide").click(function(){
		/*alert("Clicked");*/
		if(showHide){
	
		document.getElementById('carousel').style.display = 'none';
		showHide = false;
		document.getElementById("myImg").style.height = "300px";

}	
		else{
		document.getElementById('carousel').style.display = 'block';
		showHide = true;}
    });
});
	
var ciCount = 0;

var carouselItems = [];
var thumbs = [];

function getCIs(tag) /*Carousel Items*/{
    caouselItems = [];
    thumbs = [];
    var inner, ci, i, j, a;
    ciCount = 0;
    inner = "";
    for(i in CIs) {
        ci = CIs[i];
        for (j in ci.tags) {
            if (ci.tags[j] === tag) {
                //build carousel item
                a = "<div class='citem' id='citem" + ciCount + "'>";
                if (ci.video) {
                    a += ci.html;
                } else {
                    a += "<a class='fancybox' data-fancybox-group='gallery' href = '"+ci.full.fname+"' title='"+ci.html+"' rel='gallery'>";
                }
                a += "<div class='Thumbimage' id='thumbImage" + ciCount + "'>";
                a += "<img id='image 'src='"+ci.thumb.fname+"' alt=''>";
                a += "<div class='Thumbcaption'>";
                a += "<p>'"+ci.ttip+"'</p>";
                a += "</div></div></a></div>";
                inner += a;
                carouselItems.push('citem' + String(ciCount));
                thumbs.push('thumbImage' + String(ciCount));
                ciCount += 1;
                break;
            }
        }
    }
    width = window.innerWidth - (ciCount * 160);
    margin = width / (ciCount-1) * .75;
	
    $("#carousel").html(inner);
    $(".citem").css("margin-left", margin);

    return carouselItems;
}


 