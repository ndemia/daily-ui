const signUpTab = document.getElementById('signUp');
const logInTab = document.getElementById('logIn');
const mainSignUp = document.getElementById('user-access__sign-up-view');
const mainLogIn = document.getElementById('user-access__log-in-view');
const userAccess = document.getElementById('user-access');

logInTab.addEventListener('click', () => {
	signUpTab.classList.replace('tab--active', 'tab--inactive');
	logInTab.classList.replace('tab--inactive', 'tab--active');
	logInTab.classList.remove('tab--lftshadow');
	signUpTab.classList.add('tab--rgtshadow');
	mainSignUp.classList.replace('user-access--active', 'user-access--inactive');
	mainLogIn.classList.replace('user-access--inactive', 'user-access--active');
});
	
signUpTab.addEventListener('click', () => {
	logInTab.classList.replace('tab--active', 'tab--inactive');
	signUpTab.classList.replace('tab--inactive', 'tab--active');
	signUpTab.classList.remove('tab--rgtshadow');
	logInTab.classList.add('tab--lftshadow');
	mainLogIn.classList.replace('user-access--active', 'user-access--inactive');
	mainSignUp.classList.replace('user-access--inactive', 'user-access--active');
});