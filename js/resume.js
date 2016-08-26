/*
 * Alex Johnson - resume.js
 * 8/4/2016
 */
$(document).ready(function () {

    $("body").fadeIn(1000);

    if (window.location.hash.indexOf("#cover") > -1 ){
        $(".cover").show();
        $(".resume").hide();
    } else {
    }

    $("#cover-switch").click(function () {
        $(".resume").fadeOut('slow', function () {
            $(".cover").fadeIn();
        });
        $("#resume-switch").removeClass('active');
        $(this).addClass('active');
    });
    $("#resume-switch").click(function () {
        $(".cover").fadeOut('slow', function () {
            $(".resume").fadeIn();
        });
        $("#cover-switch").removeClass('active');
        $(this).addClass('active');
    });

    $("#prequels-switch").click(function () {
        $(".prequels").fadeIn();
    });

    $(".more-switch").click(function () {
        $(this).siblings(".more-info").slideDown().fadeIn;
    });

    var opac = 1.0;
    for (var i = 0; i < 300; i++) {
        if (Math.random() > 0.2) {
            $("#effect").append("<span style=\"opacity:" + opac + "\">" + Math.round(Math.random()));
        } else {
            $("#effect").append("<span style=\"opacity:" + opac + "; color:#fff;\">" + Math.round(Math.random()) + "</span>");
        }
        opac -= 0.004;
    }

});

