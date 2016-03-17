// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";
   
    

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../people.txt', true);
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4) {
            var people = {};
            people = JSON.parse(request.responseText);
            
            // declare array
            var addressBook = [];
            
            // read the data frim person.txt file
            addressBook = people.addressBook;

            var addressBookLength = addressBook.length;

            for (var person = 0; person < addressBookLength; person++) {
                var output = "";
                
                addressBook[person].sayHello = function () {
                    output += "<br><hr><br>" + addressBook[person].name + " says hello";
                }
                
                // for every key in the Person object, loop...
                for (var key in addressBook[person]) {

                    // check if the key is the familyNames array
                    if (key === "familyNames") {
                        output += "<br>Family Names: <br>";
                        output += "<hr><br>";
                        output += "<ul>";
                        for (var index = 0; index < addressBook[person].familyNames.length; index++) {
                            output += "<li>" + addressBook[person].familyNames[index] + "</li>";
                        } // for loop
                        output += "</ul>";
                    } // if statement
                    else if (key === "sayHello") {
                        addressBook[person].sayHello();
                    }
                
                    // for all other cases do the following...
                    else {

                        output += addressBook[person][key] + "<br>";
                    } // else statement

                } // for in
                
                var paragraphString = "paragraph" + (person + 1)
                var paragraph = document.getElementById(paragraphString);
                paragraph.innerHTML = output;
            } // outer for loop
        } // out if statment


    });

    request.send();


})();

