var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
}
var bio = {
    "name": "David Marchante",
    "role": "Web Developer",
    "welcomeMessage": "Hello",
    "biopic": [{
            "bioTitle": "",
            "bioString": ""
        },
        {
            "bioTitle": "",
            "bioString": ""
        },
        {
            "bioTitle": "",
            "bioString": ""
        }
    ],
    "contacts": {
        "mobile": "239.250.9564",
        "email": "cdmarchante@gmail.com",
        "github": "dmarchante",
        "twitter": "@dmarchante",
        "location": "Naples, FL"
    },
    "skills": [
        "HTML5", "CSS3", "JavaScript", "InDesign", "Photoshop", "Illustrator"
    ]
};
// Your code goes here! Let me help you get started

//function locationizer(work_obj) {
//    var locationArray = [];
//
//    for (var job in work_obj.jobs) {
//        var locations = work_obj.jobs[job]//.location;
//        locationArray.push(locations);
//    }
//    return locationArray;
//};

// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));

//function locationizer(work_obj) {
//    var locationArray = [];
//
//    work_obj.jobs.forEach((job) => {
//        var locations = job.location;
//        locationArray.push(locations);
//    });
//    return locationArray;
//}

// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));

//function locationizer(work_obj) {
//    var locationArray = [];
//
//    work_obj.jobs.forEach(function(job) {
//        var locations = job.location;
//        locationArray.push(locations);
//    });
//    return locationArray;
//}

// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));

//function inName(name) {
//    var nameArray = name.trim().split(" ");
//    lastName = nameArray[1].toUpperCase();
//    firstName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
//
//    return firstName + " " + lastName;
//}
//
//$("#main").append(internationalizeButton);

//for (job in work.jobs) {
//    $("#workExperience").append(HTMLworkStart);
//
//    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
//    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job]//.location);
//    var formattedLocationDate = formattedLocation + formattedDate;
//
//    $(".work-entry:last").append(formattedLocationDate);
//}
//for-in objects
//var country = { 'country1': 'Argentina', 'country2': 'China', 'country3': 'England' };

//for (key in country) {
//    if (country.hasOwnProperty(key)) {
//        console.log(country[key]);
//    }
//};
//for-in arrays
//var countries = ["Gremany", "Argentina", "Brazil", "Netherlands"];

//for (country in countries) {
//    console.log(countries[country])
//};