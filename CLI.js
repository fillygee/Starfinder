const inquirer = require("inquirer");

const startGame = async () => {
  const introChoice = await inquirer.prompt([
    {
      type: "",
      name: "",
      message: "",
      choices: [],
    },
  ]);

  if (introChoice.name === A) {
    const nextChoice = await inquirer.prompt([
      {
        type: "",
        name: "",
        message: "",
        choices: "",
      },
    ]);
  } else {
  }
};
