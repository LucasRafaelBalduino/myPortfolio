import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  title: 'Oi, sou Lucas',
  subTitle: emoji(
    'Desenvolvedor de software Jr🚀| Com experiência em criar aplicativos Web com javaScript / Reactjs / Nodejs '
  ),
  resumeLink:
    'https://drive.google.com/file/d/1BBikkgiW57fxxAwrJiyH7nzu8V9arVWC/view?usp=sharing',
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

const contactInfo = {
  title: emoji('Contato ☎️'),
  subtitle:
    'Discutir um projeto ou apenas dizer oi, minha caixa de entrada está aberta para todos.',
  opportunities: 'Aberto a oportunidades: Sim',
  number: '+55(41)9 9562-0788',
  email_address: 'lucasrafaelbalduino@gmail.com',
};

export { greeting, socialMediaLinks, skillsSection, contactInfo };
