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

    $('.Teachers-nextbtn___WBGEv').click(function(){
        var img_src = $(this).prev('div').find('img').attr('src');
        var img_num = img_src.replace(/[^0-9]/g, '');
        if(img_num == 3){
            img_num = 1;
        }else{
            img_num++;
        }
        img_src = img_src.replace(/[1-3]/, img_num);
        $(this).prev('div').find('img').attr('src',img_src);
        change_card(img_num);
    });
    $('.Teachers-prevbtn___2WFy0').click(function(){
        change_card(true,$(this));
        var img_src = $(this).prev().prev("div").find('img').attr('src');
        console.log(img_src)
        var img_num = img_src.replace(/[^0-9]/g, '');
        if(img_num == 1){
            img_num = 3;
        }else{
            img_num--;
        }
        img_src = img_src.replace(/[1-3]/, img_num);
        $(this).prev().prev("div").find('img').attr('src',img_src);
        change_card(img_num);
    });
    function change_card(img_num){
        const teacherCardQuote = {
            1 : "Toddle has taken collaboration in the virtual realm to the next level. Teaching and learning is at the core of Toddle and whether you are a parent, student, or teacher, the simplicity of the platform is bound to win your heart!",
            2 : "As part of the MYP: Next Chapter development team, I worked to help re-define how practitioners plan for collaborative inquiry in the programme. It’s really gratifying to see those principles translated with such fidelity into this platform.",
            3 : "Toddle has developed a thoughtful and engaging platform for MYP planning. The design has deeply considered the needs of MYP educators in building quality curriculum to encourage rich learning experiences for students"
        }
        const teacherCardName = {
            1 : "Jitendra Pandey",
            2 : "Dr Robert Harrison",
            3 : "Natalie Jensen"
        }
        const teacherCardDesg = {
            1 : "MYP Coordinator, Stonehill International School, Bengaluru, India",
            2 : "Head of MYP Development 2013-18",
            3 : "Educational Consultant and IB Workshop Leader"
        }
        $('.Teachers-teacherCardQuote___1O-sV').text(teacherCardQuote[img_num]);
        $('.Teachers-teacherCardName___2IMtQ').text(teacherCardName[img_num]);
        $('.Teachers-teacherCardDesg___35xvq').text(teacherCardDesg[img_num]);
    }
});

/*以下スクロールの動き*/
//紙飛行機
$(function() {
    var rotate = function(logo, angle, angle2) {
     logo.css({
     "transform" : "translate3d(-"+angle+"px,"+angle2+"px,0px)"
     });
    }
    $(window).on('load scroll',function(){
     rotate($(".HeroComponent-illustration___3G4BL"), $(window).scrollTop()*0.03 , $(window).scrollTop()*0.04);
    })
});
//赤・黄の三角
$(function() {
    var rotate2 = function(logo, angle) {
        logo.css({
        "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
        }
        $(window).on('load scroll',function(){
        rotate2($(".HeroComponent-illustration2___wlf80"), $(window).scrollTop()*0.2);
    })
});
//三つポール
$(function() {
    var rotate3 = function(logo, angle) {
     logo.css({
     "transform" : "rotate("+angle+"deg)"
     });
    }
    $(window).on('load scroll',function(){
     rotate3($(".Features-illustration2___2Ytwk"), $(window).scrollTop()*0.115);
    })
});
//箱の傾き
$(function() {
    var rotate4 = function(logo, angle) {
     logo.css({
     "transform" : "rotate("+angle+"deg)"
     });
    }
    $(window).on('load scroll',function(){
     rotate4($(".Features-illustration1___1NN4K"), $(window).scrollTop()*0.02);
    })
});
//青い波線
$(function() {
    var rotate5 = function(logo, angle) {
        logo.css({
        "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
        }
        $(window).on('load scroll',function(){
        rotate5($(".Features-illustration3___ovQsA"), $(window).scrollTop()*0.1);
    })
});
//棒グラフ
$(function() {
    var rotate6 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate6($(".Features-illustration4___3O19C"), $(window).scrollTop()*0.1);
    })
});
//ピンクのメモリ
$(function() {
    var rotate7 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate7($(".Features-illustration5___3-_u_"), $(window).scrollTop()*0.1);
    })
});
//黄色いビデオカメラ
$(function() {
    var rotate8 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate8($(".Features-illustration6___1yJ-s"), $(window).scrollTop()*0.1);
    })
});
//黄色っぽい吹き出し
$(function() {
    var rotate9 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate9($(".Features-illustration9___3tAN8"), $(window).scrollTop()*0.1);
    })
});
//青緑の玉
$(function() {
    var rotate10 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate10($(".SeamlessExp-illustration___3eP5U"), $(window).scrollTop()*0.1);
    })
});
//ピンクの南京錠
$(function() {
    var rotate11 = function(logo, angle) {
        logo.css({
            "transform" : "translate3d(0px,-"+angle+"px,0px)"
        });
    }
    $(window).on('load scroll',function(){
        rotate11($(".PrivacySection-illustration___2Xv9R"), $(window).scrollTop()*0.15);
    })
});
