document.addEventListener('click', function (event) {
    if (event.target.classList.contains('getItemButton')) {
        clickGetItem(event.target);
    }
});

function getFnamesandButtons() {
    // Assume all containers have the class "itemboxbox"
    var containers = document.querySelectorAll('.itembox');
    var allFnamesButtons = [];
    // Loop through each container and get the id="fname" element
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



function clickGetItem(button) {
  var container = button.closest('.itembox');
  var listOfItems = container.querySelector("#textbox").value;
  var nameOfTable = container.querySelector("#fname").value;

  const array = listOfItems.split(/\r?\n/);
  var item = array[Math.floor(Math.random()*array.length)];
  var fnames = getFnamesandButtons();
  container.querySelector("#item").innerHTML = nameOfTable + " : " + item;
  var allValues = getFnamesandButtons();
  console.log(typeof(allValues))
  allValues.forEach(function(element) {
      console.log("fname:", element.fname);
      console.log("button:", element.button);
  });
  
}

function run() {
    var itembox = document.getElementById("itemboxbox");
    var newItembox = itembox.cloneNode(true);

    // Clear the input and output fields in the new itembox
    newItembox.querySelector("#fname").value = "";
    newItembox.querySelector("#textbox").value = "";
    newItembox.querySelector("#getitem").innerHTML = "";
    newItembox.querySelector("#item").innerHTML = "";

    // Append the new itembox to the document
    document.body.appendChild(newItembox);
}
