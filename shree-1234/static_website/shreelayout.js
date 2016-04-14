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




/*====================autocollapse the nav on click of menu items in mobile==========================*/

     /* $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".collapse .navbar-collapse").collapse('hide');
    });
});*/
    $(document).ready(function() {
        $("nav").find("li").on("click","a",function(){
            $('.navbar-collapse.in').collapse('hide');

        });
    });







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












 
     function showme(ele) {
        var $divvar = document.getElementById("buyit");
        var $id = ele.id;
        var $textAndPic = $('<div class="container" id="buyit"><div class="row" style="margin-top:30px;">');

        switch($id) {
            case "E-Scoot":
                $textAndPic.append('<div class="col-md-6"><img src="e-scoot.png" width="500" height="auto" class="img-responsive"/><h3>E-scoot Rs.39,388/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-Star":
                $textAndPic.append('<div class="col-md-6"><img src="Estar.png" width="500" height="auto" class="img-responsive"/><h3>Estar Rs.59,619/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-Lite":
                $textAndPic.append('<div class="col-md-6"><img src="E-LITE-BIKE.png" width="500" height="auto" class="img-responsive"/><h3>E-Lite bike Rs.25,770/- only.</h3><img src="paypal.png" width="80" height="auto" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-BikeVX":
                $textAndPic.append('<div class="col-md-6"><img src="ebikeVX.png" width="500" height="auto" class="img-responsive"/><h3>E-Bike VX Rs.14,970/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-Mate":
                $textAndPic.append('<div class="col-md-6"><img src="E-mate.png" width="500" height="auto" class="img-responsive"/><h3>E-Mate Rs.39,388/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-Plus":
                $textAndPic.append('<div class="col-md-6"><img src="E-Plus.png" width="500" height="auto" class="img-responsive"/><h3>E-Plus Rs.---------/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "E-Rickshaw":
                $textAndPic.append('<div class="col-md-6"><img src="rickshaw.png" width="500" height="auto" class="img-responsive" style="margin-top:30px"/><h3>E-Rickshaw Rs.--------/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                case "Battries":
                $textAndPic.append('<div class="col-md-6"><img src="battrie.png" width="260" height="239" class="img-responsive" style="margin-top:50px;margin-left:80px"/><h3>Battries Rs.-------/- only.</h3><img src="paypal.png" width="200" height="80" class="img-responsive" style="margin-top:40px;"/></div>');
                break;
                
                
        }

        $textAndPic.append('<div class="col-md-6"><h4>Book it now just on deposit of Rs.5000 only.</h4><h4>Delivery estimate 15 days from the day of booking.</h4><form  role="form"><div class="form-group"><label for="selectcity">Please select branch</label><select multiple class="form-control" id="branchselection"><option>Akola</option><option>Amravati</option><option>Nagpur</option><option>Hydrabad</option><option>Khandawa</option></select></div><div class="form-group"><label for="name">Full Name</label><input type="text" class="form-control" id="name" placeholder="Name Surname"></div><div class="form-group"><label for="contact">Contact Number</label><input type="text" class="form-control" id="contact" placeholder="000-000-0000"></div><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" id="email" placeholder="Enter email"></div><div class="form-group"><label for="address">Street Address</label><input type="text" class="form-control" id="address" placeholder="Street Address"></input><div class="row" style="margin-top:15px;"><div class="col-md-3"><div class="form-group"><label for="zip code">Zip code</label><input type="zipcode" class="form-control" id="zipcode"></div></div><div class="col-md-3"><div class="form-group"><label for="city">City</label><input type="text" class="form-control" id="city" ></div></div></div></div><button type="submit" class="btn btn-lg ">Buy It Now</button></form></div></div></div>');

        BootstrapDialog.show({
            title: ("Get your"+ " " + $id +" "+ "Now"),
            message: $textAndPic
        });
    }

