window.onload = function() {
var video = document.querySelector(".video");
var juice = document.querySelector(".blue-juice");
var btn = document.getElementById("play-pause");
var fullScreenButton = document.getElementById("full-screen");


var volumeBar = document.getElementById("volume-bar");


function togglePlayPause() {
	if(video.paused) {
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function() {
	togglePlayPause();
};


video.addEventListener('timeupdate', function(){
	var juicePos = video.currentTime / video.duration;
	juice.style.width = juicePos * 100 + "%"; 
	if (video.ended){
		btn.className = "play";
	}
});


//Event listener for volume bar
volumeBar.addEventListener("change", function(){
    //Update the video volume
    video.volume=volumeBar.value;

});


	//Event listener for fullscreen button
	fullScreenButton.addEventListener("click", function() {
        if(video.requestFullscreen){
           video.requestFullscreen();
        }else if(video.mozRequestFullScreen){
        	video.mozRequestFullScreen();// Firefox
        }else if(video.webkitRequestFullscreen){
        	video.webkitRequestFullscreen();//Chrome & Safari
        }

	});

}





	