var Menu = function(opts) {
    this.name = opts.name ? opts.name : 'main';
    this.text = opts.text ? opts.text : 'Menu';
    this.icon = opts.icon;
    this.items = opts.items;
    this.target = '';
};

var MenuItem = function(opts) {
    this.text = opts.text;
    this.icon = opts.icon ? opts.icon : '';
    this.target = opts.target ? opts.target : ''; this.onclk = opts.onclick ? opts.onclick : '';
    this.rel = opts.rel ? opts.rel: '';
    this.items = opts.items ? opts.items : [];
    this.href = opts.href ? opts.href : '';
};

var subwanita = [
new MenuItem({text: 'Location', icon: 'fa fa-map-marker ', target: 'external', href: "#"}),
new MenuItem({text: 'Prices', icon: 'fa fa-usd ', target: 'external', href: "#"})
]

var subfish = [
new MenuItem({text: 'Ice Fishing', icon: 'fa fa-ship', target: 'external', href: "#"}),
new MenuItem({text: 'Salmon Fishing', icon: 'fa fa-ship', target: 'external', href: "#"}),
new MenuItem({text: 'Gunnison River', icon: 'fa fa-ship', target: 'external', href: "#"})
]

var subblue = [
new MenuItem({text: 'About', icon: 'fa fa-question', target: 'external', href: "#"}),
new MenuItem({text: 'Fishing', icon: 'fa fa-ship', items: subfish})
]

var subhart = [
new MenuItem({text: 'Location', icon: 'fa fa-map-marker ', target: 'external', href: "#"})
]
var subfree = [
new MenuItem({text: 'Shuttle Stops', icon: 'fa fa-bus', target: 'external', href: "#"}),
new MenuItem({text: 'Times', icon: 'fa fa-clock-o', target: 'external', href: "#"})
]

var subpass = [
new MenuItem({text: 'Student Discount', icon: 'fa fa-usd', target: 'external', href: "#"}),
new MenuItem({text: 'CBMR Website', icon: 'fa fa-tree', target: 'external', href: "#"})
]


var subcbmr = [
new MenuItem({text: 'About', icon: 'fa fa-question', target: 'external', href: "#"}),
new MenuItem({text: 'Ski Pass', icon: 'fa fa-tree', items: subpass}),
new MenuItem({text: 'Free Shuttle', icon: 'fa fa-bus', items: subfree})
]


var subnear = [
new MenuItem({text: 'CBMR', icon: 'fa fa-tree', items: subcbmr}),
new MenuItem({text: 'Monarch', icon: 'fa fa-tree', target: 'external', href: "#"}),
new MenuItem({text: 'Hartman Rocks', icon: 'fa fa-bicycle', items: subhart}),
new MenuItem({text: 'Blue Mesa', icon: 'fa fa-ship', items: subblue}),
new MenuItem({text: 'Wanita Hot Springs', icon: 'fa fa-life-ring', items: subwanita})
]

var subon = [
new MenuItem({text: 'Escalante', icon: 'fa fa-bed', target: "locations", href: '#escalante'}),
new MenuItem({text: 'Mears', icon: 'fa fa-bed', target: "locations", href: '#mears'}),
new MenuItem({text: 'Ute', icon: 'fa fa-bed',target: "locations", href: '#ute'}),
new MenuItem({text: 'Pinnacles', icon: 'fa fa-bed', target: "locations", href: '#pinnacles'})
]


var subhousing = [
new MenuItem({text: 'On Campus', icon: 'fa fa-building', items: subon})
]

var subacademicclub = [
new MenuItem({text: 'Math Club', icon: 'fa fa-bar-chart', target: 'external', href: "#"}),
new MenuItem({text: 'CS Club', icon: 'fa fa-code', target: 'external', href: "#"}),
new MenuItem({text: 'Chemistry Club', icon: 'fa fa-flask', target: 'external', href: "#"})
]


var subclub = [
new MenuItem({text: 'Academic Clubs', icon: 'fa fa-university', target: 'external', href: "http://www.western.edu/current-students/student-activities/academic-clubs-and-honor-societies"}),
new MenuItem({text: 'Club Sports', icon: 'fa fa-futbol-o', target: 'external', href: "http://www.western.edu/current-students/campus-recreation/club-sports"}),
new MenuItem({text: 'Cultural', icon: 'fa fa-euro', target: 'external', href: "http://www.western.edu/current-students/multicultural-center"}),
new MenuItem({text: 'Student Government', icon: 'fa fa-gavel', target: 'external', href: "http://www.western.edu/current-students/student-government-association/sga-documents"}),
new MenuItem({text: 'KWSB Radio', icon: 'fa fa-headphones', target: 'external', href: "http://www.western.edu/current-students/other-student-activities/kwsb-911fm"})
]

