//logout
function Logout(){
	window.location.href="./";	
}

//aplikasi
function hitungPesan(){
	var nota = document.pemesanan;
	var jumlahSate = 15000 * parseInt(nota.hargaSate.value);
	var jumlahMie = 8000 * parseInt(nota.hargaMie.value);
	var jumlahBakso = 10000 * parseInt(nota.hargaBakso.value);
	var jumlahKelapa = 5000 * parseInt(nota.hargaKelapa.value);
	var jumlahBuah = 7000 * parseInt(nota.hargaBuah.value);
	var jumlahTotal = jumlahSate + jumlahMie + jumlahBakso + jumlahKelapa + jumlahBuah;
	var jumlahPajak = jumlahTotal * 0.1;
	//hasil hitung
	nota.Total.value = jumlahTotal;
	nota.Pajak.value = jumlahPajak;
	nota.Bayar.value = jumlahTotal + jumlahPajak;
}
function resetForm(){
	document.pemesanan.reset();
}

//print document
function Print(){
	window.print();	
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