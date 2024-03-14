let activeElementId = null;

function onHoverAnimation(id) {
    const cardContainer = document.querySelector(".contacts");
    const activeElement = document.getElementById(id);
    const cards = cardContainer.querySelectorAll(`.small-card:not(#${id})`);

    console.log(cards);

    cards.forEach(card => card.addEventListener("transitionend", exposeActiveElement(card, activeElement), {once: true}));
    cards.forEach(card => card.classList.add("visually-hidden"));
}

function returnToInitialState() {
    
}

function exposeActiveElement(card, activeElement)
{   
    this.
    card.classList.add("hidden");
    if(!activeElement.classList.contains("selected")) {
        
    }
    
}