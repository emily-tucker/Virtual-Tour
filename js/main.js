$(function () {

    /********************************
     *  Mouse move on Map           *
     ********************************/

    var clicking = false;
    var previousX;
    var previousY;

    $('.mapImage').load(function () {


        $('body').on('mousedown', '#map', function (e) {
            console.log("mouse down");
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
        event.preventDefault()
        console.log("in there");
        console.log(this.href);
        $.fancybox.open({
            type: 'iframe',
            href: this.href,
            title: this.title
        })
    });


    /******************************************
     * carousel item scaling code, haven't figured it out quiet yet
     ******************************************/

    for(var i in thumbs) {
        console.log($("#thumbImage"+String(i)).position());
    }
});
