document.addEventListener('click', function(event) {
  if (event.target.classList.contains('getItemButton')) {
    clickGetItem(event.target, 0);
   } else if (event.target.classList.contains('removeButton')) {
      removeItemBox(event.target);
  }  
});

function ferbotenHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}

function getFnamesandButtons() {
  var containers = document.querySelectorAll('.itembox');
  var allFnamesButtons = [];
  containers.forEach(function(container) {
    var fnameElement = container.querySelector("#fname");
    var buttonElement = container.querySelector(".getItemButton");
    if (fnameElement && buttonElement) {
      var containerValues = {
        fname: ferbotenHtml(fnameElement.value),
        button: buttonElement};
      allFnamesButtons.push(containerValues);
    }
  });
  return allFnamesButtons;
}


function clickGetItem(button, nestingcounter) {
  nestingcounter++;
  nestingvalue = 20
  var container = button.closest('.itembox');
  var listOfItems = ferbotenHtml(container.querySelector("#textbox").value);
  var nameOfTable =ferbotenHtml(container.querySelector("#fname").value);
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
    if (item == element.fname && nestingcounter < nestingvalue) {
      clickGetItem(element.button, nestingcounter);}
  });
}

function newbox() {
  var itembox = document.getElementById("itemboxbox");
  var newItembox = itembox.cloneNode(true);
  var removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("class", "button2 removeButton");
  removeButton.setAttribute("value", "−");
  removeButton.setAttribute("onclick", "removeItemBox(this)");
  newItembox.appendChild(removeButton);
  
  var getItemButton = newItembox.querySelector(".getItemButton");
  newItembox.insertBefore(getItemButton, removeButton.nextSibling);
  newItembox.querySelector("#fname").value = "";
  newItembox.querySelector("#textbox").value = "";
  newItembox.querySelector("#getitem").innerHTML = "";
  newItembox.querySelector("#item").innerHTML = "";
  document.body.appendChild(newItembox);
}

function removeItemBox(button) {
    var container = button.closest('.itembox');
    container.remove();
}