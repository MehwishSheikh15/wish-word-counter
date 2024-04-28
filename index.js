#! //usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your Sentence to count the world: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
