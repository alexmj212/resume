
$(document).ready( function() {

	if(window.location.hash.indexOf("cover") >= 0){
		$("#cover").hide();
		$("#resume").show();
		getCover();
	} else {
		$("#cover").show();
		$("#resume").hide();
		getResume();
	}

	$("#cover").click(function(){
		$("#cover").hide();
		$("#resume").show();
		getCover()
	});
	$("#resume").click(function(){
		$("#cover").show();
		$("#resume").hide();
		getResume()
	});

	var opac = 1.0;
	for(var i = 0; i < 100; i++){
		if(Math.random() > 0.2){
			$("#effect").append("<font style=\"opacity:"+opac+"\">"+Math.round(Math.random()));
		} else {
			$("#effect").append("<font style=\"opacity:"+opac+"\" color=\"#fff\">"+Math.round(Math.random())+"</font>");
		}
		opac -= 0.01;
	}

});

function fade(){

	$("body").fadeIn();

}

function getResume(){
	$.get( "resume.html", function( data ) {
		$(".body-content").html(data);
		fade();
	});
}

function getCover(){
	$.get( "cover.html", function( data ) {
		$(".body-content").html(data);
		fade();
	});
}

