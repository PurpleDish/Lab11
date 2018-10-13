(function() {
  'use strict';
  // TODO: Write some js
  document.addEventListener('click', collapse);

  function collapse(event) {
  	if (event.target.className === 'material-icons') {
	  	let id = event.target.id + '-content';
	  	let object = document.getElementById(id)
  		if (event.target.innerText === 'expand_less') {
		  	event.target.innerText = 'expand_more'
  			object.style.display = "none"	
  			console.log(object)
  		} else {
  			event.target.innerText = 'expand_less';
  			object.style.display = "block"
  			console.log(object)

  		}
  	}

  }
}());
