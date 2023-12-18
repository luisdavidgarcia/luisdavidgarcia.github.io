const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const form = document.querySelector('form');
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput,emailInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
	elm.classList.remove("invalid");
	elm.nextElementSibling.classList.add("hidden");
};	

const invalidateElm = (elm) => {
		elm.classList.add("invalid");
		elm.nextElementSibling.classList.remove("hidden");
};	

const validateInputs = () => {
	if (!isValidationOn) return;
	isFormValid = true;
	resetElm(nameInput);
	resetElm(emailInput);
	resetElm(messageInput);

	if (!nameInput.value) {
		isFormValid = false;
		invalidateElm(nameInput);
	}	
	
	if (!isValidEmail(emailInput.value)) {
		isFormValid = false;
		invalidateElm(emailInput);
	}	

	if (!messageInput.value){
		isFormValid = false;
		invalidateElm(messageInput);
	}	
};	

let Messages = [];
// example: {id: 848948594, name: "John Doe", email: "johndoe@emailsite.com", message: "Hi there, . . . "}
const addMessage = (ev) =>{
	let messageDetails = {
		id: Date.now(),
		name: nameInput.value,	
		email: emailInput.value,	
		Message:messageInput.value	
	}
	
	//Only Accept Inputs in array that are not null, so that they don't take up extra space
	if (nameInput != null && messageInput != null && emailInput != null) {
		Messages.push(messageDetails);
		document.forms[0].reset();
	}

	//validate its working
	//	console.warn('added',{Messages});
	//let pre = document.querySelector('#msg pre');
	//pre.textContent = '\n' + JSON.stringify(Messages, '\t',2);

	localStorage.setItem('MyMessages',JSON.stringify(Messages));
}	

//Checks for Submit Button and then Initaties Response
document.addEventListener('DOMContentLoaded',()=>{
	form.addEventListener('submit',(e) => {
		e.preventDefault();
		isValidationOn = true;
		validateInputs();

		if (isFormValid){
			addMessage();
			//form.remove();  //remove form if desired, but if someone wants to resubmit might as well let them
			thankYou.classList.remove("hidden");
			isValidationOn = false;
		}	
	});
});

inputs.forEach(input => {
	nameInput.addEventListener('input',() =>{
		validateInputs();
	});
});	



