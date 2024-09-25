$(document).ready(function() {
    // Відкрити лайтбокс
    $('#lightboxBtn').click(function() {
        $('#lightbox').fadeIn();
    });

    // Відкрити плаваючий бар
    $('#floatingBarBtn').click(function() {
        $('#floatingBar').slideDown();
    });

    // Відкрити повноекранне вікно
    $('#fullscreenPopupBtn').click(function() {
        $('#fullscreenPopup').fadeIn();
    });

    // Відкрити спливаюче вікно зі зсувом
    $('#slideInPopupBtn').click(function() {
        $('#slideInPopup').show().animate({
            right: "0"
        }, 500);
    });

    // Закрити будь-яке спливаюче вікно
    $('.close, .close-popup').click(function() {
        $(this).closest('.popup').fadeOut();
    });
    // Закрити спливаюче вікно зі зсувом
    $('.close, .close-popup').click(function() {
        $(this).closest('.popup').fadeOut();
    });

    // Закрити лайтбокс або повноекранне вікно при кліку на темний фон
    $('.lightbox, .fullscreen').click(function(event) {
        if ($(event.target).is('.popup')) {
            $(this).fadeOut();
        }
    });
});
