const btnHamburger = document.querySelector('#btnHamburger');
const body=document.querySelector('body');
const header= document.querySelector('.header');
const overlay= document.querySelector('.overlay');
const fadeElms=document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
  if(header.classList.contains('open')){//close hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElms.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    

    
  }else{// open hamburger menu
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElms.forEach(function(element){
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
    
  }
  
});
