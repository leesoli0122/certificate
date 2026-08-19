$(document).ready(function() {
    //메뉴
    const menu = $('header nav .menu');
    menu.mouseenter(function() {
        $('.sub-menu').stop().slideDown(800);
    });

    menu.mouseleave(function() {
        $('.sub-menu').stop().slideUp(500);
    })

    // slide
    setInterval(function() {
        $('.slide-wrap').animate({'margin-top': '-300'}, function() {
            $('.slide:first').appendTo('.slide-wrap');
            $('.slide-wrap').css({'margin-top': '0'});
        });
    }, 3000)

    // tab
    const tabMenu = $('.tab-menu .tab-pannel a');
    tabMenu.click(function(e) {
        e.preventDefault();

        tabMenu.parent().removeClass('on');
        $(this).parent().addClass('on');

        const data = $(this).parent().data('tab');
        $('.tab-item > ul').removeClass('on');
        $('.tab-item > .' + data).addClass('on');
    })

    // popup
    $(".notice li:nth-child(1)").click(function() {
        $(".layerPopup").show();
        $(".pop-btn .close").focus();
    });

    $(".pop-btn .close").click(function() {
        $(".layerPopup").hide();
        $(".notice li:nth-child(1)").focus();
    })
});
