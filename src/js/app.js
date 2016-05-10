$(window).load(function() {


});
$(document).ready(function() {

  var work = $('.work');
  $(document).on('click', '.work-btn', function() {
      console.log('swags');
      work.addClass('active');


      $.ajax({
          type: 'get',
          url: 'templates/work/index.html',
          beforeSend: function() {
              $('.loaderr').show();
          },
          complete: function() {
              $('.loaderr').hide();
          },
          success: function(response) {
            console.log('added');
              // response = data which has been received and passed on to the 'success' function.
              work.html(response);
          }
      });
  });


  $(document).on('click', '.typcn-times-outline', function() {
      // console.log('swags');
      work.removeClass('active');
  });


});

$(window).load(function(e) {
    // $(".loader").fadeOut("slow");
    $(".loaderr").addClass('active');

    function displaynone() {
        $(".loaderr").css('display', 'none');
    }
    setTimeout(displaynone, 1000);


    setTimeout(nameFade, 1000);

    function nameFade() {
        $('#blueDiv h1').addClass('active');
    }
    console.log('swag');
    setTimeout(nameFade, 500);




    tl = new TimelineLite();

    var nav = document.getElementById("nav");
    // TweenLite.to(nav, .2, {
    //     borderBottomColor: "#90e500",
    //     color: "white"
    // });
    // TweenLite.to(nav, 1, {
    //     top: "60%",
    //     borderBottomColor: "#90e500",
    //     color: "white",
    //     opacity: 0
    // });

    tl.fromTo(nav, 2, {
        borderBottomColor: "#90e500",
        color: "white",
        top: "40%",
        opacity: 0
    }, {
        top: "60%",
        borderBottomColor: "#90e500",
        color: "white",
        opacity: 1
    });

    (function pages() {
        this.work = $('.work');
        this.super = 'super';
        console.log(pages.work);
        console.log(pages.super);
    })();



});
