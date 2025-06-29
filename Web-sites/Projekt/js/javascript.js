function quizbutton(){
  if(document.getElementById("quizbutton").innerHTML === "Starten"){
    console.log("test");
    document.getElementById("quizbutton").innerText = "Auswertung";
    document.getElementById("questions").style.display = "block";
    document.getElementById("quiztitel").innerHTML = "Abgabe:";
  }else if (document.getElementById("quizbutton").innerHTML === "Auswertung"){

  }else{

  }
}


function rangeValue(){
  document.getElementById("rangeValue").innerHTML = document.getElementById("range1").value;
}

function neueSchriftgroesse(){
  let size = document.getElementById("range1").value + "px";

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

function design(){
  
}












//w3Schools Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
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