//Contar parrafos
var prfos = document.getElementsByTagName("p");
console.log("Cantidad de parrafos: " +prfos.length);

//Contar enlaces
var enlaces = document.getElementsByTagName("a");
console.log("Cantidad de enlaces: " +enlaces.length);

//Contar encabezados
var enc1 = document.getElementsByTagName("h1");
var enc2 = document.getElementsByTagName("h2");
var enc3 = document.getElementsByTagName("h3");
var enc4 = document.getElementsByTagName("h4");
var enc5 = document.getElementsByTagName("h5");
var encabezadostotal = enc1.length + enc2.length + enc3.length + enc4.length + enc5.length; 
console.log("Cantidad de encabezados: " +encabezadostotal);
console.log("Encabezados h1: " +enc1.length);
console.log("Encabezados h2: " +enc2.length);
console.log("Encabezados h3: " +enc3.length);
console.log("Encabezados h4: " +enc4.length);
console.log("Encabezados h5: " +enc5.length);

window.alert(`Esta página contiene ${prfos.length} parrafos, ${enlaces.length} enlaces y ${encabezadostotal} encabezados.`);