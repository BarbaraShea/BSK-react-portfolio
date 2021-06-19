const animation = {
  animate: true,
  duration: 750,
  once: false,
};

const background = {
  type: "Snow",
};

const projects = [
     {
        "id": "project1",
        "name":"Just Your Type",
        "description":"Just Your Type was born out of a desire to reinvent and gamify how designers, like you, find fonts. Playing off the dating app model, this application allows you to quickly save the fonts that are <strong>JUST YOUR TYPE</strong> and create a library of your favorite typography.",
        "imgurl":"assets/just-your-type.png",
        "skills": ["HTML, CSS, JS"],
        "url": "https://hanlee-311.github.io/Just-Your-Type/"
      },
      {
        "id":"project2",
        "name":"Calendar App",
        "description":"A simple calendar application that allows the user to add events/tasks for each hour of the day. Each hour is color coded based on the current time. The events/tasks added by the user will be available to the user after a page refresh. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery and Moment.js. It was built with HTML, CSS, Bootstrap, Javascript, JQuery, and Moment.js",
        "imgurl":"assets/day-planner-preview.png",
        "skills": ["HTML, CSS, JS, JQuery, Moment.js"],
        "url":"https://barbarashea.github.io/calendar/"
      },
    {
        "id":"project3",
        "name":"Fitness Tracker",
        "description":"This application allows the user to track their resistance and cardio workouts, including distance, duration, reps, weight, and sets.",
        "imgurl":"assets/workout-tracker.png",
        "skills": ["HTML, CSS, JS, MongoDB, Mongoose"],
        "url": "https://workout-tracker-bsk.herokuapp.com/"
      },
       {
        "id":"project4",
        "name":"Budget Tracker",
        "description":"This simple budget tracker uses PWA technologies to allow for offline funtionality. Users are able to record deposits and withdrawals both online and offline.",
        "imgurl":"assets/budget-app.png",
        "skills": ["HTML, CSS, JS, IndexDB, Mongoose"],
        "url": "https://budget-tracker-bsk.herokuapp.com/"
      },
];
    
const social = {
  github: "https://github.com/BarbaraShea",
  linkedin: "https://linkedin.com/BarbaraShea",
  instagram: "https://instagram.com/babsk",
  resume: "",
};

const education = [
        {
            "University": "UNC-Chapel Hill",
            "Degree": "Certificate in Full-Stack WEb Development",
            "Year": "2021"
        },
         {
            "University": "Arizona State University",
            "Degree": "Master's in Education",
            "Year": "2012",
        }, 
        {
            "University": "Rutgers University",
            "Degree": "Bachler's in Political Science",
            "Year": "2009"
        },
    ];

const skills = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
   {
    name: "MERN",
    faClass: "fab fa-node",
  },
];

const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};

export {
  animation,
  background,
  projects,
  education,
  skills,
  social,
  contact,
};

