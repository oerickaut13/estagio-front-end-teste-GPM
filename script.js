document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav.item div");
    const sections = document.querySelectorAll("main section");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            sections.forEach(section => section.style.display = "none");
            sections[index].style.display = "block";
        });
    });

    sections.forEach(section => section.style.display = "none");
    if (sections[0]) {
        sections[0].style.display = "block";
    }
});
