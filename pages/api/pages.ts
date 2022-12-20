import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/shopify";

const pages = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  const pagesQuery = client.graphQLClient.query((root: any) => {
    root.addConnection("pages", { args: { first: 200 } }, (page: any) => {
      page.add("id");
      page.add("title");
      page.add("body");
      page.add("bodySummary");
      page.add("handle");
    });
  });
  let pages = await client.graphQLClient
    .send(pagesQuery)
    .then(({ data }) => data);
  res.status(200);
  res.json(pages);
}
export default pages;