
let n = parseInt(prompt("Digite o número que deseja verificar:"));
const fibonacci = (x) => {
    let num1=0, num2=1, num3=1
    while(x > num3){
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    if(x == 0 || x == 1){
        console.log(`O número ${x} está na sequência de fibonacci.`)
    }else if(x == num3){
        console.log(`O número ${x} está na sequência de fibonacci.`)
    }else {
        console.log(`O número ${x} não pertence a sequência de fibonacci`)
    }
}

fibonacci(n)