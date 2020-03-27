
var bmi;
var jerryBmi;
var tomBmi;
var tom = {

    name: 'tom',
    mass: 8,
    height: 9,

    bodyMassIndex: function(){
      this.bmi  = this.mass / (this.height * this.height);
      return this.bmi
      }
};


var jerry = {

  name: 'jerry',
  mass: .1,
  height: 4,

  bodyMassIndex: function(){
    this.bmi  = this.mass / (this.height * this.height);
    return this.bmi
    }
  };


if (tom.bmi > jerry.bmi) {
     isTomHigher = true;
     console.log('Is Tom’s BMI higher than Jerry’s? ' + isTomHigher);
}
else{
    isTomHigher = false;
    console.log('Is Tom’s BMI higher than Jerry’s? ' + isTomHigher);

}


