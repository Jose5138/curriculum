$(document).ready(function () {
      $(window).scroll(function () {
            let animar = document.getElementById('scroll_subir');
            if ($(this).scrollTop() > 100) {
                  animar.style.visibility = 'visible';
            } else {
                  animar.style.visibility = 'hidden';
            }
      });
      //efecto de scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                  });
            });
      });
}); //ready    
      
  
