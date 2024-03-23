const smallCards = document.querySelectorAll(".small-card");


smallCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
    smallCards.forEach(i => {
      if (i !== card) {
        i.classList.add('hidden');
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    smallCards.forEach(i => {
      i.classList.remove('hidden');
    });
  });
});
