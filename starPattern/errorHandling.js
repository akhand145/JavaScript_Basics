let a = "Node JS";
a = undefined;
if( a != undefined ) {
    throw new Error('This is not undefined');
} else {
    console.log('This is undefined');
}
 try {
    // jhfdkhfdkjk 
    console.log('We are inside try block');

 } catch (error) {
    console.log(error)
    console.log('Are you okay ?');

    console.log(error.message);

 } finally {
    console.log('We will run this');

 }