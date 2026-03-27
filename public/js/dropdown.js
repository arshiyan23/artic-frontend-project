document.addEventListener('DOMContentLoaded', () => {
  const customSelect = document.querySelector('.custom-select');
  const selectBtn = document.querySelector('.select-button');
  const selectedValue = document.querySelector('.selected-value');
  const optionsList = document.querySelectorAll('.select-dropdown li');

  if (selectBtn && customSelect) {
    // Add click event to select button
    selectBtn.addEventListener('click', () => {
      // Add/remove active class on the container element
      customSelect.classList.toggle('active');
      // Update the aria-expanded attribute based on the current state
      selectBtn.setAttribute(
        'aria-expanded',
        selectBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });

    // Add click event to each option
    optionsList.forEach(option => {
      option.addEventListener('click', () => {
        selectedValue.textContent = option.textContent;
        customSelect.classList.remove('active');
        selectBtn.setAttribute('aria-expanded', 'false');
      });
    });
  } else {
  }
});
