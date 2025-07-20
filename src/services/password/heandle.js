import permittedCharacters from "./utils/permitedCharacter.js";
async function handle() {
  let character = [];
  let password = "";

  const TAMANHO_SENHA = process.env.TAMANHO_SENHA;
  character = await permittedCharacters();

  for (let i = 0; i < TAMANHO_SENHA; i++) {
    const index = Math.floor(Math.random() * character.length);
    password += character[index];
  }
  return password;
}

export default handle;
