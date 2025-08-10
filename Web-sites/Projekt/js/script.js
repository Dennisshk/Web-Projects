// ----Quiz-----
function quizbutton() {
  if (document.getElementById("quizbutton").innerHTML === "Starten") {
    console.log("test");
    document.getElementById("quizbutton").innerText = "Auswertung";
    document.getElementById("questions").style.display = "flex";
    document.getElementById("quiztitel").innerHTML = "Zur Auswertung abgeben:";
    disableQuizElements(false);
  } else if (document.getElementById("quizbutton").innerHTML === "Auswertung") {
    if (!confirm("Wirklich auswerten?")) return;
    x = berechnePunkte();
    message = nachricht(x);

    document.getElementById("quizbutton").innerText = "Beenden";
    document.getElementById("quiztitel").innerHTML = "Ergebnis";
    document.getElementById("ergebnis").innerHTML = "Du hast <strong>" + x + "</strong> von 13 richtige Antworten. Das ist " + message;
    disableQuizElements(true)

    if (x > 6) {
      //document.getElementById("giphy").innerHTML = "<iframe src=\"https://giphy.com/embed/lShSjh2K3TpOwGwlwU\" width=\"480\" height=\"271\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>";
      document.getElementById("giphy").innerHTML = "<iframe src=\"https://giphy.com/embed/eIyU7TVEkGFBmR01gm\" width=\"480\" height=\"271\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>";
    } else {
      document.getElementById("giphy").innerHTML = "<iframe src=\"https://giphy.com/embed/9Y5BbDSkSTiY8\" width=\"480\" height=\"336\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>";
    }
  } else {
    document.getElementById("quizbutton").innerText = "Starten";
    document.getElementById("questions").style.display = "none";
    document.getElementById("quiztitel").innerHTML = "Teste hier dein <br> Wissen über Delfine.";
    document.getElementById("ergebnis").innerHTML = "";
    document.getElementById("giphy").innerHTML = "";
  }
}

function berechnePunkte() {
  let points = 0;
  if (document.getElementById("f1a3").checked) points++;

  if (document.getElementById("f2a1").checked) points++;

  if (document.getElementById("f3a2").checked) points++;

  let radios4 = document.getElementsByName("frage4");
  if (radios4[0].checked) points++;
  if (radios4[1].checked) points--;
  if (radios4[2].checked) points--;
  if (radios4[3].checked) points++;

  let radios5 = document.getElementsByName("frage5");
  if (radios5[0].checked) points++;
  if (radios5[1].checked) points--;
  if (radios5[2].checked) points++;
  if (radios5[3].checked) points++;

  if (document.getElementById("f6").value.toLowerCase().includes("amazonas-flussdelfin") || document.getElementById("f6").value.toLowerCase().includes("ganges-delfin")) points++;
  if (document.getElementById("f7").value.toLowerCase() == "schule") points++;
  console.log(document.getElementById("f7").value.toLowerCase() == "schule");

  if (document.getElementById("f8").value >= 17 && document.getElementById("f8").value <= 23) points++;
  if (document.getElementById("f9").value >= 53 && document.getElementById("f9").value <= 57) points++;
  if (document.getElementById("f10").value >= 35 && document.getElementById("f10").value <= 45) points++;
  return points;
}

function disableQuizElements(disabled) {
  let ids = ["f1a1", "f1a2", "f1a3", "f1a4", "f2a1", "f2a2", "f2a3", "f2a4", "f3a1", "f3a2", "f3a3", "f3a4", "f4a1", "f4a2", "f4a3", "f4a4", "f5a1", "f5a2", "f5a3", "f5a4", "f6", "f7", "f8", "f9", "f10"];
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).disabled = disabled;
  }
}

function nachricht(x) {
  switch (x) {
    case -1:
      return "traurig.";
    case -2:
      return "traurig.";
    case -3:
      return "traurig.";
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
      return "akzeptabel, aber nicht gut.";
    case 6:
      return "OK.";
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
    default:
      return "bemerkenswert.";
  }
}

// --------- Wort-erraten Spiel ------------

function wortbutton() {
  if (document.getElementById("wortbutton").innerHTML === "Starten") {
    document.getElementById("wortbutton").innerHTML = "Beenden";
    document.getElementById("versuche").innerHTML = "Versuche übrig: 8";
    let wort = zufallsWort();
    document.getElementById("loesung").style.display = "none";
    document.getElementById("loesung").innerHTML = wort;
    let wortAnzeige;
    for (let i = 0; i < wort.length; i++) {
       wortAnzeige+="<span class = \"letter\">_</span>";
    }
    document.getElementById("wort").innerHTML = wortAnzeige;
  }
  document.getElementById("buchstabenButton").style.display = "block";
}


function zufallsWort() {
  return "Backpapier";
}


