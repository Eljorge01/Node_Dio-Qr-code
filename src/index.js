import prompt from "prompt";
import schemaMain from "./prompt/prompt-schema-main.js";
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(schemaMain, async (error, choose) => {
    if (choose.select == 1)
      await createQrcode(console.log("escolheu o Qr code"));
    if (choose.select == 2)
      await createPassword(console.log("Escolheu o Password"));
  });
  prompt.start();
}

main();
