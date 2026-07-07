let calculator= {
    Num1: Number(prompt("Enter Number 1")),
    Num2: Number(prompt("Enter Number 2")),
    operation: prompt(" Enter Operation +, -, *,**, / ")
}
if(calculator.operation === "+"){
    document.write("Answer is:", calculator.Num1 + calculator.Num2);
}
else if(calculator.operation === "-"){
    document.write("Answer is:", calculator.Num1 - calculator.Num2);
}
else if(calculator.operation === "*"){
    document.write("Answer is:", calculator.Num1 * calculator.Num2);
}
else if(calculator.operation === "/") {
    if (calculator.Num2 === 0){
        document.write("Error:cannot divide by 0");
    }
    else{
    document.write("Answer is:", calculator.Num1 / calculator.Num2);
    }
}