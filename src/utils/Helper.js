let characters = "";
let passwordLength = 0;

const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};

const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};

const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }
  return "";
};

const setNumber = (isNumeric) => {
  if (isNumeric) {
    characters += "0123456789";
  }
  return "";
};
