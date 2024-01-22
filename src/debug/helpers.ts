import { TokenData } from "src/types";

export function generateRandomTokenData(): TokenData {
  return {
    hash: generateRandomHexString(),
    tokenId: generateRandomHexString()
  }
}

function generateRandomHexString(): string {
  let hexString = "";
  const hexDigits = "0123456789abcdef";
  
  for (let i = 0; i < 128; i++) {
    hexString += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
  }
  
  return hexString;
}
