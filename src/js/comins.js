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
}); //end ready
