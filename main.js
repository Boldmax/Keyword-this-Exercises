// (1)	What is the value of the keyword this in the following example:
/* var  data = this; 
console.log(data); */ 
// Answer: The value of keyword this in the example is "window"

// (2)	What does this function output? Why? 

function logThis(){ 
 return  this; 
}  
 logThis(); 
/* Answer: The function will ouput "window", and the reason is because
"this" in this function will take the default value */

// (3)	What does this function output? Why? 

var  instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! "  + this.firstName);
    }      
}  
instructor.sayHi();
/* Answer: the function will output "Hello! Tim". This is because the "this"
keyword takes the value the parent object according to the implicit binding rule.
*/

// (4) What does this function output? Why? 

var instructor = {
    firstName: 'Tim',
    info: { 
    catOwner: true,
    boatOwner: true 
},
displayInfo: function(){
    console.log("Cat owner? " + this.catOwner); 
    } 
}
console.log(instructor.displayInfo())
/* Answer: the function will output "Cat owner? undefined". This is because
"this.catOwner" is undefined under thesame parent as "displayInfo"
*/

// (5) What does this function output? Why? 

var instructor = {
    firstName: 'Tim',
    info: {
    catOwner: true,
    boatOwner: true,
    displayLocation: function(){
    return  this.data.location; 
},     
data: { 
    location: "Oakland" 
} 
}, 
}
instructor.info.displayLocation();

/*Answer: this function will output "Oakland". The reason for this is
 because "data.location" is defined under the scope where this keyword
  was called */

// (6)  What does this function output? Why? 
var instructor = { 
    ​firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
             ​ ​ ​ ​         return this.location;
            },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
            }
            },
         }
    instructor.info.data.logLocation()
    /* Answer: This will throw an error. The reason for this is that
    "displaylocation" is not defined under the data object. */

    // Part 2 Call Apply Bind Exercises

    // Fix the following code:

    var obj = {
        fullName: "Harry Potter",
        ​person: {
            sayHi: function(){
            return "This person's name is " + this.fullName
             ​ ​ }
         }
         };
let correctn = abj.person.sayHi.call(abj);
console.log(correctn)  // This will cosole log "This person's name is Harry Potter"

//  List two examples of "array-like-objects" that we have seen. 
// (1) DOM NodeList
// (2) Strings

// Functions to write:
// Make the tests pass for the following functions:
/* Write a function called sumEvenArguments ​which takes all of the arguments passed
 to a function and returns the sum of the even ones. */

 let sumEvenArguments = (...arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
    sum = sum + arr[i];
    }
    }
    return sum;
    };

// Write a function called arrayFrom ​which converts an array-like-object into an array.
let arrayFrom = (...args) => {
    if(!args.reduce) throw `this is not an array `;
    return args.reduce((acc, num) => {
    return acc + num;
    },0)
    };


    /* Write a function called invokeMax ​which accepts a function and a maximum amount.
     invokeMax ​should return a function that when called increments a counter. If the
     counter is greater than the maximum amount, the inner function should return "Maxed Out!" */
     function add(a,b){
        return a + b;
        }
        function invokeMax(fn,num){
        var counter = 0;
        return function(){
        counter++;
        if (counter > num) {
        return 'Max Out!';
        }
        return fn.apply(this,args);
        }
        }

     /* Write a function called guessingGame ​which takes in one parameter amount. The function 
     should return another function that takes in a parameter called guess. In the outer function,
      you should create a variable called answer ​which is the result of a random number between 0 
      and 10 as well as a variable called guesses ​which should be set to 0. */

