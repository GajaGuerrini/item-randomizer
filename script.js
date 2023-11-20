var item;
var nameOfTable;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('getItemButton')) {
        clickGetItem(event.target);
    }
});

function getAllFnameElements() {
    // Assume all containers have the class "itemboxbox"
    var containers = document.querySelectorAll('.itemboxbox');
    console.log(containers)
    // Variable to store all id="fname" elements
    var allFnameElements = [];
    // Loop through each container and get the id="fname" element
    containers.forEach(function(container) {
        var fnameElement = container.querySelector("#fname");
        if (fnameElement) {
            allFnameElements.push(fnameElement);
        }
    });
    return allFnameElements
}



function clickGetItem(button) {
  console.log(button)
  var container = button.closest('.itembox');
  var listOfItems = container.querySelector("#textbox").value;
  var nameOfTable = container.querySelector("#fname").value;

  const array = listOfItems.split(/\r?\n/);
  var item = array[Math.floor(Math.random()*array.length)];
  var fnames = getAllFnameElements();
  container.querySelector("#item").innerHTML = nameOfTable + " : " + item;
  console.log(fnames)
    
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

