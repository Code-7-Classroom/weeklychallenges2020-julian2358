var nameA = "Timmothy";
var nameB= "Joe";
var diff;
if (nameA.length > nameB.length) {
    diff = nameA.length - nameB.length;
        console.log("The name " + nameA + " is longer than " + nameB + " by " + diff + " charcacters")
}
 else if (nameB.length > nameA.length) {
    diff = nameB.length - nameA.length;
        console.log("The name " + nameB + " is longer than " + nameA + " by " + diff + " charcacters")
}else {
    console.log('The names are the same length.');
  }