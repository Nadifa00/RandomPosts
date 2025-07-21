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

