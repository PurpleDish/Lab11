(function() {
   'use strict';
   // write your js here.
   const out = document.getElementById('output');
   console.log(out);
   setInterval(toggleHide,2000);
   function toggleHide(event) {
   	if(out.className==='hide') {
   		out.className=undefined;
   		console.log('removed class name')
   	} else {
   		out.className='hide';
   		console.log('put class name back')
   	}

   }
}());
