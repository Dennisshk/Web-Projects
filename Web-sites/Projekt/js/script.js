// ----Quiz-----
function quizbutton() {
  if (document.getElementById("quizbutton").innerHTML === "Starten") {
    console.log("test");
    document.getElementById("quizbutton").innerText = "Auswertung";
    document.getElementById("questions").style.display = "block";
    document.getElementById("quiztitel").innerHTML = "Abgabe:";
    disableQuizElements(false);
  } else if (document.getElementById("quizbutton").innerHTML === "Auswertung") {
    x = berechnePunkte();
    message = nachricht(x);

    document.getElementById("quizbutton").innerText = "Beenden";
    document.getElementById("ergebnis").innerHTML = "Du hast <strong>" + x + "</strong> von 13 richtige Antworten. Das ist " + message;
    disableQuizElements(true)
  } else {
    document.getElementById("quizbutton").innerText = "Starten";
    document.getElementById("questions").style.display = "none";
    document.getElementById("quiztitel").innerHTML = "Quiz";
    document.getElementById("ergebnis").innerHTML = "";
  }
}

function berechnePunkte() {
  let points = 0;
  if (document.getElementById("f1a3").checked) points++;

  if (document.getElementById("f2a1").checked) points++;

  if (document.getElementById("f3a2").checked) points++;

  if (document.getElementById("f4a1").checked) points++;
  if (document.getElementById("f4a4").checked) points++;
  if (document.getElementById("f4a3").checked) points--;
  if (document.getElementById("f4a2").checked) points--;

  if (document.getElementById("f5a1").checked) points++;
  if (document.getElementById("f5a3").checked) points++;
  if (document.getElementById("f5a4").checked) points++;
  if (document.getElementById("f5a2").checked) points--;

  if (document.getElementById("f6").value.toLowerCase() == "amazonas-flussdelfin" || document.getElementById("f6").value.toLowerCase() == "ganges-delfin") points++;
  if (document.getElementById("f7").value.toLowerCase() == "schule") points++;

  if (document.getElementById("f8").value == 20) points++;
  if (document.getElementById("f9").value == 55) points++;
  if (document.getElementById("f10").value == 40) points++;
  return points;
}

function disableQuizElements(disabled) {
  document.getElementById("f1a1").disabled = disabled;
  document.getElementById("f1a2").disabled = disabled;
  document.getElementById("f1a3").disabled = disabled;
  document.getElementById("f1a4").disabled = disabled;
  document.getElementById("f2a1").disabled = disabled;
  document.getElementById("f2a2").disabled = disabled;
  document.getElementById("f2a3").disabled = disabled;
  document.getElementById("f2a4").disabled = disabled;
  document.getElementById("f3a1").disabled = disabled;
  document.getElementById("f3a2").disabled = disabled;
  document.getElementById("f3a3").disabled = disabled;
  document.getElementById("f3a4").disabled = disabled;
  document.getElementById("f4a1").disabled = disabled;
  document.getElementById("f4a2").disabled = disabled;
  document.getElementById("f4a3").disabled = disabled;
  document.getElementById("f4a4").disabled = disabled;
  document.getElementById("f5a1").disabled = disabled;
  document.getElementById("f5a2").disabled = disabled;
  document.getElementById("f5a3").disabled = disabled;
  document.getElementById("f5a4").disabled = disabled;
  document.getElementById("f6").disabled = disabled;
  document.getElementById("f7").disabled = disabled;
  document.getElementById("f8").disabled = disabled;
  document.getElementById("f9").disabled = disabled;
  document.getElementById("f10").disabled = disabled;
}

function nachricht(x) {
  switch (x) {
    case -1:
      return "...";
    case -2:
      return "...";
    case -3:
      return "...";
    case 0:
      return "katastrophal. Selbst mit Zufall hätte man besser antworten können.";
    case 1:
      return "schrecklich.";
    case 2:
      return "schlecht.";
    case 3:
      return "wirklich nicht gut.";
    case 4:
      return "nicht gut.";
    case 5:
      return "Es ist akzeptabel, aber nicht gut.";
    case 6:
      return "Es ist OK.";
    case 7:
      return "ganz OK.";
    case 8:
      return "garnicht mal so schlecht.";
    case 9:
      return "gut.";
    case 10:
      return "ziemlich gut";
    case 11:
      return "sehr gut.";
    case 12:
      return "faszinierend.";
    default:
      return "bemerkenswert.";
  }
}

// ------- Ranges aktualisieren --------
//aktualisiere am Anfang
rangeValue();
function rangeValue() {
  document.getElementById("rangeValue1").innerHTML = document.getElementById("size").value;
  document.getElementById("rangeValue2").innerHTML = document.getElementById("f8").value;
  document.getElementById("rangeValue3").innerHTML = document.getElementById("f9").value;
  document.getElementById("rangeValue4").innerHTML = document.getElementById("f10").value;
}

// ------- Einstellungen-Buttons -------
function neueSchriftgroesse(standard) {
  let size;
  if (standard) {
    size = "26px"
  } else {
    size = document.getElementById("size").value + "px";
  }

  let blockArray = document.getElementsByClassName("block");
  for (let i = 0; i < blockArray.length; i++) {
    console.log(size);
    blockArray[i].style.fontSize = size;
  }

  let articles = document.getElementsByTagName("article");
  for (let i = 0; i < articles.length; i++) {
    articles[i].style.fontSize = size;
  }
}


function navbar() {
  if (document.getElementById("on").checked) {
    document.getElementsByClassName("icon-bar")[0].style.position = "sticky"
  } else {
    document.getElementsByClassName("icon-bar")[0].style.position = "static"
  }
}


function design() {
  if (document.getElementById("hell").checked) {
    document.body.style.background = "#bbb5b5c2"
    document.body.style.borderColor = "#b2b2b8"

    //querySelectorAll wählt alle Elemente, die zu den Selektoren passen; Lambda, Streams wie in Java
    document.querySelectorAll(".block, .littleBlock, .bigBlock, article, .panel, .accordion, .activeAccordion").forEach(e => {
      e.style.borderColor = "";
    });

    document.querySelectorAll("button, input").forEach(e => {
      e.style.backgroundColor = "#b4b8ca";
      e.style.color = "#040105";
      e.style.borderColor = "#212b46";
    });

    document.querySelectorAll(".icon-bar a").forEach(e => {
      e.style.color = "rgb(178, 174, 202)";
    });
    //Accordion wiedeer richtige Farbe
    document.querySelectorAll(".accordion").forEach(e=>{
      e.style.color= "#104720";
      e.style.background.color="#b4cac8";
    });

  } else {

    document.body.style.background = "#222"
    document.body.style.borderColor = "#000"

    document.querySelectorAll(".block, .littleBlock, .bigBlock, article, .panel, .accordion, .activeAccordion").forEach(e => {
      e.style.borderColor = "#444";
    });

    document.querySelectorAll("button, input").forEach(e => {
      e.style.backgroundColor = "#333";
      e.style.color = "#e0e0e0";
      e.style.borderColor = "#444";
    });

    document.querySelectorAll(".icon-bar a").forEach(e => {
      e.style.color = "#b2b2b8";
    });
  }
}






//-------- w3Schools Accordion -----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activeAccordion");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 