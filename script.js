const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const cats = card.dataset.category || '';
      card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
    });
  });
});
