// forLoops //




// forInLoops //

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (let cat in catArray) {
  console.log(cat, 'says meow');
}

// forOfLoops //

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (let cat of catArray) {
  console.log(cat, 'says meow');
}

//Functions (Declaration)

//The call
fooFunction(); 
//The declaration
function fooFunction() {
  console.log('foo');
}

//write a for loop that starts at 3, and increments by 5, but doesnt go over 30
for(let x=3;x<30;x+=5){
    console.log(x)
}

for (let x = ) {
    console.log(x);
}

function addThreeSizes(side, base, hypotenuse) {
    for (x = side + base + hypotenuse; x % x == 0);
    return side + base + hypotenuse;
}
addThreeSizes('10ft', '10ft', '15ft');


let firstName = "Chad";
let lastName = "Rader";

console.log(firstName, lastName);



function names(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
names('Chad', 'Rader');



let side = "x";
let base = "y";
let hypotenuse = "z";

function isRightTriangle(x, y, z) {
    console.log(isRightTriangle);
}
isRightTriangle('x', 'y', 'z');



for (let x = 0; x <= 100; x++) {
    if (x % 15 == 0) {
        console.log('Fizz Buzz');
    } else if (x % 5 == 0) {
        console.log('Buzz');
    } else if (x % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
}





