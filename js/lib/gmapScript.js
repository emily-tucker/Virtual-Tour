
var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">The Great Outdoors</h1>' +
        '<div id="bodyContent">' +
        '<p><img src=""><b>Western</b>, also referred to as <b>WSCU</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Gunnison county, central Colorado. It lies 400 miles ' +
        'south west of the nearest large town, Denver.; ' +
        ' Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="western.edu">' +
        'https://western.edu</a> ' +
        '(last visited June 22, 2009).</p>' +
        '<input type="button" id="myButton1" value="Show On Tour"/>' +
        '</div>' +
        '</div>';
var infowindow = new google.maps.InfoWindow({
    content: contentString
});
//Rec markers
var aspenM = new google.maps.Marker({
    position: new google.maps.LatLng(39.185986, -106.817456),
    icon: './lib/asp.jpg',
    title: "Aspen"
});
var tellM = new google.maps.Marker({
    position: new google.maps.LatLng(37.938949, -107.820528),
    icon: 'Telluride.jpg',
    title: "Telluride"
});
var monarchM = new google.maps.Marker({
    position: new google.maps.LatLng(38.512031, -106.331470),
    icon: 'monarch.jpg',
    title: "Monarch"
});
var irwinM = new google.maps.Marker({
    position: new google.maps.LatLng(38.879437, -107.103771),
    icon: 'fs.jpg',
    title: "Lake Irwin"
});
var bcM = new google.maps.Marker({
    position: new google.maps.LatLng(38.574866, -107.741617),
    icon: 'nps.jpg',
    title: "Black Canyon National Park"
});
var chsM = new google.maps.Marker({
    position: new google.maps.LatLng(39.011499, -106.891310),
    icon: 'fs.jpg',
    title: "Conundrum Hot Springs"
});
var trrM = new google.maps.Marker({
    position: new google.maps.LatLng(38.664371, -106.844160),
    icon: 'tr.jpg',
    title: "Three Rivers Resort"
});
var tresM = new google.maps.Marker({
    position: new google.maps.LatLng(38.819244, -106.601608),
    icon: 'fs.jpg',
    title: "Taylor Reservoir"
});
var wwM = new google.maps.Marker({
    position: new google.maps.LatLng(38.532904, -106.949891),
    icon: 'blm.jpg',
    title: "Gunnison Whitewater Park"
});

///Culture Markers
var glibM = new google.maps.Marker({
    position: new google.maps.LatLng(38.547010, -106.928533),
    title: "Gunnison Library",
    icon: 'js/lib/lib.jpg',
    type: 'Cult'
});

