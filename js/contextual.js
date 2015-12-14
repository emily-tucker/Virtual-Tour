/******************************************
*
* Location object instances - On Campus 
********************************************/
	var begin = new Location("#begin", "Welcome to Western", "main",
	"Western offers a private college experience at a public university cost, deep in the heart of the Rockies.", 986, 581);
	var borick = new Location("#borick", "Borick Buisness Building", "academic",
            "Prominent and relatively new, state-of-the-art Borick is home to Western's new School of Business. It includes a virtual classroom that can connect easily with similar facilities around the world.", 842, 635);
	var chipeta = new Location("#chipeta", "Chipeta Student Housing", "studentlife",
            "Co-ed apartments on the southwest corner of campus, featuring furnished one- and two-bedroom units. Also home to Western's Lesbian/Gay/Bisexual Student Alliance.",  263, 611);
	var crawford = new Location("#crawford", "Crawford Hall", "academic",
            "A compact and appealing classroom building, primarily for Education courses.",  832, 484);
	var escalante = new Location("#escalante", "Escalante Terrace", "studentlife",
            "Formerly Western's Fitness Center, Escalante Terrace is slated to house WesternÕs ICE program for entrepreneurship. For 2615-2616, it will house art programs, while Quigley Hall undergoes renovations.",  1238, 399);
	var fieldhouse_Athletic = new Location("#fieldhouse", "Mountaineer Field House", "athletic", 
	 "This spectacular new building includes a high-tech surface across its main floor, with the highest indoor NCAA track, a 43.5-foot climbing wall, an athletic weight room, a fitness center, the HAPLab and more.", 687, 410);
	 var fieldhouse_SL = new Location("#fieldhouse_SL", "Mountaineer Field House", "studentlife", 
	 "This spectacular new building includes a high-tech surface across its main floor, with the highest indoor NCAA track, a 43.5-foot climbing wall, an athletic weight room, a fitness center, the HAPLab and more.", 687, 410);
	var gatewayfield = new Location("#gatewayfield", "Gateway Soccer Fields", "athletic", 
	 "Western’s women’s soccer team utilizes Gateway Field for games and practice. The south side of the field is available for recreation or relaxation.", 700, 797);
	var hurst = new Location("#hurst", "Hurst Hall", "academic",
            "One of the campus's most modern classroom buildings, Hurst houses Science, Mathematics and Computer Science labs, along with offices.", 1301, 586);
	var intramuralField = new Location("#intramuralField", "Intramural Sports Field", "studentlife",
            "Need Desc.", 1083, 588);
	var kelley = new Location("#kelley", "Kelley Hall", "academic",
            "Topped by solar-hot-water panels that boost its efficiency, Kelley is an important classroom building, housing Western's Social Sciences and Environment & Sustainability programs, among others.", 1232, 530);
    var library = new Location("#library", "Leslie J. Savage Library", "academic",
            "Savage Library is a research hub for campus and great study spot. You'll find the expected stacks of books, but also large computer labs, access to electronic libraries around the world and the university archives.",  973, 494);
	var library_SL = new Location("#library_SL", "Leslie J. Savage Library", "studentlife",
	"Savage Library is a research hub for campus and great study spot. You'll find the expected stacks of books, but also large computer labs, access to electronic libraries around the world and the university archives.",  973, 494);
	var mears = new Location("#mears", "Mears Complex", "studentlife",
            "These co-ed dormitories Mears, Robidoux and Moffat connect by enclosed corridors. They feature suite-style double rooms, with two rooms sharing each bathroom.", 626, 509);
	 var paulwrightgym = new Location("#paulwrightgym", "Paul Wright Gymnasium", "academic",
            "At 7,723 feet above sea level, this is the world's highest collegiate gym. It seats 1,800 and includes an indoor pool, a wrestling room, locker rooms, the Hall of Fame trophy room and classrooms.", 840, 366);
	var pinnacles = new Location("#pinnacles", "Pinnacles Student Housing", "studentlife",
            "Western's newest apartments have furnished two-, three- and four-bedroom units. Each has a large kitchen and common room, with plenty of cabinet and closet space. It also has many common spaces and facilities.",  510, 496);
	var practicefield = new Location("#practicefield", "Practice Field", "athletic",
            "Home of Western’s sledding hill, the practice fields are a flurry of activity during the spring and fall while football and other sports are in season, and it’s groomed for skate skiing during the winter.",  850, 296);
	var mountaineerbowl = new Location("#mountaineerbowl", "Mountaineer Bowl", "athletic",
            "Home of Mountaineer football and Western's high-tech-surface track, it's also world's highest collegiate football stadium at 7,750 feet above sea level, seating 4,000 fans, with room for more on its hills.",  1042, 296);
	var quigley = new Location("#quigley", "Quigley Hall", "academic",
            "Home of Western's Art and Music programs, Quigley is undergoing a $25.8 million renovation, upgrading studios, presenation spaces, practice rooms and more, with expected completion in Fall 2616.", 1134, 659);
    var taylor = new Location("#taylor", "Taylor Hall", "academic",
            "Renovated in 2610, Taylor is a LEED-certified, energy-efficient structure. Its bold atrium serves is Western's Welcome Center. It also houses the administration, an auditorium, a theater and many classrooms.", 985, 553);
	 var taylorQuad = new Location("#taylorQuad", "Taylor Quad", "studentlife",
            "The center hub of campus. Hang out on the lawn, slackline beneath the shady trees or tramp through the snow. The Quad is home to annual events like Western’s Rail Jam and Spring Fest.", 812, 573);
    var universitycenter = new Location("#universitycenter", "University Center", "studentlife", "This fairly new and extremely capable building is a hub of student life. It houses meeting rooms; a ballroom; dining facilities, the bookstore, the University Theater, Wilderness Pursuits, student groups and more.", 987, 402);
	var ute = new Location("#ute", "Ute Student Housing", "studentlife",
            "One of the older residence halls on campus, Ute has seen recent renovations and offers first-year students fully furnished rooms in a traditional, community-style dormitory that opens right onto lush Taylor Lawn.", 653, 634);

