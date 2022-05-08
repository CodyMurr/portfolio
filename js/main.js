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
  }],
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
  }]
};

let initialGroup, activeGroup, currentGroup, inactive;

const skillSection = document.querySelector('.content')
const toggleEl = document.querySelector('.toggle');
const inputs = Array.from(document.querySelectorAll('.toggle > .container > span'));
const navbar = document.getElementById('primary-nav');
const navLinks = [...document.querySelectorAll('.site > li > a')]

toggleEl.addEventListener('click', function(e) {
  if (!e.target.id) return;
  activeGroup = e.target.id;
  render();
})

init()

function init() {
  skillSection.className = 'content';
  initialGroup = 'group1';
  activeGroup = initialGroup;
  render();
}

function render() {
  currentGroup = inputs.find(inp => inp.id === activeGroup);
  inactive = inputs.find(inp => inp.id !== activeGroup)
  document.getElementById(currentGroup.id).classList.add('active');
  inactive.classList.remove('active')
  console.log(inactive)
  
  
  renderList(skills[activeGroup]);
}

function renderList(arr) {
  clearList()
  arr.map(el => createSkillEl(el))
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
    navLinks.forEach(l => l.style.fontSize = '1.35em')
  } else {
    navbar.style.padding = '0';
    navLinks.forEach(l => l.style.fontSize = '1em');
  }
}
window.addEventListener('scroll', shrinkNav)