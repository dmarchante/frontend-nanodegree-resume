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
    "welcomeMessage": "Hello, I'm David, nice to meet you.",
    "skills": [
        "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "React", "InDesign", "Photoshop", "Illustrator"
    ],
    "biopic": "http://via.placeholder.com/200x200",
    display: function displaySkillContacts() {
        var myRole = HTMLheaderRole.replace("%data%", bio.role);
        var myName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(myName, myRole);

        var myBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var myWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(myBioPic, myWelcomeMsg, HTMLskillsStart);

        bio.skills.forEach(skill => {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills:last").append(formattedSkill);
        });

        var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(myMobile, myEmail, myGithub, myLocation);
    }
};

var education = {
    "schools": [{
            "name": "University of Maryland, University College",
            "location": "Okinawa, Japan",
            "degree": "Bachelor of Science",
            "majors": ["Digital Media and Web Technology"],
            "dates": "2015",
            "url": "http://umuc.edu/"
        },
        {
            "name": "The Pennsylvania State University",
            "location": "State College, PA",
            "degree": "Graduate Certificate",
            "majors": ["Geographic Information Systems"],
            "dates": "2018",
            "url": "http://www.psu.edu/"
        },
        {
            "name": "The Pennsylvania State University",
            "location": "State College, PA",
            "degree": "Master of Professional Studies",
            "majors": ["Geodesign"],
            "dates": "2019",
            "url": "http://www.psu.edu/"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }],
    display: function displaySchools() {
        education.schools.forEach(school => {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDateLocation = formattedLocation + formattedSchoolDate;
            $(".education-entry:last").append(formattedNameDegree, formattedDateLocation);

            school.majors.forEach(major => {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        });

        education.onlineCourses.forEach(online => {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", online.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedTitleSchool, formattedOnlineDate, formattedURL);
        });
    }
};

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
        work.jobs.forEach(job => {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDateLocation = formattedDate + formattedLocation;
            $(".work-entry:last").append(formattedDateLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [{
            "title": "Project 1",
            "dates": "2014-2015",
            "description": "Lorem ipsum",
            "images": [
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150"
            ]
        },
        {
            "title": "Project 2",
            "dates": "2015 - 2016",
            "description": "Lorem ipsum",
            "images": [
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150"
            ]
        }
    ],
    display: function displayProjects() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(project => {
            if (project.images.length > 0) {
                project.images.forEach(image => {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });

                var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
                $(".project-entry:last").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
                $(".project-entry:last").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
                $(".project-entry:last").append(formattedDescription);
            }
        });
    }
};

bio.display();

education.display();

work.display();

projects.display();

$("#mapDiv").append(googleMap);
