import chalk from "chalk";

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

let alpabet =
   " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 ";

function getRandomSymbol() {
   let index = rand(0, alpabet.length - 1);
   return alpabet[index];
}

let stdoutColumns = process.stdout.columns;
const lineArray = [];
let lineString = "";

const drawLine = (stdoutColumns) => {
   for (let i = 0; i < stdoutColumns; i++) {
      lineArray.push(getRandomSymbol());
      lineString = lineArray.join("");
   }
   console.log(chalk.greenBright.bold(lineString));
};

setInterval(() => drawLine(stdoutColumns), 100);
