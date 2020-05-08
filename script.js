
let soundSelect = 'wookie',
	repeatSound = document.getElementById(soundSelect),
	//let interval = 12000
	repeat,
	sec = 0,
	min = 0,
	hour = 0;
	timer = document.getElementById('timer')


function playAudio(sound){
	sound.play();
	console.log('played sound')
}

function Start(time){
	repeat = setInterval(function(){playAudio(repeatSound);},time)
	console.log('started')
}

function Stop(){
	clearInterval(repeat)
	console.log('stopped')
}

/* Future Functionality
function addTime(){
	sec ++;
	if (sec>=60){
		min ++;
		sec = 0;
	
	} else if (min >= 60){
		hour ++;
		min = 0;
	};

	timer.textContent = (hour ? (hour > 9 ? hour : "0" + hours) : "00") + ":" 
	+ (min ? (min > 9 ? min : "0" 
	+ min) : "00") + ":" + (sec > 9 
	? sec : "0" + sec);

}
*/

