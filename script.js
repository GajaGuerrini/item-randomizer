var item;
var nameOfTable;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('getItemButton')) {
        clickGetItem(event.target);
    }
});

function clickGetItem(button) {
  console.log(button)
  var container = button.closest('.itembox');
  var listOfItems = container.querySelector("#textbox").value;
  var nameOfTable = container.querySelector("#fname").value;

  const array = listOfItems.split(/\r?\n/);
  var item = array[Math.floor(Math.random()*array.length)];

  container.querySelector("#item").innerHTML = nameOfTable + " : " + item;
    
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

