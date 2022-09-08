var click1 = 0;
var click2 = 0;

function openAnswer1() {
  answer = document.getElementById("answer1");
  click1 = click1 == 0 ? 1 : 0;
  if (click1) answer.style.display = "block";
  else answer.style.display = "none";
}

function openAnswer2() {
  answer = document.getElementById("answer2");
  click2 = click2 == 0 ? 1 : 0;
  if (click2) answer.style.display = "block";
  else answer.style.display = "none";
}

function dergo() {
  emri = document.getElementById("emri");
  email = document.getElementById("email");
  msg = document.getElementById("msg");
  feedback = document.getElementById("feedback");
  if (email.value != "" && emri.value != "" && msg.value != "")
    feedback.style.display = "block";
}
