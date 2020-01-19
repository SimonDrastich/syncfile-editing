// DEPRICATED //
// This class is representing the audio player.
// This class container all the methods control
// the lecture audio.

class AudioPlayer{
	
    constructor(audioFile) {
	this.currentTime = "";
	this.audio = audioFile;
	this.sound;
	}

//this method return currentTime of audio
getCurrentTime(){
	this.currentTime = this.audio.seek().toString();;
	return this.currentTime;
}


//this method create new sprite- sound in specific interval
// and play this interval
playInterval(time1, time2){
	if (this.audio.playing()){
		this.audio.pause();
	}
	
	var duration = (parseFloat(time2)*1000 - parseFloat(time1)*1000);  
	this.audio._sprite.interval = [parseFloat(time1)*1000, duration];
	this.audio.play('interval');
}


//this method plays the audio at actual seek position
playAudio(){
	if (!this.audio.playing()){
		this.audio.play();
	}
}

audioIsPlaying(){
	return this.audio.playing();
}



//this method stops the audio, reset seek to 0
stopAudio(){
	this.audio.stop();
}


//this method pause the audio, save seek to this time
pauseAudio(){
	this.audio.pause();
}


//method rewind audio to specific time, seek is setup to this time
//parameter time is string "2.5" - in seconds
rewindAudioTo(time){
	this.audio.stop();
	this.audio.seek(parseInt(time));
	//this.audio.play();
}

//method rewind audio to begin, seek is reset to 0
rewindAudioToZero(){
	this.audio.stop();
	//this.audio.play();
}

/// Encode file to base64 encoding
    /// @param file - file you want to encode
    /// @return - base64 string of file
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


}