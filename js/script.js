window.addEventListener("load", ()=>{
    
    const loader = document.querySelector(".loader");
    const loader1 = document.querySelector(".loader1");
    const loader2 = document.querySelector(".loader2");
    const logo = document.querySelector(".logo_loader"); 

    loader1.classList.add("loader1Active");
    loader2.classList.add("loader2Active");
    logo.classList.add("loaderFinished");
    
    loader1.addEventListener("transitionend", ()=>{
        loader.remove();
    })

})

function animNav (){
    const header = document.querySelector(".header");
    const onglets = document.querySelectorAll(".onglets");
    const back = document.querySelector(".background");

    if(scrollY>0){
        header.classList.add("headerActive");
        back.classList.add("homeActive");
        onglets.forEach(onglet => {
            onglet.classList.add("ongletsActive");
        });
    }
    else{
        header.classList.remove("headerActive");
        back.classList.remove("homeActive");
        onglets.forEach(onglet => {
            onglet.classList.remove("ongletsActive");
        });
    }
}

if(window.innerWidth>1050)
{
    addEventListener("scroll", animNav);

    const services = document.querySelectorAll(".serv");
    const card = document.querySelector(".card");

    services.forEach(service => {
    service.addEventListener("click", ()=>{
        services.forEach(service => {
            service.classList.toggle("servActivated");
        });
        let content = service.innerHTML;

        card.innerHTML += content;
        card.classList.toggle("cardActivated");
        const crossCard = document.querySelector(".crossCard");

        crossCard.addEventListener("click", ()=>{
            crossCard.parentNode.innerHTML = '<i class="crossCard fas fa-times"></i>';
            card.classList.toggle("cardActivated");
            services.forEach(el => {
                el.classList.toggle("servActivated");
            });
        })
    })
    });
}

const logoBurger = document.querySelector(".logo_b");
const menuBurger = document.querySelector(".burger");
const cross = document.querySelector(".cross");

logoBurger.addEventListener("click", ()=>{
    
    
    menuBurger.classList.add("burgerActive");
    
    cross.addEventListener("click", ()=>{
        menuBurger.classList.remove("burgerActive");
    })
})



