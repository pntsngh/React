const calculate = (a, b) => {

    let add = a + b;
    let subtract = a - b; 
    let multiply = a * b;
    let divide = a / b;

    return [add, subtract, multiply, divide];

}

const [add, subtract, multiply, divide] = calculate(6, 8);

console.log(multiply);