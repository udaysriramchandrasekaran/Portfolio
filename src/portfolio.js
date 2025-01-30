/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "UdaySriram",
  title: "Hi all, I'm Uday",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs /Ionic Angular/ React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Mwx2FWbp1Q4yoPZVUkWKsSYIcbWTyDw6/edit?usp=drive_link&ouid=115798019270301886863&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/udaysriramchandrasekaran",
  linkedin: "https://www.linkedin.com/in/udaysriram-c/",
  gmail: "udaysriram10@gmail.com",
  gitlab: "https://github.com/udaysriramchandrasekaran",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@udaysriram10",
  stackoverflow: "https://stackoverflow.com/users/29411971/uday-sriram",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developed a responsive, multi-language web platform using React and Node.js"
    ),
    emoji("⚡ Led database architecture with MSSQL and API integration for scalability"),
    emoji(
      "⚡ Built offline-first APK with local storage and sync to central database"
    ),
    emoji(
      "⚡ Implemented dual login for Admin and Parent roles; Parent side done entirely by me"
    ),
    emoji(
      "⚡ Focused on performance and secure data handling"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jansons Institute of Technology, Coimbatore",
    logo: require("./assets/images/jit1.jpeg"), // Update the logo path as needed
    subHeader: "Bachelor of Engineering in Electronics and Communication Engineering (ECE)",
    duration: "2017 - 2021",
    desc: "Graduated with a strong foundation in electronics and communication, achieving 76%.",
    descBullets: [
      "Gained practical knowledge in embedded systems, communication protocols, and signal processing.",
      "Engaged in technical projects and workshops to enhance real-world skills."
    ]
    },
    {
      schoolName: "Government Higher Secondary School",
    logo: require("./assets/images/school.jpeg"), // Update the logo path as needed
    subHeader: "Biology-Maths",
    duration: "2016 - 2017",
    desc: "Ranked in the top 10% of the program, achieving 81% in the 12th grade.",
    descBullets: [
      "Excelled in core subjects like mathematics and biology, building a strong analytical foundation.",
      "Participated in science fairs and competitive exams, enhancing problem-solving skills."
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: " Full Stack Developer & Mobile App Developer",
      company: "Durvah IT Consulting Pvt Ltd",
      companylogo: require("./assets/images/DurvahLogo.jpg"),
      date: "January 2023 – Present",
      desc: "Motivated Full Stack Developer with two years of experience, specializing in React, Node.js, Express.js, and Ionic Angular. Adept at building scalable web and mobile applications with expertise in debugging, server handling, and delivering high-quality products. Passionate about contributing to organizational success while staying updated with the latest technologies",
      descBullets: [
        "Debugging, reuse, source code, Documentation management strategies and release management.",
        "Building relationships with clients, technical teams and external contractors.",
        "Handling the server and delivering the bug free products."

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS AND COMPANIES THAT I HAVE CONTRIBUTED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/enableenclusion.jpeg"),
      projectName: "Amarseva Web Application",
      projectDesc: "Amar Seva Sangam is an organization for empowering the Person with Disabilities for their rightful place in the society by enabling them through rehabilitation services, promoting their rights and by advocating for policies for an inclusive eco system",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amarseva.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/apkimg.jpeg"),
      projectName: "Enable Inclusion APK",
      projectDesc: "Enabling Inclusion program was started with the bold idea, that community rehabilitation workers can provide early intervention services to children in their own homes or in community centres by connecting these community workers with rehabilitation specialists (physiotherapists, occupational therapists, speech therapists/trainers and special educators) through the use of the Enabling Inclusion (EI) app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amarseva.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, Awards and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9677849509",
  email_address: "udaysriram10@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
