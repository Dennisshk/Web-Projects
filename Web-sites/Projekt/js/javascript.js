function quizbutton() {
  if (document.getElementById("quizbutton").innerHTML === "Starten") {
    console.log("test");
    document.getElementById("quizbutton").innerText = "Auswertung";
    document.getElementById("questions").style.display = "block";
    document.getElementById("quiztitel").innerHTML = "Abgabe:";
  } else if (document.getElementById("quizbutton").innerHTML === "Auswertung") {
    x = berechnePunkte();
    message = nachricht(x);

    document.getElementById("quizbutton").innerText = "Beenden";
    document.getElementById("ergebnis").innerHTML = "Du hast <strong>"+x+"</strong> von 13 richtige Antworten. Das ist "+message;
  } else {
    document.getElementById("quizbutton").innerText = "Starten";
    document.getElementById("questions").style.display = "none";
    document.getElementById("quiztitel").innerHTML = "Quiz";
    document.getElementById("ergebnis").innerHTML = "";
  }
}

function berechnePunkte() {
  return 0;
}

function nachricht(x) {
  switch (x) {
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
function rangeValue() {
  document.getElementById("rangeValue").innerHTML = document.getElementById("range1").value;
}

// ------- Einstellungen-Buttons -------
function neueSchriftgroesse(standard) {
  let size;
  if (standard) {
    size = "26px"
  } else {
    size = document.getElementById("range1").value + "px";
  }

  //Klassennamen geben ein Array zurück
  let blockArray = document.getElementsByClassName("block");
  for (let i = 0; i < blockArray.length; i++) {
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
      e.style.backgroundColor = "#b4cac8";
      e.style.color = "#104720";
      e.style.borderColor = "#7baec9";
    });

    document.querySelectorAll(".icon-bar a").forEach(e => {
      e.style.color = "rgb(178, 174, 202)";
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