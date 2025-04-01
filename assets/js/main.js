/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU ON MOBILE CLICK =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {delay: 400}); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== DARK/LIGHT MODE TOGGLE =====*/
// Theme variables are already declared below
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
const body = document.body;

// Load previous theme preference
const savedTheme = localStorage.getItem("selected-theme");
if (savedTheme === "enabled") {
    body.classList.add(darkTheme);
}
// These variables are already declared above
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
const iconTheme = 'toggle-icon-dark';

// Check if the user has a preference saved in localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Apply saved theme on page load
if (selectedTheme === darkTheme) {
    document.body.classList.add(darkTheme);
    themeButton.classList.add(iconTheme);
}

// Toggle Theme
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save user's theme preference in localStorage
    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? darkTheme : '');
    localStorage.setItem('selected-icon', themeButton.classList.contains(iconTheme) ? iconTheme : '');
});

