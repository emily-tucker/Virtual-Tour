// howTo
/* function howTo(info, datapostion, datatoggle) {
    this.info = info;
    this.datapostion = datapostion;
    this.datatoggle = datatoggle;
   
	<a href="#" class="btn btn-large primary" data-toggle="chardinjs" data-intro="This button toggles the overlay, you can click it, even when the overlay is visible" data-position="left">See it in action</a>
	 <img src="img/chardin.png" data-intro="An awesome 18th-century painter, who found beauty in everyday, common things." data-position="right" />
} */


var ciCount = 0;

var carouselItems = [];
var thumbs = [];

function getHowTo(tag) /*Carousel Items*/{
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
                if (ci.img) {
                    a += "<img src='img' data-intro='"+info+"' data-position='"+dataposition+"'/>"
                } else {
                    a += "<a class='fancybox' data-fancybox-group='gallery' href = '"+ci.full.fname+"' title='"+ci.html+"' rel='gallery'>";
                }
                a += "<a href;
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
    if(is_mobile){
      document.getElementById('carousel').style.display = 'none';
      showHide = false;
    }

    return carouselItems;
}

var Taylor_WMountainFull = new Image("Taylor_WMountainFull", "imgs/Taylor_WMountainFull.jpg");
var Taylor_WMountainThumb = new Image("Taylor_WMountainThumb", "imgs/Taylor_WMountainThumb.jpg");
var Taylor_WMountain = new CarouselItem(["#taylor"], Taylor_WMountainFull, Taylor_WMountainThumb, "W Mountain", '<b>Student Testimonials - Tim Timderson</b><br />W Mountain, hosting the largest collegiate letter in the world, is one of the many reasons Tim Timderson decided to go to western. He says he came to Western from his home of Milliken, Colo., to indulge his fascination with people. He had been a state officer in the Family, Career and Community Leaders of America, as well as an active citizen in the Potawatomi Nation of American Indians.<br /></br>&lt;a target="_self" onClick=&quot;window.location.href=&#x27;http://www.western.edu/future-students/student-testimonials-and-profiles&#x27;&quot;   href="http://www.western.edu/future-students/student-testimonials-and-profiles"&gt;Click here to read more...&lt;/a&gt;">');
