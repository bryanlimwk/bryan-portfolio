(() => {
  const messages = {
    people: "How do the decisions made before someone joins connect with the experience they have once they're inside the organisation?",
    business: "How can People teams understand the business deeply enough to contribute to decisions — rather than operating beside them?",
    ai: "Where can AI remove friction, improve thinking and create leverage — while keeping human judgment where it matters?"
  };
  const note = document.getElementById("curiosityNote");
  document.querySelectorAll("[data-curiosity]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.curiosity;
      note.textContent = messages[key];
      note.classList.add("show");
    });
  });
})();