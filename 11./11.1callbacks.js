///////////////////////// Callbacks /////////////////////////////

function loadScript(src,  callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);

}

////////////////////////////////////////////////////////////////

const myCalculator = (num1, num2) => {
    let sum = num1 + num2;
    console.log(sum)
}

myCalculator(5, 5);

////////////////////////////////////////////////////////////////

setTimeout( () => { myFunction("I love my India"); }, 2000);

const myFunction = (value) => {
    console.log(value);
}

/////////////////////////////////////////////////////////////////