const signUpTab = document.getElementById('signUp');
const logInTab = document.getElementById('logIn');
const signUp = document.getElementById('user-access__sign-up-view');
const logIn = document.getElementById('user-access__log-in-view');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('keydown', (e) => {
    // Get the index of the current tab from the tabs node list
    let index = Array.prototype.indexOf.call(tabs, e.currentTarget);

    // Determine key pressed
    let dir = '';
    if (e.key === 'ArrowLeft') {
      dir = index - 1;
    } else if (e.key === 'ArrowRight') {
      dir = index + 1;
    } else {
      dir = null;
    }

    // Switch to the new tab if it exists
    if (dir !== null) {
      e.preventDefault();

      // Find the correct tab
      let newIndex;
      if (tabs[dir]) {
        newIndex = dir;
      } else if (dir === index - 1) {
        // Loop around if adjacent tab doesn't exist
        newIndex = tabs.length - 1;
      } else {
        newIndex = 0;
      }

      switchTab(e.currentTarget, tabs[newIndex]);
      tabs[newIndex].focus();
    }
  });

  tab.addEventListener('click', (e) => {
    let currentTab = document.querySelector('[aria-selected]');
    if (e.currentTarget !== currentTab) {
      switchTab(currentTab, e.currentTarget);
    }
  });
});

function switchTab(oldTab, newTab) {
  oldTab.classList.replace('tab--active', 'tab--inactive');
  oldTab.classList.replace('user-access--active', 'user-access--inactive');
  newTab.classList.replace('tab--inactive', 'tab--active');
  newTab.classList.replace('user-access--inactive', 'user-access--active');

  newTab.removeAttribute('tabindex');
  newTab.setAttribute('aria-selected', 'true');
  oldTab.setAttribute('tabindex', '-1');
  oldTab.removeAttribute('aria-selected');

  if (newTab.classList.contains('tab--lftshadow')) {
    newTab.classList.toggle('tab--lftshadow');
    oldTab.classList.toggle('tab--rgtshadow');
  } else if (newTab.classList.contains('tab--rgtshadow')) {
    newTab.classList.toggle('tab--rgtshadow');
    oldTab.classList.toggle('tab--lftshadow');
  }

  if (logIn.classList.contains('user-access--inactive')) {
    signUp.classList.replace('user-access--active', 'user-access--inactive');
    signUp.setAttribute('hidden', 'true');
    logIn.classList.replace('user-access--inactive', 'user-access--active');
    logIn.setAttribute('hidden', 'false');
  } else if (signUp.classList.contains('user-access--inactive')) {
    logIn.classList.replace('user-access--active', 'user-access--inactive');
    logIn.setAttribute('hidden', 'true');
    signUp.classList.replace('user-access--inactive', 'user-access--active');
    signUp.setAttribute('hidden', 'false');
  }
}
