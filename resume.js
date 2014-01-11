$(window).load(function(){

	if(window.location.pathname == "/resume-print"){
		$(".body-table tr").show();
		window.setTimeout(2000);
		window.print();
		return;
	}
	var opac = 1.0;
	for(var i = 0; i < 100; i++){
		if(Math.random() > 0.2){
			$("#effect").append("<font style=\"opacity:"+opac+"\">"+Math.round(Math.random()));
		} else {
			$("#effect").append("<font style=\"opacity:"+opac+"\" color=\"#fff\">"+Math.round(Math.random())+"</font>");
		}
		opac -= 0.01;
	}
	var delay = 0;
	$(".body-table tr").each(function(index) {
		$(this).delay(delay+=150).fadeIn();
	});
});

