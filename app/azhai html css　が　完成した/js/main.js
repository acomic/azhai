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

            $('.op1').click(function(){
                $('.rah-static1').toggleClass("active");
                $('.open1').toggleClass("active2");
            });
            $('.op2').click(function(){
                $('.rah-static2').toggleClass("active");
                $('.open2').toggleClass("active2");
            });
            $('.op3').click(function(){
                $('.rah-static3').toggleClass("active");
                $('.open3').toggleClass("active2");
            });
            $('.op4').click(function(){
                $('.rah-static4').toggleClass("active");
                $('.open4').toggleClass("active2");
            });
            $('.op5').click(function(){
                $('.rah-static5').toggleClass("active");
                $('.open5').toggleClass("active2");
            });
            $('.op6').click(function(){
                $('.rah-static6').toggleClass("active");
                $('.open6').toggleClass("active2");
            });
            $('.op7').click(function(){
                $('.rah-static7').toggleClass("active");
                $('.open7').toggleClass("active2");
            });
               
});


