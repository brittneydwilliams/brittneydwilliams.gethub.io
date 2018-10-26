// var button = document.getElementsByTagName("button")[0]
// button.addEventListener("click", function()
// {
// 	console.log("Click!");
// })


//create a variable called button and assign it to get enter element by ID

//create a variable called input assign it to get userinput element by ID

//create a variable called unordered list and assign it to querySelector

//add an EventListener to button to listen for click function()

// open our curly brackets tell it we want to create a list element assign to variable li

// append list to child create test node called testing through document

// add a list element to the unordered list


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength()
{
	return input.value.length;
}

function createListElement()
{
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

}

// function addListAfterClick()
// {

// 	if(inputLength() > 0) //if(input.value.length > 0)
// 	{
		
// 		createListElement();
// 	}
	
// }

function addListAfterKeypress(event)
{
	if(inputLength() > 0 && event.keyCode === 13) //if(input.value.length > 0 && event.keyCode === 13) //event.which also works instead of event.keyCode
	{
		
		createListElement();
	}
	
}

// // button.addEventListener("click", addListAfterClick)



input.addEventListener("keypress", addListAfterKeypress);



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("userinput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



