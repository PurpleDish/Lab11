(function() {
   'use strict';
	let ghost = document.getElementById('player');
	let location = 8;
	let fireballLocation = -100;
	let sprint = false;
	let fireball = document.getElementById('fireball');
	document.addEventListener('keydown', command);

	function command(event) {
   		console.log(event);
   		if(event.key === 'ArrowLeft') {
   			sprint ? location-=4 : location-=2
			ghost.style.left = location +'px'
   		} else if(event.key === 'ArrowRight') {
   			sprint ? location+=4: location+=2
			ghost.style.left = location +'px'
   		} else if (event.key === 'z') {
   			sprint = !sprint;
   			console.log(sprint);
   		} else if (event.key === 'x') {
   			if (fireballLocation > 0) {
   				return;
   			} else {
   				fireballLocation = location+20;
   				fireball.style.left = fireballLocation+'px'
   				var t = setInterval(function() {
	   				fireballLocation+=2;
   					fireball.style.left = fireballLocation+'px'
   					if (fireballLocation >= 1500) {
   						clearInterval(t);
   						fireballLocation = -200
   						fireball.style.left = fireballLocation+'px'
   					}
   				},5);
			}
   		}
   }

}());
