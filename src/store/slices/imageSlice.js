import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: 0,
  name: "",
  size: "",
  type: "",
  url: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    selectImage: (state, action) => {
      state.selected = 1;
      state.name = action.payload.name;
      state.size = action.payload.size;
      state.type = action.payload.type;
      state.url = action.payload.url;
    },
    removeImage: (state) => {
      state.selected = 0;
      state.name = "";
      state.size = "";
      state.type = "";
      state.url = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
