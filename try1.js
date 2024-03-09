const toggleButton = document.getElementsByClassName("toggle-bar")[0];
const navbarLists = document.getElementsByClassName("navbar-lists")[0];

toggleButton.addEventListener("click", (e) => {
	e.preventDefault();
	navbarLists.classList.toggle("active");
});

console.log("hi");
