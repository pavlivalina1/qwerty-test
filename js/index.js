const toggleBurger = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-burger-menu");
const navMobile = document.getElementsByClassName("header-navigation-mobile-container")[0];
const mainContent = document.getElementById("main-content"); // Елемент, який містить основний контент
let backdrop;

// Function to add the backdrop and blur the main content
function addBackdrop() {
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  document.body.appendChild(backdrop); // Add backdrop to the body

  // Add blur to the main content
  mainContent.classList.add("blurred");
}

// Function to remove the backdrop and remove blur from the main content
function removeBackdrop() {
  if (backdrop) {
    backdrop.remove(); // Remove backdrop from the body
  }

  // Remove blur from the main content
  mainContent.classList.remove("blurred");
}

// Open menu and add backdrop
toggleBurger.addEventListener("click", () => {
  navMobile.classList.add("active");
  toggleBurger.classList.remove("active");
  closeBtn.classList.add("active");
  addBackdrop(); // Add backdrop when the menu is open
});

// Close menu and remove backdrop
closeBtn.addEventListener("click", () => {
  navMobile.classList.remove("active");
  closeBtn.classList.remove("active");
  toggleBurger.classList.add("active");
  removeBackdrop(); // Remove backdrop when the menu is closed
});
