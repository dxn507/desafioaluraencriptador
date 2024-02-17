

//texteo final
var btnCifrar = document.getElementById ("btn_1");
var btnDescifrar = document.getElementById("btn_2");
var muneco = document.getElementById("muneco");
var textoVacio = document.getElementById ("texto");


btnCifrar.addEventListener("click", function (){  
     if (textoVacio.value.trim() !== ''){
var texto = document.getElementById ("texto").value;
  var vocalesCifradas = {
   a:"ai",
   e:"enter",
   i:"imes",
   o:"ober",
   u:"ufar"};

  var textoCifrado = texto.replace(/a|e|i|o|u/g, function(matched){
                                 return vocalesCifradas[matched];});

   var cuadroFinal = document.getElementById("textoEncriptado");
   var limpiarContenido = function limpiarContenido() { 

	                document.getElementById("texto").value =""}

  cuadroFinal.innerHTML =(textoCifrado);
  limpiarContenido();
return  muneco.classList.toggle("novisible")}

else{
	 alert("Campo vacio");
                return false;
}

	
	});
	


btnDescifrar.addEventListener("click", function (){  
	if (textoVacio.value.trim() !== ''){
	     
  var texto = document.getElementById("texto").value;
  let vocalDescifrada = {
    ai: 'a',
   enter: 'e',
   imes: 'i',
   ober: 'o',
   ufar: 'u'};

   var textoDescifrado = texto.replaceAll(/ai|enter|imes|ober|ufar/g, function(matched){
                                          return vocalDescifrada[matched];});
   var limpiarContenido =  function limpiar() { document.getElementById("texto").value = ""}
	
    var cuadroFinal = document.getElementById("textoEncriptado");                                       

  cuadroFinal.innerHTML =(textoDescifrado);
  limpiarContenido();
  return  muneco.classList.toggle("novisible");
	    
		
	} else{
	   alert("Campo vacio");
                return false;
	
	}
	
	});
  
  
//Copy
function copy() {
  const content = document.getElementById('textoEncriptado');
  content.select();
  document.execCommand('copy');
//  content.style.backgroundColor = "lightblue";
  alert("Copiado!");
    content.innerText = ""; 

return muneco.classList.toggle("novisible");

};