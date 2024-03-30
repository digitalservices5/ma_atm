#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 70000;
let pino = 4568;
const atm = await inquirer.prompt([
    { message: "enter your pin", type: "number", name: "pin" }
]);
if (atm.pin === pino) {
    let operation = await inquirer.prompt([
        { message: "select any option", type: "list", name: "list", choices: ["withdraw", "check balance"] },
    ]);
    if (operation.list === "withdraw") {
        let amount = await inquirer.prompt([
            { message: "enter your amount", type: "number", name: "amount" },
        ]);
        if (amount.amount <= balance && amount.amount >= 500) {
            balance -= amount.amount;
            console.log("yuor remaining amount is:" + balance);
        }
        else {
            console.log("invalid amount");
        }
    }
    else if (operation.list === "check balance") {
        console.log("your balnace:" + balance);
    }
}
else {
    console.log("No pin");
}
