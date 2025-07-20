import chalk from "chalk";

const Schema_qrcode = [
  {
    name: "link",
    description: chalk.yellow("digite o link para gerar o Qrcode"),
  },
  {
    name: "type",
    description: chalk.red(
      "Escolha entre o tipo (1- normal) ou (2 - terminal)"
    ),
    patter: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
  },
];

export default Schema_qrcode;
