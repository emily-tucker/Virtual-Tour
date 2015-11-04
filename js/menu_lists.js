

var subhousing = [
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
        text: 'Activities & Clubs',
        icon: 'fa fa-smile-o ',
        target: 'external',
        href: "http://www.western.edu/current-students/student-activities"
    }),
    new MenuItem({
        text: 'Housing',
        icon: 'fa fa-home ',
        items: subhousing
    }),
 
]




var subathletics = [
    new MenuItem({
        text: 'NCAA Sports',
        icon: 'fa fa-trophy  ',
        target: 'external',
        href: "http://www.gomountaineers.com/"
    }),
    new MenuItem({
        text: 'Mountain Sports',
        icon: 'fa fa-trophy  ',
        target: 'external',
        href: "http://wscumountainsports.com/"
    }),
]

var subconcurrent = [
    new MenuItem({
        text: 'Learn More',
        icon: 'fa fa-hand-o-right',
        target: 'external',
        href: "#"
    })
]



var subacademics = [
new MenuItem({
        text: 'Areas of Study',
        icon: 'fa fa-university  ',
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
        text: 'Home',
        icon: 'fa fa-home  ',
       	target: 'locations',
        href: "#begin"
    }),

    new MenuItem({
        text: 'Academics',
        icon: 'fa fa-graduation-cap ',
        items: subacademics
    }),
    new MenuItem({
        text: 'Athletics',
        icon: 'fa  fa-trophy  ',
        items: subathletics
    }),

    new MenuItem({
        text: 'Student Life',
        icon: 'fa fa-users',
        items: subfuture
    }),
	    new MenuItem({
        text: 'Schedule A Visit',
        icon: 'fa fa-suitcase',
        target: 'external',
        href: 'http://www.western.edu/future-students/visiting-campus/visit-western'
    }),
	    new MenuItem({
        text: 'Apply Now!',
        icon: 'fa fa-star ',
        target: 'external',
        href: "http://www.western.edu/future-students/apply-now-western"
    }),
    new MenuItem({
        text: 'Go To',
        icon: 'fa fa-map-marker ',
        items: subgo
    })
]

var menu = new MenuItem({
    text: 'Menu',
    icon: 'fa fa-bars',
    items: submenu
})
menu.items = submenu;
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
