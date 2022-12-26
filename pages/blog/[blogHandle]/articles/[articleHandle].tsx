import Image from "next/image";
import { client, parseShopifyResponse } from "../../../../lib/shopify";

export default function ArticlePage({ article }) {
  console.log(article, "Article Detail");
  const { blog } = article;
  const { articleByHandle } = blog;
  return (
    <>
      <div className="article-detail-wrapper">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6">
          <div className="col-span-1">
            <Image
              src={articleByHandle.image.src}
              alt="article image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="subtitle-bold text-left">{articleByHandle.title}</div>
          </div>
        </div>
        <div className="p-16 container mx-auto">
          <div className="grid grid-cols-1">
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: articleByHandle.contentHtml }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async ({ params }) => {
  const { articleHandle, blogHandle } = params;
  // Fetch one product
  const articleByHandleQuery = client.graphQLClient.query((root: any) => {
    root.add("blog", { args: { handle: blogHandle } }, (blog: any) => {
      blog.add("id");
      blog.add("handle");
      blog.add("title");
      blog.add(
        "articleByHandle",
        { args: { handle: articleHandle } },
        (article: any) => {
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
        }
      );
    });
  });
  let article = await client.graphQLClient
    .send(articleByHandleQuery)
    .then(({ data }) => data);
  return {
    props: {
      article: parseShopifyResponse(article),
    },
  };
};
