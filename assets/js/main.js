/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}

window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()  
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_mw57r6v','template_eux8vuc','#contact-form','S_uFGcqK-6Kr6M4S8')
    .then(() =>{
       contactMessage.textContent = 'Message sent successfully ✅'

       // Remove message after five seconds
       setTimeout(() =>{
           contactMessage.textContent = ''
       }, 5000)

       // Clear input fields
       contactForm.reset()

    },()=>{
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class 
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LOAD PROJECTS ===============*/
const loadProjects = async () => {
  try {
    const response = await fetch('assets/js/projects.json');
    const data = await response.json();
    const projectsContainer = document.getElementById('projectsContainer');

    data.projects.forEach(project => {
      const projectCard = `
        <article class="projects__card">
          <div class="projects__image">
            <img src="${project.image}" alt="${project.title}" class="projects__img">
            <a href="${project.demo}" class="peojects__button button">
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </div>
          <div class="projects__content">
            <h3 class="projects__subtitle">${project.subtitle}</h3>
            <h2 class="projects__title">${project.title}</h2>
            <p class="projects__description">${project.description}</p>
          </div>
          <div class="projects__buttons">
            <a href="${project.github}" target="_blank" class="projects__link">
              <i class="ri-github-line"></i>view
            </a>
            <a href="${project.demo}" target="_blank" class="projects__link">
              <i class="ri-dribbble-line"></i>view
            </a>
          </div>
        </article>
      `;
      projectsContainer.innerHTML += projectCard;
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
};

// Load projects when the DOM is ready
document.addEventListener('DOMContentLoaded', loadProjects);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')		
              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active-link')
              }
              else{
              	sectionsClass.classList.remove('active-link')	
              }
	})
	
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx bx-moon' : 'bx-sun'
// We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon'? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())	
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__perfill,.about__image`,{origin: 'right'})
sr.reveal(`.home__name,.home__info,.about__container, .section__title-1, .about__info,
            .contact__social,.contact__data`,{origin: 'left'})
sr.reveal(`.services__card,.project__card`,{interval:100})