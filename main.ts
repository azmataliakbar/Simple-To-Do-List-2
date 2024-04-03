#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to the TODO List 🔵🟢🟠\n"));

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();

console.log(chalk.rgb(65, 179, 247)(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();


let todos:any = [];

async function main() {
  let condition = true;

  while(condition) {
    let addTask = await inquirer.prompt([
      {
        name: "selectMenu",
        type: "list",
        message: chalk.italic.bold.underline.rgb(228, 142, 88)("\nSelect an option for ToDoList"),
        choices: ["Add Task in ToDoList", "Edit Task in ToDoList", "Delete Task in ToDoList", "Mark Completed Task in ToDoList"]
      }
    ]);

    switch (addTask.selectMenu) {
      case "Add Task in ToDoList":
      
        let newTask = await inquirer.prompt([
          {
            name: "todo",
            type: "input",
            message: chalk.greenBright.italic.bold.underline("\nEnter the task to Add in ToDoList: ")
          }
        ]);
        todos.push(newTask.todo);
        break;

      case "Edit Task in ToDoList":
        let editIndex = await inquirer.prompt([
          {
            name: "index",
            type: "number",
            message: chalk.greenBright.italic.bold.underline("\nEnter the index of the task you want to Edit (starting from 1): ")
          },
          {
            name: "newTask",
            type: "input",
            message: chalk.rgb(136, 78, 160).italic.bold.underline("\nEnter the new task: ")
          }
        ]);
        todos[editIndex.index -1, 1] = editIndex.newTask;
        break;

      case "Delete Task in ToDoList":
        let deleteIndex = await inquirer.prompt([
          {
            name: "index",
            type: "number",
            message: chalk.redBright.italic.bold.underline("\nEnter the index of the task you want to Delete (starting from 1): ")
          }
        ]);
        todos.splice(deleteIndex.index -1, 1);
        break;

      case "Mark Completed Task in ToDoList":
        let completeIndex = await inquirer.prompt([
          {
            name: "index",
            type: "number",
            message: chalk.blueBright.italic.bold.underline("\nEnter the index of the task you want to mark as Completed (starting from 1): ")
          }
        ]);
        todos[completeIndex.index -1] = "Task Completed: " + todos[completeIndex.index -1];
        break;
    }

    let addMore = await inquirer.prompt([
      {
        name: "continue",
        type: "confirm",
        message: chalk.rgb(45, 100, 245).italic.bold.underline("\nDo you want to perform another action? ")
      }
    ]);

    condition = addMore.continue;
  }

  console.log(chalk.italic.bold.underline.rgb(255, 255, 255)("\nTo Do List:- "));
  console.log(todos);
  console.log(chalk.italic.bold.underline.rgb(247, 139, 209)("\nThank you for using TODO List, Use Daily."));
}

main();






























/* let fruitChart = ["apple", "mango", "banana"];

fruitChart.push("melon");
console.log(fruitChart);

fruitChart.pop();
console.log(fruitChart);

fruitChart = fruitChart.concat(["kiwi", "apple"]);
console.log(fruitChart); */



/* let ramadanDays = 0;

while(ramadanDays <= 5) {
  console.log("Fasting");
  console.log("Five time prayers");
  ramadanDays++;
  // code execute
} */