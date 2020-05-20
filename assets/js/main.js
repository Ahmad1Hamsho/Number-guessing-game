let num = Math.round(Math.random() * 100);
console.log(num);
let guess1 = 0;
function customB() {
  if (document.getElementById("custom").checked) {
    document.getElementById("customNum").style.display = "block";
  } else if (document.getElementById("four").checked) {
    document.getElementById("customNum").style.display = "none";
  } else if (document.getElementById("five").checked) {
    document.getElementById("customNum").style.display = "none";
  } else if (document.getElementById("six").checked) {
    document.getElementById("customNum").style.display = "none";
  }
}
function guess() {
  guess1 = parseInt(guess1) + parseInt(1);
  event.preventDefault();
  const number = document.getElementById("number").value;
  const erg = document.getElementById("erg");
  document.getElementById("custom").value = document.getElementById(
    "customNum"
  ).value;
  if (number == num) {
    document.getElementById("guess2").style.display = "none";
    document.getElementById("ref").style.display = "block";
    erg.innerHTML = " ";
    erg.innerHTML += `<p>you Win 🎊✨✨</p>`;
  } else if (number > num) {
    erg.innerHTML += `<p>${guess1}- you need to guess lower than 
      ${number} ,try again</p>`;
  } else {
    erg.innerHTML += `<p>${guess1}- you need to guess higher than 
      ${number} ,try again</p>`;
  }
  const radio = document.querySelectorAll('input[type="radio"]');
  let selectedValue;
  for (const rb of radio) {
    if (rb.checked) {
      selectedValue = rb.value;
    }
  }
  if (guess1 >= selectedValue) {
    document.getElementById("guess2").disabled = true;
    document.getElementById("guess2").style.left = "1vw";
    document.getElementById("ref").style.display = "block";
    document.getElementById("ref").style.left = "14vw";
    erg.innerHTML = " ";
    erg.innerHTML = `I'm sorry you lost 😔, and the Number was (${num})`;
  } else {
    document.getElementById("guess2").disabled = false;
  }
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").innerHTML =
    "<h4>In how many rounds you think you can guess the Number?</h4>" +
    `${guess1}/${selectedValue}`;
}

function ref() {
  window.location.reload();
}
