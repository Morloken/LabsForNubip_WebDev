$(function() {
    $('.menu-link').click(function() {
        let submenu = $(this).next('.submenu');
        $('.submenu').not(submenu)
        .slideUp(500)
        .parent().removeClass('active');
        submenu.stop().slideToggle(500).parent().toggleClass('active');
    });
});
