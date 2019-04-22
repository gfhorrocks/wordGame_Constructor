var inquirer = require("inquirer");
require("./word.js");

var wordList = ["bicycle", "rollerblades", "tennis", "football", "parachute", "snowboard", "skateboard", "hockey"];
var numWords = wordList.length - 1;
var answer=true;
var guess;
var gameOver = false;

while (answer) {

    var word = new Word(wordList[Math.floor(Math.random() * Math.floor(numWords))]);

    console.log(word);

    while (!gameOver) {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter: "
            }

        ]).then(function (user) {

            word.checkLetter(user.guess);
            console.log(word.getString(user.guess));

        });
        gameOver=true;
    }
    answer = false;
}