var subactivities = [
new MenuItem({text: 'Clubs', icon: 'fa fa-music', items: subclub}),
new MenuItem({text: 'Recreation', icon: 'fa fa-gamepad', target: 'external', href: "#"})
]
var subvisit = [
new MenuItem({text: 'Setup Visit', icon: 'fa fa-check-square', target: 'external', href: "http://www.western.edu/future-students/visiting-campus/visit-western"}),
new MenuItem({text: 'Contact Us', icon: 'fa fa-phone', target: 'external', href: "http://www.western.edu/future-students/contact-admissions/meet-admissions-counselors"})
]



var subfuture = [
new MenuItem({text: 'Apply Now!', icon: 'fa fa-star ', target: 'external', href: "http://www.western.edu/future-students/apply-now-western"}),
new MenuItem({text: 'Tution and Fees', icon: 'fa fa-credit-card ',target: 'external', href: "http://www.western.edu/future-students/financing-your-education/tuition-and-fees-western"}),
new MenuItem({text: 'Visit Campus', icon: 'fa fa-university ', items: subvisit}),
new MenuItem({text: 'Activities', icon: 'fa fa-smile-o ', items: subactivities}),
new MenuItem({text: 'Housing', icon: 'fa fa-home ', items: subhousing}),
new MenuItem({text: 'Nearby', icon: 'fa fa-road ', items: subnear}),
]

var subbike = [
new MenuItem({text: 'Hartmans Rocks', icon: 'fa fa-tree', target: 'external', href: "#"}),
new MenuItem({text: 'Trails Nearby', icon: 'fa fa-motorcycle', target: 'external', href: "#"})
]
var subski = [
new MenuItem({text: 'CBMR', icon: 'fa fa-tree', target: 'external', href: "#"}),
new MenuItem({text: 'Monarch', icon: 'fa fa-tree', target: 'external', href: "#"})
]


var submountain = [
new MenuItem({text: 'Ski and Snowboard', icon: 'fa fa-tree', target: 'external', href: "http://wscumountainsports.com/come-ski-with-the-team/"}),
new MenuItem({text: 'Mountain Biking', icon: 'fa fa-bicycle', target: 'external', href: "http://wscumountainsports.com/new-mountain-biking/"}),
new MenuItem({text: 'Trail Running', icon: 'fa fa-bicycle', target: 'external', href: "http://wscumountainsports.com/trail-running/"})
]

