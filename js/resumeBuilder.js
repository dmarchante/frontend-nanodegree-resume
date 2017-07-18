var bio = {
    "name": "David Marchante",
    "role": "Web Developer",
    "contacts": {
        "mobile": "239.250.9564",
        "email": "cdmarchante@gmail.com",
        "github": "dmarchante",
        "twitter": "@dmarchante",
        "location": "Naples, FL"
    },
    "welcomeMessage": "Hello",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "InDesign", "Photoshop", "Illustrator"
    ],
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
    display: function displaySkill() {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills:last").append(formattedSkill);
        }
    }
}

var education = {
    "schools": [{
            "name": "UMUC",
            "location": "MD",
            "degree": "BS",
            "dates": "2014-2015",
            "websites": "www.umuc.edu"
        },
        {
            "name": "PSU",
            "location": "PA",
            "degree": "Certificate",
            "dates": "2016-2017",
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
    ],
    displaySchool: function displayEducation() {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);

            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedDateLocation = formattedLocation + formattedDate;
            $(".education-entry:last").append(formattedDateLocation);
        }
    }
}

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
    ],
    display: function displayWork() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDateLocation = formattedDate + formattedLocation;
            $(".work-entry:last").append(formattedDateLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
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
                }
            ]
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
            ]
        }
    ],
    display: function displayProjects() {
        $("#projects").append(HTMLprojectStart);

        for (var project = 0; project < projects.projectsArray.length; project++) {

            if (projects.projectsArray[project].images.length > 0) {
                for (var image = 0; image < projects.projectsArray[project].images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projectsArray[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }

                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectsArray[project].title);
                $(".project-entry:last").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projectsArray[project].dates);
                $(".project-entry:last").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectsArray[project].descriptions);
                $(".project-entry:last").append(formattedDescription);
            }
        }
    }
}

var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(myName);

bio.display();

education.displaySchool();

work.display();

projects.display();

$("#mapDiv").append(googleMap);