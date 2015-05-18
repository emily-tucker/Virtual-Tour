    /**
     * Creates an instance of a Location Item
     * @constructor
     * @this {Navigation}
     * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
     * @param {string} name The name of the navigation item corresponding to div id to be filled
     * @param {string} locationType Type of location, i.e. "academic", etc
     * @param {string} description The description of the current location
     * @param {Boolean} onCampus If location is on campus or off campus
     */
    function Location(tag, name, locationType, description, onCampus, x, y) {
        this.tag = tag;
        this.name = name;
        this.locationType = locationType;
        this.description = description;
        this.onCampus = onCampus;
        this.x = x;
        this.y = y;
    }

    /**
     * Location object instances
     */
	var begin = new Location("#begin", "Welcome to Western", "academic",
	"Home of administrative offices, classrooms, faculty offices, computer labs, as well as an " +
            "auditorium and theater.", true, 1801, 1246);
	var borick = new Location("#borick", "Borick Buisness Building", "academic",
            "Home of Social Sciences and Environment & Sustainability programs", true, 1582, 1259);
	var chipeta = new Location("#chipeta", "Chipeta Student Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 345, 1206);	
	var crawford = new Location("#crawford", "Crawford Hall", "academic",
            "Home of Social Sciences and Environment & Sustainability programs", true, 1605, 992);	
	var escalante = new Location("#escalante", "Escalante Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 2305, 888);
	var fieldhouse = new Location("#fieldhouse", "Mountaineer Field House", "athletic", 
	 "65,000-square-foot LEED-Gold certified field house.",true, 1313, 869);
	var hurst = new Location("#hurst", "Hurst Hall", "academic",
            "Home of Science and Mathematics departments", true, 2422, 1227);
	var kelley = new Location("#kelley", "Kelley Hall", "academic",
            "Home of Social Sciences and Environment & Sustainability programs", true, 2288, 1100);
    var library = new Location("#library", "Leslie J. Savage Library", "studentlife",
            "The research hub for campus and a great study spot", true, 1918, 994);
	var mears = new Location("#mears", "Mears Student Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 1087, 1082);
	var pinnacles = new Location("#pinnacles", "Pinnacles Student Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 765, 997);
	var mountaineerbowl = new Location("#mountaineerbowl", "Mountaineer Bowl", "athletic",
            "The world's highest collegiate football stadium", true, 2023, 644);	
	var quigley = new Location("#quigley", "Quigley Hall", "academic",
            "Home of the Music and Art departments", true, 2170, 1419);	
    var taylor = new Location("#taylor", "Taylor Hall", "academic",
            "Home of administrative offices, classrooms, faculty offices, computer labs, as well as an " +
            "auditorium and theater.", true, 1905, 1200);
    var universitycenter = new Location("#universitycenter", "University Center", "studentlife", "The hub of student life on campus", true, 1849, 887);
	var ute = new Location("#ute", "Ute Student Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 1224, 1275);
	

    var telluride = new Location("#telluride", "Telluride", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var taylorcanyon = new Location("#tc", "Taylor Canyon", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 988, 432);
    var crestedbutte = new Location("#cb", "Crested Butte", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 713, 372);
    var monarchmountain = new Location("#mm", "Monarch Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 1193, 716);
    var taylorreservoir = new Location("#tr", "Taylor Reservoir", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var hartmanrocks = new Location("#hartmans", "Hartman Rocks", "recreation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 744, 728);
    var cbmr = new Location("#cbmr", "Crested Butte Mountain Resort", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 738, 363);
    var artscenter = new Location("#artscenter", "Gunnison Arts Center", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 760, 692);
    var wmountain = new Location("#wmountain", "W Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false, 778, 723);
    var elkmountains = new Location("#elkmountains", "Elk Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var sanjuan = new Location("#sanjuan", "San Juan Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var gunnison = new Location("#mainstreet", "Gunnison", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", false);
    var pathway = new Location('#pathway', "Academic Quad", "walkway", "Pathway to Hurst and Quiqly", true, 2041, 1232);
    var pathway2 = new Location("#pathway2", "Kelley Steps", "walkway", "Pathway to Taylor", true, 2083, 1076);
    var rockymountains = new Location("#rockymountains", "Rocky Mountains", "The Rocky Mounains", false, 0, 0);

    var locations = [begin, borick, chipeta, crawford, escalante, pinnacles, ute, mears, taylor, pathway, pathway2, quigley, hurst, kelley, library, universitycenter, mountaineerbowl, telluride,
        taylorcanyon, crestedbutte, monarchmountain, taylorreservoir, hartmanrocks,gunnison, cbmr, artscenter, wmountain, fieldhouse, rockymountains];


    var currentLocation;
    var previousLocation = locations[0];

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

    /**
     * Creates an instance of a Navigation Item
     * @constructor
     * @this {Navigation}
     * @param {string} tag The location tag of the navigation item (should be in form # + location, i.e #hurst
     * @param {string} styleClass The css style class name (no spaces)
     * @param {string} ttip Tool tip
     * @param {string} destination The hash location destination (i.e. "#hurst)
     * @param {string} direction The direction of navigation arrow (i.e. "back", "forward", "right", "left")
     * @param {number} x x coordinate in pixels (for on campus)
     * @param {number} y y coordinate in pixels (for on campus)
     */
    function Navigation(tag, styleClass, ttip, dest, direction, x, y) {
        this.tag = tag;
        this.styleClass = styleClass;
        this.ttip = ttip;
        this.dest = dest;
        this.direction = direction;
        this.x = x;
        this.y = y;
    }

    /**
     * Navigation object instances
     */
	/*====================Academic Arrows================== Arrow Color: White*/
    var taylor_to_pathway = new Navigation("#taylor", "taylor_to_pathway", "to pathway", "#pathway", "right", 58, 27); //
	var taylor_to_borick = new Navigation("#taylor", "taylor_to_borick", "to Borick", "#borick", "left", 38, 27); //
    var pathway_to_hurst = new Navigation("#pathway", "pathway_to_hurst", "to Hurst", "#hurst", "forward", 47, 27);
    var pathway_to_taylor = new Navigation("#pathway", "pathway_to_taylor", "back to Taylor", "#taylor", "back", 50, 17); //
    var pathway_to_quigly = new Navigation("#pathway", "pathway_to_quigly", "to Quigly", "#quigley", "right", 58, 27);
    var hurst_to_pathway = new Navigation("#hurst", "hurst_to_pathway", "back to pathway", "#pathway", "back", 50, 17);
    var hurst_to_kelley = new Navigation("#hurst", "hurst_to_kelley", "to Kelley Hall", "#kelley", "left", 42, 27);
    var quigly_to_pathway = new Navigation("#quigley", "quigly_to_pathway", "back to pathway", "#pathway", "left", 42, 27);
	var quigly_to_hurst = new Navigation("#quigley", "quigly_to_hurst", "to Hurst", "#hurst", "right", 58, 27);
    var kelley_to_hurst = new Navigation("#kelley", "kelley_to_hurst", "to Hurst Hall", "#hurst", "right", 58, 27);
    var kelley_to_pathway2 = new Navigation("#kelley", "kelley_to_pathway2", "to pathway", "#pathway2", "left", 42, 27);  
    var pathway2_to_kelley = new Navigation("#pathway2", "pathway2_to_kelley", "to Kelley Hall", "#kelley", "back", 50, 17);
	var library_to_crawford = new Navigation("#library", "library_to_crawford", "to Crawford", "#crawford", "left", 38, 27);
	var library_to_pathway2 = new Navigation("#library", "library_to_pathway2", "to Pathway", "#pathway2", "back", 50, 17);
	var ute_to_borick = new Navigation("#ute", "ute_to_borick", "to Borick", "#borick", "forward", 47, 27);
	var borick_to_taylor = new Navigation("#borick", "borick_to_taylor", "to Taylor", "#taylor", "forward", 47, 27);
	
	
	/*====================Student Life Arrows================== Arrow Color: Red*/
	var pathway2_to_library = new Navigation("#pathway2", "pathway2_to_library", "to Library", "#library", "forward", 47, 27);
	var crawford_to_library = new Navigation("#crawford", "crawford_to_library", "Back to Library", "#library", "back", 50, 17);
	var crawford_to_universitycenter = new Navigation("#crawford", "crawford_to_universitycenter", "to University Center", "#universitycenter", "forward", 47, 27);
    var library_to_escalante = new Navigation("#library", "library_to_escalante", "to Escalante Student Housing", "#escalante", "forward", 47, 27);
	var escalante_to_library = new Navigation("#escalante", "escalante_to_library", "Back to Library", "#library", "back", 50, 17);
	var escalante_to_universitycenter = new Navigation("#escalante", "escalante_to_universitycenter", "to University Center", "#universitycenter", "left", 38, 27);
	var universitycenter_to_library = new Navigation("#universitycenter", "universitycenter_to_library", "to Library", "#library", "back", 50, 17);
	var fieldhouse_to_pinnacles = new Navigation("#fieldhouse", "fieldhouse_to_pinnacles", "to the Pinaccles", "#pinnacles", "left", 38, 27);
	var pinnacles_to_chipeta = new Navigation("#pinnacles", "pinnacles_to_chipeta", "to Chipeta", "#chipeta", "forward", 47, 27);
	var chipeta_to_pinnacles = new Navigation("#chipeta", "chipeta_to_pinnacles", "Back to Pinnacles", "#pinnacles", "back", 50, 17);
	var chipeta_to_mears = new Navigation("#chipeta", "chipeta_to_mears", "to Mears", "#mears", "forward", 47, 27);
	var mears_to_chipeta = new Navigation("#mears", "mears_to_chipeta", "back to Chipeta", "#chipeta", "back", 50, 17);
	var mears_to_ute = new Navigation("#mears", "mears_to_ute", "to Ute", "#ute", "forward", 47, 27);
	var ute_to_mears = new Navigation("#ute", "ute_to_mears", "Back to Mears", "#mears", "back", 50, 17);
	var borick_to_ute = new Navigation("#borick", "borick_to_ute", "Back to Ute", "#ute", "back", 50, 17);
	var mountaineerbowl_to_escalante = new Navigation("#mountaineerbowl", "mountaineerbowl_to_escalante", "to Escalante", "#escalante", "back", 50, 17);
    var fieldhouse_to_universitycenter = new Navigation("#fieldhouse", "fieldhouse_to_universitycenter", "to University Center", "#universitycenter", "back", 50, 17);
	
	
	
	/*====================Athletics Arrows================== Arrow Color: Slate*/
	var escalante_to_mountaineerbowl = new Navigation("#escalante", "escalante_to_mountaineerbowl", "to the Mountaineer Bowl", "#mountaineerbowl", "forward", 47, 27);
    var universitycenter_to_fieldhouse = new Navigation("#universitycenter", "universitycenter_to_fieldhouse", "to Fieldhouse", "#fieldhouse", "forward", 47, 27);
    var fieldhouse_to_mountaineerbowl = new Navigation("#fieldhouse", "fieldhouse_to_mountaineerbowl", "to Mountaineer Bowl", "#mountaineerbowl", "forward", 47, 27);
	var pinnacles_to_fieldhouse = new Navigation("#pinnacles", "pinnacles_to_fieldhouse", "back to the Fieldhouse", "#fieldhouse", "back", 50, 17);
    var mountaineerbowl_to_fieldhouse = new Navigation("#mountaineerbowl", "mountaineerbowl_to_fieldhouse", "to Field House", "#fieldhouse", "left", 38, 27);
	

	/*====================Outdoor Arrows==================*/
    var cbmr_to_telluride = new Navigation("#cbmr", "cbmr_to_telluride", "to Telluride", "#telluride", "right", 75, 50);
    var telluride_to_cbmr = new Navigation("#telluride", "telluride_to_cbmr", "to CBMR", "#cbmr", "left", 0, 50);
    var telluride_to_cb = new Navigation("#telluride", "telluride_to_cb", "to Crested Butte", "#cb", "right", 75, 50);
    var cb_to_telluride = new Navigation("#cb", "cb_to_telluride", "to Telluride", "#telluride", "left", 0, 50);
    var cb_to_mm = new Navigation("#cb", "cb_to_mm", "to Monarch Mountain", "#mm", "right", 75, 50);
    var mm_to_cb = new Navigation("#mm", "mm_to_cb", "to Crested Butte", "#cb", "left", 0, 50);
    var mm_to_tr = new Navigation("#mm", "mm_to_tr", "to Taylor Resevoir", "#tr", "right", 75, 50);
    var tr_to_mm = new Navigation("#tr", "tr_to_mm", "to Monarch Mountain", "#mm", "left", 0, 50);
    var tr_to_hr = new Navigation("#tr", "tr_to_hr", "to Hartman's Rocks", "#hartmans", "right", 75, 50);
    var hr_to_tr = new Navigation("#hartmans", "hr_to_tr", "to Taylor Resevoir", "#tr", "left", 0, 50);
    var hr_to_tc = new Navigation("#hartmans", "hr_to_tc", "to Taylor Canyon", "#tc", "right", 75, 50);
    var tc_to_hr = new Navigation("#tc", "tc_to_hr", "to Hartman's Rocks", "#hartmans", "left", 0, 50);
    var tc_to_wmountain = new Navigation("#tc", "tc_to_wmountain", "to W Mountain", "#wmountain", "right", 75, 50);
    var wmountain_to_tc = new Navigation("#wmountain", "wmountain_to_tc", "to Taylor Canyon", "#tc", "left", 0, 50);
    var wmountain_to_artscenter = new Navigation("#wmountain", "wmountain_to_artscenter", "to Arts Center", "#artscenter", "right", 75, 50);
    var artscenter_to_wmountain = new Navigation("#artscenter", "artscenter_to_wmountain", "to W Mountain", "#wmountain", "left", 0, 50);
    var artscenter_to_cbmr = new Navigation("#artscenter", "artscenter_to_cbmr", "to CBMR", "#cbmr", "right", 75, 50);
    var cbmr_to_artscenter = new Navigation("#cbmr", "cbmr_to_artscenter", "to Arts Center", "#artscenter", "left", 0, 50);
    var cbmr_to_gunnison = new Navigation("#cbmr", "cbmr_to_gunnison", "to Gunnison", "#mainstreet", "right", 75, 50);
    var gunnison_to_cbmr = new Navigation("#mainstreet", "telluride_to_gunnison", "to CBMR", "#cbmr", "left", 0, 50);
    var gunnison_to_elkmountains = new Navigation("#mainstreet", "gunnison_to_elkmountains", "to Elk Mountains", "#elkmountains", "right", 75, 50);
    var elkmountains_to_gunnison = new Navigation("#elkmountains", "elkmountains_to_gunnison", "to Gunnison", "#mainstreet", "left", 0, 50);
    var elkmountains_to_hr = new Navigation("#elkmountains", "elkmountains_to_hr", "to Hartman's Rocks", "#hartmans", "right", 75, 50);
    var hr_to_elkmountains = new Navigation("#hartmans", "hr_to_elkmountains", "to Elk Mountains", "#elkmountains", "left", 0, 50);
    var tc_to_sanjuan = new Navigation("#tc", "tc_to_sanjuan", "to San Juan Mountains", "#sanjuan", "right", 75, 50);
    var sanjuan_to_tc = new Navigation("#sanjuan", "sanjuan_to_tc", "to Taylor Canyon", "#tc", "left", 0, 50);
    var sanjuan_to_cbmr = new Navigation("#sanjuan", "sanjuan_to_cbmr", "to CBMR", "#cbmr", "right", 75, 50);
    var cbmr_to_sanjuan = new Navigation("#cbmr", "cbmr_to_sanjuan", "to San Juan Mountains", "#sanjuan", "left", 0, 50);

    var dtToHr = new Navigation("#mainstreet", "dt_to_hr", "to Hartmans", "#hartmans", "left", 0, 50);
    var dtTorm = new Navigation("#mainstreet", "dttorm", " to Rocky Mountains", "#rockymountains", "right", 75, 50);

    var hrToCb = new Navigation("#hartmans", "hrToCb", "to Crested Butte", "#cb", "left", 0,50);
    var hrTOdt = new Navigation("#hartmans", "hrtodt", "to Downtown", "#mainstreet", "right", 75, 50);

    var cbToRm = new Navigation("#cb", "cbtorm", "to Rocky Mountains", "#rockymountains", "left", 0, 50);
    var cbtohr = new Navigation("#cb", "cbtohr", "to Hartmans", "#hartmans", "right", 75, 50);

    var rmToDt = new Navigation("#rockymountains", "rmtodt", "to Downtown", "#mainstreet", "left", 0, 50);
    var rmTOCb = new Navigation("#rockymountains", "rmtocb", "to Crested Butte", "#cb", "right", 75, 50);

    var navs = [taylor_to_pathway, pathway_to_hurst, pathway_to_taylor, pathway_to_quigly, quigly_to_hurst, hurst_to_pathway, mears_to_chipeta, ute_to_borick, ute_to_mears, borick_to_ute, 			borick_to_taylor, taylor_to_borick, crawford_to_universitycenter,  hurst_to_kelley, quigly_to_pathway, kelley_to_hurst, kelley_to_pathway2, escalante_to_universitycenter, escalante_to_mountaineerbowl, mountaineerbowl_to_escalante, pathway2_to_kelley, fieldhouse_to_mountaineerbowl, mountaineerbowl_to_fieldhouse, pathway2_to_library, fieldhouse_to_pinnacles, pinnacles_to_fieldhouse, pinnacles_to_chipeta, chipeta_to_pinnacles, library_to_pathway2, universitycenter_to_library, library_to_escalante, universitycenter_to_fieldhouse, fieldhouse_to_universitycenter, escalante_to_library, chipeta_to_mears, mears_to_ute, crawford_to_library, library_to_crawford, dtToHr, dtTorm, hrToCb, hrTOdt, cbToRm, cbtohr, rmToDt, rmTOCb];
    /*
   hr_to_tc, tc_to_hr,cbmr_to_gunnison,
    gunnison_to_cbmr, gunnison_to_elkmountains, elkmountains_to_gunnison, elkmountains_to_hr, hr_to_elkmountains,
    tc_to_sanjuan, sanjuan_to_tc, sanjuan_to_cbmr, cbmr_to_sanjuan, cb_to_telluride, cb_to_mm,cbmr_to_telluride,telluride_to_cbmr,
        mm_to_cb, mm_to_tr,tr_to_mm, tr_to_hr,hr_to_tr,hr_to_tc,tc_to_hr,tc_to_wmountain,wmountain_to_tc,wmountain_to_artscenter,
        artscenter_to_wmountain,artscenter_to_cbmr,cbmr_to_artscenter,fieldhouse_to_mountaineerbowl, mountaineerbowl_to_fieldhouse, pathway2_to_library,
        library_to_pathway2, universitycenter_to_library, universitycenter_to_fieldhouse, fieldhouse_to_universitycenter,
        telluride_to_cb, dtToHr, hrToCb, cbToRm, rmToDt
    ];*/




    /**
     *  Render all navigation items at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
     */
    function getNavs(locationTag) {
        $('.tipsy:last').remove();
        if (currentLocation.locationType === "academic" || currentLocation.locationType === "walkway") {
            var inner_html = "<img onclick=javascript:window.location.hash='#fieldhouse' class='to_athletics " +
                    "arrow' src='imgs/nav_arrows/right_slate.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/right_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/right_slate.png' " + 
                    "title = 'to Athletics' />" + 
                    "<img onclick=javascript:window.location.hash='#library' class='to_studentlife " +
                    "arrow' src='imgs/nav_arrows/left_crimson.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/left_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/left_crimson.png' " + 
                    "title = 'to Student Life' />";
        }
        if (currentLocation.locationType === "studentlife") {
            inner_html = "<img onclick=javascript:window.location.hash='#fieldhouse' class='studentlife_to_athletics " +
                    "arrow' src='imgs/nav_arrows/left_slate.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/left_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/left_slate.png' " + 
                    "title = 'to Athletics' />" + 
                    "<img onclick=javascript:window.location.hash='#taylor' class='to_academics " +
                    "arrow' src='imgs/nav_arrows/right_blue.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/right_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/right_blue.png' " + 
                    "title = 'to Academics' />";
        }
        if (currentLocation.locationType === "athletic") {
            inner_html = "<img onclick=javascript:window.location.hash='#library' class='to_studentlife " +
                    "arrow' src='imgs/nav_arrows/left_crimson.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/left_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/left_crimson.png' " + 
                    "title = 'to Student Life' />" + 
                    "<img onclick=javascript:window.location.hash='#taylor' class='to_academics " +
                    "arrow' src='imgs/nav_arrows/right_blue.png' " +
                    "onmouseover=this.src='imgs/nav_arrows/right_newtype_hover.png'" +
                    " onmouseout=this.src='imgs/nav_arrows/right_blue.png' " + 
                    "title = 'to Academics' />";
        }
        var items = [];
        for (var i in navs) {
            if (currentLocation.onCampus) {
                if (navs[i].tag === locationTag) {
                    inner_html += "<button class='map_button'>Map</button>" +
                            "<button class='switch_button' onclick=javascript:window.location.hash='#mainstreet'>Go Off Campus</button>" + "<a class='visit_button' href = 'http://www.western.edu/future-students/experience-western' target = '_blank'>Schedule a Visit</a>" + "<button class='restart_button' onclick=javascript:window.location=''>Restart Tour</button>" +
                            "<img onclick=javascript:window.location.hash='" + navs[i].dest + "' class='" +
                            navs[i].styleClass + " arrow' src='imgs/nav_arrows/" + navs[i].direction + "_white.png'" +
                            "onmouseover=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_hover.png'" +
                            " onmouseout=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_white.png' " +
                            "title='" + navs[i].ttip + "' />";
                    items.push(navs[i].styleClass);
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
                    inner_html += "<button class='map_button'>Map</button> + <a class='visit_button' href = 'http://www.western.edu/future-students/experience-western' target = '_blank'>Schedule a Visit</a> + <button class='switch_button' onclick=javascript:window.location.hash='"+previousLocation.tag+"'>Go On Campus</button><img onclick=javasript:window.location.hash='" + navs[i].dest + "' class='" +
                        navs[i].direction + "_offcampus arrow' src='imgs/nav_arrows/" + navs[i].direction + "_offcampus.png'" +
                        "onmouseover=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_offcampus_hover.png'" +
                        " onmouseout=" + "this.src='imgs/nav_arrows/" + navs[i].direction + "_offcampus.png' " +
                        "title='" + navs[i].ttip + "' />";
                }
			
                $("#navigation").html(inner_html);
                $(".arrow").tipsy({gravity: 's', fade: true, html: true});
            }

            $(".map_button").click(function(){
                if(map_state === 0) {
                    $("#map").show(function() {
                        $("#map").animate({
                            width: window.innerWidth * 0.25,
                            height: window.innerHeight * 0.38
                        }, function () {
                            animate_map(currentLocation, map_slide_time);
                        });
                    });
                    map_state += 1;
                }
                else if(map_state === 1) {
                    $("#map").animate({width: window.innerWidth * 0.75, height: window.innerHeight * 0.85}, function() {
                            animate_map(currentLocation, map_slide_time);
                    });
                    $(".map_button").animate({right: window.innerWidth * 0.75});
                    map_state += 1;
                }
                else if(map_state === 2) {
                    $("#map").animate({width: '0', height: '0'}, function(){
                        $("#map").hide('blind');
                    });
                    $(".map_button").animate({right: window.innerWidth * 0.001});
                    map_state = 0;
                }
            });
        }
    }

    /**
     * Creates an instance of a Hotspot
     * @constructor
     * @this {Hspot}
     * @param {string} tag The location tag of the hotspot (should be in form # + location, i.e #hurst
     * @param {string} styleClass name of css class (no spaces)
     <thwaydiv class="menu">
     <div class="wrap">
     <div class="blue menu-container">
     <ul id="drilldown-1">
     </ul>
     </div>
     </div>
     </div>
     * @param {string} ttip Tooltip for hotspot
     * @param {string} dest The destination url for hotspot
     * @param {Number} x The x coordinate of the hotspot (in pixels)
     * @param {Number} y The y coordinate of the hotspot (in pixels)
     */
    function Hspot(tag, styleClass, ttip, dest, x, y) {
        this.tag = tag;
        this.styleClass = styleClass;
        this.ttip = ttip;
        this.dest = dest;
        this.x = x;
        this.y = y;
    }

    /**
     * Hspot object instances
     */
    var taylor_hotspot = new Hspot("#taylor", "taylor_panorama_hs", "view Panorama", "panoramas/taylor_panorama/Taylor_Panorama.html", 60, 75);
    var hotspots = [taylor_hotspot];

    /**
     * Render all hotspots at the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#Hurst"
     */
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

    /**
     * Render main image for the current location
     * @param {string} locationTag Location tag, should be in form "#" + location, i.e. "#hurst"
     * locationTag should match image file, i.e "hurst_main.jpg" (substring removes "#")
     */
    function getImage(locationTag) {
        var mainImageDiv = "#main_image";
        $(mainImageDiv).html("<img src='imgs/" + locationTag.substring(1) + "_main.jpg'/>");
    }

    /**********************************
     * Load static image map screen
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

    /***
     * Functions above requires the location tag passed in to be # + location tag name. (i.e "#hurst")
     */

