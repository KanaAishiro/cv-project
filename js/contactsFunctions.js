function onHoverAnimation(id) 
{   
    const cardBox = document.querySelector(".contacts");
    const hoveredItem = document.getElementById(id);
    let childItem = hoveredItem.querySelector(".small-text-wrapper");

    if(!(hoveredItem.classList.contains("selected"))) {
        for(const child of cardBox.children)
        {
            console.log(child.classList);
            if(child != hoveredItem) {
                child.classList.add('visually-hidden');
                setTimeout(function () {
                    child.classList.add("hidden");
                }, 500);
            }
        }
        setTimeout(function () {
            hoveredItem.classList.add("selected");
            setTimeout(function () {
                childItem.classList.toggle("hidden");
            }, 400);
            setTimeout(function () {
                childItem.classList.toggle("visually-hidden");
            },500);
        },500)
    }
}

function returnToInitialState() {
    const cardBox = document.querySelector(".contacts");
    const hoveredItem = document.querySelector(".selected");
    const contactsText = hoveredItem.querySelector(".small-text-wrapper");
    
    contactsText.classList.toggle("visually-hidden");
    setTimeout(function () {
        contactsText.classList.toggle("hidden");
        hoveredItem.classList.remove("selected");
        for(const child of cardBox.children) {
            if(child.classList.contains("hidden"))
            {
                child.classList.remove("hidden");
                setTimeout(function () {
                    child.classList.remove("visually-hidden")
                }, 350);
            }
        }
    }, 600);
}