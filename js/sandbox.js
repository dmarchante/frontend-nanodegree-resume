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

//if (bio.skills.length > 0) {
//    $("#header").append(HTMLskillsStart);

//    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
//    $("#skills").append(formattedSkill);
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

//function displayWork() {
//    work.jobs.forEach(function(job) {
//        $("#workExperience").append(HTMLworkStart);

//        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//        var formattedEmployerTitle = formattedEmployer + formattedTitle;
//        $(".work-entry:last").append(formattedEmployerTitle);

//        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//        $(".work-entry:last").append(formattedDate);

//        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//        $(".work-entry:last").append(formattedDescription);
//    });
//};
//displayWork();

display() {
    $('#education').append(HTMLschoolStart);

    education.schools.forEach(school => {
        $('.education-entry').append(HTMLschoolName.replace('%data%', `${school.name}`) + HTMLschoolDegree.replace('%data%', `${school.degree}`));
        $('.education-entry').append(HTMLschoolDates.replace('%data%', `${school.dates}`));
        $('.education-entry').append(HTMLschoolLocation.replace('%data%', `${school.location}`));
        $('.education-entry').append(HTMLschoolMajor.replace('%data%', `${school.majors}`));
    });

    education.onlineCourses.forEach(course => {
        $('.education-entry').append(HTMLonlineClasses);
        $('.education-entry').append(HTMLonlineTitle.replace('%data%', `${course.title}`) + HTMLonlineSchool.replace('%data%', `${course.school}`));
        $('.education-entry').append(HTMLonlineDates.replace('%data%', `${course.dates}`));
        $('.education-entry').append(HTMLonlineURL.replace('%data%', `${course.url}`));
    });
}