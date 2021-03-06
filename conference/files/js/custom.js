/*
 * Custom scripts for Demo page
 * --------------------------------------------------
 */

// document ready 
$(document).ready(function () {

    // method :: re-focus
    $('.spy-enabled').click( function(){
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 60}, 'slow');
    });

    $('.paper-link').click( function(){
         window.open($(this).attr('href'));
    });

    // method :: re-focus
    $('.entry-link').click( function(){

        $('.entry-link').each(function( index ) {
            $( this ).css('color', 'black');;
        });

        $(this).css('color', '#a21f4b');

        var tempID = '#'+$(this).parent().parent().attr('id');

        if($('.collapse.show', tempID).attr('id')) {

            offset = $('.collapse.show', tempID).height();

            if ($(this).offset().top < $('.collapse.show', tempID).offset().top) {
                offset = 0;
            }

        } else {
            offset = 0;
        }

        $('html,body').animate({scrollTop: $(this).offset().top - offset - 60}, 'slow');

    });

});

