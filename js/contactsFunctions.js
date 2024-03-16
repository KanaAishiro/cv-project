
function onHoverAnimation(id) {

    const cardContainer = document.querySelector(".contacts");
    const activeElement = document.getElementById(id);
    const cards = cardContainer.querySelectorAll(`.small-card:not(#${id})`);
    console.log("onhover initiated");
    cards.forEach(card => {
        card.addEventListener('transitionend', () => {
            exposeActiveElement(card, activeElement);
        }, 
        {once: true});
    });
    cards.forEach(card => {
        card.classList.add("visually-hidden");
    });
}
function exposeActiveElement(card,activeElement) {   

    card.classList.add("hidden");
    if(!activeElement.classList.contains("selected")) {
        activeElement.addEventListener("transitionend", () => {
            showElement(activeElement.children[1]);
        }, 
        {once: true});
        activeElement.classList.add("selected");
    }
    
}
function showElement(element) {
    element.classList.remove("hidden");
    setTimeout(() => element.classList.remove("visually-hidden"), 50 );
}

function returnToInitialState() {
    const cardContainer = document.querySelector(".contacts");
    const activeElement = document.querySelector(".selected")
    const cards = cardContainer.querySelectorAll(`.small-card:not(.selected)`);
    const activeElementText = activeElement.children[1];
    console.log(activeElement);

    activeElementText.addEventListener("transitionend", () => {
        activeElementText.classList.add("hidden");
        activeElement.classList.remove("selected");
    },
    {once: true});
    
    activeElement.addEventListener("transitionend", () => {
        cards.forEach(card => showElement(card));
    },
    {once: true});
    activeElementText.classList.add("visually-hidden");
}