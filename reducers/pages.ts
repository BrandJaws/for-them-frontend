import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import instance from "../services/services";
import { PageProps } from "../interfaces/index";

export const setPagesToStore = createAction(
  "setPagesToStore",
  function prepare(pages: any) {
    return {
      payload: pages,
    };
  }
);

export interface pagesState {
  pages?: Array<PageProps> | null;
}
export const initialState: pagesState = {
  pages: null,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPagesToStore, (state, action) => {
      state.pages = action.payload;
    });
    // builder.addCase(fetchSettings.fulfilled, (state, action) => {
    //   state.settings_detail = action.payload
    // });
    // builder.addCase(fetchFeaturedPropertyBySlug.fulfilled, (state, action) => {
    //   state.property_detail = action.payload;
    // });
  },
  // extraReducers: (builder) => {
  //     builder
  //     .addCase(fetchFeaturedProperties.fulfilled, (state, action) => {
  //       state.properties = action.payload;
  //     })
  //     .addCase(fetchFeaturedPropertyBySlug.fulfilled, (state, action) => {
  //       state.property_detail = action.payload;
  //     })
  // }
});

export default pagesSlice.reducer;
