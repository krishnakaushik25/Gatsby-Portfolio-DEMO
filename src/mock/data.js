  
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello Folks!', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
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
  paragraphThree: 'I am looking to collaborate on Full Stack Web development and ML/DL based Projects. I am also very interested in AI domain especially Deep learning.I love to experiment various technologies by doing challenging projects.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [

    {
        id: nanoid(),
        img: 'slack_app.png',
        title: 'React-Firebase-Slack-Clone WEB APP',
        info: 'Built a live chat app called CodeChat, where users will be able to create channels, to send messages to other users on those channels.The other functionalities include Send media files, see when other users are typing, add emojis to their messages,Favorite and unfavorite channels they like or dislike, and get notifications about new messages on other channels,Creating,cropping and uploading user avatars.',
        info2: 'We can also send Direct Private Messages to other users in our chat.It also tracks/shows when users are online / offline.Created user interfaces with Semantic UI React and deployed the app to the web using Firebase Tools.',
        url: 'https://slack-react-cl.web.app/',
        repo: 'https://github.com/krishnakaushik25/react-firebase-slack-web-app', 
      },
      {
    id: nanoid(),
    img: 'homepage2.png',
    title: 'Social Media APP Using MERNG Tech Stack',
    info: 'Full stack, fully-featured social media application using MERNG Stack( MongoDB, Express, React, Node, GraphQL) and Semantic-UI for the User Interface.',
    info2: '',
    url: 'nervous-swanson-31f8b1.netlify.app/',
    repo: 'https://github.com/krishnakaushik25/MERNG-Social-Media-APP', 
  },
  {
    id: nanoid(),
    img: 'diabetes-prediction.jpg',
    title: 'Diabetes Prediction WEB APP using Machine Learning',
    info: 'Predict whether the person has diabetes or not based on some data fields.Created a model using Machine Learning.The  Web app is created using flask, connecting it with model and deploying the model using Heroku.',
    info2: '',
    url: 'https://ml-diabetes-predictionapi.herokuapp.com/',
    repo: 'https://github.com/krishnakaushik25/Diabetes-Prediction-ML-model-Deployment', 
  },
  {
    id: nanoid(),
    img: 'esite.png',
    title: 'Real World eCommerce app using Python and Django Framework',
    info: 'Built a fully custom featured eCommerce application using a Python Django web framework.Some of the advanced features include Unlimited Product image gallery, Orders, Payments,sending the order received email, Order completion page as well as generating an invoice for the order.',
    info2: 'Made a Review and Rating system where it even allows you to rate a half-star rating.Made my account functionalities for the customer who can easily edit his profile, profile pictures, change his account password, and also manage his orders.',
    url: 'http://simplekart-env.eba-eweha2je.eu-west-2.elasticbeanstalk.com/',
    repo: 'https://github.com/krishnakaushik25/Django-eCommerce-website',
  },
  {
    id: nanoid(),
    img: 'chatbot.png',
    title: 'Chatbot for a Webpage using Node.js and React with NLP agent Dialogflow',
    info: 'It recommends courses online for the user in the chat box. Displays rich messages for the chatbot like cards and quick replies along with advanced DialogFlows features, like follow up intents, contexts, events, and slot fillings. This features make bot creation much easier and much friendlier!',
    info2: 'The bot will be able to remember things, that is store information into a database or connect to other API services. The database platform is MONGODB and this samplebot is hosted on heroku.',
    url: 'https://limitless-caverns-27572.herokuapp.com/',
    repo: 'https://github.com/krishnakaushik25/Chatbot-with-React-Node.js-using-Dialogflow', 
  }


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
