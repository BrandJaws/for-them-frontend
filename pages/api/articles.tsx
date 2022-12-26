import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/shopify";

const articles = async (_req: NextApiRequest, res: NextApiResponse) => {
  const articlesQuery = client.graphQLClient.query((root: any) => {
    root.addConnection("articles", { args: { first: 2 } }, (article: any) => {
      article.add("id");
      article.add("title");
      article.add("handle");
      article.add("content");
      article.add("contentHtml");
      article.add("excerpt");
      article.add("excerptHtml");
      article.add("image", (image: any) => {
        image.add("id");
        image.add("url");
        image.add("src");
      });
      article.add("blog", (blog: any) => {
        blog.add("id");
        blog.add("title");
        blog.add("handle");
      });
    });
  });
  let articles = await client.graphQLClient
    .send(articlesQuery)
    .then(({ data }) => data);
  res.status(200);
  res.json(articles);
};
export default articles;
