
var app = angular.module('App', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('blue', {
          })
          .accentPalette('light-blue', {
            'default': '200'
          });
    });
;

app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.cv = {};
    $scope.cv.firstname = "Lucas";
    $scope.cv.lastname = "Reeh";

    $scope.cv.header_tagline = "Software Architect, Lead Developer";

    $scope.cv.country = "Austria";
    $scope.cv.city = "Graz";
    $scope.cv.linkedinurl = "linkedin.com/in/lucasreeh";

    $scope.cv.contact = {};
    $scope.cv.contact.business = {};

    $scope.cv.contact.business.phone = "+43 (0) 316 / 873 - 38571";
    $scope.cv.contact.business.address = "Wastiangasse 6, A-8010 Graz, Austria";
    $scope.cv.contact.business.email = "lr86gm@gmail.com";

    $scope.cv.contact.private = {};

    $scope.cv.contact.private.phone = "+43 (0) 660 / 45 85 653";
    $scope.cv.contact.private.address = "Dr. Robert Griedlweg 16a, A-8301 Laßnitzhöhe, Austria";

    $scope.cv.contact.private.skype = "lucas.reeh";

    $scope.cv.personal = {};
    $scope.cv.personal.birthdate = "May 27, 1986";
    $scope.cv.personal.nationality = "Austria";
    $scope.cv.personal.maritialstatus = "unmarried";
    $scope.cv.personal.gender = "male";

    $scope.cv.skills = [
      "Software Architectural Design",
      "Agile Project Management",
      "Software Development",
      "Web Application Development",
      "Teaching/Mentoring",
      "Database Development (Oracle, MySQL, Postgres,...)",
      "Group Work",
      "Java",
      "Java EE",
      "Angular2",
      "Continous Integration",
      "Test Developer",
      "RESTful Architecture",
      "Android Development",
      "Large Scale Development",
      "Creative Development",
      "Team Leadership",
      "Requirements Analysis",
      "Design Patterns",
      "3D (Game, Mobile) Development",
      "and many more"
    ];

    $scope.cv.interests = [
      "Improving myself",
      "Discoveries in physics principles and fundamental science",
      "Progress and development in information technology (software/hardware)"
    ];

    $scope.cv.hobbies = [
      "Travelling the World",
      "Exploring and experiencing new Cultures",
      "Enjoying and producing Music",
      "Beach-Volleyball", "Surfing", "Golf",
      "Visiting electronic music festivals",
      "Watching TV-series and science fiction movies"
    ];

    $scope.cv.travels = [
      "Australia",
      "Albania",
      "Barcelona (language study travel, school)",
      "Cambodia",
      "Cape Verde",
      "Carribean sea (Sailing across the atlantic ocean)",
      "Cosovo",
      "Croatia",
      "Cuba",
      "Egypt",
      "Germany",
      "Guatemala",
      "Italy",
      "Maldives",
      "Marroco",
      "Montenegro",
      "Portugal",
      "Serbia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Tunisia",
      "Thailand",
      "Turkey",
      "USA",
      "etc..."
    ];


    $scope.cv.languages = [
      {
        language: "German",
        proficiency: "Native"
      },
      {
        language: "English",
        proficiency: "Full professional proficiency"
      },
      {
        language: "Spanish",
        proficiency: "Elementary proficiency"
      }
    ];

    $scope.cv.education = [
      {
        title: "Graz University of Technology",
        field: "Computer science",
        grad: "Undergraduate (Bachelor, BSc)",
        time: "2006 - present",
        description: "",
        location: "Graz (Austria)"
      },
      {
        title: "Karl-Franzens-Universität Graz",
        field: "Computer Science and Computer Science Management",
        grad: "Undergraduate (Mag.)",
        time: "2011 - 2012",
        description: "Teacher Training Course, Teaching Techniques, Rhetorics, Presentation",
        location: "Graz (Austria)"
      },
      {
        title: "HTBLA Kaindorf/Sulm (Federal Higher Technical Institute)",
        field: "Computing and Organization",
        grad: "Exam (Eng.)",
        time: "2000 - 2005",
        description: "School for higher technical education, focused on computer science and management, network and security, Cisco Certificaiton, department speaker",
        location: "Kaindorf/Sulm (Austria)"
      },
      {
        title: "Secondary School (BG/BRG Petersgasse)",
        field: "Mathematics, Computer Science",
        grad: "Higher School Certificate",
        time: "1996 - 2000",
        description: "School competitions in baseball, handball",
        location: "Graz (Austria)"
      },
      {
        title: "VS Hönigtal (Elementary School)",
        field: "",
        grad: "",
        time: "1992 - 1996",
        description: "",
        location: "Hönigtal (Austria)"
      }

    ];

    $scope.cv.experiences = [
      {
        title: "Senior Software Architect, Lead Developer",
        position: "CAMPUSonline, Graz University of Technology",
        time: "January 2012 - present",
        location: "Graz (Austria)",
        description: "Consulting for architecturally significant requirements, analysis and evaluation of software design"
      },
      {
        title: "Project Management",
        position: "Graz University of Technology",
        time: "January 2010 - December 2012",
        location: "Graz (Austria)",
        description: "Planning organistion and implementation of software projects for campus-management software solution"
      },
      {
        title: "Software Design, Database Engineering, Web-Application Developement",
        position: "Graz University of Technology",
        time: "February 2007 - February 2010",
        location: "Graz (Austria)",
        description: "Requirements engineering, analysis, design and implementation of higher education software solutions (curriculum management)"
      },
      {
        title: "Software Developement, Website Design and Creation",
        position: "Freelancer, Self-employed",
        time: "January 2006 - December 2008",
        location: "Vienna/Graz (Austria)",
        description: "Development of content-management-systems for small business enterprises, Customizing and adapting Wordpress for business websites"
      },
      {
        title: "System Administration and Organisation",
        position: "ATEC automation technology GmbH",
        time: "October 2006 - January 2007",
        location: "Autal (Austria)",
        description: "Hardware and software organisation as well as maintenance for ATEC GmbH"
      },
      {
        title: "Technical Manager",
        position: "Freelancer",
        time: "January 2002 - July 2004",
        location: "Croatia",
        description: "Technical head of EU sponsored youth-project hosted in Croatia, arrangement and maintenance of technical infrastructure"
      },
      {
        title: "Trainee",
        position: "Magna Steyr",
        time: "July 2003 - August 2003",
        location: "Graz (Austria)",
        description: "Technical head of EU sponsored youth-project hosted in Croatia, arrangement and maintenance of technical infrastructure"
      },
      {
        title: "Workshop Trainer/Lecturer/Tutor",
        position: "Freelancer",
        time: "June 2003 - July 2003",
        location: "Croatia",
        description: "Tutoring internet-workshop for teenagers"
      },
      {
        title: "Trainee/Intern",
        position: "DMC 01 Consulting & Development",
        time: "July 2002 - August 2002",
        location: "Vienna (Austria)",
        description: "Internship at DMC 01 Consulting & Development in web-design"
      }
    ];

    $scope.cv.publications = [
      {
        title: "Single-Page Module-Recommender Web-Application",
        time: "June 12, 2014",
        location: "EUNIS 2014 - European University Information Systems organisation, Sweden"
      },
      {
        title: "CAMPUSonline - How to benefit from Services for the Student Life Cycle in day-to-day University Education",
        time: "October 19, 2011",
        location: "AACE E-Learn 2011 - World Conference on E-Learning, USA, Hawaii"
      }
    ];

    $scope.cv.awards = [
      {
        title: "Ars Electronica „Prix Ars U19“ youth creativity contest",
        description: "Prize for creativity",
        time: "2001"
      }
    ];

  }]);