let dataLinks = Array.from(document.querySelectorAll('[data-links]'));
let options = Array.from(document.querySelectorAll('[data-option-select]'));

dataLinks.forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
     
        dataLinks.forEach((element)=>{
            //removes active class from link
            element.classList.remove('active')
        })

        //removes visible class from section
        for(let i = 0 ; i < options.length; i++){
            options[i].classList.remove('visible')
        }

        //adds active class to link clicked
        e.target.classList.add('active');
        navIndex = index

        //adds visible class to section that matches link in navbar
        options.forEach((element,index)=>{
            if(navIndex == index){
                element.classList.add('visible')
            }   
        })
    })

})


//hamburger menu
let hamburgerMenu = document.querySelector('[ data-hamburger]');
let nav = document.querySelector('[data-nav]');

hamburgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('activate')
})

