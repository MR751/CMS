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

      $(document).ready(function() {

 

        $('.counter').each(function () {

    $(this).prop('Counter',0).animate({

        Counter: $(this).text()

    }, {

        duration: 4000,

        easing: 'swing',

        step: function (now) {

            $(this).text(Math.ceil(now));

        }

    });

});

 

});

// BROJAČ

// -------OBLACIC-----

// Get references to the modal and dialog elements
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

// Function to open a specific modal
function openModal(modal) {
  modal.style.display = 'block';
}

// Function to close a specific modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Add event listeners to open and close the modals
document.getElementById('openModal1').addEventListener('click', function() {
  openModal(modal1);
});

document.getElementById('openModal2').addEventListener('click', function() {
  openModal(modal2);
});

document.getElementById('openModal3').addEventListener('click', function() {
  openModal(modal3);
});

document.getElementById('closeModal1').addEventListener('click', function() {
  closeModal(modal1);
});

document.getElementById('closeModal2').addEventListener('click', function() {
  closeModal(modal2);
});

document.getElementById('closeModal3').addEventListener('click', function() {
  closeModal(modal3);
});







