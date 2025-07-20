import qr from "qrcode-terminal";

async function handler(err, result) {
  if (err) {
    console.log("erro na aplicaçao");
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log("Qr code gerado com sucesso");
    console.log(qrcode);
  });
}

export default handler;
