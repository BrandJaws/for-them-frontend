import { client, shopifyClient } from "../lib/shopify";
import { COLORS } from "./data";

export const getColorNameByHexCode = (code: string) => {
  return COLORS.find((color) => color.hexCode === code);
};

export const getHexCodeByColorName = (name: string) => {
  return COLORS.find((color) => color.name === name);
};
