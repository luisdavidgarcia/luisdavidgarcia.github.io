const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	//Toggle Nav
	burger.addEventListener('click',() => {
		nav.classList.toggle('nav-active');
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 4}s';
			}	
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});


}
navSlide();

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
