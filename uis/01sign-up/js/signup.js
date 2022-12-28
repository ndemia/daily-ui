// UI variables
const signUpTab = document.getElementById('signUp');
const logInTab = document.getElementById('logIn');
const mainSignUp = document.getElementById('user-access__sign-up-view');
const mainLogIn = document.getElementById('user-access__log-in-view');
const userAccess = document.getElementById('user-access');

// Toggle elements on/off when showing the Log in screen
logInTab.onclick = function showLogIn() {
	userAccess.classList.add('user-access--new-height');
	signUpTab.classList.replace('nav--active', 'nav--inactive');
	logInTab.classList.replace('nav--inactive', 'nav--active');
	logInTab.classList.remove('nav__logIn--inactive-shadow');
	signUpTab.classList.add('nav__signUp--inactive-shadow');
	mainSignUp.classList.replace('user-access--active', 'user-access--inactive');
	mainLogIn.classList.replace('user-access--inactive', 'user-access--active');
}

// Toggle elements on/off when showing the Sign up screen
signUpTab.onclick = function showSignUp() {
	userAccess.classList.remove('user-access--new-height');
	logInTab.classList.replace('nav--active', 'nav--inactive');
	signUpTab.classList.replace('nav--inactive', 'nav--active');
	signUpTab.classList.remove('nav__signUp--inactive-shadow');
	logInTab.classList.add('nav__logIn--inactive-shadow');
	mainLogIn.classList.replace('user-access--active', 'user-access--inactive');
	mainSignUp.classList.replace('user-access--inactive', 'user-access--active');
}