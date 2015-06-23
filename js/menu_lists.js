var subnear = [
new MenuItem({
        text: 'CBMR',
        icon: 'fa fa-tree',
        target: 'locations',
        href: '#cb'
    }),
new MenuItem({
        text: 'Downtown Gunnison',
        icon: 'fa fa-building',
        target: 'locations',
        href: "#mainstreet"
    }),
new MenuItem({
        text: 'Hartman Rocks',
        icon: 'fa fa-bicycle',
        target: 'locations',
        href: '#hartmans'
    }),
new MenuItem({
        text: 'Rocky Mountains',
        icon: 'fa fa-cloud',
        target: 'locations',
        href: '#rockymountains'
    }),
]

var subon = [
    new MenuItem({
        text: 'Escalante',
        icon: 'fa fa-home',
        target: "locations",
        href: '#escalante'
    }),
    new MenuItem({
        text: 'Mears',
        icon: 'fa fa-home',
        target: "locations",
        href: '#mears'
    }),
    new MenuItem({
        text: 'Ute',
        icon: 'fa fa-home',
        target: "locations",
        href: '#ute'
    }),
    new MenuItem({
        text: 'Pinnacles',
        icon: 'fa fa-home',
        target: "locations",
        href: '#pinnacles'
    })
]


var subhousing = [
    new MenuItem({
        text: 'On Campus',
        icon: 'fa fa-building',
        items: subon
    }),
]

var subclub = [
    new MenuItem({
        text: 'Academic Clubs',
        icon: 'fa fa-university',
        target: 'external',
        href: "http://www.western.edu/current-students/student-activities/academic-clubs-and-honor-societies"
    }),
    new MenuItem({
        text: 'Club Sports',
        icon: 'fa fa-futbol-o',
        target: 'external',
        href: "http://www.western.edu/current-students/campus-recreation/club-sports"
    }),
    new MenuItem({
        text: 'Cultural',
        icon: 'fa fa-euro',
        target: 'external',
        href: "http://www.western.edu/current-students/multicultural-center"
    }),
    new MenuItem({
        text: 'Student Government',
        icon: 'fa fa-gavel',
        target: 'external',
        href: "http://www.western.edu/current-students/student-government-association/sga-documents"
    }),
    new MenuItem({
        text: 'KWSB Radio',
        icon: 'fa fa-headphones',
        target: 'external',
        href: "http://www.western.edu/current-students/other-student-activities/kwsb-911fm"
    })
]

var subactivities = [
    new MenuItem({
        text: 'Clubs',
        icon: 'fa fa-music',
        items: subclub
    }),
    new MenuItem({
        text: 'Recreation',
        icon: 'fa fa-gamepad',
        target: 'external',
        href: "http://www.western.edu/future-students/life-western/recreation"
    })
]
var subvisit = [
    new MenuItem({
        text: 'Setup Visit',
        icon: 'fa fa-check-square',
        target: 'external',
        href: "http://www.western.edu/future-students/visiting-campus/visit-western"
    }),
    new MenuItem({
        text: 'Contact Us',
        icon: 'fa fa-phone',
        target: 'external',
        href: "http://www.western.edu/future-students/contact-admissions/meet-admissions-counselors"
    })
]


var subfuture = [
    new MenuItem({
        text: 'Apply Now!',
        icon: 'fa fa-star ',
        target: 'external',
        href: "http://www.western.edu/future-students/apply-now-western"
    }),
    new MenuItem({
        text: 'Tution and Fees',
        icon: 'fa fa-credit-card ',
        target: 'external',
        href: "http://www.western.edu/future-students/financing-your-education/tuition-and-fees-western"
    }),
    new MenuItem({
        text: 'Visit Campus',
        icon: 'fa fa-university ',
        items: subvisit
    }),
    new MenuItem({
        text: 'Activities',
        icon: 'fa fa-smile-o ',
        items: subactivities
    }),
    new MenuItem({
        text: 'Housing',
        icon: 'fa fa-home ',
        items: subhousing
    }),
    new MenuItem({
        text: 'Nearby',
        icon: 'fa fa-road ',
        items: subnear
    }),
]

var subbike = [
    new MenuItem({
        text: 'Hartmans Rocks',
        icon: 'fa fa-tree',
        target: 'external',
        href: "#"
    }),
    new MenuItem({
        text: 'Trails Nearby',
        icon: 'fa fa-motorcycle',
        target: 'external',
        href: "#"
    })
]
var subski = [
    new MenuItem({
        text: 'CBMR',
        icon: 'fa fa-tree',
        target: 'external',
        href: "#"
    }),
    new MenuItem({
        text: 'Monarch',
        icon: 'fa fa-tree',
        target: 'external',
        href: "#"
    })
]


