//////////////// Using of Switch Case //////////////////////

let browser;

switch (browser) {
    case 'Edge' : 
    console.log("You have got the edge!");
    break;  

    case 'Chrome' :
    case 'Firefox' :
    case 'Safari' :
    case 'Opera' :
    console.log("Okay we support these browsers too");
    break;

    default : 
    console.log("We hope that this page looks okay");

}   ////// Output : We hope that this page looks okay

//////////////////////////////////////////////////////////

let a = console.log('a');

switch (a) {
  case 0:
    console.log( 0 );
    break;

  case 1:
    console.log( 1 );
    break;

  case 2:
  case 3:
    console.log( '2,3' );
    break;
}

////////////////////////////////////////////////////

let arg = console.log("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;

  default:
    console.log( 'An unknown value' );
}    