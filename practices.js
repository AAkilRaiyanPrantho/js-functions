// 1. foo() bar() functions

function foo(){
    console.log('foo');
    bar();
}

function bar(){
    console.log('bar');
}

foo();

// 2. Average counting function

function make_avg(x,y,z){
    var sum = x + y + z;
    var avg = sum / 3;
    return avg;
}

console.log(make_avg(97,88,95).toFixed(2));


// Average counting using Array

function make_array_avg(resArray){
    var valuesSum = 0;
    for(var i = 0; i < resArray.length; i++){
         valuesSum = valuesSum + resArray[i];
    }

    var resultAverage = valuesSum / resArray.length;
    return resultAverage;
    
    // console.log(resArray);
}

var avgArray = [75, 88, 35, 69, 10, 120, 45,100,345,420];
var finalAverage = make_array_avg(avgArray)

console.log(finalAverage.toFixed(2));

// 4 odd and even checker

// Has Return + Has Parameter

function odd_even(integer1){
    if(integer1 % 2 == 0)
    {
        return 'Even';
    }
    else
    return 'Odd'
}

console.log('The given value is',odd_even(200000)); 

// No Return + Has Parameter

function even_odd(integer2){
    if(integer2 % 2 == 0)
    {
        console.log('The number is Even');
    }
    else
    console.log('The number is Odd');
}

even_odd(1005);

// 5. Traffic Signal Problem

function lightSignal(light){
    switch(light){
        case 'red':
        console.log('You are in DANGER');
        break;
    case 'yellow':
        console.log('You should STOP');
        break;
    default:
        console.log('You are allowed to CROSS');
    }        
}

var decision = lightSignal('yellow');
var decision = lightSignal('red');
var decision = lightSignal('blue');