var ibarM = new google.maps.Marker({
    position: new google.maps.LatLng(38.541476, -106.904030),
    icon: 'ibar.jpg',
    title: "I Bar Ranch"
});
var pionM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544044, -106.916706),
    icon: 'pio.jpg',
    title: "Gunnison Pioneer Museum"
});
var cbhM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869835, -106.984323),
    icon: 'cbh.jpg',
    title: "Crested Butte Heritage Museum"
});
var majM = new google.maps.Marker({
    position: new google.maps.LatLng(38.866733, -106.981357),
    icon: 'maj.jpg',
    title: "Majestic Theatre"
});
var westernM = new google.maps.Marker({
    position: new google.maps.LatLng(38.547, -106.918),
    title: "Western",
    icon: 'W.jpg',
    type: 'Cul'
});
var hartmanM = new google.maps.Marker({
    position: new google.maps.LatLng(38.505, -106.9501),
    title: "Hartmans",
    icon: 'blm.jpg',
    type: 'Rec'
});
var Pstop = new google.maps.Marker({
    position: new google.maps.LatLng(38.547, -106.928),
    title: "PowerStop",
    icon: 'powerstop.jpg',
    type: 'Food'
});
//CB markers
var cbmrM = new google.maps.Marker({
    position: new google.maps.LatLng(38.9, -106.95),
    icon: 'cbmr.jpg',
    title: "CBMR"
});
var cbArtsM = new google.maps.Marker({
    position: new google.maps.LatLng(38.8677, -106.9773),
    icon: 'cbart.jpg',
    title: "CB Art Center"
});
var gothicM = new google.maps.Marker({
    position: new google.maps.LatLng(38.9592, -106.9898),
    icon: 'fs.jpg',
    title: "RMBL"
});
///FOOD MARKERS
var tfM = new google.maps.Marker({
    position: new google.maps.LatLng(38.545852, -106.926794),
    icon: 'tf.jpg',
    title: "Twisted Fork"
});
var gmM = new google.maps.Marker({
    position: new google.maps.LatLng(38.582215, -106.921878),
    icon: 'gm.jpg',
    title: "Garlic Mike's"
});
var bsbM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544533, -106.927674),
    icon: 'bsb.jpg',
    title: "Blackstock Bistro"
});
var mpM = new google.maps.Marker({
    position: new google.maps.LatLng(38.544250, -106.924154),
    icon: 'mp.jpg',
    title: "Mikey's Pizza"
});
var mocM = new google.maps.Marker({
    position: new google.maps.LatLng(38.551886, -106.926557),
    icon: 'mocha.jpg',
    title: "Mocha's!!"
});
var stashM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869848, -106.985497),
    icon: 'stash.jpg',
    title: "Secret Stash"
});
var camp4M = new google.maps.Marker({
    position: new google.maps.LatLng(38.869256, -106.984046),
    icon: 'camp4.jpg',
    title: "Camp 4 Coffee!!"
});
var ryceM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869655, -106.988249),
    icon: 'ryce.png',
    title: "Ryce Asian Bistro"
});
var donitaM = new google.maps.Marker({
    position: new google.maps.LatLng(38.869589, -106.984569),
    icon: 'donita.jpg',
    title: "Donita's Cantina"
});
var avyM = new google.maps.Marker({
    position: new google.maps.LatLng(38.900076, -106.966526),
    icon: 'avy.jpg',
    title: "Avalanche"
});
// To add the marker to the map, call setMap();
// First, create an object containing LatLng and population for each city.
function initialize() {
    // Create the map.
    var myLatlng = new google.maps.LatLng(38.547, -106.918);
    var mapOptions = {
        zoom: 4,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.HYBRID

    };
    function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
            return;
        }
        else {
            z = google.maps.event.addListener(map, 'zoom_changed', function (event) {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function () {
                map.setZoom(cnt);
            }, 300); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    smoothZoom(map, 10, map.getZoom());

//Buttons for .panTo()
    /*
    var aspenBtn = document.getElementById('aspenBtn');
    var aspenLL = new google.maps.LatLng(39.185986, -106.817456);
    aspenBtn.addEventListener('click', function (event) {
        map.panTo(aspenLL);
        smoothZoom(map, 14, map.getZoom());
    });
    var tellBtn = document.getElementById('tellBtn');
    var tellLL = new google.maps.LatLng(37.938949, -107.820528);
    tellBtn.addEventListener('click', function (event) {
        map.panTo(tellLL);
        smoothZoom(map, 14, map.getZoom());
    });
    var cbBtn = document.getElementById('cbBtn');
    var cbLL = new google.maps.LatLng(38.9, -106.95);
    cbBtn.addEventListener('click', function (event) {
        map.panTo(cbLL);
        smoothZoom(map, 14, map.getZoom());
    });
    var monarchBtn = document.getElementById('monarchBtn');
    var monarchLL = new google.maps.LatLng(38.512031, -106.33147);
    monarchBtn.addEventListener('click', function (event) {
        map.panTo(monarchLL);
        smoothZoom(map, 14, map.getZoom());
    });
    var taylorBtn = document.getElementById('taylorBtn');
    var taylorLL = new google.maps.LatLng(38.819244, -106.601608);
    taylorBtn.addEventListener('click', function (event) {
        map.panTo(taylorLL);
        smoothZoom(map, 14, map.getZoom());
    });
    var hartBtn = document.getElementById('hartBtn');
    var hartLL = new google.maps.LatLng(38.505, -106.9501);
    hartBtn.addEventListener('click', function (event) {
        map.panTo(hartLL);
        smoothZoom(map, 14, map.getZoom());
    });
    */
//End buttons for .panTo()
//Buttons for marker filtering
    var recFilter = document.getElementById('recFilter');
    var recState = 0;
    recFilter.addEventListener('click', function (event) {
        console.log("Hello?");
        if (recState === 1) {
            console.log("recstate = 1");
            hartmanM.setMap(null);
            gothicM.setMap(null);
            cbmrM.setMap(null);
            aspenM.setMap(null);
            tellM.setMap(null);
            monarchM.setMap(null);
            irwinM.setMap(null);
            bcM.setMap(null);
            chsM.setMap(null);
            trrM.setMap(null);
            tresM.setMap(null);
            wwM.setMap(null);
        }
        if (recState === 0) {
            console.log("recstate = 0");
            console.log(map)
            hartmanM.setMap(map);
            gothicM.setMap(map);
            cbmrM.setMap(map);
            aspenM.setMap(map);
            tellM.setMap(map);
            monarchM.setMap(map);
            irwinM.setMap(map);
            bcM.setMap(map);
            chsM.setMap(map);
            trrM.setMap(map);
            tresM.setMap(map);
            wwM.setMap(map);
            recState = 1;
        } else
            recState = 0;
    });
    var cultFilter = document.getElementById('cultFilter');
    var cultState = 0;
    cultFilter.addEventListener('click', function (event) {
       if (cultState === 1) {
            cbArtsM.setMap(null);
            westernM.setMap(null);
            glibM.setMap(null);
            ibarM.setMap(null);
            pionM.setMap(null);
            cbhM.setMap(null);
            majM.setMap(null);

        }
        if (cultState === 0) {
            glibM.setMap(map);
            cbArtsM.setMap(map);
            ibarM.setMap(map);
            pionM.setMap(map);
            cbhM.setMap(map);
            majM.setMap(map);
            westernM.setMap(map);

            cultState = 1;
        } else
            cultState = 0;
    });
    var foodFilter = document.getElementById('foodFilter');
    var foodState = 0;
    foodFilter.addEventListener('click', function (event) {
        if (foodState === 1) {
            Pstop.setMap(null);
            tfM.setMap(null);
            gmM.setMap(null);
            bsbM.setMap(null);
            mpM.setMap(null);
            mocM.setMap(null);
            stashM.setMap(null);
            camp4M.setMap(null);
            ryceM.setMap(null);
            donitaM.setMap(null);
            avyM.setMap(null);

        }
        if (foodState === 0) {
            gmM.setMap(map);
            mpM.setMap(map);
            stashM.setMap(map);
            mocM.setMap(map);
            camp4M.setMap(map);
            tfM.setMap(map);
            ryceM.setMap(map);
            donitaM.setMap(map);
            avyM.setMap(map);
            Pstop.setMap(map);
            bsbM.setMap(map);
            foodState = 1;
        } else
            foodState = 0;
    });
//End Button for marker filtering

    google.maps.event.addListener(westernM, 'click', function () {
        infowindow.open(map, westernM);
    });
    google.maps.event.addListener(irwinM, 'click', function () {
        infowindow.open(map, irwinM);
    });
    google.maps.event.addListener(tresM, 'click', function () {
        infowindow.open(map, tresM);
    });
    google.maps.event.addListener(wwM, 'click', function () {
        infowindow.open(map, wwM);
    });
    google.maps.event.addListener(bcM, 'click', function () {
        infowindow.open(map, bcM);
    });
}
//close intialize


