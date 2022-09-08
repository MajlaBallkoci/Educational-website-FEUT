var click1 = 0;
var click2 = 0;

function showImage1() {
  click1 = click1 == 0 ? 1 : 0;
  var img = document.getElementById("zgjidhja1");
  if (click1 == 1) img.style.display = "block";
  else if (click1 == 0) img.style.display = "none";
}

function showImage2() {
  click2 = click2 == 0 ? 1 : 0;
  var img = document.getElementById("zgjidhja2");
  if (click2 == 1) img.style.display = "block";
  else if (click2 == 0) img.style.display = "none";
}

function displayExercices() {
  var select = document.getElementById("subjects");
  var value = select.options[select.selectedIndex].value;
  switch (value) {
    case "programim": {
      var ushtrimet = document.getElementById("ushtrimet");
      ushtrimet.style.display = "flex";
      break;
    }

    case "databaza": {
      break;
    }
  }
}
