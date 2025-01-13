$(document).ready(function() {
    $(window).on("load scroll resize", function() {
		var winTop = $(window).scrollTop();
		if (winTop >= 1)  {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});

    var tit_txt = ["Kim Jae Young Portfolio"];
    $("#main h2").typist({
        speed: 10, 
        text: tit_txt[0]
    });

    $('.scrollBtn a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
          }, 800);
          }
        });

    $('header h1, .topBtn').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
    });

  });