import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'proficient' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 'proficient' },
      { name: 'Python', icon: 'devicon-python-plain', level: 'proficient' },
      { name: 'C++', icon: 'devicon-cplusplus-plain', level: 'proficient' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'devicon-react-original', level: 'proficient' },
      { name: 'React Router', icon: 'devicon-reactrouter-plain', level: 'proficient' },
      { name: 'HTML', icon: 'devicon-html5-plain', level: 'proficient' },
      { name: 'CSS', icon: 'devicon-css3-plain', level: 'proficient' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', level: 'proficient' },
      { name: 'Responsive Design', icon: 'devicon-chrome-plain', level: 'proficient' },
      { name: 'Component Architecture', icon: 'devicon-react-original', level: 'proficient' },
    ],
  },
  {
    label: 'State & Networking',
    skills: [
      { name: 'REST APIs', icon: 'devicon-fastapi-plain', level: 'proficient' },
      { name: 'Axios', icon: 'devicon-axios-plain', level: 'proficient' },
      { name: 'Fetch', icon: 'devicon-javascript-plain', level: 'proficient' },
      { name: 'WebSockets', icon: 'devicon-nodejs-plain', level: 'proficient' },
      { name: 'Socket.io', icon: 'devicon-socketio-original', level: 'proficient' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 'proficient' },
      { name: 'Express.js', icon: 'devicon-express-original', level: 'proficient' },
      { name: 'JWT Authentication', icon: 'devicon-nodejs-plain', level: 'proficient' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 'proficient' },
      { name: 'MySQL', icon: 'devicon-mysql-plain', level: 'proficient' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'proficient' },
      { name: 'Redis', icon: 'devicon-redis-plain', level: 'proficient' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain', level: 'learning' },
      { name: 'Docker', icon: 'devicon-docker-plain', level: 'learning' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', level: 'learning' },
      { name: 'Jenkins', icon: 'devicon-jenkins-plain', level: 'learning' },
      { name: 'Ansible', icon: 'devicon-ansible-plain', level: 'learning' },
      { name: 'Nginx', icon: 'devicon-nginx-original', level: 'learning' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain', level: 'proficient' },
      { name: 'GitHub', icon: 'devicon-github-original', level: 'proficient' },
      { name: 'Postman', icon: 'devicon-postman-plain', level: 'proficient' },
      { name: 'Linux', icon: 'devicon-linux-plain', level: 'proficient' },
      { name: 'Cloudinary', icon: 'devicon-cloudinary-plain', level: 'proficient' },
      { name: 'MongoDB Atlas', icon: 'devicon-mongodb-plain', level: 'proficient' },
      { name: 'Grafana', icon: 'devicon-grafana-original', level: 'proficient' },
    ],
  },
]
