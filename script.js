var item;
var nameOfTable;

function Table(tablename, tablecontetnt) {
  this.Name = tablename
  this.Array = tablecontent
}

function clickGetItem() {
    var listOfItems =  document.getElementById("textbox").value
    nameOfTable = document.getElementById("fname").value
    console.log(nameOfTable)
    const array = listOfItems.split(/\r?\n/);
    console.log(array)
    item = array[Math.floor(Math.random()*array.length)];
    console.log(item)
    document.getElementById("item").innerHTML = nameOfTable + " : " + item;
    
}