/******************************************
*
* Location object instances - Off Campus 
********************************************/
    var telluride = new Location("#telluride", "Telluride", "offcampus", "Home to summer music festivals, Telluride Ski Resort, jeeping, biking, hiking, camping and climbing. Nestled in the San Juan Mountains 130 miles southwest of Gunnison.", 173, 743);
    var crestedbutte = new Location("#crestedbutte", "Crested Butte", "offcampus", "Gunnison’s neighbor community located 38 miles north. It’s easy to access using the free RTA bus systems. Explore Colorado’s last great ski town. Recreational, culinary and shopping opportunities abound.", 607, 187);
    var monarchmountain = new Location("#monarchmountain", "Monarch Mountain", "offcampus", "Less than an hour’s drive east of Gunnison, Monarch Ski Area boasts 800 skiable acres and 150 inches annual snowfall. Backcountry and cross country skiing and mountain biking are all easily accessible.",  926, 386);
    var hartmanrocks = new Location("#hartmanrocks", "Hartman Rocks", "recreation", " 8,000 acres of open BLM land with hundreds of miles of single-track trails and dirt roads, Hartman Rocks is a desert paradise for mountain biking, hiking, motorcycling, rock climbing, horseback riding, trail running and Nordic skiing.", 611, 439);
    var cbmr = new Location("#cbmr", "Crested Butte Mountain Resort", "offcampus", "World-class skiing with more than 1,500 skiable acres 30 miles from Gunnison. Take the bus straight from campus to the base area. Western students can purchase discounted season passes.",  607, 187);
    var gunnison = new Location("#mainstreet", "Gunnison", "offcampus", "Main Street is the hub of the community with shopping for every budget, yummy restaurants and buzzing coffee shops. It’s located only four blocks west of campus.", 628, 382);

    
	var lakeirwin = new Location("#lakeirwin", "Lake Irwin", "offcampus", " High-mountain lake surrounded by snow-capped peaks and beautiful 4x4 roads, mountain bike trails, hiking, fly fishing, lake fishing, paddle-boarding, camping, backpacking, snowcat skiing and snowmobiling.", 499, 230);
	var bluemesa = new Location("#bluemesa", "Blue Mesa", "offcampus", "Colorado's largest lake and a popular destination for outdoor recreation, Blue Mesa offers fishing, camping, boating, 		  	paddleboarding, windsurfing, waterskiing and hiking.", 502, 434);
	var taylorpark = new Location("#taylorpark", "Taylor Park", "offcampus", "Taylor Park offers a vast mountain playground for all types of recreational activities. The Taylor Canyon offers rock climbing, river rafting, hiking, fly fishing, mountain biking, camping, boating and fishing in the Taylor Reservoir and 4x4 exploring.",  742, 170);
	var blackcanyon = new Location("#blackcanyon", "Black Canyon", "offcampus", "Spectacular! No other canyon in North America combines the narrow opening, sheer walls, and startling depths offered by the Black Canyon. Prepare yourself for breathtaking views while you enjoy hiking, fishing, camping, world-class rock climbing and wildlife viewing.", 406, 445);
	var cranorhill = new Location("#cranorhill", "Cranor Hill", "offcampus", "Gunnison’s very own ski hill. Opened in 1962 as a private hill, it opened to the public in 1966 and is now owned by the city. It relies on natural snow, and its four runs are serviced by a Poma lift.",  688, 334);

