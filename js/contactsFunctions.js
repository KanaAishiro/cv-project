let activeElementId = null;

function onHoverAnimation(id) {
    console.log("on hover animation");
    const cardContainer = document.querySelector(".contacts");
    let activeElement = document.getElementById(id);
    const activeElementText = activeElement.querySelector(".small-text-wrapper");
    activeElementId = id;
    console.log(activeElement);
    for(const child of cardContainer.children) {   
        if(child != activeElement) {
            child.addEventListener("transitionend", function () {
                child.classList.add("hidden");
                activeElement.addEventListener("transitionend", function () {
                    activeElementText.classList.remove("hidden");
                    activeElementText.classList.remove("visually-hidden");
                });
                activeElement.classList.add("selected");
            });
            child.classList.add("visually-hidden");
        }
    }
}
function returnToInitialState() {
    console.log("return to init state");
    const cardContainer = document.querySelector(".contacts");
    let activeElement = document.getElementById(activeElementId);
    const activeElementText = activeElement.querySelector(".small-text-wrapper");
    
    activeElementText.addEventListener("transitionend", function () {
        activeElementText.classList.add("hidden");
        activeElement.classList.remove("selected");
        console.log("element hides");
        console.log(activeElementText);

        activeElement.addEventListener("transitionend", function () {
            for(const child of cardContainer.children) {
                child.classList.remove("hidden");
                child.classList.remove("visually-hidden");
                
            }
        });
    });
    activeElementText.classList.add("visually-hidden"); 
    console.log(activeElement);
    console.log(activeElementText);
    
}