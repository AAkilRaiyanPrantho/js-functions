// Function Structure andDeclaration and Calling

function startFan(){
    console.log('Stand Up');
    console.log('Walk to the switch board');
    console.log('Turn the switch on');
} // Basic Function Structure

startFan(); // Calling the function


// Function With Parameters

function square(x){
    var sq = 1;
    for( var i = 0; i < x; i++)
    {
        sq = x * x;
    }
    console.log('The square value of '+ x + ' is ' + sq);
    console.log('The square value of', x , 'is',  sq);
}

square(12);


// When Undefined values are returned in function?

// 1. When Return is not used in a function

function add(a,b){
   var sum = 0;
    sum = a + b;
}

var totalSum = add(5,7);
console.log(totalSum);

// 2. When no value is Returned from the function

function minus(a,b){
    var sub = 0;
     sub = a - b;
     return;
 }
 
 var totalSub = minus(85,50);
 console.log(totalSub);

//  3.When parameters are not sent to the function to operate

// <i> When absolutely no value is passed
function xtra(a,b){
    console.log('The best students are ',a,b);
}

xtra();

// // <ii> When not enough value is passed
function xtra(a,b){
    console.log('The best students are ',a,b);
}

xtra('Sama');

//  NaN - No A Number

//  1. When parameters are not sent to the function to operate and Return is used

function multiple(a,b){
    var multi = 1;
     multi = a * b;
     return multi;
 }
 
 var totalMultiple = multiple();
 console.log(totalMultiple);

// 2. When parameters and values sent are not same amount and Return is used

function division(a,b){
    var divide = 1;
     divide = a / b;
     return divide;
 }
 
 var totalDivision = division(4);
 console.log(totalDivision);


//  3. When No number / Some numbers is sent and an arithmetic calculation is executed

// [i]
function noNumber(x,y,z)
{
    console.log(x,y,z);
    var adding = x + y + z;
    console.log(adding);
}

noNumber();

// [ii]
function someNumber(p,q,r,s,t,x,y,z)
{
    console.log(p,q,r,s,t,x,y,z);
    var adding = x + y + z;
    console.log(adding);
}

someNumber(14,19,33);