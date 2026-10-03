(() => {
  const careerTabs = [...document.querySelectorAll('[data-career]')];
  const careerPanels = [...document.querySelectorAll('[data-career-panel]')];
  careerTabs.forEach(tab => tab.addEventListener('click', () => {
    const key = tab.dataset.career;
    careerTabs.forEach(t => { t.classList.toggle('active', t === tab); t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
    careerPanels.forEach(p => p.classList.toggle('active', p.dataset.careerPanel === key));
  }));

  const notes = {
    people: ['PEOPLE', "How do the decisions made before someone joins connect with the experience they have once they're inside the organisation?"],
    business: ['BUSINESS', 'How can People teams understand the business deeply enough to contribute to decisions — rather than operating beside them?'],
    ai: ['AI', 'Where can AI remove friction, improve thinking and create leverage — while keeping human judgment where it matters?']
  };
  const curiosityTabs = [...document.querySelectorAll('[data-curiosity-key]')];
  const note = document.querySelector('#curiosityNote');
  curiosityTabs.forEach(tab => tab.addEventListener('click', () => {
    curiosityTabs.forEach(t => t.classList.toggle('active', t === tab));
    const [label, copy] = notes[tab.dataset.curiosityKey];
    note.innerHTML = `<span class="curiosity-kicker">${label}</span><p>${copy}</p>`;
  }));
})();
