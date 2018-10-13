(function() {
   'use strict';
   // write your code here
   const out = document.getElementById('output');
   out.innerText = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
   setInterval(updateTime,1000);

   function updateTime(event) {
    out.innerText = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
   }
}());
