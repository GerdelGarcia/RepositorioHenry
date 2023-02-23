function Muonline(servidor){
    if(servidor == 'Midgard'){
        console.log('Seleccione Server Midgar');
    } else if(servidor  == 'Helhehim'){
        console.log('Seleccione Server Helheim');
    } else {
        console.log('Seleccionaste un server distinto');''
    }
  };

  Muonline('Helhehim');
  Muonline('Midgard');
  Muonline('Arcadia');


  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } else if(edad <=17){ 
       console.log( false );
    }
    
  }
  
  puedeManejar(15);
