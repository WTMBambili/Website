// ========================== navigation bar ===================
const responsiveBtn = document.querySelector('.responsive')
const navLinks = document.querySelector('.nav-links')

responsiveBtn.addEventListener('click', ()=>{
    responsiveBtn.classList.toggle('active')
    navLinks.classList.toggle('active')
})

// ======== project section slider ===================
const productContainers = [...document.querySelectorAll('.project-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})