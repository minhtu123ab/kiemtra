//Bài 1
const valunA = document.getElementById("valun-a");
const valunB = document.getElementById("valun-b");
const btnSum = document.getElementById("sum");
const numberAll = document.getElementById("number-all");
const sumAll = document.getElementById("sum-all");

function check(num){
    if(num < 2) return false;
    for ( let i = 2; i <= Math.sqrt(num); i++ ){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

let prime = [];

function printPrime(a,b){
    prime = [];
    for(let i = a; i <= b; i++){
        if(check(i)) prime.push(i);
    }
    return prime;
}

function sum(){
    let sumPrime = 0;
    for(let i = 0; i < prime.length; i++){
        sumPrime += prime[i];
    }
    return sumPrime;
}

btnSum.addEventListener("click", function(event){
    event.preventDefault();
    if(Number(valunA.value) > Number(valunB.value)){
        alert("Vui lòng nhập a < b.");
    }
    else{
        printPrime(Number(valunA.value), Number(valunB.value));
        numberAll.innerHTML = prime;
        sumAll.innerHTML = sum();
    }
});


//Bài 2
const triangleFormAll = document.getElementById('triangle-form');
const inputNum = document.getElementById("input-number");

triangleFormAll.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let inputNumber = inputNum.value;
    if (inputNumber < 1 || inputNumber > 10) {
        alert("Vui lòng nhập số trong khoảng từ 1 đến 10.");
        return;
    }
    let triangleOutput = drawTriangle(inputNumber);
    document.getElementById("triangle").innerHTML = triangleOutput;
});

function drawTriangle(height) {
    let triangle = "";
    for (let i = 1; i <= height; i++) {
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(i);
        triangle += spaces + stars + "<br>";
    }
    return triangle;
}



