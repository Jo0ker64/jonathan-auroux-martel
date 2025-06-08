let currentIndex = 0;
const slider = document.getElementById("projectSlider");
const slides = slider.querySelectorAll(".min-w-full");

function slideProject(direction) {
    currentIndex += direction;

    // Boucle infinie
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    // Déplacement
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

let currentSkillIndex = 0;
const skillsSlider = document.getElementById("skillsSlider");
const totalSkills = skillsSlider.children.length;

function slideSkills(direction) {
    currentSkillIndex += direction;
    if (currentSkillIndex < 0) currentSkillIndex = totalSkills - 1;
    if (currentSkillIndex >= totalSkills) currentSkillIndex = 0;
    const translateX = -currentSkillIndex * 100;
    skillsSlider.style.transform = `translateX(${translateX}%)`;
}
