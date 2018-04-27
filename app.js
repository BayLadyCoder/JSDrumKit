
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//console.log(audio);
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; // Rewind to the start
	audio.play();

	key.classList.add('playing');
	//key.classList.remove('playing');
	//key.classList.toggle('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; //skip it if it's not a tranform
	//console.log(e.propertyName);
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
});


window.addEventListener('keydown', playSound);