var submountain = [
    new MenuItem({
        text: 'Ski and Snowboard',
        icon: 'fa fa-tree',
        target: 'external',
        href: "http://wscumountainsports.com/come-ski-with-the-team/"
    }),
    new MenuItem({
        text: 'Mountain Biking',
        icon: 'fa fa-bicycle',
        target: 'external',
        href: "http://wscumountainsports.com/new-mountain-biking/"
    }),
    new MenuItem({
        text: 'Trail Running',
        icon: 'fa fa-bicycle',
        target: 'external',
        href: "http://wscumountainsports.com/trail-running/"
    })
]


var subncaa = [
    new MenuItem({
        text: 'Football',
        icon: 'fa fa-skyatlas',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    }),
    new MenuItem({
        text: 'Basketball',
        icon: 'fa fa-trophy',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    }),
    new MenuItem({
        text: 'Wrestling',
        icon: 'fa fa-bell',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    }),
    new MenuItem({
        text: 'Track',
        icon: 'fa fa-bolt',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    }),
    new MenuItem({
        text: 'Swimming',
        icon: 'fa fa-life-ring',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    }),
    new MenuItem({
        text: 'Soccer',
        icon: 'fa fa-futbol-o',
        target: 'external',
        href: 'http://www.gomountaineers.com/'
    })
]


var subathletics = [
    new MenuItem({
        text: 'NCAA Sports',
        icon: 'fa fa-futbol-o ',
        items: subncaa
    }),
    new MenuItem({
        text: 'Mountain Sports',
        icon: 'fa fa-motorcycle ',
        items: submountain
    })
]

var subconcurrent = [
    new MenuItem({
        text: 'Learn More',
        icon: 'fa fa-hand-o-right',
        target: 'external',
        href: "#"
    })
]

var subaccess = [
    new MenuItem({
        text: 'Learn More',
        icon: 'fa fa-hand-o-right',
        target: 'external',
        href: "#"
    })
]

var subregister = [
    new MenuItem({
        text: 'Join In',
        icon: 'fa fa-smile-o',
        target: 'external',
        href: "#"
    })
]

var subacademics = [
new MenuItem({
        text: 'Areas of Study',
        icon: 'fa fa-arrow-right ',
        target: "external",
        href: "http://www.western.edu/academics/undergraduate-areas-study"
    }),
new MenuItem({
        text: 'Graduate Programs',
        icon: 'fa fa-graduation-cap ',
        target: "external",
        href: "http://www.western.edu/academics/graduate-programs-western"
    }),
new MenuItem({
        text: 'Extended Studies',
        icon: 'fa fa-globe "',
        target: "external",
        href: "http://www.western.edu/academics/extended-studies"
    }),
new MenuItem({
        text: 'University Catalog',
        icon: 'fa fa-book "',
        target: "external",
        href: "http://www.western.edu/future-students/accepted-students/office-registrar/university-catalog"
    }),
new MenuItem({
        text: 'Academic Calendar',
        icon: 'fa fa-calendar ',
        target: "external",
        href: "http://www.western.edu/academics/academic-calendar"
    })
]


var subgo = [
    new MenuItem({
        text: 'Borick',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#borick'
    }),
    new MenuItem({
        text: 'Chipeta Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#chipeta'
    }),
 new MenuItem({
        text: 'Crawford Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#crawford'
    }),
    new MenuItem({
        text: 'Escalante',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#escalante'
    }),
    new MenuItem({
        text: 'Hurst Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#hurst'
    }),
    new MenuItem({
        text: 'Kelley Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#kelley'
    }),
    new MenuItem({
        text: 'Library',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#library'
    }),
    new MenuItem({
        text: 'Mears Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#mears'
    }),
    new MenuItem({
        text: 'Mountaineer Bowl',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#mountaineerbowl'
    }),
    new MenuItem({
        text: 'Pinnacles',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#pinnacles'
    }),
    new MenuItem({
        text: 'Quigley Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#quigley'
    }),
    new MenuItem({
        text: 'Taylor Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#taylor'
    }),
    new MenuItem({
        text: 'University Center',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#universitycenter'
    }),
    new MenuItem({
        text: 'Ute Hall',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#ute'
    }),
    new MenuItem({
        text: 'Fieldhouse',
        icon: 'fa fa-university ',
        target: "locations",
        href: '#fieldhouse'
    })

]

var submenu = [
    new MenuItem({
        text: 'Academics',
        icon: 'fa fa-book ',
        items: subacademics
    }),
    new MenuItem({
        text: 'Athletics',
        icon: 'fa fa-bicycle ',
        items: subathletics
    }),
    new MenuItem({
        text: 'Schedule A Visit',
        icon: 'fa fa-suitcase',
        target: 'external',
        href: 'http://www.western.edu/future-students/visiting-campus/visit-western'
    }),
    new MenuItem({
        text: 'Student Life',
        icon: 'fa fa-users',
        items: subfuture
    }),
    new MenuItem({
        text: 'Go To',
        icon: 'fa fa-street-view',
        items: subgo
    })
]

var menu = new MenuItem({
    text: 'Menu',
    icon: 'fa fa-bars',
    items: submenu
})
menu.items = submenu;