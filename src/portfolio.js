const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://superlative-cascaron-5ff0c5.netlify.app/',
  title: 'Akash Kesharwani',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Akash Kesharwani',
  role: 'Frontend Developer & UI/UX Designer',
  description:
  'I am a skilled Frontend Developer & UI/UX Designer.I have a strong foundation in HTML5, CSS3, JavaScript, React Js,React Native and MYSQL. Additionally, I possess proficiency in using libraries such as Tailwind CSS, Material UI, Bootstrap, and many more. My understanding of Object-Oriented Programming concepts is also robust. My ability to solve problems efficiently is one of my greatest strengths.',
  resume: 'https://drive.google.com/file/d/1r8P9ggctr0XrXXX9wrSrIcCRGXwwHNv4/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/akash-kesharwani-8b0190225/',
    github: 'https://github.com/Akki9519',
  },
}

const projects = [
  {
    name: 'Pro Tennis- Sport Management Project ',
    description:
      'This is a client project of AGM Global Solution Private Limited, involving the management of court, coach, and user bookings. It includes handling notifications and sending emails to users. The system is designed to book courts with available coaches, ensuring that the court and coach are vacant. Additionally, it incorporates various other functionalities to enhance the overall user experience.',
    stack: ['HTML','CSS3','TYPESCRIPT','Node JS','Mongo DB','MicroService Architecture'],
  
  },
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fast Career-Career Related Project',
    description:
      'This is a personal project where users can access comprehensive information about job openings across various companies and roles. The platform displays detailed information for each job and empowers users with the authority to update existing job details and add new job listings. It serves as a centralized hub for job seekers to stay informed and engaged in the dynamic landscape of employment opportunities.',
    stack: ['Node', 'React','HTML','CSS','JavaScript','Monolithic Architecture'],
    sourceCode: 'https://github.com/Akki9519/Career',
    livePreview: '',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'C++',
  'C',
  'React',
  'React-Native',
   'Node Js',
   'Next Js',
  'Data Structure and Algorithm',
  'Computer Network',
  'Operating System',
  'Git',
  'BitBucket',
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
