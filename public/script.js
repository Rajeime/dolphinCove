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


// login page
var loginPasswordIcon = document.querySelector('[data-see-password]');
var loginInput = document.querySelector('[data-login-password]');
var value = false;

loginPasswordIcon.addEventListener('click',(e)=>{
   value = !value
   if(value){
    loginInput.type = 'text';
    e.target.classList.replace('fa-eye', 'fa-eye-slash')
   }

   else{
       loginInput.type = 'password';
       e.target.classList.replace('fa-eye-slash', 'fa-eye')
   }
  
})


//hamburger menu
let hamburgerMenu = document.querySelector('[ data-hamburger]');
let nav = document.querySelector('[data-nav]');

hamburgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('activate')
})

//bookings form
let bookingsButton = document.querySelector('[data-bookings-button]');
let modal = document.querySelector('[data-modal]');
let span = document.querySelector('[data-close]');

bookingsButton.addEventListener('click',()=>{
    modal.style.display = 'block'
})


// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
span.addEventListener('click',()=>{
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click',(e)=>{
  if (e.target == modal) {
    modal.style.display = "none";
  }
})

//bookings information and modal
let participants = document.querySelector('[data-participants]');

participants.addEventListener('change',(e)=>{
    if(e.target.value < 1){
        e.target.value = 1
    }
})
