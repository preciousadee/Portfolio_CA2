// DYNAMIC GREETING
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour < 12) greeting.textContent = "Good morning — welcome to my portfolio.";
else if (hour < 18) greeting.textContent = "Good afternoon — great to have you here.";
else greeting.textContent = "Good evening — thanks for visiting.";

// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    toggle.innerHTML = document.body.classList.contains("dark-mode")
        ? `<i class="bi bi-sun"></i>`
        : `<i class="bi bi-moon-stars"></i>`;
});

// PROJECT FILTER
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        projects.forEach(project => {
            if (category === "all" || project.dataset.category === category)
                project.style.display = "block";
            else
                project.style.display = "none";
        });
    });
});
