$(document).ready(function() {
    $('a[href="#inicio"].btn-up').fadeOut('slow');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) 
            $('a[href="#inicio"].btn-up').fadeIn('slow');
        else 
            $('a[href="#inicio"].btn-up').fadeOut('slow');
    });
});