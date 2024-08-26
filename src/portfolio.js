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
      text: "Hey there! 👋 I'm Dinesh, an experienced software developer with over 5 years in the industry, specializing in backend development with Java and Spring Boot, and also skilled in Node.js. My experience spans end-to-end application development, cloud modernization, and building scalable solution. Throughout my career at Johnson Controls, Amdocs (AT&T), and Samsung R&D. I'm well-versed in building cloud-based multi-tenant SaaS systems, utilizing cloud-native deployment and container technologies",
    },
    {
      id: 'para2',
      text: "Currently, I'm pursuing a Master's in Computer Science at Georgia Tech, specializing in Computing Systems and Machine Learning, where I'm diving deeper into advanced topics and exploring new interests.",
    },
  ],
  resume: '/DineshYadav_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/dineshyd',
    github: 'https://github.com/HumbleBee14',
    college_email: 'dineshyd@gatech.edu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  // {
  //   name: 'Content Evaluation using NLP',
  //   description:
  //     'Engineered a grading system to automatically scan & grade student answer sheets through extensive research on content-evaluation techniques in NLP',
  //   stack: ['NLP', 'Flask'],
  //   // sourceCode: 'https://github.com',
  //   // livePreview: 'https://github.com',
  // },
  {
    name: 'Multi User Blogging platform',
    description:
      'Developed a dynamic, SEO-optimized blogging platform with multi-user support. Built using Node.js, MongoDB, and React (Next.js) with server-side rendering. Hosted on AWS EC2 for scalability and reliability, featuring JWT authentication and seamless user management.',
    stack: ['Node.js', 'Next.js', 'MongoDB', 'Express.js', 'AWS'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Theremin: Gesture-Controlled Music Synthesizer',
    description:
      'This Theremin uses a radio antenna to sense hand movements and produce musical tones without physical contact, providing a unique and interactive musical experience.',
    stack: ['Arduino', 'Electroncis'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'C/C++',
  'C#',
  'JavaScript',
  'Spring',
  'Spring Boot',
  'Node.js',
  'React.js',
  'Next.js',
  'Docker',
  'Git',
  'SQL',
  'NoSQL',
  'MongoDB',
  'PostgreSQL',
  'Linux/Unix',
  'AWS',
  'Azure',
  'Github Actions',
  'Jenkins',
  'Elasticsearch',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'contactdy14@gmail.com',
}

export { header, about, projects, skills, contact }
