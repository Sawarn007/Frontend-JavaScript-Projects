const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
  //   console.log(currentActive);
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  updateDOM();
  //   console.log(currentActive);
});

function updateDOM() {
  let percent;
  circles.forEach((eachCircle, index) => {
    // console.log("index ", index);
    // console.log("currentActive ", currentActive);

    if (index < currentActive) {
      eachCircle.classList.add("active");
    } else {
      eachCircle.classList.remove("active");
    }

    const actives = document.querySelectorAll(".active");
    percent = ((actives.length - 1) / (circles.length - 1)) * 100;
    // console.log("p ", percent);
    progress.style.width = `${percent}%`;

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}
