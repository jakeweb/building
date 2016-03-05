$(window).load(function(){

    //button in header form
    $(".form-header>a").click(function(e) {
        e.stopPropagation();
        $(".form-header form").toggle();
        $(".form-header>a").toggleClass("transform");
    });

    //show submenu in main menu
    $(".button-project").click(function(e) {
        e.stopPropagation();
    $(".menu-projects").show();
    $(".search-menu").hide();
    });
    $(".menu-projects").click(function(e) {
        e.stopPropagation();
    });
    $('body').click(function() {
        $(".menu-projects").hide();
        $(".search-menu").hide();
    });

    // show search submenu in main menu
    $(".button-search").click(function(e) {
        e.stopPropagation();
        $(".search-menu").show();
        $(".menu-projects").hide();
    });
    $(".search-menu").click(function(e) {
        e.stopPropagation();
    });

    //slider
    $('.flexslider').flexslider();

      $('#carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 75,
        itemMargin: 5,
        asNavFor: '#slider'
      });
 
      $('#slider').flexslider({
        animation: "fade",
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });

      //fancybox
      $(".fancybox").fancybox();

        $(".fancybox-manual-gallery").click(function() {
          $.fancybox.open([
            {
              href : 'img/aside-house.png',
            }, {
              href : 'img/aside-bath.png',
            }, {
              href : 'img/slider.png'
            }
          ]);
        });

      //select style
        (function($) {
            $(function() {
                $('select').styler();
            });
        })(jQuery);

    //select calculator
    $('#feature-select').change(function () {
        var val = $(this).val();
        switch (val) {
            case 'summer':
                $('.feature-price .current-price').text('1 300 000')
                break;
            case 'autumn':
                $('.feature-price .current-price').text('1 400 000')
                break;
            case 'spring':
                $('.feature-price .current-price').text('1 500 000')
                break;
            case 'winter':
                $('.feature-price .current-price').text('1 600 000')
                break;
        }
    });

    //show fix menu after scroll
    var $fixmenu = $("#fixMenu");
    var $fixrow = $('.menu');
    var $fixproject = $('.menu-projects');
    var $fixsearch = $('.search-menu');

    $(window).scroll(function () {
        var offset = document.documentElement.scrollTop;

        if (offset >438 || $(window).scrollTop() > 438) {
            $fixproject.removeClass("fix navbar-fixed-top");
            $fixrow.removeClass("fix navbar-fixed-top");
            $fixmenu.show(); 
            $fixrow.hide();
            $fixsearch.hide();
            $fixproject.hide();
        } else {
            //delete fix row after scroll
            $fixrow.removeClass("fix navbar-fixed-top");
            $fixproject.removeClass("fix navbar-fixed-top");
            $fixsearch.removeClass("fix navbar-fixed-top");
            $fixmenu.hide(); 
            $fixrow.show();
        }
    });
    //show fix menu row after click on the hamburger
       $(".hamburger").click(function (e) {
           $fixrow.addClass("fix navbar-fixed-top");
           $fixrow.toggle();
       });

    // show second fix menu row
        $("#menu .button-project").click(function (e) {
            if ($(window).scrollTop() > 438) {
                $fixproject.addClass("fix navbar-fixed-top");
            }
            $fixproject.show();
        });
        $("#menu .button-search").click(function (e) {
            if ($(window).scrollTop() > 438) {
                $fixsearch.addClass("fix navbar-fixed-top");
            }
            $fixsearch.show();
        });

});