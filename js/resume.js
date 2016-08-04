$(document).ready(function () {

    $("body").fadeIn(1000);


    if (window.location.hash.indexOf("#cover") > -1 ){
        $(".cover").show();
        $(".resume").hide();
    }

    $("#cover-switch").click(function () {
        $(".resume").fadeOut('slow', function () {
            $(".cover").fadeIn();
        });
        $("#resume-switch").removeAttr("style");
        $(this).css({'color':'black','text-decoration':'none'});
    });
    $("#resume-switch").click(function () {
        $(".cover").fadeOut('slow', function () {
            $(".resume").fadeIn();
        });
        $("#cover-switch").removeAttr("style");
        $(this).css({'color':'black','text-decoration':'none'});
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

