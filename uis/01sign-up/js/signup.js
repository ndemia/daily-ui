// Assing interactive elements to a variable
const navSignUp = document.getElementById('nav__signUp');
const navLogIn = document.getElementById('nav__logIn');
const mainSignUp = document.getElementById('user-access__sign-up-view');
const mainLogIn = document.getElementById('user-access__log-in-view');
const userAccess = document.getElementById('user-access');

// Toggle elements on/off when showing the Log in screen
navLogIn.onclick = function showLogIn() {
	userAccess.classList.add('user-access--new-height');
	navSignUp.classList.replace('nav--active', 'nav--inactive');
	navLogIn.classList.replace('nav--inactive', 'nav--active');
	navLogIn.classList.remove('nav__logIn--inactive-shadow');
	navSignUp.classList.add('nav__signUp--inactive-shadow');
	mainSignUp.classList.replace('user-access--active', 'user-access--inactive');
	mainLogIn.classList.replace('user-access--inactive', 'user-access--active');
}

// Toggle elements on/off when showing the Sign up screen
navSignUp.onclick = function showSignUp() {
	userAccess.classList.remove('user-access--new-height');
	navLogIn.classList.replace('nav--active', 'nav--inactive');
	navSignUp.classList.replace('nav--inactive', 'nav--active');
	navSignUp.classList.remove('nav__signUp--inactive-shadow');
	navLogIn.classList.add('nav__logIn--inactive-shadow');
	mainLogIn.classList.replace('user-access--active', 'user-access--inactive');
	mainSignUp.classList.replace('user-access--inactive', 'user-access--active');
}

