const app = require("./app");
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#logo");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});

const content = document.querySelector(".auto-type");
var typed = new Typed(content, {
  strings: ["Ahmed Khan"],
  typeSpeed: 200,
  loop: false,
});
