import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/shopify";

const footerConnect = async (_req: NextApiRequest, res: NextApiResponse) => {
  const footerConnectMenuQuery = client.graphQLClient.query((root: any) => {
    root.add(
      "menu",
      { args: { handle: process.env.FOOTER_CONNECT_MENU } },
      (shop: any) => {
        shop.add("id");
        shop.add("handle");
        shop.add("items", (item: any) => {
          item.add("id");
          item.add("items");
          item.add("resourceId");
          item.add("tags");
          item.add("title");
          item.add("type");
          item.add("url");
        });
        shop.add("itemsCount");
        shop.add("title");
      }
    );
  });
  let footerConnectMenuData = await client.graphQLClient
    .send(footerConnectMenuQuery)
    .then(({ data }) => data);
  res.status(200);
  res.json(footerConnectMenuData);
};

export default footerConnect;
