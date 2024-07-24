import isNumber from "./isnumber";

export function multi(A: number, B: number): void {
    let i = 0;
    while (i <= B) {
        const result = A * i;
        console.log(`${i} x ${A} = ${result}`);
        i++;
    }
}

try {
    const parametre = process.argv.slice(2)

    if (parametre.length > 2) {
        throw "Wrong use of the program.";
    } else {
        const a = parametre[0];
        const b = parametre[1];
        if (!isNumber(a) || !isNumber(b)) {
            throw "Wrong use of the program. Only numbers.";
        } else {
            const number1 = parseInt(a, 10);
            const number2 = parseInt(b, 10);
            multi(number1, number2);
        }
    }
    
} catch (error) {
    console.error(error);
}