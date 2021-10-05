const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	let menuOpen = false;

	//Toggle Nav
	burger.addEventListener('click',() => {
		if(!menuOpen){
			nav.classList.toggle('nav-active');
			//Burger Animation
			burger.classList.toggle('toggle');
			menuOpen = true;
		}else{
			nav.classList.toggle('nav-active');
			//Burger Animation
			burger.classList.toggle('toggle');
			menuOpen = false;
		}		
	});
}
navSlide();

			/*
			//Animate Links
			navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
			}	
			});
			*/
/*
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
	if(!menuOpen){
		menuBtn.classList.add('open');
		menuOpen = true;
	}else{
		menuBtn.classList.remove('open');
		menuOpen = false;
	}	
});
*/
