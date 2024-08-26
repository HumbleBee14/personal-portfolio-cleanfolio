const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dineshyadav.github.io',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dinesh Yadav',
  role: 'Software Engineer',
  description: [
    {
      id: 'para1',
      text: "Hey there! 👋 I'm Dinesh, an experienced software developer with a strong focus on backend development, specializing in Java and Spring Boot, Node.js. My expertise extends to full-stack development, with experience in Python, C#, JavaScript, React.js, and Elasticsearch. Throughout my career at Johnson Controls, Amdocs (AT&T), and Samsung R&D, I've contributed to cutting-edge projects, including the development of advanced Access Control solutions, telecom billing applications and cloud-based multi-tenant SaaS systems from ground up. I'm well-versed in cloud-native deployment, CI/CD pipelines, and container technologies. I've also gained valuable experience through internships at startups.",
    },
    {
      id: 'para2',
      text: "My experience spans end-to-end application development, cloud modernization, and building scalable solutions, and I'm always eager to explore new challenges and expand my knowledge.",
    },

    {
      id: 'para3',
      text: "Currently, I'm pursuing a Master's in Computer Science (MSCS) at Georgia Tech in Atlanta (USA), with specialization in Computing Systems and Machine Learning, where I'm diving deeper into advanced topics and seeking innovative ways to leverage my technical skills.",
    },
  ],
  resume: '/DineshYadav_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/dineshyd',
    github: 'https://github.com/HumbleBee14',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Content Evaluation using NLP',
    description:
      'Engineered a grading system to automatically scan & grade student answer sheets through extensive research on content-evaluation techniques in NLP',
    stack: ['NLP', 'Flask'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Quick Permit',
    description:
      'Launched software to approve permission requests sent by college students to professors for conducting workshops and seminars.',
    stack: ['Node.js', 'MongoDB', 'Express.js'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'CovMeal',
    description:
      'Created a homemade nutritious food ordering software for COVID-19 patients during the pandemic by utilizing the React.js library and Cloud Firestore database. Handled a traffic of more than 600 users at one point in time.',
    stack: ['React.js', 'Firebase', 'Materialize'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Spring',
  'Node.js',
  'Mongoose',
  'Redux',
  'Material UI',
  'Bootstrap',
  'HTML/CSS',
  'Git',
  'MongoDB',
  'SQL',
  'Firebase',
  'GraphQL',
  'Blockchain',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'contactdy14@gmail.com',
}

export { header, about, projects, skills, contact }
