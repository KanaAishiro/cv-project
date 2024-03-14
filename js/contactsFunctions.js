
function onHoverAnimation(id) {

    const cardContainer = document.querySelector(".contacts");
    const activeElement = document.getElementById(id);
    const cards = cardContainer.querySelectorAll(`.small-card:not(#${id})`);

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
            showActiveElementText(activeElement.children[1]);
        }, 
        {once: true});
        activeElement.classList.add("selected");
    }
    
}
function showActiveElementText(activeElementText) {
    activeElementText.classList.remove("hidden");
    setTimeout(() => activeElementText.classList.remove("visually-hidden"), 50 );
}

function returnToInitialState() {
    const cardContainer = document.querySelector(".contacts");
    const activeElement = document.querySelector(".selected")
    const cards = cardContainer.querySelectorAll(`.small-card:not(.selected)`);
    const activeElementText = activeElement.children[1];

    
}