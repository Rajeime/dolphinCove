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

