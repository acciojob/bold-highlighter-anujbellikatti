function highlight() {
    //Write your code here
  var boldElements = document.querySelectorAll("strong");

    // Loop through the <strong> elements and change their color to green
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = "green";
    }

}


function return_normal() {
    //Write your code here
 var boldElements = document.querySelectorAll("strong");

    // Loop through the <strong> elements and change their color back to black
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = "black";
    }
    
}

