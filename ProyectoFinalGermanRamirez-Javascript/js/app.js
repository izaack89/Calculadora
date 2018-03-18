
        var myApp = ( function(){
 
        var proyecto = 'Calculadora v1.0';
        var autor = 'German Ramirez';
        var total=0;
        var total2=0;
        var resultado=0;
        var display="";
        var operador="";
        var max_numero_digitos=true;
        var contador_digitos=0;
        var historico=0;

        return {
          myMessage: function(){
                return proyecto + ' ' + autor;
          },
          cambiar_signo: function (  ){
              if(display!=""){
                  if(resultado==0 ){
                    total=(-1)*parseFloat(total);
                    display=total;
                    document.getElementById("display").innerHTML=display;
                }else{
                    resultado=(-1)*parseFloat(resultado);
                    display=resultado;
                    document.getElementById("display").innerHTML=display;
                }
            }
                /*console.log("Operador Seleccionado:"+total);
                console.log("Operador Seleccionado2:"+total2);*/
          },
          operacion: function ( valor ){
                operador=valor;
                total2=total;
                total=0;
                contador_digitos=0;
                max_numero_digitos=true;
                console.log("Operador:"+operador);
                display="";
          },
          setValue: function ( param1 ){
              if(max_numero_digitos){
                  if(param1=="."){
                      if(display.indexOf(".")==-1){
                        display+=""+param1;
                        total=parseFloat(display);
                        document.getElementById("display").innerHTML=display;
                        contador_digitos++;
                        if(contador_digitos>7){
                            max_numero_digitos=false;
                        }
                      }
                  }
                  else{
                    display+=""+param1;
                    total=parseFloat(display);
                    document.getElementById("display").innerHTML=display;
                    contador_digitos++;
                    if(contador_digitos>7){
                        max_numero_digitos=false;
                    }
                }
            }
            //return total= param1;
          },
          clearDisplay:function (){
              total=0;
              total2=0;
              resultado=0;
              historico=0;
              display="";
              operador="";
              max_numero_digitos=true;
              contador_digitos=0;
              document.getElementById("display").innerHTML="0";
          },
          Resultado: function(){
             switch(operador){
                case '+':
                    console.log("Suma antes:"+total+"+"+total2+"+"+historico+"+"+resultado);
                    //Se verifica que historico tenga un valor, en caso de tenerlo se cambia la logia de la suma 
                    if(historico==0 && total!=0)
                        resultado=parseFloat(total)+parseFloat(total2);
                    else if(historico!=0 && total!=0)
                        resultado=parseFloat(total)+parseFloat(resultado);
                    else
                        resultado=parseFloat(resultado)+parseFloat(historico);
                    //Valida que el numero no exceda el tamaño de la pantalla del resultado
                    
                    if(String(resultado).length>8){
                        resultado=parseFloat(String(resultado).substring(0, 8));
                        alert("El numero tiene màs de 8 digitos, solo se mostrara los primeros 8 digitos!");
                    }
                    //Se muestra el resultado en el display de la calculadora 
                    document.getElementById("display").innerHTML=resultado;
                    //Se agrega el valor a historico por si el usuario le aprieta el boton de resultado y se toma este valor en caso
                    if(total!=0)
                        historico=total;
                    
                    console.log("Suma despues:"+total+"+"+total2+"+"+historico+"+"+resultado);
                    //Se reinician los valores
                    total=0;
                    total2=0;
                break;
                case '-':
                    //Se verifica que historico tenga un valor, en caso de tenerlo se cambia la logia de la resta 
                    if(historico==0 && total!=0)
                        resultado=parseFloat(total2)-parseFloat(total);
                    else if(historico!=0 && total!=0)
                        resultado=parseFloat(resultado)-parseFloat(total);
                    else
                        resultado=parseFloat(resultado)-parseFloat(historico);
                    //Valida que el numero no exceda el tamaño de la pantalla del resultado
                    
                    if(String(resultado).length>8){
                        resultado=parseFloat(String(resultado).substring(0, 8));
                        alert("El numero tiene màs de 8 digitos, solo se mostrara los primeros 8 digitos!");
                    }
                    //Se muestra el resultado en el display de la calculadora 
                    document.getElementById("display").innerHTML=resultado;
                    //Se agrega el valor a historico por si el usuario le aprieta el boton de resultado y se toma este valor en caso
                    if(total!=0)
                        historico=total;
                    //Se reinician los valores
                    total=0;
                    total2=0;
                break;
                case 'x':
                    //Se verifica que historico tenga un valor, en caso de tenerlo se cambia la logia de la multiplicacion 
                    if(historico==0 && total!=0)
                        resultado=parseFloat(total)*parseFloat(total2);
                    else if(historico!=0 && total!=0)
                        resultado=parseFloat(total)*parseFloat(resultado);
                    else
                        resultado=parseFloat(resultado)*parseFloat(historico);
                    //Valida que el numero no exceda el tamaño de la pantalla del resultado
                    
                    if(String(resultado).length>8){
                        resultado=parseFloat(String(resultado).substring(0, 8));
                        alert("El numero tiene màs de 8 digitos, solo se mostrara los primeros 8 digitos!");
                    }
                    //Se muestra el resultado en el display de la calculadora 
                    document.getElementById("display").innerHTML=resultado;
                    //Se agrega el valor a historico por si el usuario le aprieta el boton de resultado y se toma este valor en caso
                    if(total!=0)
                        historico=total;
                    //Se reinician los valores
                    total=0;
                    total2=0;
                break;
                case '/':
                    
                    console.log("Suma antes:"+total+"+"+total2+"+"+historico+"+"+resultado);
                    //Se verifica que historico tenga un valor, en caso de tenerlo se cambia la logia de la suma 
                    if(historico==0 && total!=0)
                        resultado=parseFloat(total2)/parseFloat(total);
                    else if(historico!=0 && total!=0)
                        resultado=parseFloat(resultado)/parseFloat(total);
                    else
                        resultado=parseFloat(resultado)/parseFloat(historico);
                    //Valida que el numero no exceda el tamaño de la pantalla del resultado
                    
                    if(String(resultado).length>8){
                        resultado=parseFloat(String(resultado).substring(0, 8));
                        alert("El numero tiene màs de 8 digitos, solo se mostrara los primeros 8 digitos!");
                    }
                    //Se muestra el resultado en el display de la calculadora 
                    document.getElementById("display").innerHTML=resultado;
                    
                    console.log("Suma despues:"+total+"+"+total2+"+"+historico+"+"+resultado);
                    //Se agrega el valor a historico por si el usuario le aprieta el boton de resultado y se toma este valor en caso
                    if(total!=0)
                        historico=total;
                    //Se reinician los valores
                    total=0;
                    total2=0;
                break;
             } 
          }
        }
      })();
      function presionar_boton(imagen_elemento){
          imagen_elemento.style.padding ="5px";
          setTimeout(function(){
              imagen_elemento.style.padding ="0px";
          },150);
      }
      console.log( myApp.myMessage() ); // Proyecto
      
      //Se agregan los listeners
      document.getElementById("on").addEventListener("click", function(){
          presionar_boton(this);
          myApp.clearDisplay();
      });
      document.getElementById("sign").addEventListener("click", function(){
          presionar_boton(this);
          myApp.cambiar_signo();
      });
      document.getElementById("raiz").addEventListener("click", function(){
          presionar_boton(this);
      });
      document.getElementById("dividido").addEventListener("click", function(){
          presionar_boton(this);
          myApp.operacion('/');
      });
      document.getElementById("por").addEventListener("click", function(){
          presionar_boton(this);
          myApp.operacion('x');
      });
      document.getElementById("menos").addEventListener("click", function(){
          presionar_boton(this);
          myApp.operacion('-');
      });
      document.getElementById("mas").addEventListener("click", function(){
          presionar_boton(this);
          myApp.operacion('+');
      });
      document.getElementById("igual").addEventListener("click", function(){
          presionar_boton(this);
          myApp.Resultado();
      });
      document.getElementById("punto").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('.');
      });
      document.getElementById("0").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('0');
      });
      document.getElementById("1").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('1');
      });
      document.getElementById("2").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('2');
      });
      document.getElementById("3").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('3');
      });
      document.getElementById("4").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('4');
      });
      document.getElementById("5").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('5');
      });
      
      document.getElementById("6").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('6');
      });
      document.getElementById("7").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('7');
      });
      document.getElementById("8").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('8');
      });
      document.getElementById("9").addEventListener("click", function(){
          presionar_boton(this);
          myApp.setValue('9');
      });