document.querySelectorAll('.card__content',).forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('card__content--active');
    })
  });

  function toggle_textchange(e) {
  toggleText = b=> b.innerHTML = b.innerHTML == "Читати далі" ? "Згорнути" : "Читати далі";
}