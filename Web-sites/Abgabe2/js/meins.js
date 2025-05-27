let userName = prompt("Wie heißt du eigentlich?");
if(userName==null || userName==""){
    //Falls es keine Eingabe oder eine ungültige Eingabe gibt
    alert("Herzlich willkommen auf dieser wunderschönen Seite!");
}else{
    alert("Herzlich willkommen auf dieser wunderschönen Seite, "+userName+"!");
    document.getElementById("subtitle").innerHTML = document.getElementById("subtitle").innerHTML+", "+userName;
}