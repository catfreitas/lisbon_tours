/*------ VIDEO ------*/
const videoFile = document.querySelector('#video-file'),
      videoButton = document.querySelector('#video-button'),
      videoIcon = document.querySelector('#video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // Change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-fill')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // Change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-fill')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-fill')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)