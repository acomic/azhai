$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.DesktopMenu-container___3iTSx').addClass("sticky");
        }else{
            $('.DesktopMenu-container___3iTSx').removeClass("sticky");
        }

        if(this.scrollY > 20){
            $('.DesktopMenu-menuItemContainerActive___22NIH').addClass("sticky2");
        }else{
            $('.DesktopMenu-menuItemContainerActive___22NIH').removeClass("sticky2");
        }
    });



    // メニューopne 
    $('.bm-burger-button').click(function(){
        // applying again smooth scroll on menu items click 
        $('.bm-overlay').css("opacity", "1");
        $('.bm-overlay').css("transform", "translate3d(0%, 0px, 0px)");
        $('.bm-menu-wrap').css("transform", "translate3d(0%, 0px, 0px)");  
    }); 
    // メニューopne 

    // メニューclosse
    $('.bm-cross-button').click(function(){
    // applying again smooth scroll on menu items click 
    $('.bm-overlay').css("opacity", "0");
    $('.bm-overlay').css("transform", "translate3d(100%, 0px, 0px)");
    $('.bm-menu-wrap').css("transform", "translate3d(100%, 0px, 0px)");  
    });

    $('.bm-overlay').click(function(){
        // applying again smooth scroll on menu items click 
    $('.bm-overlay').css("opacity", "0");
    $('.bm-overlay').css("transform", "translate3d(100%, 0px, 0px)");
    $('.bm-menu-wrap').css("transform", "translate3d(100%, 0px, 0px)");  
    }); 
    // メニューclosse

    // $('.HamburgerMenu-menuItem___3Cd_G').click(function(){
    //     // applying again smooth scroll on menu items click : auto;
    //     // $('.HamburgerMenu-menuItem___3Cd_G img').scr("img/r1cTAASnD.png");
    //     $('.rah-static').css("height", "auto");
    //     $('.rah-static').css("overflow", "auto");
    //     $('.open1').css("display", " block");
    //     });

    $('.js-open').click(function(){
        $(this).next('div').toggle( 'blind', '', 700 );
        if($(this).children('img').attr('src') == 'img/cTAASnD.png'){
            $(this).children('img').attr('src', 'img/B1f0RArhw.png');
        }else{
            $(this).children('img').attr('src', 'img/cTAASnD.png');
        }
    });
    $('.js-open-humburger').click(function(){
        $(this).next('div').find('.js-open-child').toggle( 'blind', '', 700 );
        if($(this).children('img').attr('src') == 'img/cTAASnD.png'){
            $(this).children('img').attr('src', 'img/B1f0RArhw.png');
        }else{
            $(this).children('img').attr('src', 'img/cTAASnD.png');
        }
    });
});
$(window).on('load', function(){
    //処理
    //スマホのみスライダー
    $('.Teachers-teacherCardWrapper___2cjS8').not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [ {
            breakpoint: 768,
            settings: 'unslick'
        } ]
    });
    //リサイズした時に実行
    $(window).on('resize orientationchange', function() {
    　　$('.Teachers-teacherCardWrapper___2cjS8').slick('resize');
    })
});


