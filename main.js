const readMoreBtn = document.querySelectorAll(".read-more-btn");

readMoreBtn.forEach(element => {
  element.addEventListener("click", (e) => {
    const writing = element.parentElement.querySelector(".writing");

    writing.classList.toggle("show-more");
    if(element.innerText === 'Read More') {
      element.innerText = 'Read Less';
    } else {
      element.innerText = 'Read More';
    }
  });
});

const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});