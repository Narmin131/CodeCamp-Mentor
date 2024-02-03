let modeBtn = document.querySelector("button");
let darkMode = localStorage.getItem("DarkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("DarkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("DarkMode", null);
};

if (darkMode == "enable") {
  enableDarkMode();
}

const changeMode = () => {
  let darkMode = localStorage.getItem("DarkMode");
  if (darkMode == "enable") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

modeBtn.addEventListener("click", changeMode);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
