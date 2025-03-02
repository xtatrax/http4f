

window.onload = function(){
	console.log("window.onload");
	const audio_context = new AudioContext();
	const oscillator = audio_context.createOscillator();
	document.getElementById('play').addEventListener('click', function() {
		oscillator.connect(audio_context.destination);
		oscillator.start();
		document.getElementById('play').style.display = "none";
		document.getElementById('stop').style.display = "inline-block";
	});
	document.getElementById('stop').addEventListener('click', function() {
		oscillator.stop();
		document.getElementById('play').style.display = "inline-block";
		document.getElementById('stop').style.display = "none";
	});
}



const dayJp = ["日","月","火","水","木","金","土"];

function digiFit(val){
	return (val<10?"0":"") + val;
}

function updateTime(){
	let d = new Date();

	document.getElementById("YYYYMMDD").innerHTML=
		d.getFullYear() +"."+ digiFit(d.getMonth()+1) + "." + digiFit(d.getDate()) + " (" + dayJp[ d.getDay() ] + ")";
	document.getElementById("HHMMSS").innerHTML=
	digiFit(d.getHours()) + ":" + digiFit(d.getMinutes()) + ":" + digiFit(d.getSeconds());
}

setInterval(updateTime, 1000);