/******************************************
*
* Location array
********************************************/
    var locations = [begin, borick, chipeta, crawford, escalante, paulwrightgym, pinnacles, practicefield, ute, mears, taylor, quigley, hurst, kelley, library, library_SL, universitycenter, mountaineerbowl, intramuralField, taylorQuad, fieldhouse_SL, fieldhouse_Athletic, gatewayfield,
	
	telluride, crestedbutte, monarchmountain, hartmanrocks, gunnison, cbmr, lakeirwin, bluemesa, blackcanyon, taylorpark, blackcanyon, cranorhill];



/**************************************
 * Navigation object instances
*************************************/
	/*====================Academic Arrows================== Academic Tour = 1*/
	var taylor_to_quigley = new Navigation("#taylor", "taylor_to_quigley", "Click to go to Quigley Hall", "#quigley", "right", 68, 26, 1);
    var quigley_to_taylor = new Navigation("#quigley", "quigley_to_taylor", "Click to go back to Taylor Hall", "#taylor", "left", 26,26, 1);
    var quigley_to_hurst = new Navigation("#quigley", "quigley_to_hurst", "Click to go Hurst Hall", "#hurst", "right", 68, 26, 1);
    var hurst_to_quigley = new Navigation("#hurst", "hurst_to_quigley", "Click to go back to Quigley Hall", "#quigley", "left", 26,26, 1);
    var hurst_to_kelley = new Navigation("#hurst", "hurst_to_kelley", "Click to go Kelley Hall", "#kelley", "right", 68, 26, 1);
    var kelley_to_hurst = new Navigation("#kelley", "kelley_to_hurst", "Click to go back to Hurst Hall", "#hurst", "left", 26,26, 1);
    var kelley_to_library = new Navigation("#kelley", "kelley_to_library", "Click to go Savage Library", "#library", "right", 68, 26, 1);
    var library_to_kelley = new Navigation("#library", "library_to_kelley", "Click to go back to Kelley Hall", "#kelley", "left", 26,26, 1);
    var library_to_paulwrightgym = new Navigation("#library", "library_to_paulwrightgym", "Click to go Paul Wright Gymnasium", "#paulwrightgym", "right", 68, 26, 1);
    var paulwrightgym_to_library = new Navigation("#paulwrightgym", "paulwrightgym_to_library", "Click to go back to Savage Library", "#library", "left", 26,26, 1);
	var paulwrightgym_to_crawford = new Navigation("#paulwrightgym", "paulwrightgym_to_crawford", "Click to go Crawford Hall", "#crawford", "right", 68, 26, 1);
	var crawford_to_paulwrightgym = new Navigation("#crawford", "crawford_to_paulwrightgym", "Click to go back to Paul Wright Gymnasium", "#paulwrightgym", "left", 26,26, 1);
	var crawford_to_borick = new Navigation("#crawford", "crawford_to_borick", "Click to go Borick Buisness Building", "#borick", "right", 68, 26, 1);
	var borick_to_crawford = new Navigation("#borick", "borick_to_crawford", "Click to go back to Crawford Hall", "#crawford", "left", 26,26, 1);
	var borick_to_taylor = new Navigation("#borick", "borick_to_taylor", "Click to go Taylor Hall", "#taylor", "right", 68, 26, 1);
	var taylor_to_begin = new Navigation("#taylor", "taylor_to_begin", "Click to go back to the Welcome Center", "#begin", "left", 26,26, 1);
	
	
	/*====================Student Life Arrows================== StudentLife Tour = 2*/
	var universitycenter_to_fieldhouse_SL = new Navigation("#universitycenter", "universitycenter_to_fieldhouse_SL", "Click to go the Fieldhouse", "#fieldhouse_SL", "right", 68, 26, 2);
	var universitycenter_to_begin = new Navigation("#universitycenter", "universitycenter_to_begin", "Click to go back to the Welcome Center", "#begin", "left", 26,26, 2);
	var fieldhouse_SL_to_mears = new Navigation("#fieldhouse_SL", "fieldhouse_SL_to_mears", "Click to go the Mears Complex", "#mears", "right", 68, 26, 2);
	var fieldhouse_SL_to_universitycenter = new Navigation("#fieldhouse_SL", "fieldhouse_SL_to_universitycenter", "Click to go back to the University Center", "#universitycenter", "left", 26,26, 2);
	var mears_to_fieldhouse_SL = new Navigation("#mears", "mears_to_fieldhouse_SL", "Click to go back to the Field House", "#fieldhouse_SL", "left", 26,26, 2);
	var mears_to_pinnacles = new Navigation("#mears", "mears_to_pinnacles", "Click to go the Pinnacles", "#pinnacles", "right", 68, 26, 2);
	var pinnacles_to_mears = new Navigation("#pinnacles", "pinnacles_to_mears", "Click to go back to the Mears Complex", "#mears", "left", 26,26, 2);
	var pinnacles_to_chipeta = new Navigation("#pinnacles", "pinnacles_to_chipeta", "Click to go Chipeta Hall", "#chipeta", "right", 68, 26, 2);
	var chipeta_to_ute = new Navigation("#chipeta", "chipeta_to_ute", "Click to go Ute Hall", "#ute", "right", 68, 26, 2);
	var chipeta_to_pinnacles = new Navigation("#chipeta", "chipeta_to_pinnacles", "Click to go back to the Pinnacles", "#pinnacles", "left", 26,26, 2);
	var ute_to_chipeta = new Navigation("#ute", "ute_to_chipeta", "Click to go back to Chipeta Hall", "#chipeta", "left", 26,26, 2);
	var ute_to_taylorQuad = new Navigation("#ute","ute_to_taylorQuad", "Click to go Taylor Quad", "#taylorQuad", "right", 68, 26, 2);
	var taylorQuad_to_ute = new Navigation("#taylorQuad","taylorQuad_to_ute", "Click to go back to Ute", "#ute", "left", 26,26, 2);
	var taylorQuad_to_library = new Navigation("#taylorQuad","taylorQuad_to_library", "Click to go the Library", "#library_SL", "right", 68, 26, 2);
	var library_to_taylorQuad = new Navigation("#library_SL", "library_to_taylorQuad", "Click to go back to Taylor Quad", "#taylorQuad", "left", 26,26, 2);
	var library_to_escalante = new Navigation("#library_SL", "library_to_escalante", "Click to go the Escalante Terrace", "#escalante", "right", 68, 26, 2);
	var escalante_to_library = new Navigation("#escalante", "escalante_to_library", "Click to go back to the Library", "#library_SL", "left", 26,26, 2);
	var escalante_to_universitycenter = new Navigation("#escalante", "escalante_to_universitycenter", "Click to go the University Center", "#universitycenter", "right", 68, 26, 2);
	


	
	/*====================Athletics Arrows================== Athetic Tour = 3*/
	var fieldhouse_to_practicefield= new Navigation("#fieldhouse", "fieldhouse_to_practicefield", "Click to go the Practice Field", "#practicefield", "right", 68, 26, 3);
	var fieldhouse_to_begin= new Navigation("#fieldhouse", "fieldhouse_to_begin", "Click to go back to the Welcome Center", "#begin", "left", 26,26, 3);
	var practicefield_to_fieldhouse= new Navigation("#practicefield", "practicefield_to_fieldhouse", "Click to go back to the Field House", "#fieldhouse", "left", 26,26, 3);
	var practicefield_to_mountaineerbowl= new Navigation("#practicefield", "practicefield_to_mountaineerbowl", "Click to go the Mountaineer Bowl", "#mountaineerbowl", "right", 68, 26, 3);
	var mountaineerbowl_to_practicefield= new Navigation("#mountaineerbowl", "mountaineerbowl_to_practicefield", "Click to go back to the Practice Field", "#practicefield", "left", 26,26, 3);
	var mountaineerbowl_to_gatewayfield= new Navigation("#mountaineerbowl", "mountaineerbowl_to_gatewayfield", "Click to go Gateway Field", "#gatewayfield", "right", 68, 26, 3);
	var gatewayfield_to_mountaineerbowl= new Navigation("#gatewayfield", "gatewayfield_to_mountaineerbowl", "Click to go back to the Mountaineer Bowl", "#mountaineerbowl", "left", 26,26, 3);
	var gatewayfield_to_fieldhouse= new Navigation("#gatewayfield", "gatewayfield_to_fieldhouse", "Click to go the Field House", "#fieldhouse", "right", 68, 26, 3);


	/*====================Outdoor Arrows================== *Left arrow points to a old location, right arrows points to the new location*/
    var mainstreet_to_hartmanrocks = new Navigation("#mainstreet", "mainstreet_to_hartmanrocks", "Click to go Hartman Rocks", "#hartmanrocks", "right", 68, 26, 4);
   	var mainstreet_to_cranorhill = new Navigation("#mainstreet", "mainstreet_to_cranorhill", "Click to go Cranor Hill", "#cranorhill", "left", 26,26, 4);
	
	var hartmanrocks_to_mainstreet = new Navigation("#hartmanrocks", "hartmanrocks_to_mainstreet", "Click to go Main Street", "#mainstreet", "left", 26,26, 4);
    var hartmanrocks_to_bluemesa = new Navigation("#hartmanrocks", "hartmanrocks_to_bluemesa", "Click to go Blue Mesa", "#bluemesa", "right", 68, 26, 4);
	
	var bluemesa_to_blackcanyon = new Navigation("#bluemesa", "bluemesa_to_telluride", "Click to go to Black Canyon", "#blackcanyon", "right", 68, 26, 4);
	var bluemesa_to_hartmanrocks = new Navigation("#bluemesa", "bluemesa_to_hartmanrocks", "Click to go Hartman Rocks", "#hartmanrocks", "left", 26,26, 4);
	
	var blackcanyon_to_telluride = new Navigation("#blackcanyon", "blackcanyon_to_telluride", "Click to go Telluride", "#telluride", "right", 68, 26, 4);
	var blackcanyon_to_bluemesa = new Navigation("#blackcanyon", "blackcanyon_to_bluemesa", "Click to go Blue Mesa", "#bluemesa", "left", 26,26, 4);
	
	var telluride_to_monarchmountain = new Navigation("#telluride", "telluride_to_monarchmountain", "Click to go Monarch Mountain", "#monarchmountain", "right", 68, 26, 4);
	var telluride_to_blackcanyon = new Navigation("#telluride", "telluride_to_blackcanyon", "Click to go Black Canyon", "#blackcanyon", "left", 26,26, 4);
	
	var monarchmountain_to_taylorpark = new Navigation("#monarchmountain", "monarchmountain_to_taylorpark", "Click to go Taylor Park", "#taylorpark", "right", 68, 26, 4);
	var monarchmountain_to_telluride = new Navigation("#monarchmountain", "monarchmountain_to_telluride", "Click to go Telluride", "#telluride", "left", 26,26, 4);
	
	var taylorpark_to_lakeirwin = new Navigation("#taylorpark", "taylorpark_to_lakeirwin", "Click to go Lake Irwin", "#lakeirwin", "right", 68, 26, 4);
	var taylorpark_to_monarchmountain = new Navigation("#taylorpark", "taylorpark_to_monarchmountain", "Click to go Monarch Mountain", "#monarchmountain", "left", 26,26, 4);
	
	var lakeirwin_to_taylorpark = new Navigation("#lakeirwin", "lakeirwin_to_taylorpark", "Click to go Taylor Park", "#taylorpark", "left", 26,26, 4);
	var lakeirwin_to_cbmr = new Navigation("#lakeirwin", "lakeirwin_to_cbmr", "Click to go Crested Butte Mountain Resort", "#cbmr", "right", 68, 26, 4);

	var cbmr_to_lakeirwin = new Navigation("#cbmr", "cbmr_to_lakeirwin", "Click to go Lake Irwin", "#lakeirwin", "left", 26,26, 4);
	var cbmr_to_crestedbutte = new Navigation("#cbmr", "cbmr_to_crestedbutte", "Click to go Crested Butte", "#crestedbutte", "right", 68, 26, 4);
	
	var crestedbutte_to_cbmr = new Navigation("#crestedbutte", "crestedbutte_to_cbmr", "Click to go Crested Butte Mountian Resort", "#cbmr", "left", 26,26, 4);
	var crestedbutte_to_cranorhill = new Navigation("#crestedbutte", "crestedbutte_to_cranorhill", "Click to go Cranor Hill", "#cranorhill", "right", 68, 26, 4);
	
	var cranorhill_to_crestedbutte = new Navigation("#cranorhill", "cranorhill_to_crestedbutte", "Click to go Crested Butte", "#crestedbutte", "left", 26,26, 4);
	var cranorhill_to_mainstreet = new Navigation("#cranorhill", "cranorhill_to_mainstreet", "Click to go Gunnison Main Street", "#mainstreet", "right", 68, 26, 4);
	
	
    var navs = [ 
		
		/*======Academics Array=====*/
		   taylor_to_quigley, quigley_to_taylor, quigley_to_hurst, hurst_to_quigley, hurst_to_quigley, hurst_to_kelley, kelley_to_hurst, kelley_to_library, library_to_kelley, library_to_paulwrightgym, paulwrightgym_to_library, paulwrightgym_to_crawford, crawford_to_borick, crawford_to_paulwrightgym, borick_to_crawford, borick_to_taylor, taylor_to_begin,
		
		/*======Student Life Array=====*/
		universitycenter_to_fieldhouse_SL, universitycenter_to_begin, fieldhouse_SL_to_mears, fieldhouse_SL_to_universitycenter, mears_to_fieldhouse_SL, mears_to_pinnacles, pinnacles_to_mears, pinnacles_to_chipeta, chipeta_to_ute, chipeta_to_pinnacles, ute_to_chipeta, ute_to_taylorQuad, taylorQuad_to_ute, taylorQuad_to_library, library_to_taylorQuad, library_to_escalante,escalante_to_universitycenter, escalante_to_library,

		/*======Athletics Array=====*/
		fieldhouse_to_practicefield, practicefield_to_fieldhouse, fieldhouse_to_begin, practicefield_to_mountaineerbowl, mountaineerbowl_to_practicefield, mountaineerbowl_to_gatewayfield, gatewayfield_to_fieldhouse, gatewayfield_to_mountaineerbowl,
		
		/*======Outdoor Array=====*/
        mainstreet_to_hartmanrocks, mainstreet_to_cranorhill, hartmanrocks_to_mainstreet,  hartmanrocks_to_bluemesa, bluemesa_to_blackcanyon, bluemesa_to_hartmanrocks, telluride_to_monarchmountain, telluride_to_blackcanyon,  monarchmountain_to_taylorpark, monarchmountain_to_telluride,   taylorpark_to_lakeirwin, taylorpark_to_monarchmountain,  lakeirwin_to_taylorpark, lakeirwin_to_cbmr, cbmr_to_lakeirwin, cbmr_to_crestedbutte, crestedbutte_to_cbmr, crestedbutte_to_cranorhill, cranorhill_to_crestedbutte, cranorhill_to_mainstreet, blackcanyon_to_telluride, blackcanyon_to_bluemesa];


/***********************
 * Hotspots
 * @type {Hspot}
  ***********************/


    var uc_hotspot = new Hspot("#none", "taylor_panorama_hs", "View Panorama", "panoramas/uc_panorama/UC_Panorama.html", 60, 75);
    var taylor_hotspot = new Hspot("#none", "taylor_panorama_hs", "View Panorama", "panoramas/taylor_panorama/Taylor_Panorama.html", 60, 75);
    var library_hotspot = new Hspot("#none", "taylor_panorama_hs", "View Panorama", "panoramas/library_panorama/Library_Panorama.html", 60, 75);


    var hotspots = [taylor_hotspot, library_hotspot, uc_hotspot];
	
	
