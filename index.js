let fullname = document.getElementById("fullname");
let group = document.getElementById("group");
let phone = document.getElementById("phone");
let idcard = document.getElementById("idcard");
let faculty = document.getElementById("faculty");
let messageErr = document.getElementsByClassName("error");
let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(fullname, 0, "Введіть прізвище");
  engine(group, 1, "Введіть групу");
  engine(phone, 2, "Введіть телефон");
  engine(idcard, 3, "Пустий рядок");
  engine(faculty, 4, "Введіть факультет");
});

let engine = (id, x, message) => {
  if (id.value === "") {
    messageErr[x].innerHTML = message;
    id.classList.add("input-error");
  } else {
    messageErr[x].innerHTML = "";
    id.classList.remove("input-error");
    document.getElementById(
      "no-error"
    ).innerHTML = `Введені дані:  <br><br> ${fullname.value}  <br><br> ${group.value}  <br><br> ${phone.value}  <br><br> ${idcard.value}  <br><br> ${faculty.value}`;
  }
};
//завдання 2
function changeColor(cell) {
  if (cell.textContent === "2") {
    cell.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColumnColor() {
  var columnIndex = document.getElementById("cell2").cellIndex;
  var table = document.getElementById("colorfulTable");

  for (var i = 0; i < table.rows.length; i++) {
    var cell = table.rows[i].cells[columnIndex];
    // cell.style.backgroundColor = green;
    cell.style.backgroundColor = getRandomColor();
  }
}
function showColorPicker() {
  var color = prompt("Введіть колір (наприклад, red):");
  if (color !== null) {
    document.getElementById("cell2").style.backgroundColor = color;
  }
}

document.getElementById("cell2").addEventListener("dblclick", function () {
  changeColumnColor();
});
document.getElementById("cell2").addEventListener("click", function () {
  showColorPicker();
});
