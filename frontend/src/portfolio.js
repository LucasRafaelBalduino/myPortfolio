import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  title: 'Oi sou Lucas',
  subTitle: emoji(
    'Desenvolvedor de software Jr🚀| Com experiência em criar aplicativos Web com javaScript / Reactjs / Nodejs '
  ),
  resumeLink: '',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/LucasRafaelBalduino',
  linkedin: 'https://www.linkedin.com/in/lucas-balduino-736246140',
  gmail: 'lucasrafaelbalduino@gmail.com',
  gitlab: 'https://gitlab.com/LucasRafaelBalduino',
  facebook: 'https://www.facebook.com/people/Lucas-Rafael/100009503953118',
};

// Your Skills Section

const skillsSection = {
  title: 'Skills',
  subTitle: 'EXPLORAR TODAS AS STACK',
  skills: [],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
};

const openSource = {
  githubConvertedToken: '3ae5d6c3f1a76c798cfd75cd9810fcfe70c5e76b',
  githubUserName: 'LucasRafaelBalduino',
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: 'Discuss a project or just want to say hi my inbox is open for all',
  number: '+92-3243454077',
  email_address: 'lucasrafaelbalduino@gmail.com',
};

export { greeting, socialMediaLinks, skillsSection, openSource, contactInfo };
