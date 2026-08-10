$(document).ready(function() {
    //메뉴
    var $nav = $('header nav');
    var $subMenu = $('.sub-menu');

    $subMenu.hide();

    $nav.on('mouseenter focusin', function() {
        $subMenu.stop(true, true).slideDown(300);
    });

    $nav.on('mouseleave focusout', function(event) {
        if (event.type === 'focusout' && $.contains(this, event.relatedTarget)) {
            return;
        }

        $subMenu.stop(true, true).slideUp(300);
    });
});
