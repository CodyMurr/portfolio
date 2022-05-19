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
		'source code':
			'https://github.com/CodyMurr/random-password-generator',
		deployment: 'https://secure-generator.netlify.app/',
		description: '',
	},
	{
		name: 'Simon',
		image: '../assets/images/simon.jpeg',
		technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
		'source code': 'https://github.com/CodyMurr/Simon',
		deployment: 'https://codymurr.github.io/Simon/',
		description: '',
	},
	{
		name: 'Rock, Paper, Scissors',
		image: '../assets/images/rps.png',
		technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
		'source code': 'https://github.com/CodyMurr/RPS',
		deployment: 'https://codymurr.github.io/RPS/',
		description: '',
	},
	{
		name: 'Tic-Tac-Toe',
		image: '../assets/images/ttt.jpeg',
		technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
		'source code': 'https://github.com/CodyMurr/tic-tac-toe',
		deployment: 'https://codymurr.github.io/tic-tac-toe/',
		description: '',
	},
	{
		name: 'Magic Drawing Board',
		image: '../assets/images/drawingboard.png',
		technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
		'source code': 'https://github.com/CodyMurr/magic-drawing-board',
		deployment: 'https://codymurr.github.io/magic-drawing-board/',
		description: '',
	},
	{
		name: 'Calculator',
		image: '../assets/images/calc.png',
		technologies: ['HTML5', 'CSS3', 'Javascript', 'GH-Pages'],
		'source code': 'https://github.com/CodyMurr/Calculator',
		deployment: 'https://codymurr.github.io/Calculator/',
		description: '',
	},
	// {name: '', technologies: [], 'source code': '', deployment: '', description: ''},
];

const portfolio = document.querySelector(
	'#portfolio div.portfolio-container',
);

function listProjects(p) {
	let section1 = document.createElement('section');
	let section2 = document.createElement('section');
	section1.classList.add('flex', 'col');
	section2.classList.add('flex', 'col');
	let h3 = document.createElement('h3');
	h3.innerHTML = p.name;
	section1.appendChild(h3);
	let ul = document.createElement('ul');
	let label = document.createElement('strong');
	label.innerHTML = 'Technologies Used: ';
	ul.appendChild(label);
	p.technologies.map((item, idx) => {
		let li = document.createElement('li');

		li.innerHTML = ` ${item}`;

		ul.appendChild(li);
	});
	section1.appendChild(ul);

	let img = document.createElement('img');
	img.src = p.image;
	section2.appendChild(img);
	let links = document.createElement('div');
	links.classList.add('flex');
	let srcLink = document.createElement('a');
	srcLink.href = p['source code'];
	srcLink.target = '_blank';
	srcLink.innerHTML = 'View Source Code';
	srcLink.classList.add('btn');
	links.appendChild(srcLink);
	let deployLink = document.createElement('a');
	deployLink.href = p.deployment;
	deployLink.target = '_blank';
	deployLink.innerHTML = 'View Live Site';
	deployLink.classList.add('btn');
	links.appendChild(deployLink);
	section1.appendChild(links);
	portfolio.appendChild(section1);
	portfolio.appendChild(section2);
}

projects.map((p) => listProjects(p));
