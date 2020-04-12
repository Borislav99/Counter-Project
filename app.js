(function () {
  //varijable
  let btns = document.querySelectorAll(".btn");
  let counter = document.querySelector(".counter");
  let index = 0;
  btns.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.parentElement.classList.contains("left")) {
        index--;
        counter.innerText = index;
        counter.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
      } else if (event.target.parentElement.classList.contains("right")) {
        index++;
        counter.innerText = index;
        counter.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
      }
      if (index < 0) {
        counter.style.color = "red";
      } else if (index === 0) {
        counter.style.color = "black";
      } else if (index > 0) {
        counter.style.color = "green";
      }
    });
  });
})();
