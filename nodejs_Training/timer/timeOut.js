// setImmediate(): It is used to execute setImmediate.
// setInterval(): It is used to define a time interval.
// setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.

setTimeout(function() {   
    console.log("Hey! 1000 millisecond completed!..");  
}, 1000);  

function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
  //clearTimeout(id1);  
  clearInterval(id2);  

 