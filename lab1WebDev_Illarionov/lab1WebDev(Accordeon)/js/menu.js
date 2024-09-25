$('ul li:has("ul")').append('<span></span>');

// $(function () {
//     $('ul li a').click(function() {
//         $(this).next().toggle(500);
// });

// });

// $(function () {
//     $('ul li a').click(function() {
//             $(this).next().animate({'height':'toggle'}, 500);
//     });
// });

// $(function () {
//     $('ul li a').click(function() {
//             $(this).next().animate({'height':'toggle'}, 500);
//             return false;
//     });
// });

//або

// $(function () {
//     $('ul li a').click(function(event) {
//             $(this).next().animate({'height':'toggle'}, 500);
//             event.preventDefault();
//     });
// });

// $(function () {
//     $('ul li a').click(function(event) { 
//             var checkElement = $(this).next();
//             checkElement.stop().animate({'height':'toggle'}, 500);
//             if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//                     event.preventDefault();
//             }
//     });
// });

// $(function () {
//     $('ul li:has("ul")').append('<span></span>');
//     $('ul li a').click(function() {
//             var checkElement = $(this).next();
//             checkElement.stop().animate({'height':'toggle'}, 500);  
//             if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//                     return false;
//             }
//     });
// });

// $(function () {
//     $('ul li:has("ul")').append('<span></span>');
//     $('ul li a').click(function() {
//             var checkElement = $(this).next(),
//                 visibleElement = $('ul ul:visible');
            
//             if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//                     visibleElement.stop().animate({'height':'toggle'}, 500);
//                     checkElement.stop().animate({'height':'toggle'}, 500);
//                     return false;
//     }       
//             if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//                     return false;
//             }
//     });
// });  

// $(function () {
//     $('ul li:has("ul")').append('<span></span>');
//     $('ul li a').click(function() {
//             var checkElement = $(this).next(),
//                     visibleElement = $('ul ul:visible');
            
//             if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//                     visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');
//                     checkElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
//                     return false;
//     }       
//             if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//                     return false;
//             }
//     });
// });    

$(function () {
    $('ul li:has("ul")').append('<span></span>');
    $('ul li a').click(function() {
            var checkElement = $(this).next(),
                    visibleElement = $('ul ul:visible');
                    
            visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');         
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                    checkElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
                    return false;
    }       
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                    return false;
            }
    });
});   