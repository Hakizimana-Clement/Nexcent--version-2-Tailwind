const menuIcon = document.querySelector(".menu-icon");
const openNavbar = document.querySelector(".navbar-close");

const mobileNav = () => {
  // state
  let isOpen = false;

  // open/close navbar function
  const openOpenNavbar = () => {
    isOpen = openNavbar.classList.toggle("open-navbar");
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  };

  // clicke event
  menuIcon.addEventListener("click", openOpenNavbar);
};
export default mobileNav;
