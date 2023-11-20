const menuToggle = document.querySelector('.menu-toggle');
const hamburgerNav = document.querySelector('#hamburger-nav');
const darken = document.querySelector('.darken');

function toggleAction(){
    menuToggle.classList.toggle('isActive');
    hamburgerNav.classList.toggle('hidden');
    darken.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');
}

hamburgerNav.addEventListener("click", (e) =>{
    if (e.target === e.currentTarget){
        toggleAction();
    }
});

const links = document.querySelectorAll("a");

links.forEach((item) =>{
    item.addEventListener('mouseover', (e) => {
        let width = e.currentTarget.getBoundingClientRect().width;
        let height = e.currentTarget.getBoundingClientRect().height;
        e.currentTarget.style.setProperty('--linkwidth', width + 'px');
        e.currentTarget.style.setProperty('--linkheight', height + 'px');
    })
});

const divDrop = document.querySelectorAll(".div-drop");

divDrop.forEach((item) =>{
    item.addEventListener('mouseenter', (e) => {
        let maxHeight = e.currentTarget.querySelector(".ul-drop").getBoundingClientRect().height;
        e.currentTarget.style.setProperty('--drop-height', maxHeight + 'px');

        
    })
});

const dropHamburger = document.querySelectorAll("#hamburger-nav .drop");

dropHamburger.forEach((item) => {
    item.firstElementChild.addEventListener('click', () => {
        item.classList.toggle("hamburger-drop-open");
    });
});
