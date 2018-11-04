$(document).ready(function(){

	var audio = $('#audio-track')[0];
	console.log(audio);

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	initAudioPlayer();

	function initAudioPlayer() {
		$playBtn.parent().show();
		audio.loop = false;

		$audioControl.click(function(){
			console.log("audio control click");

			if ( audio.paused ) {
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
			} else {
				audio.pause();
				$pauseBtn.parent().hide();
				$playBtn.parent().show();

			}
		})
	}

});