// -------- Weitere Links ---------

function interessiert() {
  let interesse = document.getElementById("interesse").value;
  let links = document.getElementsByClassName("links");
  switch (interesse) {
    case "allgemein":
      links[0].innerHTML = "<a href=\"https://us.whales.org/whales-dolphins/facts-about-dolphins\">Dolphin Conservation</a> (Kurzer Überblick)";
      links[1].innerHTML = "<a href=\"https://dolphins.org/dolphin_information\">Dolphins.org</a> (Geschichte, Kommunikation, Anatomie)";
      links[2].innerHTML = "<a href=\"https://www.wwf.org.uk/learn/fascinating-facts/dolphins\">WWF</a> (Lebensräume und Arten)";
      break;
    case "lebensraum":
      links[0].innerHTML = "<a href=\"https://www.dolphinsplus.com/blog/dolphin-habitats\">Dolphins Plus</a> (Küsten, Flüsse, Kanäle)";
      links[1].innerHTML = "<a href=\"https://us.whales.org/whales-dolphins/where-do-dolphins-live\">Whales.org</a> (Flüsse, Meere)";
      links[2].innerHTML = "<a href=\"https://defenders.org/wildlife/dolphins\">Defenders of Wildlife</a> (Küsten & Süßwasser)";
      break;
    case "nahrung":
      links[0].innerHTML = "<a href=\"https://us.whales.org/whales-dolphins/what-do-dolphins-eat\">WDC</a> (Fische, Tintenfische, Krebstiere)";
      links[1].innerHTML = "<a href=\"https://www.fisheries.noaa.gov/dolphins-porpoises\">NOAA Fisheries</a> (Nahrungsnetz)";
      links[2].innerHTML = "<a href=\"https://nagonline.net/tag/dolphin\">NAgroonline</a> (Ernährung captive Tümmler)";
      break;
    case "arten":
      links[0].innerHTML = "<a href=\"https://www.activewild.com/types-of-dolphins\">ActiveWild</a> (Komplette Artenliste)";
      links[1].innerHTML = "<a href=\"https://sanctuaries.noaa.gov/education/teachers/dolphins/species-spotlight.html\">NOAA Sanctuary</a> (Seltene Delfinarten)";
      links[2].innerHTML = "<a href=\"https://en.wikipedia.org/wiki/List_of_cetaceans\">Wikipedia</a> (Delphin- & Flusssäugerfamilien)";
      break;
    case "schutz":
      links[0].innerHTML = "<a href=\"https://us.whales.org\">Whales.org</a> (Kampagnen)";
      links[1].innerHTML = "<a href=\"https://impactful.ninja/best-charities-for-dolphins\">Impactful.ninja</a> (NGO-Vergleich & Ziele)";
      links[2].innerHTML = "<a href=\"https://www.riverdolphins.org\">Riverdolphins.org</a> (Schutz Flussdelfine)";
      break;
    case "bilder":
      links[0].innerHTML = "<a href=\"https://sanctuaries.noaa.gov/education/teachers/dolphins/videos.html\">NOAA</a> (16 Edu-Videos weltweit)";
      links[1].innerHTML = "<a href=\"https://www.wilddolphinproject.org/media/videos-tv-lectures\">Wild Dolphin Project</a> (Begegnungen)";
      links[2].innerHTML = "<a href=\"https://www.pexels.com/search/videos/dolphins\">Pexels</a> (HD-Stock-Clips kostenlos)";
      break;
    default:
      links[0] = ""; links[1] = ""; links[2] = "";
  }
}



// ------- Filterfunktion --------


function filtern() {
  let table = document.getElementById("arten");
  let rows = table.rows;

  // Filterwerte holen
  let leben = document.getElementById("leben").value;
  let groesse = getCheckedValue("groesse");
  let gef = getCheckedValue("gef");
  let erf = getCheckedValue("erf");
  console.log(leben + groesse + gef + erf);

  //Anzeige aktualisieren
  if (leben == "Alle" && !groesse && !gef && !erf) {
    document.getElementById("filterAnzeige").innerHTML = "Keine";
  } else {
    let anzeige = "";
    if (leben != "Alle") anzeige = anzeige + "Lebensraum ";
    if (groesse) anzeige = anzeige + "Größe ";
    if (gef) anzeige = anzeige + "Gefährdet ";
    if (erf) anzeige = anzeige + "Entdeckungsstatus ";
    document.getElementById("filterAnzeige").innerHTML = anzeige;
  }


  // Alle Zeilen erst mal einblenden
  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "";
  }

  // Filter anwenden
  if (leben != "Alle") filterLeben(rows, leben);
  if (groesse) filterRadio(rows, 2, "groesse");
  if (gef) filterRadio(rows, 3, "gef");
  if (erf) filterRadio(rows, 7, "erf");
}

