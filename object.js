// Object declaration

var geometryBox = {
    pencil: 8,
    compass: 2,
    ruler: 6,
    eraser: 3,
    sharpener: 1
}

// Get Values
// 1. (.) System

var value1 = geometryBox.pencil;
console.log(value1);

// 2. [] System

var value2 = geometryBox['ruler'];
console.log(value2);

// 3. Dynamic variable system

var dyna = 'sharpener';
var value3 = geometryBox[dyna];
console.log(value3);

// Set Values
// 1. (.) System

var value1 = geometryBox.pencil;
console.log(value1);

geometryBox.pencil = 12;
console.log(geometryBox.pencil);

// 2. [] System

var value2 = geometryBox['ruler'];
console.log(value2);

geometryBox['ruler'] = 5;
console.log(geometryBox['ruler']);

// 3. Dynamic variable system

var dyna = 'sharpener';

var value3 = geometryBox[dyna];
console.log(value3);

geometryBox[dyna] = 9;
console.log(geometryBox[dyna]);


// Using Loops to get the values from the objects
// style 1: Normal for loop

const keys = Object.keys(geometryBox);
console.log(keys);

const values = Object.values(geometryBox);
console.log(values);

for(var i=0; i<keys.length;i++){
    var propertyName = keys[i]; //Object.key return a string or Array which can be used to find out how many properties are there using the Length function
    var propertyValue = geometryBox[propertyName];
    console.log(propertyName,propertyValue);
}


// style 2: for in loop

for( var propertyName in geometryBox)
{
    const value = geometryBox[propertyName];
    console.log(propertyName,value);
}