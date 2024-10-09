$(document).ready(function () {
    // Показати повноекранне вікно
    $('#fullscreenPopupBtn').click(function () {
        $('#fullscreenPopup').modal('show');
    });

    // Закрити повноекранне вікно
    $('#fullscreenPopup .close-modal, #fullscreenPopup .close').click(function () {
        $('#fullscreenPopup').modal('hide');
    });

    // Показати спливаюче вікно зі зсувом
    $('#slideInPopupBtn').click(function () {
        $('#slideInPopup').addClass('show').fadeIn();
    });

    // Закрити спливаюче вікно зі зсувом
    $('#slideInPopup .close-slide').click(function () {
        $('#slideInPopup').removeClass('show');
    });

    // Показати лайтбокс
    $('#lightboxBtn').click(function () {
        $('#lightbox').fadeIn();
    });

    // Закрити лайтбокс
    $('#lightbox .close-lightbox').click(function () {
        $('#lightbox').fadeOut();
    });

    // Показати плаваючий бар
    $('#floatingBarBtn').click(function () {
        $('#floatingBar').fadeIn();
    });

    // Закрити плаваючий бар
    $('#floatingBar .close-floating-bar').click(function () {
        $('#floatingBar').fadeOut();
    });

    // Показати спливаюче вікно з формою
    $('#formPopupBtn').click(function () {
        $('#formPopup').modal('show');
    });

    // Обробка відправки форми
    $('#feedbackForm').on('submit', function (event) {
        event.preventDefault();
        alert('Форма відправлена!');
        $('#formPopup').modal('hide');
    });
});
