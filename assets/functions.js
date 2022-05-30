;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        $doc.on('click','.js-videoPoster',function(ev) {
            ev.preventDefault();
            var $poster = $(this);
            var $wrapper = $poster.closest('.js-videoWrapper');
            videoPlay($wrapper);
        });

        function videoPlay($wrapper) {
            var $iframe = $wrapper.find('.js-videoIframe');
            var src = $iframe.data('src');
            // hide poster
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src',src);
        }

        function videoStop($wrapper) {
            if (!$wrapper) {
                var $wrapper = $('.js-videoWrapper');
                var $iframe = $('.js-videoIframe');
            } else {
                var $iframe = $wrapper.find('.js-videoIframe');
            }
            $wrapper.removeClass('videoWrapperActive');
            $iframe.attr('src','');
        }


        var custom_selct = $('.custom-select');
        if (custom_selct.length > 0){

            custom_selct.each(function() {
                $(this).select2();

            });
        }

        $('b[role="presentation"]').hide();
        $('.select2-selection__arrow').append('<i class="zmdi zmdi-triangle-down"></i>');








        var trrigger3 =  $(".get-in-touch").find('.get-touch-img-box');
        trrigger3.each(function () {
            var $this = $(this),
                $img = $this.find('img').first();
            $this.css('background-image', 'url("' + $img.attr('src') + '")');

        });

        var trrigger4 =  $(".product-details-box");
        trrigger4.each(function () {
            var $this = $(this),
                $img_box = $this.parents('.product-details-nfo').find('.product-single__photo');
            $img_box.css({'height': $($this).height()});
        });




        $body.bind('click', function(e) {
            if($(e.target).closest('.navbar-toggler').length == 0) {
                var opened = $('.navbar-collapse').hasClass('collapse');
                if ( opened === true ) {
                    $('.navbar-collapse').collapse('hide');
                }
            }
        });
      var full_width_slider =    $('.full-width-slider');
       var auto_play = full_width_slider.attr("auto-play");
        var arrow = full_width_slider.attr("arrow");
        var dot = full_width_slider.attr("dots");


        full_width_slider.slick({
            dots: false,
            infinite: true,
            arrows:true,
            speed: 300,
            autoplay: auto_play,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false,
            draggable: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            prevArrow:"<button type='button' class='slick-prev '><i class='zmdi zmdi-caret-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next '><i class='zmdi zmdi-caret-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });

        full_width_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        });

        full_width_slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });


        var step_slider =    $('.step-slider');

        step_slider.slick({
            dots: false,
            infinite: true,
            arrows:true,
            speed: 300,
            slidesToShow:4,
            slidesToScroll: 1,
            accessibility: false,
            draggable: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            mobileFirst:true,
            variableWidth: true,
            variableHeight: true,
            prevArrow:"<button type='button' class='slick-prev '><i class='zmdi zmdi-caret-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next '><i class='zmdi zmdi-caret-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });

        step_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        });

        step_slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });

        // step_slider.find('.slick-track').addClass("d-flex flex-wrap justify-content-between");
        var otp = $('.otp');
        var  phone_varification_btn = $('.phone-varification-btn');
        if (otp.length > 0) {
            otp.hide();
            phone_varification_btn.on( "click", function(e) {
                e.preventDefault();
                $(this).parents('.phone-varification-box').hide();
                otp.show();
            });
        }


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            prevArrow:"<button type='button' class='slick-prev '><i class='zmdi zmdi-caret-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next '><i class='zmdi zmdi-caret-right'></i></button>",
            mobileFirst:true,
            variableWidth: true,
            variableHeight: true,
            draggable:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }

            ]
        });
        $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        });

        $('.slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });

        hideShow($('.name-group'));
        hideShow($('.email-group'));
        hideShow($('.phone-group'));
        hideShow($('.address-group'));
        hideShow($('.gender-group'));
        hideShow($('.birth-group'));
        hideShow($('.pass-group'));


        function hideShow(name_group){
            var edit_name_btn = name_group.find('.edit-btn');
            var close_btn = name_group.find('.close-btn');
            var name_field = name_group.find('.input-box');

            name_field.hide();
            edit_name_btn.on("click", function(){
                name_field.show();
            });
            close_btn.on("click", function(){
                name_field.hide();
            });
        }


        function increaseValue() {
          var value = parseInt(document.getElementById('Quantity').value, 10);;
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('Quantity').value = value;
        }

        function decreaseValue() {
            var value = parseInt(document.getElementById('Quantity').value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            value < 1 ? value = 1 : '';
            document.getElementById('Quantity').value = value;

        }


        $('.plus').click(function(){
            increaseValue();
        });
        $('.minus').click(function(){
            decreaseValue();
        });





        var add_cart = $('.add_cart');

        $('.add-to-cart-btn').magnificPopup({
            type: 'inline',
            modal: true,
            type: 'inline',
            items: {
                src: add_cart,
            },
            preloader: false,
            focus: add_cart,
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');

                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#add_cart';
                    }
                }
            },
            midClick: true


        });

        $doc.on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });


        $body.on("click", '.add-to-cart-btn', function (e) {
            e.preventDefault();
            $('#investment').css({'opacity':'1','visibility': 'visible'});
        });

        $('.invest-close').click(function() {
            $('#investment').css({'opacity':'0','visibility': 'hidden'})
        });


        var product_item = $(".load-more-product_item"), load_more_product = $(".load_more_product");
        loadMore(product_item, load_more_product);
        var S = $(".load-more-item"), k = $(".load-more");
        loadMore(S, k)
        function  loadMore(S, k) {
          var  y = S.length;
            S.hide(), y > 4 && k.show(), k.length && k.on("click", function () {
                var t = S.filter(":visible").length;
                S.slice(t - 0, t + 4).fadeIn(), S.filter(":visible").length >= y && k.hide();
            });
        }


    });


})(jQuery, window, document);
