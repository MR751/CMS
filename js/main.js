(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// ONE PAGE SAJT
    
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a [href*=" + id + "]").classList.add("active");
            });

        };

    });
};

// BROJAČ



function countNumber() {
    $('.count').each(function() {
    var countTo = Number($(this).text())
    $(this).prop('Counter', 0).animate({

         Counter: countTo - 1

    }, {

         duration: 2000,

         easing: 'swing',

         step: function(now) {

         var ceil = Math.floor(Math.random() * Math.floor(now))

             if (ceil < countTo) {

             $(this).text(ceil);

         }

         },

         complete: function() {

             $(this).text(countTo);

         }

      });

     });

    }

    $(document).ready(function() {

        countNumber();
  
      });


// BROJAČ

// -------OBLACIC-----

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}







// document.getElementsByClassName("btn btn-primary btn-block p-3").addEventListener("click", function() {
//     var popup = document.getElementById("popup");
//     var overlay = document.getElementById("overlay");
//     var popupMessage = document.getElementById("popupMessage");
    
//     // Set the message to be displayed in the popup
//     popupMessage.textContent = "Ovo je tekst koji treba da se pojavi";
    
//     popup.style.display = "block";
//     overlay.style.display = "block";
//   });
  
//   document.getElementById("overlay").addEventListener("click", function() {
//     var popup = document.getElementById("popup");
//     var overlay = document.getElementById("overlay");
//     popup.style.display = "none";
//     overlay.style.display = "none";
//   });