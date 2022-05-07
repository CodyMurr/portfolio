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

let initialGroup, activeGroup, currentGroup;

const skillSection = document.querySelector('.content')
const toggleEl = document.querySelector('.toggle');
const inputs = Array.from(document.querySelectorAll('div.toggle > input'));

toggleEl.addEventListener('click', function(e) {
  if (!e.target.value) return
  activeGroup = e.target.value;
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
  currentGroup = inputs.find(inp => inp.value === activeGroup);
  currentGroup.checked = true;
  renderList(skills[activeGroup]);
}

function renderList(arr) {
  clearList()
  arr.map(el => createSkillEl(el))
}

function createSkillEl(skill) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let h4 = document.createElement('h4');
    img.src = skill.src;
    h4.innerHTML = skill.name;
    li.appendChild(img);
    li.appendChild(h4);
    skillSection.appendChild(li);
}

function clearList() {
  skillSection.replaceChildren();
}

// skills.forEach((skill) => {
// });

