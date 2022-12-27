import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FooterNavProps, FooterProps, PageProps } from "../interfaces/index";
import {
  FOOTER_CONNECT_MENU,
  FOOTER_DISCOVER_MENU,
  FOOTER_SHOP_MENU,
} from "../utils/data";
import instance from "../services/services";
import { client } from "../lib/shopify";

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

export const setActiveCartModal = createAction(
  "setActiveCartModal",
  function prepare(status: boolean) {
    return {
      payload: status,
    };
  }
);

export const setIsLoading = createAction(
  "setIsLoading",
  function prepare(status: boolean) {
    return {
      payload: status,
    };
  }
);

export const setActiveSizeFinderModal = createAction(
  "setActiveSizeFinderModal",
  function prepare(status: boolean) {
    return {
      payload: status,
    };
  }
);

export const addProductToCart = createAction(
  "addProductToCart",
  function prepare(product: any) {
    return {
      payload: product,
    };
  }
);

export const setCheckout = createAction(
  "setCheckout",
  function prepare(checkout: any) {
    return {
      payload: checkout,
    };
  }
);

export const setCheckoutWebUrl = createAction(
  "setCheckoutWebUrl",
  function prepare(webUrl: string) {
    return {
      payload: webUrl,
    };
  }
);

export const setShopifyToEmpty = createAction("setShopifyToEmpty");

export const minusProductQuantity = createAction(
  "minusProductQuantity",
  function prepare(id: string) {
    return {
      payload: id,
    };
  }
);

export const plusProductQuantity = createAction(
  "plusProductQuantity",
  function prepare(id: string) {
    return {
      payload: id,
    };
  }
);

// export const handleCheckoutBuyNow = createAsyncThunk(
//   "users/handleCheckoutBuyNow",
//   async () => {
//     try {
// // Create an empty checkout
// let checkoutInst = client.checkout.create().then((checkout) => {
//   // Do something with the checkout
//   console.log(checkout, "checkout");
//   return checkout;
// });
// console.log(checkoutInst, "checkoutInst")
//     } catch (e) {
//       return e;
//     }
//   }
// );

export interface shopifyState {
  pages?: Array<PageProps> | null;
  footerNavs?: FooterNavProps | null;
  headerNav?: any | null;
  isCartOpen?: boolean;
  isLoading?: boolean;
  cartItems?: any | null;
  checkout?: any | null;
  isSizeFinderModal?: any | null;
}

export const initialState: shopifyState = {
  pages: null,
  footerNavs: {
    discover: null,
    shop: null,
    connect: null,
  },
  headerNav: null,
  isCartOpen: false,
  isLoading: false,
  cartItems: null,
  checkout: null,
  isSizeFinderModal: false
};

export const shopifySlice = createSlice({
  name: "shopify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPagesToStore, (state, action) => {
      state.pages = action.payload;
    });
    builder.addCase(setShopifyToEmpty, (state, action) => {
      state.footerNavs = {
        discover: null,
        shop: null,
        connect: null,
      };
      state.headerNav = null;
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
    builder.addCase(setActiveCartModal, (state, action) => {
      state.isCartOpen = action.payload;
    });
    builder.addCase(addProductToCart, (state, action) => {
      if (state.cartItems && state.cartItems.length > 0) {
        let foundProductIndexFromStore = state.cartItems.findIndex((item) => item.product.id === action.payload.product.id);
        if (foundProductIndexFromStore > -1) {
          if (state.cartItems[foundProductIndexFromStore].selectedSize === action.payload.selectedSize) {
            state.cartItems[foundProductIndexFromStore].quantity = state.cartItems[foundProductIndexFromStore].quantity + action.payload.quantity;
          } else {
            state.cartItems = [...state.cartItems, action.payload];
          }
        } else {
          state.cartItems = [...state.cartItems, action.payload];
        }
      } else {
        state.cartItems = [action.payload];
      }
    });
    builder.addCase(setCheckout, (state, action) => {
      state.checkout = action.payload;
    });
    builder.addCase(minusProductQuantity, (state, action) => {
      let foundProductIndexFromStore = state.cartItems.findIndex((item) => item.selectedSize === action.payload);
      if (foundProductIndexFromStore > -1) {
        let objectFound = state.cartItems[foundProductIndexFromStore];
        if (objectFound.quantity > 1) {
          objectFound.quantity = objectFound.quantity - 1;
        }
      }
    });
    builder.addCase(plusProductQuantity, (state, action) => {
      let foundProductIndexFromStore = state.cartItems.findIndex((item) => item.selectedSize === action.payload);
      if (foundProductIndexFromStore > -1) {
        let objectFound = state.cartItems[foundProductIndexFromStore];
        if (objectFound.quantity >= 1) {
          objectFound.quantity = objectFound.quantity + 1;
        }
        state.cartItems[foundProductIndexFromStore] = objectFound;
      }
    });
    builder.addCase(setActiveSizeFinderModal, (state, action) => {
      state.isSizeFinderModal = action.payload;
    });
    builder.addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    });
  },
});

export default shopifySlice.reducer;
