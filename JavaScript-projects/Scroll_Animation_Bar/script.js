const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollBoxes);

function scrollBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log("boxTop", boxTop);
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
