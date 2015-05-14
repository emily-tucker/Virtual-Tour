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
new MenuItem({text: 'About', icon: 'fa fa-university ', target: 'external', href: "#"}),
new MenuItem({text: 'Location', icon: 'fa fa-university ', target: 'external', href: "#"}),
new MenuItem({text: 'Prices', icon: 'fa fa-university ', target: 'external', href: "#"})
]

var subfish = [
new MenuItem({text: 'Ice Fishing', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Salmon Fishing', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Gunnison River', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subblue = [
new MenuItem({text: 'About', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Fishing', icon: 'fa fa-university', items: subfish})
]

var subhart = [
new MenuItem({text: 'Location', icon: 'fa fa-university ', target: 'external', href: "#"})
]
var subfree = [
new MenuItem({text: 'Shuttle Stops', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Times', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subpass = [
new MenuItem({text: 'Student Discount', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'CBMR Website', icon: 'fa fa-university', target: 'external', href: "#"})
]


var subcbmr = [
new MenuItem({text: 'About', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Ski Pass', icon: 'fa fa-university', items: subpass}),
new MenuItem({text: 'Free Shuttle', icon: 'fa fa-university', items: subfree})
]


var subnear = [
new MenuItem({text: 'CBMR', icon: 'fa fa-tree', items: subcbmr}),
new MenuItem({text: 'Monarch', icon: 'fa fa-tree', target: 'external', href: "#"}),
new MenuItem({text: 'Hartman Rocks', icon: 'fa fa-university', items: subhart}),
new MenuItem({text: 'Blue Mesa', icon: 'fa fa-university', items: subblue}),
new MenuItem({text: 'Wanita Hot Springs', icon: 'fa fa-university', items: subwanita})
]

var suboff = [
new MenuItem({text: 'Mountaineer Village', icon: 'fa fa-bed', target: 'external', href: "#"}),
new MenuItem({text: 'Sunshine Appts', icon: 'fa fa-bed', target: 'external', href: "#"})
]

var subon = [
new MenuItem({text: 'Escalante', icon: 'fa fa-bed', taget: '#'}),
new MenuItem({text: 'Mears', icon: 'fa fa-bed', target: 'external', href: "#"}),
new MenuItem({text: 'Ute', icon: 'fa fa-bed', target: 'external', href: "#"}),
new MenuItem({text: 'Pinnacles', icon: 'fa fa-bed', target: 'external', href: "#"})
]


var subhousing = [
new MenuItem({text: 'On Campus', icon: 'fa fa-university', items: subon}),
new MenuItem({text: 'Off Campus', icon: 'fa fa-university', items: suboff})
]

var subacademicclub = [
new MenuItem({text: 'Math Club', icon: 'fa fa-bar-chart', target: 'external', href: "#"}),
new MenuItem({text: 'CS Club', icon: 'fa fa-code', target: 'external', href: "#"}),
new MenuItem({text: 'Chemistry Club', icon: 'fa fa-flask', target: 'external', href: "#"})
]


var subclub = [
new MenuItem({text: 'Academic Clubs', icon: 'fa fa-university', items: subacademicclub}),
new MenuItem({text: 'Sports Clubs', icon: 'fa fa-futbol-o', target: 'external', href: "#"}),
new MenuItem({text: 'Cultural', icon: 'fa fa-euro', target: 'external', href: "#"}),
new MenuItem({text: 'Special Interests', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subactivities = [
new MenuItem({text: 'Clubs and Organizations', icon: 'fa fa-university', items: subclub}),
new MenuItem({text: 'Recreation', icon: 'fa fa-gamepad', target: 'external', href: "#"})
]
var subvisit = [
new MenuItem({text: 'Setup Visit', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Contact Us', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subtution = [
new MenuItem({text: 'In State', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Out of State', icon: 'fa fa-university', target: 'external', href: "#"})
]


var subfuture = [
new MenuItem({text: 'Apply Now!!', icon: 'fa fa-star ', target: 'external', href: "#"}),
new MenuItem({text: 'Tution and Fees', icon: 'fa fa-credit-card ', items: subtution}),
new MenuItem({text: 'Visit Campus', icon: 'fa fa-university ', items: subvisit}),
new MenuItem({text: 'Activities', icon: 'fa fa-smile-o ', items: subactivities}),
new MenuItem({text: 'Housing', icon: 'fa fa-home ', items: subhousing}),
new MenuItem({text: 'Nearby', icon: 'fa fa-road ', items: subnear}),
new MenuItem({text: 'Downtown Gunnison', icon: 'fa fa-university '})
]

var subbike = [
new MenuItem({text: 'Hartmans Rocks', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Trails Nearby', icon: 'fa fa-university', target: 'external', href: "#"})
]
var subski = [
new MenuItem({text: 'CBMR', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Monarch', icon: 'fa fa-university', target: 'external', href: "#"})
]


var submountain = [
new MenuItem({text: 'Ski and Snowboard', icon: 'fa fa-tree', items: subski}),
new MenuItem({text: 'Mountain Biking', icon: 'fa fa-bicycle', items: subbike})
]

var subsoccer = [
new MenuItem({text: 'Soccer Field', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subswimming = [
new MenuItem({text: 'Swimming Pool', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subtrack = [
new MenuItem({text: 'Indoor Facility', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subwrestling = [
new MenuItem({text: 'Paul Wright Gym', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subbasketball = [
new MenuItem({text: 'Paul Wright Gym', icon: 'fa fa-university', target: 'external', href: "#"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]

var subfootball = [
new MenuItem({text: 'Mountaineer Bowl', icon: 'fa fa-university', target:"external", href: "http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-westerns-campus/mountaineer-bowl", onclick:"javascript:void window.open('http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-westerns-campus/mountaineer-bowl','1430177789396','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Staff', icon: 'fa fa-university', target: 'external', href: "#"})
]


var subncaa = [
new MenuItem({text: 'Football', icon: 'fa fa-university', items: subfootball}),
new MenuItem({text: 'Basketball', icon: 'fa fa-university', items: subbasketball}),
new MenuItem({text: 'Wrestling', icon: 'fa fa-university', items: subwrestling}),
new MenuItem({text: 'Track', icon: 'fa fa-university', items: subtrack}),
new MenuItem({text: 'Swimming', icon: 'fa fa-university', items: subswimming}),
new MenuItem({text: 'Soccer', icon: 'fa fa-university', items: subsoccer})
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
new MenuItem({text: 'Enviromental Management', icon: 'fa fa-recycle', items: submenu}),
new MenuItem({text: 'High Altitude Exercise Physiology', icon: 'fa fa-heartbeat', items: submenu}),
]

var subcs = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: "external", href:"http://www.western.edu/academics/undergraduate/course-catalog/university-catalog-2015-16/academic-programs-undergraduate-16", onclick:"javascript:void window.open('http://www.western.edu/academics/undergraduate/course-catalog/university-catalog-2015-16/academic-programs-undergraduate-16','1430177668613','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target:"external", href: "http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-western/hurst-hall", onclick:"javascript:void window.open('http://www.western.edu/future-students/visiting-campus/virtual-tour/virtual-tour-western/hurst-hall','1429760435258','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=50%');return false;"}),
new MenuItem({text: 'CS Page', icon: 'fa fa-file', target: "external", href: "http://wiki.western.edu/mcis/index.php/Main_Page", onclick:"javascript:void window.open('http://wiki.western.edu/mcis/index.php/Main_Page','1430177354180','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: "external", href: "http://www.western.edu/academics/undergraduate/computer-information-science/computer-science-course-rotation", onclick:"javascript:void window.open('http://www.western.edu/academics/undergraduate/computer-information-science/computer-science-course-rotation','1430177457006','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=300%,top=75%');return false;"})
]

var subcriminal = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Criminal Justice Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subcreative = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Creative Writing Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subcs = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'CS Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subcom = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Communication Arts Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subschoolofB = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Chemistry Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subbusiness = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Business Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subbio = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Biology Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subplrm = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Art Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subaccounting = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Anthropology Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subart = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subecon = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subresort = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subentre = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var submanage = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var submath = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subchem = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subbio = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subphysics = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subanthro = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subgeo = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subgeograph = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subland = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subspanish = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subenglish = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]

var subcreative = [
new MenuItem({text: 'Professors', icon: 'fa fa-male', target: 'external', href: "#"}),
new MenuItem({text: 'Buildings', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Accounting Page', icon: 'fa fa-building', target: 'external', href: "#"}),
new MenuItem({text: 'Courses', icon: 'fa fa-th', target: 'external', href: "#"})
]
var subenvCat = [
new MenuItem({text: 'Anthropology', icon: 'fa fa-gavel', items: subanthro}),
new MenuItem({text: 'Geology', icon: 'fa fa-gavel', items: subgeo}),
new MenuItem({text: 'Land and Resource Mangagement', icon: 'fa fa-gavel', items: subland}),
new MenuItem({text: 'Geography', icon: 'fa fa-gavel', items: subgeograph})
]
var subbusinessCat = [
new MenuItem({text: 'Accounting', icon: 'fa fa-building', items: subaccounting}),
new MenuItem({text: 'PLRM', icon: 'fa fa-building', items: subplrm}),
new MenuItem({text: 'Business', icon: 'fa fa-building', items: subbusiness}),
new MenuItem({text: 'School of Business', icon: 'fa fa-building', items: subschoolofB}),
new MenuItem({text: 'Economics', icon: 'fa fa-building', items: subecon}),
new MenuItem({text: 'Resort Management', icon: 'fa fa-building', items: subresort}),
new MenuItem({text: 'Entrepreneurship', icon: 'fa fa-building', items: subentre}),
new MenuItem({text: 'Management', icon: 'fa fa-building', items: submanage})
]
var subartsCat = [
new MenuItem({text: 'Music', icon: 'fa fa-paint-brush',}),
new MenuItem({text: 'Art', icon: 'fa fa-paint-brush',}),
]
var subscienceandmathCat = [
new MenuItem({text: 'Mathematics', icon: 'fa fa-laptop', items: submath}),
new MenuItem({text: 'Chemistry', icon: 'fa fa-laptop', items: subchem}),
new MenuItem({text: 'Biology', icon: 'fa fa-laptop', items: subbio}),
new MenuItem({text: 'Computer Science', icon: 'fa fa-laptop', items: subcs}),
new MenuItem({text: 'Physics', icon: 'fa fa-laptop', items: subphysics})
]
var sublitandlangCat = [
new MenuItem({text: 'Creative Writing', icon: 'fa fa-book', items: subcreative}),
new MenuItem({text: 'Spanish', icon: 'fa fa-book', items: subspanish}),
new MenuItem({text: 'English', icon: 'fa fa-pencil', items: subenglish})
]

var submajors = [
new MenuItem({text: 'Arts', icon: 'fa fa-paint-brush', items: subartsCat}),
new MenuItem({text: 'Business', icon: 'fa fa-building', items: subbusinessCat}),
new MenuItem({text: 'Science and Math', icon: 'fa fa-trophy', items: subcom}),
new MenuItem({text: 'Computer Science', icon: 'fa fa-laptop', items: subscienceandmathCat}),
new MenuItem({text: 'Environment Related', icon: 'fa fa-gavel', items: subenvCat}),
new MenuItem({text: 'Literature and Language', icon: 'fa fa-pencil', items: sublitandlangCat})
]


var subacademics = [
new MenuItem({text: 'Majors', icon: 'fa fa-arrow-right ', items: submajors}),
new MenuItem({text: 'Graduate Programs', icon: 'fa fa-graduation-cap ', items: subgrad}),
new MenuItem({text: 'Extended Studies', icon: 'fa fa-file "', items:  subextended}),
new MenuItem({text: 'University Catalog', icon: 'fa fa-file "', items: subcatalog}),
new MenuItem({text: 'Academic Calendar', icon: 'fa fa-calendar ', target: 'external', href: "#"})
]


var subgo = [
new MenuItem({text: 'Business Building', icon: 'fa fa-university ', target: "locations", href: '#borrick'}),
new MenuItem({text: 'Chipeta Hall', icon: 'fa fa-university ', target: "locations", href: '#chipeta'}),
new MenuItem({text: 'Escalante Terrace', icon: 'fa fa-university ', target: '#escalante'}),
new MenuItem({text: 'Hurst Hall', icon: 'fa fa-university ', target:"locations", href: '#hurst'}),
new MenuItem({text: 'Kelley Hall', icon: 'fa fa-university ', target: "locations", href: '#kelley'}),
new MenuItem({text: 'Library', icon: 'fa fa-university ', target: "locations", href: '#library'}),
new MenuItem({text: 'Mears Hall', icon: 'fa fa-university ', target: "locations", href: '#mears'}),
new MenuItem({text: 'Moffat Hall', icon: 'fa fa-university ', target:"locations", href: '#moffat'}),
new MenuItem({text: 'Mountaineer Bowl', icon: 'fa fa-university ', target:"locations", href: '#mountaineerbowl'}),
new MenuItem({text: 'Pinnacles', icon: 'fa fa-university ', target: "locations", href:'#pinnacles'}),
new MenuItem({text: 'Quigley Hall', icon: 'fa fa-university ', target:"locations", href: '#quigley'})  ,
new MenuItem({text: 'Taylor Hall', icon: 'fa fa-university ', target: "locations", href:'#taylor'})  ,
new MenuItem({text: 'University Center', icon: 'fa fa-university ', target:"locations", href: '#universitycenter'})  ,
new MenuItem({text: 'W Mountain', icon: 'fa fa-university ', target: "locations", href:'#wmountain'})
]

var submenu = [
new MenuItem({text: 'Academics', icon: 'fa fa-book ', items: subacademics}),
new MenuItem({text: 'Athletics', icon: 'fa fa-bicycle ', items: subathletics}),
new MenuItem({text: 'Student Life', icon: 'fa fa-mars', items: subfuture}),
new MenuItem({text: 'Go To', icon: 'fa fa-th', items: subgo})
]

var menu = new Menu({text: 'Menu', icon: 'fa fa-building', items: submenu})
menu.items = submenu;