var subsoccer = [
new MenuItem({text: 'Soccer Field', icon: 'fa fa-futbol-o', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]

var subswimming = [
new MenuItem({text: 'Swimming Pool', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]

var subtrack = [
new MenuItem({text: 'Indoor Facility', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]

var subwrestling = [
new MenuItem({text: 'Paul Wright Gym', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]

var subbasketball = [
new MenuItem({text: 'Paul Wright Gym', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]

var subfootball = [
new MenuItem({text: 'Mountaineer Bowl', icon: 'fa fa-university', target:"external", href: "http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-westerns-campus/mountaineer-bowl", onclick:"javascript:void window.open('http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-westerns-campus/mountaineer-bowl','1430177789396','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Staff', icon: 'fa fa-users', target: 'external', href: "#"})
]


var subncaa = [
new MenuItem({text: 'Football', icon: 'fa fa-skyatlas', items: subfootball}),
new MenuItem({text: 'Basketball', icon: 'fa fa-trophy', items: subbasketball}),
new MenuItem({text: 'Wrestling', icon: 'fa fa-bell', items: subwrestling}),
new MenuItem({text: 'Track', icon: 'fa fa-bolt', items: subtrack}),
new MenuItem({text: 'Swimming', icon: 'fa fa-life-ring', items: subswimming}),
new MenuItem({text: 'Soccer', icon: 'fa fa-futbol-o', items: subsoccer})
]


var subathletics = [
new MenuItem({text: 'NCAA Sports', icon: 'fa fa-futbol-o ', items: subncaa}),
new MenuItem({text: 'Mountain Sports', icon: 'fa fa-motorcycle ', items: submountain})
]

var subcatalog = [
new MenuItem({text: 'Past Catalogs', icon: 'fa fa-clipboard', target: 'external', href: "#"}),
new MenuItem({text: 'Current Catalog', icon: 'fa fa-clipboard', target: 'external', href: "#"})
]

var subconcurrent = [
new MenuItem({text: 'Learn More', icon: 'fa fa-hand-o-right', target: 'external', href: "#"})
]

var subaccess = [
new MenuItem({text: 'Learn More', icon: 'fa fa-hand-o-right', target: 'external', href: "#"})
]

var subregister = [
new MenuItem({text: 'Join In', icon: 'fa fa-smile-o', target: 'external', href: "#"})
]


var subextended = [
new MenuItem({text: 'Register', icon: 'fa fa-clipboard', items: subregister}),
new MenuItem({text: 'Access Program', icon: 'fa fa-university', items: subaccess}),
new MenuItem({text: 'Concurrent Enrollment Programs', icon: 'fa fa-certificate', items: subconcurrent})
]


var subgrad = [
new MenuItem({text: 'Art', icon: 'fa fa-paint-brush', target: 'external', href: "#"}),
new MenuItem({text: 'Creative Writing', icon: 'fa fa-pencil', target: 'external', href: "#"}),
new MenuItem({text: 'Education', icon: 'fa fa-book', target: 'external', href: "#"}),
new MenuItem({text: 'Environmental Management', icon: 'fa fa-recycle', items: submenu}),
new MenuItem({text: 'High Altitude Exercise Physiology', icon: 'fa fa-heartbeat', items: submenu}),
]

var subcs = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: "external", href:"http://www.western.edu/academics/undergraduate/course-catalog/university-catalog-2015-16/academic-programs-undergraduate-16", onclick:"javascript:void window.open('http://www.western.edu/academics/undergraduate/course-catalog/university-catalog-2015-16/academic-programs-undergraduate-16','1430177668613','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target:"external", href: "http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-western/hurst-hall", onclick:"javascript:void window.open('http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-western/hurst-hall','1429760435258','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=50%');return false;"}),
new MenuItem({text: 'CS Page', icon: 'fa fa-file', target: "external", href: "http://wiki.western.edu/mcis/index.php/Main_Page", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: "external", href: "http://www.western.edu/academics/undergraduate/computer-information-science/computer-science-course-rotation", onclick:"javascript:void window.open('http://www.western.edu/academics/undergraduate/computer-information-science/computer-science-course-rotation','1430177457006','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"})
]



var subacademics = [
new MenuItem({text: 'Majors', icon: 'fa fa-arrow-right ', target: "external", href: "http://www.western.edu/academics/undergraduate-areas-study", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Graduate Programs', icon: 'fa fa-graduation-cap ', target: "external", href: "http://www.western.edu/academics/graduate-programs-western", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Extended Studies', icon: 'fa fa-globe "', target: "external", href: "http://www.western.edu/academics/extended-studies", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'University Catalog', icon: 'fa fa-book "', target: "external", href: "http://www.western.edu/future-students/accepted-students/office-registrar/university-catalog", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Academic Calendar', icon: 'fa fa-calendar ', target: "external", href: "http://www.western.edu/academics/academic-calendar", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"})
]


var subgo = [
new MenuItem({text: 'Borick', icon: 'fa fa-university ', target: "locations", href: '#borick'}),
new MenuItem({text: 'Chipeta Hall', icon: 'fa fa-university ', target: "locations", href: '#chipeta'}),
new MenuItem({text: 'Escalante', icon: 'fa fa-university ', target: "locations", href: '#escalante'}),
new MenuItem({text: 'Hurst Hall', icon: 'fa fa-university ', target:"locations", href: '#hurst'}),
new MenuItem({text: 'Kelley Hall', icon: 'fa fa-university ', target: "locations", href: '#kelley'}),
new MenuItem({text: 'Library', icon: 'fa fa-university ', target: "locations", href: '#library'}),
new MenuItem({text: 'Mears Hall', icon: 'fa fa-university ', target: "locations", href: '#mears'}),
new MenuItem({text: 'Mountaineer Bowl', icon: 'fa fa-university ', target:"locations", href: '#mountaineerbowl'}),
new MenuItem({text: 'Pinnacles', icon: 'fa fa-university ', target: "locations", href:'#pinnacles'}),
new MenuItem({text: 'Quigley Hall', icon: 'fa fa-university ', target:"locations", href: '#quigley'})  ,
new MenuItem({text: 'Taylor Hall', icon: 'fa fa-university ', target: "locations", href:'#taylor'})  ,
new MenuItem({text: 'University Center', icon: 'fa fa-university ', target:"locations", href: '#universitycenter'})  ,
    new MenuItem({text: 'Ute Hall', icon: 'fa fa-university ', target: "locations", href:'#ute'}),
    new MenuItem({text: 'Fieldhouse', icon: 'fa fa-university ', target: "locations", href:'#fieldhouse'})

]

var submenu = [
new MenuItem({text: 'Schedule a Visit', icon: 'fa fa-bus', target: "external", href: "http://www.western.edu/future-students/experience-western", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Academics', icon: 'fa fa-book ', items: subacademics}),
new MenuItem({text: 'Athletics', icon: 'fa fa-bicycle ', items: subathletics}),
new MenuItem({text: 'Student Life', icon: 'fa fa-users', items: subfuture}),
new MenuItem({text: 'Go To', icon: 'fa fa-th', items: subgo})
]

var menu = new Menu({text: 'Menu', icon: 'fa fa-building', items: submenu})
menu.items = submenu;
