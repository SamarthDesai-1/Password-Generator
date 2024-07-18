import { createSlice } from "@reduxjs/toolkit";

const passwordLength = 40;

const generatePassword = () => {
  const array = [
    ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', 
    '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/','\\'
  ];

  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[Math.floor(Math.random() * array.length)]);
  }

  let randomString = "";
  for (let i = 0; i < passwordLength; i++) {
    randomString += newArr[Math.floor(Math.random() * array.length)];
  }
  // console.log(randomString);
  return randomString;
};  


const generateNumber = () => {
  let maxLengthNumber = 10;
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  let randomNumber = "";

  for (let i = 0; i < maxLengthNumber; i++) {
    randomNumber += numbers[Math.floor(Math.random() * numbers.length)];
  }
  // console.log(randomNumber);
  return randomNumber;
}


const passwordGeneratorSlice = createSlice({
  name: "password",
  initialState: "",
  reducers: {

    generate: (state) => {
      state = "";
      return state += generatePassword();
    },
    numberPassword: (state) => {
      state = "";
      return state += generateNumber();
    },
  }
});

export const passwordGeneratorActions = passwordGeneratorSlice.actions;
export default passwordGeneratorSlice;
