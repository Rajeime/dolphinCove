//admin section navigation
//viarables
const adminSectionContent = Array.from(document.querySelectorAll('[data-admin-section]'));
const adminSectionLink = Array.from(document.querySelectorAll('[data-admin-link]'));

adminSectionLink.forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        
        adminSectionLink.forEach((element)=>{
            //removes active class from link
            element.classList.remove('active')
        })

        //removes visible class from section
        for(let i = 0 ; i < adminSectionContent.length; i++){
            adminSectionContent[i].classList.remove('visible')
        }

        //adds active class to link clicked
        e.target.classList.add('active');
        navIndex = index

        //adds visible class to section that matches link in navbar
        adminSectionContent.forEach((element,index)=>{
            if(navIndex == index){
                element.classList.add('visible')
            }   
        })
    })

})


//admin tour guides section

let tourDropdown = document.querySelector('[data-show-tour]');
let dropDown = document.querySelectorAll('[data-tour-dropdown]');

tourDropdown.addEventListener('click',()=>{
    dropDown.forEach((element)=>{
        element.classList.toggle('showTour')
    })
})