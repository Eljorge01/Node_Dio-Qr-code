async function permittedCharacters() {
  let permitted = [];

  if (process.env.LETRA_G === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (process.env.LETRA_P === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMERO === "true") {
    permitted.push(..."0123456789");
  }
  if (process.env.ESPECIAL_CARACTERS === "true") {
    permitted.push(..."%&*#@$?|");
  }

  return permitted;
}
export default permittedCharacters;
