// Switch is an alternative and a faster way of If-Else conditional statements

var bankBalance = 500000000;

// This is a Range example

switch(true){
    case bankBalance <= 4000:
        console.log('MF you poor af!!!!');
        break;
    case bankBalance <= 40000:
        console.log('MF you poor !!!!');
        break;
    case bankBalance <= 400000:
        console.log('MF you kinds poor !!!!');
        break;
    case bankBalance <= 4000000:
        console.log('MF you chill !!!!');
        break;
    case bankBalance <= 40000000:
        console.log('MF you kinda rich!!!!');
        break;
    case bankBalance <= 4000000000:
        console.log('MF you RICH af!!!!');
        break;
    default:
        console.log('MF you RICH RICH!!!');
        
}
// This is a DirectValue example

switch(bankBalance){
    case  4000:
        console.log('MF you poor af!!!!');
        break;
    case 40000:
        console.log('MF you poor !!!!');
        break;
    case 400000:
        console.log('MF you kinds poor !!!!');
        break;
    case 4000000:
        console.log('MF you chill !!!!');
        break;
    case 500000000:
        console.log('MF you kinda rich!!!!');
        break;
    case 7000000000:
        console.log('MF you RICH af!!!!');
        break;
    default:
        console.log('MF you RICH RICH!!!');
        
}