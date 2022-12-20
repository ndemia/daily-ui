document.querySelectorAll('.card__title').forEach((item) => {

  item.addEventListener('click', (e) => {

    if (!item.parentElement.nextElementSibling.classList.contains('collapsing')) {
      
      // Open accordion item
      if (!item.parentElement.nextElementSibling.classList.contains('open')) {

        // Rotate chevron
        item.lastElementChild.classList.add('card__button--expanded')

        // Display the card content, although hidden, to calculate the full height of the section
        item.parentElement.nextElementSibling.style.display = 'block';

        // Save the height of card content to use later
        let accHeight =  item.parentElement.nextElementSibling.clientHeight;

        item.parentElement.nextElementSibling.classList = 'card__content collapsing'



        setTimeout(() => {
          item.parentElement.nextElementSibling.style.height = accHeight;
          item.parentElement.nextElementSibling.style.display = '';
        }, 1);

        setTimeout(() => {
          item.parentElement.nextElementSibling.classList = 'card__content open';
        }, 300);
  
      // Close accordion item
      } else {

        // Rotate chevron
        item.lastElementChild.classList.remove('card__button--expanded')

        item.parentElement.nextElementSibling.classList = 'card__content collapsing';
  
        setTimeout(() => {
          item.parentElement.nextElementSibling.classList = 'card__content collapsed';
          item.parentElement.nextElementSibling.style.height = '';
        }, 300);

        setTimeout(() => {
          item.parentElement.nextElementSibling.style.height = '0';
        }, 1);
  
      }
    }
  });
});