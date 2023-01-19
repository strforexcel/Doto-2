const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.overlay');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
