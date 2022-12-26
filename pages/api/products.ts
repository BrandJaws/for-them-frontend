import { NextApiRequest, NextApiResponse } from "next";
import { client, shopifyClient } from "../../lib/shopify";

const products = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  const products = await shopifyClient.product.fetchAll();
  res.status(200);
  res.json(products);
}
export default products;