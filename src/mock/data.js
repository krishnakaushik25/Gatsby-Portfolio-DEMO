import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Krishna Kaushik',
  subtitle: 'UnderGrad Developer and ML/DL Enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a undergraduate student from Indian Institute of Technology Guwahati(IITG) pursuing my B.Tech in Electronics and Communications Engineering (ECE). Love to experiment a lot with AI and SDE Domain Topics by doing projects.',
  paragraphTwo: 'I worked as a software developer intern at Publicis Sapient.',
  paragraphThree: 'I am looking to collaborate on Full Stack Web development and ML/DL based Projects. I am also very interested in AI domain especially Deep learning',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
 
  {
    id: nanoid(),
    img: 'homepage2.png',
    title: 'Social Media APP Using MERNG Tech Stack',
    info: 'Full stack, fully-featured social media application using MERNG Stack( MongoDB, Express, React, Node, GraphQL) and Semantic-UI for the User Interface.',
    info2: '',
    url: 'nervous-swanson-31f8b1.netlify.app/',
    repo: 'https://github.com/krishnakaushik25/MERNG-Social-Media-APP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'diabetes-prediction.jpg',
    title: 'Diabetes Prediction WEB APP using Machine Learning',
    info: 'Predict whether the person has diabetes or not based on some data fields.Created a model using Machine Learning.The  Web app is created using flask, connecting it with model and deploying the model using Heroku.',
    info2: '',
    url: 'https://ml-diabetes-predictionapi.herokuapp.com/',
    repo: 'https://github.com/krishnakaushik25/Diabetes-Prediction-ML-model-Deployment', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let us Discuss over Discord',
  email: 'https://discordapp.com/users/707147472098557993 ',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Kkk11Krishna',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kaushik-2523/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/krishnakaushik25',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
