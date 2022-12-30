function initApp() {
  let hamburger_menu = document.getElementById("hamburger-button");
  let mobile_menu = document.getElementById("mobile-menu");

  let toggleMenu = () => {
    mobile_menu.classList.toggle("hidden");
    mobile_menu.classList.toggle("flex");
    hamburger_menu.classList.toggle("toggle-btn");
    console.log(hamburger_menu);
  };

  hamburger_menu.addEventListener("click", toggleMenu);
  mobile_menu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);
