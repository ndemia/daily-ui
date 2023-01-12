// Add message to the conversation.
function addMessageToConversation () {

	// Define variable to store message text.
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



// Show chat list.
document.querySelector('.btn--list').addEventListener('click', function () {

	document.querySelector('.container').classList.add('list--active');
	
});



// Show conversation.
document.querySelector('#chat1').addEventListener('click', function () {

	document.querySelector('.container').classList.remove('list--active');

});



// Minimize chat.
document.querySelectorAll('.header__info, .list__header').forEach(function (e) {
	
	e.addEventListener('click', function () {

		document.querySelector('.mask').classList.toggle('minimize');

	});
});


// Events
// Send message.
document.querySelector('.btn--send').addEventListener('click', addMessageToConversation);

// Send message with enter key.
document.querySelector('.footer__input').addEventListener('keydown', function (e) {

	if (e.key == 'Enter') {

		addMessageToConversation();

	} else {

		return false;
		
	}
});