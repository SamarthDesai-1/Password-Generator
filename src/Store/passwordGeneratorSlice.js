import { createSlice } from "@reduxjs/toolkit";

const passwordLength = 25;

const generateNumbers = () => {
  const array = [0, 1, 2, 3, 4, "A", "a", "B", "b", "S", "s", "<>", "<", ">", 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[]", "[", "]"];

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
