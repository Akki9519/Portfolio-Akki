const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://superlative-cascaron-5ff0c5.netlify.app/',
  title: 'Akash Kesharwani',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Akash Kesharwani',
  role: 'Frontend Developer and UI/UX Designer',
  description:
  'I am a skilled Frontend Developer and UI/UX Designer.I have a strong foundation in HTML5, CSS3, JavaScript, React Js, and MYSQL. Additionally, I possess proficiency in using libraries such as Tailwind CSS, Material UI, Bootstrap, and many more. My understanding of Object-Oriented Programming concepts is also robust.My ability to solve problems efficiently is one of my greatest strengths.',
  resume: 'https://drive.google.com/file/d/1r8P9ggctr0XrXXX9wrSrIcCRGXwwHNv4/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/akash-kesharwani-8b0190225/',
    github: 'https://github.com/Akki9519',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fast Career',
    description:
      'These app will give acces of main webpage after proper authentication.In homepage you can play games and make todolist and do calculation. ',
    stack: ['Node', 'React','HTML','CSS','JavaScript'],
    sourceCode: 'https://github.com/Akki9519/Career',
    livePreview: '',
  },
  {
    name: 'Quiz App',
    description:
      'Created a web based application that allows organizer to organising an online quiz.App uses React Js and API.App also provide the score gain by participants.',
    stack: ['Express Js', 'Handlebars', 'HTML','Passport'],
    sourceCode: 'https://github.com/Atu77l/Quiz-App2',
    livePreview: 'http://quiz87.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'C++',
  'C',
  'React',
  'React-Native',
   'Node Js',
  'Data Structure and Algorithm',
  'Computer Network',
  'Operating System',
  'Git',
  'Cloud Computing',
  'DBMS',
  'SQL',
  'Competitive Coding',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'akashkesharwani81@gmail.com',
}

export { header, about, projects, skills, contact }
