//login
function Login(){
	var username=document.login.username.value;
	username=username.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();
	if (username=="admin" && password=="root"){
		window.location.href="./aplikasi";
	}
	else{
		alert("Masukkan username dan password dengan benar");
	}
}

// using window.load
jQuery(window).load(function() {
        // first fadeout loading-font
        jQuery("#loading-font").fadeOut();
        // setting delay and show
        jQuery("#fullloader").delay(250).fadeOut("slow");
    });

//parallax cihuy
$(document).ready(function() {
	$(document).mousemove(function(event) {
		TweenLite.to($("body"),
			.5, {
				css: {
					backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px",
					"background-position": parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / 12) + "px, " + parseInt(event.pageX / 15) + "px " + parseInt(event.pageY / 15) + "px, " + parseInt(event.pageX / 30) + "px " + parseInt(event.pageY / 30) + "px"
				}
			})
	})
})