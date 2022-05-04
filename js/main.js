const skills = [
  {
    name: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Markdown',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
  },
  {
    name: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'LESS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
  },
  {
    name: 'SASS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'Django',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg',
  },
  {
    name: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  },
  {
    name: 'Javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'NodeJS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JQuery',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  },
  {
    name: 'NPM',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostGreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Python3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Webpack',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  },
  {
    name: 'VSCode',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Bash',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg',
  },
  {
    name: 'Heroku',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg',
  },
];

const skillSection = document.querySelector('#skills > .content');

for (let i = 0; i < skills.length; i++) {
  const img = document.createElement('img');
  const h4 = document.createElement('h4');
  img.src = skills[i].src;
  h4.innerHTML = skills[i].name;
  skillSection.appendChild(img);
  skillSection.appendChild(h4);
}
