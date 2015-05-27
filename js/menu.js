function dispMenu(items) {
    var i;
    var inner = "";
    var mi, a, icon;
    for (i in items) {
        inner += "<li>";
        mi = items[i];
        a = '';
        icon = "<i class='"+mi.icon+"'></i>";

        if(mi.href === "#") { //Place holder links break currently
            mi.href = '';
        }

        if (mi.target === "locations") {
            a = "<a href='"+mi.href+"'>" + icon + "&nbsp;"+mi.text+"</a>";
        } else if (mi.target === "external") {
            a = "<a href='"+mi.href+"' target='_blank'>" + icon + "&nbsp;"+mi.text+"</a>";
        } else if (mi.target === "ci") {
            console.log("Not supported - Menu to carousel item");
        } else {
            a = "<a href=''>"+ icon + "&nbsp;"+mi.text+"</a>";
        }

        inner += a;

        if (mi.items.length > 0) {
            inner += "<ul>" + dispMenu(mi.items) + "</ul>";
        }
        inner += "</li>";
    }
    return inner;
}

function dispMainMenu() {
    var inner = "";
    inner += "<li><a href='"+menu.target+"'><i class='"+menu.icon+"'></i>&nbsp; "+menu.text+"</a>"
    inner += "<ul>" + dispMenu(menu.items) + "</ul>";
    inner += "</li>";
    $("#drilldown-1").html(inner);
}

/***********************
     *  Carousel Items generator   *
	     ***********************/
var showHide = true;
 $(document).ready(function(){
    $("#hide").click(function(){
		/*alert("Clicked")*/
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

