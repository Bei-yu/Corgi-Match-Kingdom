$( document ).ready(function () {
    $(".moreBox").slice(0, 3).show();
      if ($(".blogBox:hidden").length != 0) {
        $(".loadmore").show();
      }   
      $(".loadmore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0,3).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $(".loadmore").fadeOut('slow');
        }
      });
    });

