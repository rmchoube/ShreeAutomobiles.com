$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Prevent default anchor click behavior
   /* event.preventDefault();*/

    // Store hash
    var hash = this.hash;

   /* var prodPos = $("#homeproductBorder").position();
    var prodHeight = $("#homeproductBorder").height();*/
     
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number  it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 780, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;

     /*  if (($this).hasClass("four")) return;*/
    });

 /* $(".one").removeClass('active'); 
    $(".two").addClass('active');
*/


  });
});

//this toggle the active class from home to product
/*$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});
*/

/*==============slidesin on page scroll effect below=====================*/

$(document).ready(function(){
          $('.slide-left-1000').scrollSlide({
            direction   : 'left',
            scrollstart : 1000
        });

        $('.slide-right-1000').scrollSlide({
            direction   : 'right',
            scrollstart : 1000
        });

        $('.slide-left-1650').scrollSlide({
            direction   : 'left',
            scrollstart : 1650
        });

        $('.slide-right-1650').scrollSlide({
            direction   : 'right',
            scrollstart : 1650
        });
         $('.slide-left-2300').scrollSlide({
            direction   : 'left',
            scrollstart : 2300
        });

        $('.slide-right-2300').scrollSlide({
            direction   : 'right',
            scrollstart : 2300
        });
        $('.slide-left-2920').scrollSlide({
            direction   : 'left',
            scrollstart : 2920
        });

        $('.slide-right-2920').scrollSlide({
            direction   : 'right',
            scrollstart : 2920
        });
         $('.slide-left-3600').scrollSlide({
            direction   : 'left',
            scrollstart : 3600
        });

        $('.slide-right-3600').scrollSlide({
            direction   : 'right',
            scrollstart : 3600
        });

        $('.slide-left-4160').scrollSlide({
            direction   : 'left',
            scrollstart : 4160
        });

        $('.slide-right-4160').scrollSlide({
            direction   : 'right',
            scrollstart : 4160
        });
       

        $('.slide-left-4780').scrollSlide({
            direction   : 'left',
            scrollstart : 4780
        });

        $('.slide-right-4780').scrollSlide({
            direction   : 'right',
            scrollstart : 4780
        });
        

         $('.slide-left-5360').scrollSlide({
            direction   : 'left',
            scrollstart : 5360
        });

        $('.slide-right-5360').scrollSlide({
            direction   : 'right',
            scrollstart : 5360
        });


        });
