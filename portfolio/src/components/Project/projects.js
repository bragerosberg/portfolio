const { uuid } = require('uuidv4');
const myProjects = [
  {
    index: uuid(),
    image: "https://github.com/bragerosberg/ReactTodo/raw/master/phone.png",
    title: "React ToDo",
    text: "A todo application made with REACT, full responsive across platforms",
    repolink: "https://github.com/bragerosberg/ReactTodo",
    website: "https://bragereacttodo.netlify.app/",
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/SV6i6vt.png",
    title: "Day Organizer",
    text: "A day organizer to structure your tasks and plan according to the local weather",
    repolink: "https://github.com/bragerosberg/DayOrganizer",
    website: "https://organizeyourday.herokuapp.com/",
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/IvAKdPc.png",
    title: "Hackday Project",
    text: "Hackday through the bootcamp at </salt>. In this project we only had a day to implement the application and therefor as a result I took my collected bag of ideas and experimented with them in this project",
    repolink: "https://github.com/bragerosberg/Hackday",
    website: "https://github.com/bragerosberg/Hackday",
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/MJvasqg.png",
    title: "Bidra Sammen (React Native App)",
    text: "Graduation projec through the bootcamp at </salt> where my mob made a React Native application through 2x SCRUM week sprints",
    repolink: "https://github.com/jopemoma/Graduation-Project",
    website: "https://github.com/jopemoma/Graduation-Project",
  },
];

module.exports = {
  myProjects
}

