function addMessageToConversation () {

	// Save written message from input.
	let messageText = document.querySelector('.footer__input').value;

	// If message is empty...
	if (messageText.trim().length == 0) {

		return false;
		
	} else {

		// Add the message with the bubble to the conversation.
		document.querySelector('.messages').insertAdjacentHTML('beforeend', `<div class="messages__bubble messages__bubble--right"><p class="messages__text">${messageText}</p></div>`);

		// Clear the input.
		document.querySelector('.footer__input').value = '';

		// Return focus to input.
		document.querySelector('.footer__input').focus();
	}
}



function showChatList () {

	document.querySelector('.container').classList.toggle('list--active');

	// Disable keyboard navigation for the conversation view.
	document.querySelectorAll('.conversation [tabindex="0"]').forEach((element) => {

		element.setAttribute('tabindex', '-1');

	});

	// Enable the keyboard navigation for the chat list.
	document.querySelectorAll('.list [tabindex="-1"]').forEach((element) => {

		element.setAttribute('tabindex', '0');

	});

	// Toggle aria-hidden in each section
	document.querySelector('.list').setAttribute('aria-hidden', false)
	document.querySelector('.conversation').setAttribute('aria-hidden', true)

	// Focus on first chat.	
	setTimeout(() => {
		document.querySelector('#chat1').focus();
	}, 350);

}



function showConversation () {

	document.querySelector('.container').classList.toggle('list--active');

	// Enable the keyboard navigation for the conversation view.
	document.querySelectorAll('.conversation [tabindex="-1"]').forEach((element) => {

		element.setAttribute('tabindex', '0');

	});

	// Disable keyboard navigation for the chat list.
	document.querySelectorAll('.list [tabindex="0"]').forEach((element) => {

		element.setAttribute('tabindex', '-1');

	});

	// Toggle aria-hidden in each section
	document.querySelector('.list').setAttribute('aria-hidden', true)
	document.querySelector('.conversation').setAttribute('aria-hidden', false)

	/* Focus to input with timeout because otherwise the focus happens so fast that it breaks the transition and the conversation view goes out of the container. */
	setTimeout(() => {
		document.querySelector('.footer__input').focus();
	}, 350);
}



function minimizeChat () {

	document.querySelector('.mask').classList.toggle('minimize');

}



// Event listeners.
document.querySelector('.btn--list').addEventListener('click', showChatList);
document.querySelectorAll('.chat')
	.forEach((element) => element.addEventListener('click', showConversation));
document.querySelectorAll('.header__info, .list__header')
	.forEach((element) => element.addEventListener('click', minimizeChat));
document.querySelector('.btn--send').addEventListener('click', addMessageToConversation);

// Send message with enter key.
document.querySelector('.footer__input').addEventListener('keydown', (e) => {

	if (e.key == 'Enter') {

		addMessageToConversation();

	} else {

		return false;
		
	}
});