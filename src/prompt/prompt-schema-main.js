import chalk from "chalk";

const schemaMain = [
  {
    name: "select",
    description: chalk.blue(
      "Escolha a ferramenta (1 - Qrcode ou 2 - Password)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.green("escolha apenas entre 1 e 2"),
    required: "true",
  },
];

export default schemaMain;
