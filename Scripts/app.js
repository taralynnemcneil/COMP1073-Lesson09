// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../person.txt', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
            // declare array
            var addressBook=[];
            
            // read the data frim person.txt file
            addressBook = JSON.parse(request.responseText);
           
           var addressBookLength = addressBook.length;;
           for(var person in addressBook) {
                person.sayHello = function() {
                output += "<br><hr><br>" + Person.name + " says hello";
                }
           }
           
           console.log(addressBook);
            
            var Person = {}; /* var Person = new Object();   */
            Person = JSON.parse(request.responseText);
            
            Person.sayHello = function() {
                output += "<br><hr><br>" + Person.name + " says hello";
            }

            // for every key in the Person object, loop...
            for (var key in Person) {

                // check if the key is the familyNames array
                if (key === "familyNames") {
                    output += "<br>Family Names: <br>";
                    output += "<hr><br>";
                    output += "<ul>";
                    for (var index = 0; index < Person.familyNames.length; index++) {
                        output += "<li>" + Person.familyNames[index] + "</li>";
                    } // for loop
                    output += "</ul>";
                } // if statement
                else if (key === "sayHello") {
                    Person.sayHello();
                }
                
                // for all other cases do the following...
                else {

                    output += Person[key] + "<br>";
                } // else statement

            } // for in

            firstParagraph.innerHTML = output;
        }
    });

    request.send();


})();

