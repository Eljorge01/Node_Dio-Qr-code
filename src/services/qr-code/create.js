import prompt from "prompt";
import Schema_qrcode from "../../prompt/prompt-schema-qrcode.js";
import handler from "./handle.js";

async function createQrcode() {
  prompt.get(Schema_qrcode, handler);
  {
    prompt.start();
  }
}

export default createQrcode;
