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
