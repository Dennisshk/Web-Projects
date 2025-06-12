function sendMessage() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let wohnort = document.getElementById("wohnort").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        document.getElementById("fehler").innerHTML = "Name kann nicht leer sein.";
    } else if (age == "" || isNaN(Number(age))) {
        document.getElementById("fehler").innerHTML = "Alter muss eine Zahl sein.";
    } else {
        let ageAsNumber = Number(age);

        if (ageAsNumber < 1 || ageAsNumber > 120) {
            document.getElementById("fehler").innerHTML = "Ungültiges Alter.";
        } else if (wohnort == "") {
            document.getElementById("fehler").innerHTML = "Wohnort kann nicht leer sein.";
        } else if (message == "") {
            document.getElementById("fehler").innerHTML = "leere Nachrichten sind nicht erlaubt.";
        } else {
            let alterChat = document.getElementById("chat").innerHTML;
            if(alterChat === "Keine Posts vorhanden.") alterChat = "";
            message = "<div class=\"post\">Von <strong>" + name + "</strong> (Alter: <strong>" + age + "</strong>, Wohnort: <strong>" + wohnort + "</strong>):<br><br>" + message + "</div><br>" + alterChat;
            document.getElementById("chat").innerHTML = message;
            document.getElementById("fehler").innerHTML = "";
        }
    }
}

function clearField(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("wohnort").value = "";
    document.getElementById("message").value = "";
    document.getElementById("fehler").innerHTML = "";
}