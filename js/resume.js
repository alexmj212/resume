/*
 * Alex Johnson - resume.js
 * 8/4/2016
 */
$(document).ready(function () {

    //initial page selection
    if(window.location.hash){
        $('.section').hide();
        pager(window.location.hash.substr(1,window.location.hash.length));
    }

    //display switch
    $(".switch").click(function () {
        pager($(this).attr('class').split(' ')[1].split('-')[0]);
        $(this).addClass('active');
    });

    function pager(page){
        $('.switch').removeClass('active');
        $('.section').fadeOut('slow');
        switch(page){
            case 'resume':
                $('.resume').delay(500).fadeIn();
                break;
            case 'cover':
                $('.cover').delay(500).fadeIn();
                break;
            case 'portfolio':
                $('.portfolio').delay(500).fadeIn();
                break;
            case 'prequels':
                $('.prequels').delay(500).fadeIn();
                break;
            default:
                break;
        }
    }

    //Lefthand sidebar effect

    // var opac = 1.0;
    // for (var i = 0; i < 300; i++) {
    //     if (Math.random() > 0.2) {
    //         $("#effect").append("<span style=\"opacity:" + opac + "\">" + Math.round(Math.random()));
    //     } else {
    //         $("#effect").append("<span style=\"opacity:" + opac + "; color:#fff;\">" + Math.round(Math.random()) + "</span>");
    //     }
    //     opac -= 0.004;
    // }

});

