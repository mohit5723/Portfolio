// sticky navbar

window.addEventListener('scroll', function () {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > 20) {
		navbar.style.backgroundColor = '#0E0E0F';
	} else {
		navbar.style.backgroundColor = 'transparent';
	}
});

// hamburger-menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

// navigate to sections

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		let target = document.querySelector(this.getAttribute('href'));
		let navbarHeight = document.querySelector('.navbar').offsetHeight;
		let targetPosition = target.getBoundingClientRect().top;

		window.scrollBy({
			top: targetPosition - navbarHeight,
			left: 0,
			behavior: 'smooth',
		});
	});
});

// logo-reload

document.addEventListener('DOMContentLoaded', function () {
	var logo = document.getElementById('logo');

	logo.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent default link behavior
		window.scrollTo(0, 0); // Scroll to the top of the page
		location.reload(); // Reload the page
	});
});

// active navigation

window.addEventListener('scroll', function () {
	const sections = document.querySelectorAll('.cont'); // Select all content elements
	let currentSection = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
			currentSection = section.getAttribute('id');
		}
	});

	document.querySelectorAll('nav a').forEach((a) => {
		a.classList.remove('active');
		if (a.getAttribute('href').slice(1) === currentSection) {
			a.classList.add('active');
		}
	});
});
