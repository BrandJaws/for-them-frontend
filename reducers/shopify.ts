import { createSlice, createAction } from "@reduxjs/toolkit";
import { FooterNavProps, FooterProps, PageProps } from "../interfaces/index";
import { FOOTER_CONNECT_MENU, FOOTER_DISCOVER_MENU, FOOTER_SHOP_MENU } from "../utils/data";

export const setPagesToStore = createAction(
  "setPagesToStore",
  function prepare(pages: any) {
    return {
      payload: pages,
    };
  }
);

export const setNavToStore = createAction(
  "setNavToStore",
  function prepare(footerNav: FooterProps) {
    return {
      payload: footerNav,
    };
  }
);

export interface shopifyState {
  pages?: Array<PageProps> | null;
  footerNavs?: FooterNavProps | null;
  headerNav?: any | null;
}

export const initialState: shopifyState = {
  pages: null,
  footerNavs: {
    discover: null,
    shop: null,
    connect: null
  },
  headerNav: null
};

export const shopifySlice = createSlice({
  name: "shopify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPagesToStore, (state, action) => {
      state.pages = action.payload;
    });
    builder.addCase(setNavToStore, (state, action) => {
      if (action.payload.navType === process.env.FOOTER_DISCOVER_MENU) {
        state.footerNavs.discover = action.payload.data;
      }
      if (action.payload.navType === process.env.FOOTER_SHOP_MENU) {
        state.footerNavs.shop = action.payload.data;
      }
      if (action.payload.navType === process.env.FOOTER_CONNECT_MENU) {
        state.footerNavs.connect = action.payload.data;
      }
      if (action.payload.navType === process.env.HEADER_MENU) {
        state.headerNav = action.payload.data;
      }
    });
  },
});

export default shopifySlice.reducer;
