

var person = prompt("Please Enter Anything");

if(person === person.toUpperCase()) {
    console.log("Message was typed in all caps")
}
else if(person === person.toLowerCase()) {
    console.log("Message was typed in all lowercase characters")
}
else{
    console.log("Neither all caps or all lower case was used")
};