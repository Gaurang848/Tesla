const navLinks = document.querySelectorAll(".nav-items a");
const model3 = document.querySelector(".model-3");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    model3.classList.add("blurred");
  });

  link.addEventListener("mouseout", () => {
    model3.classList.remove("blurred");
  });
});
