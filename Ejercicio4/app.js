var user1 = {
    "DNI": "51929400X",
    "Nacimiento": 1990,
    "Ingreso": 2014,
    "Productividad": 5,
    "Antiguo": 6,
    "Sueldo": 1500
}

var user2 = {
    "DNI": "49192019M",
    "Nacimiento": 1970,
    "Ingreso": 2000,
    "Productividad": 15,
    "Antiguo": 20,
    "Sueldo": 2000
}

var user3 = {
    "DNI": "59194949D",
    "Nacimiento": 1960,
    "Ingreso": 1990,
    "Productividad": 10,
    "Antiguo": 30,
    "Sueldo": 1300
}


function calc() {
    console.log("Edad: " + (2020 - user1.Nacimiento));
    console.log("Sueldo: " + (user1.Sueldo * (1 + 0.01 * user1.Antiguo / 3 + user1.Productividad/100)));
}

document.getElementById('Usuario1').innerHTML = "El usuario 1 tiene " + (2020 - user1.Nacimiento) + " anios y cobra " + (user1.Sueldo * (1 + 0.01 * user1.Antiguo / 3 + user1.Productividad / 100)) + "euros" ;
document.getElementById('Usuario2').innerHTML = "El usuario 2 tiene " + (2020 - user2.Nacimiento) + " anios y cobra " + (user2.Sueldo * (1 + 0.01 * user2.Antiguo / 3 + user2.Productividad / 100)) + "euros";
document.getElementById('Usuario3').innerHTML = "El usuario 3 tiene " + (2020 - user3.Nacimiento) + " anios y cobra " + (user3.Sueldo * (1 + 0.01 * user3.Antiguo / 3 + user3.Productividad / 100)) + "euros";


calc();