const prevImg = document.querySelector(".prevImg");
const nextImg = document.querySelector(".nextImg");
const imgCurrent = document.querySelector(".imgCurrent");
const thumbs1 = document.getElementsByClassName("thumb");
const thumbs2 = Array.from(thumbs1);

thumbs2.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    const prevClickedThumb = document.querySelector(".thumb-clicked");
    if (prevClickedThumb) {
      prevClickedThumb.classList.add("thumb");
      prevClickedThumb.classList.remove("thumb-clicked");
    }
    imgCurrent.src = thumb.src;
    thumb.classList.remove("thumb");
    thumb.classList.add("thumb-clicked");
  });
});

let currentImg = 1;
if (currentImg === 1 || currentImg === 0) {
  prevImg.style = "display: none;";
}
prevImg.addEventListener("click", () => {
  currentImg--;
  if (currentImg === 0) {
    prevImg.style = "display: none;";
    return;
  }
  nextImg.style = "display: block;";
  imgCurrent.src = `/img/gallery/img-${currentImg}.jpeg`;
});

nextImg.addEventListener("click", () => {
  currentImg++;
  prevImg.style = "display: block;";
  if (currentImg > 4) {
    nextImg.style = "display: none;";
    return;
  }
  imgCurrent.src = `/img/gallery/img-${currentImg}.jpeg`;
});
// nav mini article
const navMini = document.querySelector(".navMini");
navMini.addEventListener("click", (e) => {
  console.log(typeof e.target.innerHTML);
});
