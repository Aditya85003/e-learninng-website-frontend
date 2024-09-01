// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Course Content Loading
const courses = [
    {
        title: "Introduction to Python",
        description: "Learn the basics of Python programming.",
        image: "python1.png"
    },
    {
        title: "Web Development Bootcamp",
        description: "Become a full-stack web developer.",
        image: "web_development.png"
    },
    {
        title: "Data Science Fundamentals",
        description: "Master data analysis and visualization.",
        image: "data.jpg"
    }
];

document.querySelectorAll('.course').forEach((courseElement, index) => {
    courseElement.addEventListener('click', () => {
        modal.style.display = "block";
        modalTitle.textContent = courses[index].title;
        modalDescription.textContent = courses[index].description;
        modalImage.src = courses[index].image;
    });
});

// Modal for Course Details
const modal = document.getElementById("course-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementsByClassName("close")[0];

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Form Validation (if you have a contact form)
document.querySelector("form").addEventListener("submit", function(event) {
    let isValid = true;
    this.querySelectorAll("input[required]").forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });
    if (!isValid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
});
