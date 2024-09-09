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
}); //ready