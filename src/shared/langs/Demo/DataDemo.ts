/***********************************************************************
 *
 * This is the information template for the page.
 * It is recommended to change the configuration of this file as:
 * Data<Initial Language>.
 * For example, for English -> DataEn.ts
 *
 * One document must be created for each language declared in langsAvailable in the src/shared/config/Config.ts file  and recorded in the src/shared/config/UserData.ts file.
 *
 * The constants declared with the comment // - ? are optional, which means that they can be omitted without any problem!
 *
 ***********************************************************************/

import EmailIcon from "../../../assets/icons/EmailIcon";
import GitHubIcon from "../../../assets/icons/GitHubIcon";
import LinkedInIcon from "../../../assets/icons/LinkedInIcon";
import {
  CertificateData,
  CVSData,
  ExperienceData,
  Info,
  LinksData,
  Location,
  SideProjectData,
} from "../../interfaces/SectionsInterfaces";

/*
  #############################
  #    General Information    #
  #############################
*/
const name = "John"; // Your names
const lastname = "Doe Bloggs"; // Your Last Name
const role = "Full-time Demo User"; // What do you specialize in?
const aka = "Fulano"; // ? - Also known as, nickname, what do you like to be called more
const image = "https://thispersondoesnotexist.com/"; // ? - Your image/avatar

const location: Location = { // ? - Your location
  country: "Austresia", // ? - Country of origin
  state: "Diena", // ? - City/State/Province of origin
};

const about = // A little description about yourself :D
  "Hi! Welcome to the demo version of this portfolio :D, I like that my personal projects can be of help to others, if you would like to have this same design without programming almost nothing, click on the “source” option that comes at the bottom of the page to send you to the repository of this code. Follow the instructions in the README and you're done! Enjoy (P.S.: All the content in this version is fictitious, it serves as a demonstration).";

/*
  #############################
  #  Professional experience  #
  #############################
*/
const experiences: ExperienceData = [
  {
    company: "Global Tech Corp", // Company with which you worked
    role: "Software Engineer", // Role or position held
    description: // A brief description of what you did at the company or during your position
      "Designed and implemented a scalable RESTful API used by multiple services, improving system efficiency by 25%.",
    duration: { // Length of time at the company
      init: {
        month: "Jan",
        year: 2022,
      },
      current: true, // Are you currently working here?
    },
    location: { // ? - Company location
      country: "Canada", // ?
      state: "Ontario", // ?
    },
    mode: "remote", // ? - How did you work in this company?
    skills: ["Java", "Spring Boot", "MySQL"], // ? -Outstanding skills
    uri: "https://site.com"
  },
  // ... Other example records ...
  {
    company: "Tech Solutions Inc.",
    role: "Backend Developer",
    description:
      "Engineered APIs for a microservices architecture and optimized database queries, resulting in a 30% performance improvement.",
    duration: {
      init: {
        month: "Mar",
        year: 2022,
      },
      end: {
        month: "Oct",
        year: 2023,
      },
      current: false,
    },
    location: {
      country: "USA",
      state: "California",
    },
    mode: "on_site",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    company: "Innovative Web Labs",
    role: "Frontend Developer",
    description:
      "Led the redesign of the company's main website, enhancing user experience and accessibility, leading to a 20% increase in user retention.",
    duration: {
      init: {
        month: "Jun",
        year: 2021,
      },
      end: {
        month: "Feb",
        year: 2022,
      },
      current: false,
    },
    location: {
      country: "UK",
      state: "London",
    },
    mode: "hybrid",
    skills: ["React", "CSS", "TypeScript"],
  },
];

/*
  #############################
  #        Certificates       #
  #############################
*/
const certificates: CertificateData = [
  {
    title: "Specialization Program: Google Data Analysis Master", // Course or certification name
    date: { // Certificate issue date
      month: "Aug",
      year: 2024,
    },
    issuer: "Google", // Certificate issuer
    uri: // Link to the issuer's site to validate the certificate
    "https://cataas.com/cat/says/Your%20certificate%20should%20appear%20here?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center",
    badge: // ? - Certificate or badge image
      "https://png.pngtree.com/png-clipart/20230527/original/pngtree-gold-luxury-certified-badge-with-red-ribbon-and-white-combination-color-png-image_9170717.png",
    skills: ["Data Analysis", "SQL", "DataViz"], // Skills learned
  },
  // ... Other example records ...
  {
    title: "AWS Certified Solutions Architect",
    date: {
      month: "Jun",
      year: 2023,
    },
    issuer: "Amazon Web Services",
    uri: "https://cataas.com/cat/says/Your%20certificate%20should%20appear%20here?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center",
    badge:
      "https://png.pngtree.com/png-clipart/20230527/original/pngtree-gold-luxury-certified-badge-with-red-ribbon-and-white-combination-color-png-image_9170717.png",
    skills: ["Cloud Architecture", "AWS Services", "Networking"],
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    date: {
      month: "May",
      year: 2022,
    },
    issuer: "Cloud Native Computing Foundation",
    uri: "https://cataas.com/cat/says/Your%20certificate%20should%20appear%20here?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center",
    badge:
      "https://png.pngtree.com/png-clipart/20230527/original/pngtree-gold-luxury-certified-badge-with-red-ribbon-and-white-combination-color-png-image_9170717.png",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud", "Native"],
  },
];

/*
  #############################
  #       Side Projects       #
  #############################
*/
const side_project: SideProjectData = [
  {
    title: "EcoShopper", // Project name
    year: 2023, // Year of development
    description: // Description of what your project does
      "EcoShopper is a mobile app that helps users find eco-friendly products and track their carbon footprint while shopping.",
    image: "https://cataas.com/cat", // ? - Project screenshot or preview
    uri: // ? - Link to the project demo or to the repository
    "https://cataas.com/cat/says/Man%2C%20I%20love%20cats?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center", // ? - Live project URL or repository
  },
  {
    title: "AI Recipe Generator",
    year: 2022,
    description:
      "AI Recipe Generator is a web application that uses machine learning to create custom recipes based on available ingredients.",
    uri: "https://cataas.com/cat/says/Man%2C%20I%20love%20cats?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center",
  },
  {
    title: "Fitness Tracker",
    year: 2021,
    description:
      "Fitness Tracker is a cross-platform app designed to help users monitor their workouts, track progress, and set fitness goals.",
    image: "https://cataas.com/cat",
    uri: "https://cataas.com/cat/says/Man%2C%20I%20love%20cats?font=Comic%20Sans%20MS&fontSize=20&fontColor=%23000&fontBackground=%23fff&position=center",
  },
];

/*
  #############################
  #           Links           #
  #############################
*/
export const links: LinksData = [
  {
    text: "Send me an email",
    uri: "mailto:some@mail.com",
    icon: EmailIcon, // ? -  Icon to display next to the button
  },
  {
    text: "Let's connect through LinkedIn",
    uri: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
  {
    text: "Follow me on GitHub",
    uri: "https://github.com/",
    icon: GitHubIcon,
  },
];

/*
  #############################
  #           CVS             #
  #############################
*/

export const cvs: CVSData = { // ? -List of resumes for users to download
  main: { // Main curriculum vitae
    lang: "en", // Preferably in the language in which the web site is displayed
    uri: "#", // Link to resume resource
  },
  secondary: { // ? - Translated version of the resume
    lang: "en",
    uri: "#", 
  },
};

export const DataDemo: Info = {
  name,
  lastname,
  role,
  aka,
  image,
  location,
  sections: {
    about,
    experiences,
    certificates,
    side_project,
    links,
  },
  cvs,
};
