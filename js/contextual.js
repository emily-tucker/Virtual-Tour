/**
     * Location object instances
     */
	var begin = new Location("#begin", "Welcome to Western", "defualt",
	"Western offers a private college experience at a public university cost," + "deep in the heart of the Rockies.", true, 1801, 1246);
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
	var gatewayfield = new Location("#gatewayfield", "Gateway Soccer Fields", "athletic", 
	 "65,000-square-foot LEED-Gold certified field house.",true, 1315, 869);
	var hurst = new Location("#hurst", "Hurst Hall", "academic",
            "Home of Science and Mathematics departments", true, 2422, 1227);
	var kelley = new Location("#kelley", "Kelley Hall", "academic",
            "Home of Social Sciences and Environment & Sustainability programs", true, 2288, 1100);
    var library = new Location("#library", "Leslie J. Savage Library", "studentlife",
            "The research hub for campus and a great study spot", true, 1918, 994);
	var mears = new Location("#mears", "Mears Student Housing", "studentlife",
            "Home of Social Sciences and Environment & Sustainability programs", true, 1087, 1082);
	var paulwrightgym= new Location("#paulwrightgym", "Paul Wright Gym", "athletic", 
	 "65,000-square-foot LEED-Gold certified field house.",true, 1313, 869);
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
	

    var telluride = new Location("#telluride", "Telluride", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var taylorcanyon = new Location("#tc", "Taylor Canyon", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var crestedbutte = new Location("#cb", "Crested Butte", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 713, 372);
    var monarchmountain = new Location("#mm", "Monarch Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 1193, 716);
    var taylorreservoir = new Location("#tr", "Taylor Reservoir", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var hartmanrocks = new Location("#hartmans", "Hartman Rocks", "recreation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 744, 728);
    var cbmr = new Location("#cbmr", "Crested Butte Mountain Resort", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 738, 363);
    var artscenter = new Location("#artscenter", "Gunnison Arts Center", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 760, 692);
    var wmountain = new Location("#wmountain", "W Mountain", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 778, 723);
    var elkmountains = new Location("#elkmountains", "Elk Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var sanjuan = new Location("#sanjuan", "San Juan Mountains", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var gunnison = new Location("#mainstreet", "Gunnison", "offcampus", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", true, 988, 432);
    var pathway = new Location('#pathway', "Academic Quad", "walkway", "Pathway to Hurst and Quiqly", true, 2041, 1232);
    var pathway2 = new Location("#pathway2", "Kelley Steps", "walkway", "Pathway to Taylor", true, 2083, 1076);
    var rockymountains = new Location("#rockymountains", "Rocky Mountains", "The Rocky Mounains", true, 0, 0);

    var locations = [begin, borick, chipeta, crawford, escalante, pinnacles, ute, mears, taylor, pathway, pathway2, quigley, hurst, kelley, library, universitycenter, mountaineerbowl, 
	
	telluride, taylorcanyon, crestedbutte, monarchmountain, taylorreservoir, hartmanrocks,gunnison, cbmr, artscenter, wmountain, fieldhouse, rockymountains];



    /**
     * Navigation object instances
     */
	/*====================Default Arrows================== Arrow Color: White - Default == 0*/
   
	var begin_to_gatewayfield = new Navigation("#begin", "begin_to_gatewayfield", "to Gateway Soccer Fields", "#gatewayfield", "back", 48, 15, 0); 
	var begin_to_taylor = new Navigation("#begin", "begin_to_taylor", "to Taylor Hall", "#taylor","forward", 47, 38, 0);//
	
	
	/*====================Academic Arrows================== Arrow Color: Black -Academic Tour = 1*/
	var taylor_to_borickAcademic = new Navigation("#taylor", "taylor_to_borickAcademic", "to Borick", "#borick", "left", 38, 27, 1);
	var taylor_to_quigleyAcademic = new Navigation("#taylor", "taylor_to_quigleyAcademic", "to Quigley", "#quigley", "right", 58, 27, 1); //
	var hurst_to_quigleyAcademic = new Navigation("#hurst", "hurst_to_quigleyAcademic", "Back to Quigley Hall", "#quigley", "right", 50, 17, 1);
	var hurst_to_kelleyAcademic = new Navigation("#hurst", "hurst_to_kelleyAcademic", "to Kelley Hall", "#kelley", "left", 42, 20, 1);
    var quigley_to_taylorAcademic = new Navigation("#quigley", "quigley_to_taylorAcademic", "back to Taylor", "#taylor", "backleft", 42, 18, 1);
	var quigley_to_hurstAcademic = new Navigation("#quigley", "quigly_to_hurstAcademic", "to Hurst", "#hurst", "right", 50, 27, 1);
    var kelley_to_hurstAcademic = new Navigation("#kelley", "kelley_to_hurstAcademic", "Back to Hurst Hall", "#hurst", "back", 50, 17, 1);
    var kelley_to_libraryAcademic = new Navigation("#kelley", "kelley_to_libraryAcademic", "To the library", "#library", "left", 42, 27, 1);  
    var library_to_kelleyAcademic = new Navigation("#library", "library_to_kelleyAcademic", "Back to Kelley Hall ", "#kelley", "back", 50, 17, 1);
	var library_to_crawfordAcademic = new Navigation("#library", "library_to_crawfordAcademic", "to Crawford", "#crawford", "left", 38, 27, 1);
	var crawford_to_libraryAcademic = new Navigation("#crawford", "crawford_to_libraryAcademic", "to the Library", "#library", "back", 50, 17, 1);
	var crawford_to_borickAcademic = new Navigation("#crawford", "crawford_to_borickAcademic", "to Borick", "#borick", "left", 38, 27, 1);
	var borick_to_taylorAcademic = new Navigation("#borick", "borick_to_taylorAcademic", "to Taylor", "#taylor", "right", 58, 27, 1);
	var borick_to_crawfordAcademic = new Navigation("#borick", "borick_to_crawfordAcademic", "Back to Crawford", "#crawford", "back", 50, 17, 1);
	
	
	/*====================Student Life Arrows================== Arrow Color: Red - StudentLife Tour = 2*/
	var crawford_to_librarySL = new Navigation("#crawford", "crawford_to_librarySL", "Back to Library", "#library", "back", 50, 17, 2);
	var crawford_to_universitycenterSL = new Navigation("#crawford", "crawford_to_universitycenterSL", "to University Center", "#universitycenter", "forward", 47, 27, 2);
	var library_to_universitycenterSL = new Navigation("#library", "library_to_universitycenterSL", "Back to the University Center", "#universitycenter", "back", 50, 17, 2);
    var library_to_escalanteSL = new Navigation("#library", "library_to_escalanteSL", "to Escalante Student Housing", "#escalante", "forward", 47, 27, 2);
	var escalante_to_fieldhouseSL = new Navigation("#escalante", "escalante_to_fieldhouseSL", "Back to Field House", "#fieldhouse", "forward", 47, 27, 2);
	var escalante_to_librarySL = new Navigation("#escalante", "escalante_to_librarySL", "Back to Library", "#library", "back", 50, 17, 2);
	var escalante_to_universitycenterSL = new Navigation("#escalante", "escalante_to_universitycenterSL", "to University Center", "#universitycenter", "left", 38, 27, 2);
	var universitycenter_to_librarySL = new Navigation("#universitycenter", "universitycenter_to_librarySL", "to Library", "#library", "right", 58, 27, 2);
	var universitycenter_to_uteSL = new Navigation("#universitycenter", "universitycenter_to_uteSL", "to Ute Student Housing", "#ute", "left", 38, 27, 2);
	var fieldhouse_to_pinnaclesSL = new Navigation("#fieldhouse", "fieldhouse_to_pinnaclesSL", "to the Pinaccles", "#pinnacles", "left", 38, 27, 2);
	var pinnacles_to_chipetaSL = new Navigation("#pinnacles", "pinnacles_to_chipetaSL", "to Chipeta", "#chipeta", "forward", 47, 27, 2);
	var pinnacles_to_fieldhouseSL = new Navigation("#pinnacles", "pinnacles_to_fieldhouseSL", "Back to the Fieldhouse", "#chipeta", "back", 50, 17, 2);
	var chipeta_to_pinnaclesSL = new Navigation("#chipeta", "chipeta_to_pinnaclesSL", "Back to Pinnacles", "#pinnacles", "back", 50, 17, 2);
	var chipeta_to_mearsSL = new Navigation("#chipeta", "chipeta_to_mearsSL", "to Mears", "#mears", "forward", 47, 27, 2);
	var mears_to_chipetaSL = new Navigation("#mears", "mears_to_chipetaSL", "back to Chipeta", "#chipeta", "back", 50, 17, 2);
	var mears_to_uteSL = new Navigation("#mears", "mears_to_uteSL", "to Ute", "#ute", "forward", 47, 27, 2);
	var ute_to_mearsSL = new Navigation("#ute", "ute_to_mearsSL", "Back to Mears", "#mears", "back", 50, 17, 2);
	var borick_to_uteSL = new Navigation("#borick", "borick_to_uteSL", "Back to Ute", "#ute", "back", 50, 17, 2);
	var mountaineerbowl_to_escalanteSL = new Navigation("#mountaineerbowl", "mountaineerbowl_to_escalanteSL", "to Escalante", "#escalante", "back", 50, 17, 2);
    var fieldhouse_to_universitycenterSL = new Navigation("#fieldhouse", "fieldhouse_to_universitycenterSL", "to University Center", "#universitycenter", "back", 50, 17, 2);


	
	/*====================Athletics Arrows================== Arrow Color: Slate- Athetic Tour = 3*/
	var gatewayfield_to_mountaineerbowlAthletics= new Navigation("#gatewayfield", "gatewayfield_to_mountaineerbowlAthletics", "to the Mountaineer Bowl", "#mountaineerbowl", "forward", 47, 27, 3);
	var gatewayfield_to_fieldhouseAthletics = new Navigation("#gatewayfield", "gatewayfield_to_fieldhouseAthletics", "Back to the Field House", "#fieldhouse", "forward", 47, 27, 3);
	var fieldhouse_to_paulwrightgymAthletics = new Navigation("#fieldhouse", "fieldhouse_to_paulwrightgymAthletics", "Back to Paul Wright gym", "#paulwrightgym", "forward", 47, 27, 3);
    var fieldhouse_to_gatewayfieldAthletics = new Navigation("#fieldhouse", "fieldhouse_to_gatewayfieldAthletics", "to Gateway Field", "#gatewayfield", "back", 50, 17, 3);
	var paulwrightgym_to_fieldhouseAthletics = new Navigation("#paulwrightgym", "paulwrightgym_to_fieldhouseAthletics", "Back to the Fieldhouse", "#fieldhouse", "back", 50, 17, 3);
	var paulwrightgym_to_mountaineerbowlAthletics = new Navigation("#paulwrightgym", "paulwrightgym_to_mountaineerbowlAthletics", 
													"To the mountaineerbowl", "#mountaineerbowl", "forward", 47, 27, 3);
    var mountaineerbowl_to_paulwrightgymAthletic = new Navigation("#mountaineerbowl", "mountaineerbowl_to_paulwrightgymAthletic", "to Paul Wright Gym", "#paulwrightgym", "back", 50, 17, 3);
	
	

	/*====================Outdoor Arrows==================*/
    var dtToHr = new Navigation("#mainstreet", "dt_to_hr", "to Hartmans", "#hartmans", "left", 25, 20, 4);
    var dtTorm = new Navigation("#mainstreet", "dttorm", " to Rocky Mountains", "#rockymountains", "right", 65, 20, 4);

    var hrToCb = new Navigation("#hartmans", "hrToCb", "to Crested Butte", "#cb", "left", 25,20, 4);
    var hrTOdt = new Navigation("#hartmans", "hrtodt", "to Downtown", "#mainstreet", "right", 65, 20, 4);

    var cbToRm = new Navigation("#cb", "cbtorm", "to Rocky Mountains", "#rockymountains", "left", 25, 20, 4);
    var cbtohr = new Navigation("#cb", "cbtohr", "to Hartmans", "#hartmans", "right", 65, 20, 4);

    var rmToDt = new Navigation("#rockymountains", "rmtodt", "to Downtown", "#mainstreet", "left", 25, 20, 4);
    var rmTOCb = new Navigation("#rockymountains", "rmtocb", "to Crested Butte", "#cb", "right", 65, 20, 4);

    var navs = [ begin_to_gatewayfield, begin_to_taylor,
		
		/*======Academics Array=====*/
		taylor_to_borickAcademic, taylor_to_quigleyAcademic, hurst_to_kelleyAcademic, quigley_to_taylorAcademic, quigley_to_hurstAcademic, kelley_to_hurstAcademic, kelley_to_libraryAcademic, hurst_to_quigleyAcademic, library_to_kelleyAcademic, library_to_crawfordAcademic, crawford_to_libraryAcademic, crawford_to_borickAcademic, borick_to_taylorAcademic, escalante_to_librarySL,
		escalante_to_universitycenterSL, universitycenter_to_librarySL, universitycenter_to_uteSL, borick_to_crawfordAcademic,
		
		/*======Student Life Array=====*/
		crawford_to_librarySL, crawford_to_universitycenterSL, library_to_escalanteSL, escalante_to_fieldhouseSL, library_to_universitycenterSL, fieldhouse_to_pinnaclesSL, pinnacles_to_chipetaSL, pinnacles_to_fieldhouseSL, chipeta_to_pinnaclesSL, chipeta_to_mearsSL, mears_to_chipetaSL, mears_to_uteSL, ute_to_mearsSL, borick_to_uteSL, mountaineerbowl_to_escalanteSL, fieldhouse_to_universitycenterSL,

		
		/*======Athletics Array=====*/
		gatewayfield_to_mountaineerbowlAthletics, gatewayfield_to_fieldhouseAthletics,fieldhouse_to_paulwrightgymAthletics, fieldhouse_to_gatewayfieldAthletics, 										        paulwrightgym_to_fieldhouseAthletics, paulwrightgym_to_mountaineerbowlAthletics, mountaineerbowl_to_paulwrightgymAthletic,
		
		/*======Outdoor Array=====*/
		dtToHr, dtTorm, hrToCb,hrTOdt,cbToRm, cbtohr, rmToDt, rmTOCb ];
 



    /**
     * Hspot object instances
     */
    var taylor_hotspot = new Hspot("#taylor", "taylor_panorama_hs", "view Panorama", "panoramas/taylor_panorama/Taylor_Panorama.html", 60, 75);
    var hotspots = [taylor_hotspot];