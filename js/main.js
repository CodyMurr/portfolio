const skills = {
  group1: [
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
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Javascript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
  ],
  group2: [
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
      name: 'Git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
  ],
};

let initialGroup, activeGroup, currentGroup, inactive;

const skillSection = document.querySelector('.content');
const toggleEl = document.querySelector('.toggle');
const inputs = Array.from(
  document.querySelectorAll('.toggle > .container > span'),
);
const navbar = document.getElementById('primary-nav');
const navLinks = [...document.querySelectorAll('.site > li > a')];

toggleEl.addEventListener('click', function (e) {
  if (!e.target.id) return;
  activeGroup = e.target.id;
  render();
});

init();

function init() {
  skillSection.className = 'content';
  initialGroup = 'group1';
  activeGroup = initialGroup;
  render();
}

function render() {
  currentGroup = inputs.find((inp) => inp.id === activeGroup);
  inactive = inputs.find((inp) => inp.id !== activeGroup);
  document.getElementById(currentGroup.id).classList.add('active');
  inactive.classList.remove('active');
  console.log(inactive);

  renderList(skills[activeGroup]);
}

function renderList(arr) {
  clearList();
  arr.map((el) => createSkillEl(el));
}

function createSkillEl(skill) {
  let li = document.createElement('li');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  img.src = skill.src;
  h3.innerHTML = skill.name;
  li.appendChild(img);
  li.appendChild(h3);
  skillSection.appendChild(li);
}

function clearList() {
  skillSection.replaceChildren();
}

function shrinkNav() {
  if (!navbar) return;
  if (window.scrollY <= 50) {
    navbar.style.padding = '2.75%';
    navLinks.forEach((l) => (l.style.fontSize = '1.35em'));
  } else {
    navbar.style.padding = '0';
    navLinks.forEach((l) => (l.style.fontSize = '1em'));
  }
}
window.addEventListener('scroll', shrinkNav);

const projects = [
  {
    name: 'Six-String Theory',
    image: '../assets/images/guit-theory.png',
    technologies: ['React', 'HTML5', 'CSS3', 'Netlify'],
    'source code': 'https://github.com/CodyMurr/guitar-theory',
    deployment: 'https://scalenotetheory.netlify.app/',
    description:
      'A front-end React.js application that serves as a handy scale/fretboard reference for any novice guitarist.',
  },
  {
    name: 'CORS',
    image: '../assets/images/cors.png',
    technologies: [
      'Python3',
      'Django',
      'CSS3',
      'Bootstrap',
      'JQuery',
      'Heroku',
    ],
    'source code': 'https://github.com/CodyMurr/cors-project',
    deployment: 'https://cors-sei.herokuapp.com/',
    description:
      'A full-stack e-commerce website based around the idea of a simplified online shopping experience. Built in collaboration with three fellow students while attending General Assembly.',
  },
  {
    name: 'Password Generator',
    image: '../assets/images/passgen.png',
    technologies: ['React', 'HTML5', 'CSS3', 'Netlify'],
    'source code': 'https://github.com/CodyMurr/random-password-generator',
    deployment: 'https://secure-generator.netlify.app/',
    description:
      'Front-end React app that generates a new series of randomized characters based on user input.',
  },
  {
    name: 'Simon',
    image: '../assets/images/simon.jpeg',
    technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
    'source code': 'https://github.com/CodyMurr/Simon',
    deployment: 'https://codymurr.github.io/Simon/',
    description:
      'A functional clone of the popular HASBRO memory game. Batteries not included.',
  },
  // {
  // 	name: 'Rock, Paper, Scissors',
  // 	image: '../assets/images/rps.png',
  // 	technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
  // 	'source code': 'https://github.com/CodyMurr/RPS',
  // 	deployment: 'https://codymurr.github.io/RPS/',
  // 	description: '',
  // },
  // {
  // 	name: 'Tic-Tac-Toe',
  // 	image: '../assets/images/ttt.jpeg',
  // 	technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
  // 	'source code': 'https://github.com/CodyMurr/tic-tac-toe',
  // 	deployment: 'https://codymurr.github.io/tic-tac-toe/',
  // 	description: '',
  // },
  // {
  // 	name: 'Magic Drawing Board',
  // 	image: '../assets/images/drawingboard.png',
  // 	technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
  // 	'source code': 'https://github.com/CodyMurr/magic-drawing-board',
  // 	deployment: 'https://codymurr.github.io/magic-drawing-board/',
  // 	description: '',
  // },
  // {
  // 	name: 'Calculator',
  // 	image: '../assets/images/calc.png',
  // 	technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
  // 	'source code': 'https://github.com/CodyMurr/Calculator',
  // 	deployment: 'https://codymurr.github.io/Calculator/',
  // 	description: '',
  // },
  // {name: '', technologies: [], 'source code': '', deployment: '', description: ''},
];

const portfolio = document.querySelector('#portfolio div.portfolio-container');

const projectMap = {
  imgLink: [
    {
      el: 'a',
      className: 'img-link',
      href: 'deployment',
      target: '_blank',
      child: {
        el: 'img',
        className: 'project-img',
        src: true,
      },
    },
  ],
  iconLinks: [
    {
      el: 'a',
      className: 'icon-link',
      href: 'deployment',
      target: '_blank',
      child: {
        el: 'i',
        className: 'fa-solid fa-arrow-up-right-from-square',
        src: false,
      },
    },
    {
      el: 'a',
      href: 'source code',
      target: '_blank',
      className: 'icon-link',
      child: {
        el: 'i',
        className: 'fa-brands fa-github',
        src: false,
      },
    },
  ],
};

function listProjects(project) {
  const container = document.createElement('section');
  container.className = 'flex contain';
  const iconContainer = document.createElement('section');
  iconContainer.className = 'flex icons';
  const mapKeys = Object.keys(projectMap);
  mapKeys.map((key) => {
    const pMap = projectMap[key];
    pMap.map((p) => {
      const el = document.createElement(p.el);
      el.className = p.className;
      el.href = project[p.href];
      el.target = p.target;
      const child = p.child;
      const childEl = document.createElement(child.el);
      childEl.className = child.className;
      if (child.src) {
        childEl.src = project.image;
      }
      el.appendChild(childEl);
      if (el.className === 'icon-link') iconContainer.appendChild(el);
      if (el.className === 'img-link') container.appendChild(el);
    });
  });
  container.appendChild(iconContainer);
  portfolio.appendChild(container);
}

projects.map((p) => listProjects(p));
