import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/shopify";

const checkout = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  // Create an empty checkout
  client.checkout.create().then((checkout) => {
    // Do something with the checkout
  });
  res.status(200);
  res.json(null);
}
export default checkout;