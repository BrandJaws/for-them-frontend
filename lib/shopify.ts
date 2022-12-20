// import Client from "shopify-buy";
import Client from "shopify-buy/index.unoptimized.umd";
export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});
export const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});

export const parseShopifyResponse = (response) =>
  JSON.parse(JSON.stringify(response));
