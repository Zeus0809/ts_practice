import * as readline from 'readline';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

function input(prompt: string): Promise<string> {
    const rl = readline.createInterface( { input: process.stdin, output: process.stdout } );
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main(): Promise<void> {

    console.log("Welcome to TS calculator!");
    const raw_a = await input("Type number A: ");
    const raw_b = await input("Type number B: ");
    const number_a = Number(raw_a.trim());
    const number_b = Number(raw_b.trim());
    const op = await input("What's the operation? Options: +, -, *, /");

    let result: number;
    if (op === "+") {
        result = add(number_a, number_b);
    } else if (op === "-") {
        result = subtract(number_a, number_b);
    } else if (op === "*") {
        result = multiply(number_a, number_b);
    } else if (op === "/") {
        result = divide(number_a, number_b);
    } else {
        console.log("Invalid operation!");
        return;
    }

    console.log(`Result: ${result}.`);

}

main()

