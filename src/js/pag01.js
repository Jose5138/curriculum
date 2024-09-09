$(document).ready(function () {
      $(window).scroll(function () {
            var animar = document.getElementById('scroll_subir');
            if ($(this).scrollTop() > 800) {
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
      function showAlert() {
            alert("La página está en construcción. Al finalizar el proyecto, estará disponible la información de lo que se hizo.");
        }
        // Asignar la función al botón
        document.getElementById("btnarduino").addEventListener("click", showAlert);
}); //ready    
      
