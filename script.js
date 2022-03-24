const tabsContainer = document.querySelector(".education-tabs")
const educationSection = document.querySelector("education-section");
tabsContainer.addEventListener("click",(e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target =  e.target.getAttribute("data-target");
        educationSection.querySelector(".tab-content active").classList.remove("active");
        educationSection.querySelector(target).classList.add("active");
    }
})