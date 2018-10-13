(function() {
  'use strict';
  // TODO: Write some js
  document.addEventListener('click', collapse);

  function collapse(event) {
  	if (event.target.className === 'material-icons') {
	  	let id = event.target.id + '-content';
	  	let object = document.getElementById(id)
	  	object.style.display = "none"
  	}

  }
}());
