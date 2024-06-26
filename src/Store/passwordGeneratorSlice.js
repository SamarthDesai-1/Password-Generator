import { createSlice } from "@reduxjs/toolkit";

const passwordLength = 30;

const generateNumbers = () => {
  const array = [
    ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', 
    '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/','\\'
  ];

  let randomString = "";
  for (let i = 0; i < passwordLength; i++) {
    randomString += array[Math.floor(Math.random() * array.length)];
  }
  return randomString;
};  

const passwordGeneratorSlice = createSlice({
  name: "password",
  initialState: "",
  reducers: {

    generate: (state) => {
      state = "";
      return state += generateNumbers();
    }
  }
});

export const passwordGeneratorActions = passwordGeneratorSlice.actions;
export default passwordGeneratorSlice;
