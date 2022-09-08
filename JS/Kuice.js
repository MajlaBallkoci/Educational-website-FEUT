function displayQuiz() {
  var result = document.getElementById("result");
  result.innerHTML = "";
  var select = document.getElementById("subjects");
  var formProgramim = document.getElementById("programim");
  var formDatabaza = document.getElementById("databaza");
  var value = select.options[select.selectedIndex].value;
  switch (value) {
    case "programim": {
      formProgramim.style.display = "block";
      formDatabaza.style.display = "none";
      break;
    }

    case "databaza": {
      formDatabaza.style.display = "block";
      formProgramim.style.display = "none";
      break;
    }
  }
}

function showResult() {
  var result = document.getElementById("result");
  var emri = document.getElementById("emri");
  var pyetja1 = document.getElementsByName("opsion1");
  var pyetja2 = document.getElementsByName("opsion2");
  var pyetja3 = document.getElementsByName("opsion3");
  var pyetja4 = document.getElementsByName("opsion4");
  var pyetja5 = document.getElementById("pyetja5");
  
  var rezultati1 = "gabim",
    rezultati2 = "gabim",
    rezultati3 = "gabim",
    rezultati4 = "gabim",
    rezultati5 = "gabim";

  if (pyetja1[1].checked) rezultati1 = "sakte";
  if (pyetja2[0].checked) rezultati2 = "sakte";
  if (pyetja3[0].checked) rezultati3 = "sakte";
  if (pyetja4[0].checked && pyetja4[2].checked && pyetja4[3].checked)
    rezultati3 = "sakte";
  if (pyetja5.value == "<!DOCTYPE html>") rezultati5 = "sakte";

  if (emri.value == "") result.innerHTML = "Plotesoni fushen e emrit ju lutem!";
  else
    result.innerHTML =
      emri.value +
      ", ju jeni pergjigjigjur si me poshte: \n\nPyetja 1 -- " +
      rezultati1 +
      "\nPyetja 2 -- " +
      rezultati2 +
      "\nPyetja 3 -- " +
      rezultati3 +
      "\nPyetja 4 -- " +
      rezultati4 +
      "\nPyetja 5 -- " +
      rezultati5;
}
