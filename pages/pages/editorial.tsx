import BinderShopList from "../../components/common/BinderShopList";
import ArticlesList from "../../components/editorial/ArticlesList";
import { client, parseShopifyResponse } from "../../lib/shopify";

export interface ShopProps {
  articles?: any;
}

const Editorial: React.FC<ShopProps> = ({ articles }) => {
  return (
    <>
      <ArticlesList articles={articles?.articles?.edges} />
    </>
  );
};

export default Editorial;

export const getStaticProps = async () => {
  // Fetch all the products
  const articlesQuery = client.graphQLClient.query((root: any) => {
    root.addConnection("articles", { args: { first: 200 } }, (article: any) => {
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

  return {
    props: {
      articles: parseShopifyResponse(articles),
    },
  };
};
