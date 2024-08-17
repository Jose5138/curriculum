window.onload = function() {
      var audio1 = document.getElementById('miAudio');
      var audio2 = document.getElementById('miAudio1');
      // Reproducir el primer audio automáticamente al cargar la página
      audio1.play();
      // Cuando el primer audio termine, iniciar el segundo
      audio1.addEventListener('ended', function() {
            audio2.play();
      });
      window.addEventListener('scroll', function() {
            const video = document.querySelector('.parallax-video');
            const scrollPosition = window.pageYOffset;
            video.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
        });
};
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
      $('#comics1').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics1.jpg");
      });
      $('#comics2').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics2.jpg");
      });
      $('#comics3').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics3.jpg");
      });
      $('#comics4').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics4.jpg");
      });
      $('#comics5').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics5.jpg");
      });
      $('#comics6').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics6.jpg");
      });
      $('#comics7').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics7.jpg");
      });
      $('#comics8').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics8.jpg");
      });
      $('#comics9').hover(function () {
            $(".imgizq").attr("src", "../img/comics/comics9.jpg");
      });
      // función que se ejecutará cuando le damos click al las card del modal
      // cabiará los datos de forma dinámica
      document.querySelectorAll('.openModal').forEach(button => {
            button.addEventListener('click', function() {
                // Obtener los datos del botón clicado
                const title = this.getAttribute('data-title');
                const videoSrc = this.getAttribute('data-video');
        
                // Actualizar el título del modal
                document.getElementById('dynamicModalLabel').textContent = title;
        
                // Actualizar la fuente del video en el modal
                const videoElement = document.getElementById('modalVideo');
                videoElement.querySelector('source').src = videoSrc;
                videoElement.load(); // Recargar el video con la nueva fuente
        
                // Mostrar el modal
                const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
                modal.show();
            });
        });
        
        // Pausar el video cuando se cierra el modal
        document.getElementById('dynamicModal').addEventListener('hidden.bs.modal', function () {
            const videoElement = document.getElementById('modalVideo');
            videoElement.pause();
            videoElement.currentTime = 0; // Reinicia el video al inicio si es necesario
        });
   
}); //end ready
