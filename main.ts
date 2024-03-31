#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let todos:any = [];

async function main() {
  let condition = true;

  while(condition) {
    let addTask = await inquirer.prompt([
      {
        name: "selectMenu",
        type: "list",
        message: chalk.yellowBright.italic.bold.underline("\nSelect an option for ToDoList"),
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
            message: chalk.yellowBright.italic.bold.underline("\nEnter the new task: ")
          }
        ]);
        todos[editIndex.index] = editIndex.newTask;
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
        message: chalk.magentaBright.italic.bold.underline("\nDo you want to perform another action? ")
      }
    ]);

    condition = addMore.continue;
  }

  console.log(chalk.redBright.italic.bold.underline("\nTo Do List:- "));
  console.log(todos);
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