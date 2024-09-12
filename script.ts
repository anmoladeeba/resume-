const toggleButton = document.getElementById("toggle-skill") as HTMLButtonElement
const skillElements = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click", ()=> {
    if(skillElements.style.display === "none") {
        skillElements.style.display = "block"
    } else {
        skillElements.style.display ="none"
    }
});
