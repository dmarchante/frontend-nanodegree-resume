var work = {
    "jobs": [{
            "employer": "CH2M",
            "title": "City Planner",
            "location": "Bonita Springs, FL",
            "dates": "2016 - 2017",
            "description": "Review, prepare and interpret zoning documents, as well as prepare maps, utilzing ArcGIS."
        },
        {
            "employer": "Architectural Land Design, Inc",
            "title": "Project Designer",
            "location": "Naples, FL",
            "dates": "2014 - 2016",
            "description": "Prepare marketing materials, utilzing Adobe Creative Suite. Also, prepared construction documents for landscape architecture design."
        },
        {
            "employer": "Gulfstream Aerospace",
            "title": "Aircraft Planner",
            "location": "West Palm Beach, FL",
            "dates": "2011 - 2014",
            "description": "Plan the maintenance of aircraft, given hangar capacity."
        },
        {
            "employer": "United States Marine Corps",
            "title": "Sergeant",
            "location": "Camp Pendleton, CA",
            "dates": "2000-2005",
            "description": "Led Marines in the overhaul of turbine engines."
        }
    ]
}

var projects = {
    "projectsArray": [{
            "title": "Project 1",
            "dates": "2014-2015",
            "descriptions": "Lorem ipsum",
            "images": [{
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
                {
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
                {
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
            ],
        },
        {
            "title": "Project 2",
            "dates": "2015 - 2016",
            "descriptions": "Lorem ipsum",
            "images": [{
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
                {
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
                {
                    "img": "placeholder",
                    "description": "Lorem Ipsum"
                },
            ],
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
}

var education = {
    "schools": [{
            "name": "",
            "location": "",
            "degree": "",
            "websites": ""
        },
        {
            "name": "",
            "location": "",
            "degree": "",
            "websites": ""
        }
    ],
    "onlineCourses": [{
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        },
        {
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        }
    ]
}
var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(myName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
}

function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

var displayProjects = function() {

}

projects.display = function() {
    for (var project in projects.projectsArray) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectsArray[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projectsArray[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectsArray[project].descriptions);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projectsArray[project].images.length > 0) {
            for (var image in projects.projectsArray[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projectsArray[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();


$("#mapDiv").append(googleMap);