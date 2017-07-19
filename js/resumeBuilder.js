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
    "bioPic": "http://via.placeholder.com/200x200",
    displaySkill: function displaySkill() {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills:last").append(formattedSkill);
        }
    },
    displayContactsTop: function displaySkill() {
        var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(myMobile);
        var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(myEmail);
        var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(myGithub);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(myLocation);
    },
    displayContactsFooter: function displaySkill() {
        var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(myMobile);
        var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(myEmail);
        var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(myGithub);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(myLocation);
    },

};

var education = {
    "schools": [{
            "name": "University of Maryland, University College",
            "location": "Okinawa, Japan",
            "degree": "Bachelor of Science",
            "majors": "Digital Media and Web Technology",
            "dates": "2015",
        },
        {
            "name": "The Pennsylvania State University",
            "location": "State College, PA",
            "degree": "Graduate Certificate",
            "majors": "Geographic Infromation Systems",
            "dates": "2018",
        },
        {
            "name": "The Pennsylvania State University",
            "location": "State College, PA",
            "degree": "Master of Professional Studies",
            "majors": "Geodesign",
            "dates": "2019",
        }
    ],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }],
    displaySchool: function displayTraditionalSchools() {
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

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
    },
    displayOnline: function displayOnlineSchools() {
        for (var online = 0; online < education.onlineCourses.length; online++) {
            $("#education").append(HTMLonlineClasses);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
            $(".education-entry:last").append(formattedDate);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
            $(".education-entry:last").append(formattedURL);
        }
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
};

var projects = {
    "projectsArray": [{
            "title": "Project 1",
            "dates": "2014-2015",
            "descriptions": "Lorem ipsum",
            "images": [
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150"
            ]
        },
        {
            "title": "Project 2",
            "dates": "2015 - 2016",
            "descriptions": "Lorem ipsum",
            "images": [
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150",
                "http://via.placeholder.com/150x150"
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
};

var myRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(myRole);
var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(myName);
var myBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(myBioPic);
var myWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(myWelcomeMsg);

bio.displaySkill();

bio.displayContactsTop();

education.displaySchool();

education.displayOnline();

work.display();

projects.display();

bio.displayContactsFooter();

$("#mapDiv").append(googleMap);