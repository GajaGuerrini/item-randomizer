document.addEventListener('click', function(event) {
  if (event.target.classList.contains('getItemButton')) {
    clickGetItem(event.target, 0);
  }
});

function getFnamesandButtons() {
  var containers = document.querySelectorAll('.itembox');
  var allFnamesButtons = [];
  containers.forEach(function(container) {
    var fnameElement = container.querySelector("#fname");
    var buttonElement = container.querySelector(".getItemButton");
    if (fnameElement && buttonElement) {
      var containerValues = {
        fname: fnameElement.value,
        button: buttonElement
      };
      allFnamesButtons.push(containerValues);
    }
  });
  return allFnamesButtons;
}

function clickGetItem(button, nestingcounter) {
  nestingcounter++;
  var container = button.closest('.itembox');
  var listOfItems = container.querySelector("#textbox").value;
  var nameOfTable = container.querySelector("#fname").value;

  const array = listOfItems.split(/\r?\n/);
  const nonEmptyLines = array.filter(line => line.trim() !== '');
  if (nonEmptyLines.length > 0) {
    var item = nonEmptyLines[Math.floor(Math.random() * nonEmptyLines.length)];
     container.querySelector("#item").innerHTML = nameOfTable + " : " + item;
  } else {
     container.querySelector("#item").innerHTML = "The table " + nameOfTable + " is empty."
  }

  var allValues = getFnamesandButtons();
  allValues.forEach(function(element) {
    if (item == element.fname && nestingcounter < 20) {
      clickGetItem(element.button, nestingcounter);
    }
  });
}

function run() {
  var itembox = document.getElementById("itemboxbox");
  var newItembox = itembox.cloneNode(true);
  newItembox.querySelector("#fname").value = "";
  newItembox.querySelector("#textbox").value = "";
  newItembox.querySelector("#getitem").innerHTML = "";
  newItembox.querySelector("#item").innerHTML = "";
  document.body.appendChild(newItembox);
}