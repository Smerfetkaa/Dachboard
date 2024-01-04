const btnSidebar = document.querySelector(".sidebar__logo--mobile");
const sidebar = document.querySelector(".sidebar");
btnSidebar.addEventListener("click", () => sidebar.classList.toggle("hidden"));
