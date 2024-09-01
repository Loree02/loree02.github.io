"use strict";

	(function() {
	 
	  window.addEventListener("load", init);

	  function init() {   // inicializacion
		updateClock();
		setInterval(updateClock, 1000);	 
	  }


    function updateClock() {
	  let time = document.querySelector('.time');
	  let dateTime = document.querySelector('.date-time');
      // Declaracion de variable que indica el momento actual
      let now = new Date();
      // Declaracion de variables
      let hours = now.getHours();      
      let minutes = now.getMinutes();  
      let seconds = now.getSeconds();  
      let day = now.getDay();
      let date = now.getDate();
      let month = now.getMonth();
      let year = now.getFullYear();

      let session = "PM"; // formato PM que muestra la hora en 24 h
    
      if (hours == 0) {
        hours = 24;
      }    
      if(hours > 24){
        hours -= 24;
        session = "PM";
      }
    
      // store day and month name in an array
      let dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

      // formato de fecha y hora

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      date = date < 10 ? '0' + date : date;

      // monitor de visualizacion de fecha y hora

      time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + session;
      dateTime.innerHTML = dayNames[day] + ', ' + date  + '  de ' + monthNames[month] + ' del ' + year;
    }
	})();