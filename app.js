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
      } else if (event.target.parentElement.classList.contains("right")) {
        index++;
        counter.innerText = index;
      }
      if (index < 0) {
        counter.style.color = "red";
      } else if (index === 0) {
        counter.style.color = "black";
      }else if(index>0){
       counter.style.color = 'green';
      }
    });
  });
})();