// Ist Radio gewählt <=> Ist Filter aktiv?
function getCheckedValue(name) {
  let radios = document.getElementsByName(name);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) return true;
  }
  return false;
}

//Prüfe ob Wert bei jenen Buttons angeklickt
function isChecked(name, value) {
  let radios = document.getElementsByName(name);
  for (let i = 0; i < radios.length; i++) {
    console.log(radios[i].checked + " radioWert: " + radios[i].value + " value: " + value);
    if (radios[i].checked && radios[i].value == value) return true;
  }
  return false;
}

// Filtert nach Lebensraum
function filterLeben(rows, leben) {
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i].cells[1].innerText.includes(leben)) {
      rows[i].style.display = "none";
    }
  }
}

// Filtert nach Radio-Button
function filterRadio(rows, col, name) {
  //console.log("Bin da"+rows+"  "+col);
  for (let i = 1; i < rows.length; i++) {
    if (!isChecked(name, rows[i].cells[col].innerHTML)) {
      console.log(name + rows[i].cells[col].innerHTML);
      rows[i].style.display = "none";
    }
  }
}

function filterDefault() {
  document.getElementById("leben").value = "Alle";
  let ids = ["g1", "g2", "g3", "ge1", "ge2", "ge3", "e1", "e2", "e3"];
  for (var i = 0; i < ids.length; i++) {
    let el = document.getElementById(ids[i]);
    if (el) {
      el.checked = false;
    }
  }
  filtern();
}


// ------- Bild bearbeiten --------
function picture(next) {
  let index = document.getElementById("wechselBildRange").value;
  if (next) {
    index++;
    if (index == 6) index = 1;
  } else {
    index--;
    if (index == 0) index = 5;
  }
  document.getElementById("wechselBildRange").value = index;
  console.log(index);
  document.getElementById("wechselBild").src = "img/AuswahlBilder/Bild" + index + ".jpg";
  let beschreibung;
  let alt;
  switch (index) {
    case 1:
      alt = "Delfin mit Delfin-Baby";
      beschreibung = "Delfine kümmern sich gut um ihre Babys";
      break;
    case 2:
      alt = "schwimmende Delfine";
      beschreibung = "Delfine leben immer in Gruppen. Alleine sieht man sie selten";
      break;
    case 3:
      alt = "drei Delfine";
      beschreibung = "Dies ist eine Schule von Delfinen";
      break;
    case 4:
      alt = "Viele springende Delfine";
      beschreibung = "Delfine können sehr hoch aus dem Wasser springen";
      break;
    case 5:
      alt = "springender Delfin";
      beschreibung = "Es sieht immer sehr schön aus, wenn Delfine aus dem Wasser springen";
      break;
    default:
      alt = "";
      beschreibung = "";
  }
  document.getElementById("wechselBild").alt = alt;
  document.getElementById("wechselBildText").innerHTML = beschreibung;
}

function size(bigger) {
  let size = document.getElementById("wechselBild").style.width;
  //Standardwert, falls Width nicht gesetzt ist
  if (!size) {
    size = document.getElementById("wechselBild").offsetWidth;
  }
  size = parseInt(size);
  if (isNaN(size)) size = 200;


  if (bigger) {
    size = size + 5;
  } else {
    size = size - 5;
  }
  if (size < 200) {
    alert("Minimale Größe erreicht.");
  } else if (size > 700) {
    alert("Maximale Größe erreicht.");
  } else {
    document.getElementById("wechselBild").style.width = size + "px";
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
  document.getElementById("rangeValue5").innerHTML = document.getElementById("widht").value;
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

  document.getElementById("bild3").style.fontSize = size;
}


function navbar() {
  if (document.getElementById("on").checked) {
    document.getElementsByClassName("icon-bar")[0].style.position = "sticky"
  } else {
    document.getElementsByClassName("icon-bar")[0].style.position = "static"
  }
}


function changeWidht() {
  let widht = document.getElementById("widht").value;
  let blocks = document.getElementsByClassName("block");
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.width = widht + "%";
  }
  let lBlocks = document.getElementsByClassName("littleBlock");
  for (let i = 0; i < lBlocks.length; i++) {
    lBlocks[i].style.width = (widht / 2 + 1) + "%";
  }
  let bBlocks = document.getElementsByClassName("bigBlock");
  for (let i = 0; i < bBlocks.length; i++) {
    bBlocks[i].style.width = (widht * 1.5 + 8) + "%";
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
    //Accordion wieder richtige Farbe
    document.querySelectorAll(".accordion").forEach(e => {
      e.style.color = "#104720";
      e.style.background.color = "#b4cac8";
    });

    document.getElementById("bild3").style.color = "#000000ff";

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

    document.getElementById("bild3").style.color = "#7877a0ff";
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