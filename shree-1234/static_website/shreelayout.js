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

    var $modelid = -1;
    var $branchid = -1;
    var items = [["3UWLSMBZRDDAC", "abcd"]];

    function submitToPaypal(frm) {
        var $branchEle = document.getElementById('branchselection');
        var $i = 0;

        for ($i = 0; $i < $branchEle.length; $i++) {
            if ($branchEle[$i].selected) {
                $branchid = $i;
                break;
            }
        }

        if ($branchid == -1) {
            alert("Please select branch");
        } else {
            alert($branchid);
            frm.hosted_button_id.value = items[$branchid][$modelid];
            frm.submit();
        }

        return true;
    }

     function showme(ele) {
        var $divvar = document.getElementById("buyit");
        var $id = ele.id;
        var $textAndPic = $('<div class="container" id="buyit"><div class="row" style="margin-top:30px;">');

        switch($id) {
            case "E-Scoot":
                $modelid = 0;
                $textAndPic.append('<div class="col-md-6"><img src="e-scoot.png" width="500" height="auto" class="img-responsive"/><h3>E-scoot Rs.39,388/- only.</h3></div>');
                break;
            case "E-Star":
                $modelid = 1;
                $textAndPic.append('<div class="col-md-6"><img src="Estar.png" width="500" height="auto" class="img-responsive"/><h3>Estar Rs.59,619/- only.</h3></div>');
                break;
            case "E-Lite":
                $modelid = 2;
                $textAndPic.append('<div class="col-md-6"><img src="E-LITE-BIKE.png" width="500" height="auto" class="img-responsive"/><h3>E-Lite bike Rs.25,770/- only.</h3></div>');
                break;
            case "E-BikeVX":
                $modelid = 3;
                $textAndPic.append('<div class="col-md-6"><img src="ebikeVX.png" width="500" height="auto" class="img-responsive"/><h3>E-Bike VX Rs.14,970/- only.</h3></div>');
                break;
            case "E-Mate":
                $modelid = 4;
                $textAndPic.append('<div class="col-md-6"><img src="E-mate.png" width="500" height="auto" class="img-responsive"/><h3>E-Mate Rs.39,388/- only.</h3></div>');
                break;
            case "E-Plus":
                $modelid = 5;
                $textAndPic.append('<div class="col-md-6"><img src="E-Plus.png" width="500" height="auto" class="img-responsive"/><h3>E-Plus Rs.---------/- only.</h3></div>');
                break;
            case "E-Rickshaw":
                $modelid = 6;
                $textAndPic.append('<div class="col-md-6"><img src="rickshaw.png" width="500" height="auto" class="img-responsive" style="margin-top:30px"/><h3>E-Rickshaw Rs.--------/- only.</h3></div>');
                break;
            case "Battries":
                $modelid = 7;
                $textAndPic.append('<div class="col-md-6"><img src="battrie.png" width="260" height="239" class="img-responsive" style="margin-top:50px;margin-left:80px"/><h3>Battries Rs.-------/- only.</h3></div>');
                break;
        }

        $textAndPic.append('<div class="col-md-6"><h4>Book it now just on deposit of Rs.5000 only.</h4><h4>Delivery estimate 15 days from the day of booking.</h4><label for="selectcity">Please select branch</label><select multiple class="form-control" id="branchselection"><option>Akola</option><option>Amravati</option><option>Nagpur</option><option>Hydrabad</option><option>Khandawa</option></select></div><form id="paypalform" name="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" onsubmit="return submitToPaypal(this);" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id"><input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></div></div></div>');

        BootstrapDialog.show({
            title: ("Get your"+ " " + $id +" "+ "Now"),
            message: $textAndPic
        });
    }

