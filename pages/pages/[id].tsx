import { client, parseShopifyResponse } from "../../lib/shopify";
import _ from "lodash";

export default function SinglePage({ page }) {
  const { title, body } = page?.page;
  return (
    <>
      {body && (
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      )}
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  // Fetching Footer Connect Nav
  const pageQuery = client.graphQLClient.query((root: any) => {
    root.add("page", { args: { handle: id } }, (page: any) => {
      page.add("id");
      page.add("handle");
      page.add("title");
      page.add("body");
      page.add("bodySummary");
      page.add("onlineStoreUrl");
      // page.add("metafields", (metafield: any) => {
      //   metafield.add("createdAt");
      //   metafield.add("description");
      //   metafield.add("id");
      //   metafield.add("key");
      //   metafield.add("namespace");
      //   metafield.add("parentResource");
      //   metafield.add("reference");
      //   metafield.add("references");
      //   metafield.add("type");
      //   metafield.add("updatedAt");
      //   metafield.add("value");
      // });
      page.add("createdAt");
      page.add("updatedAt");
    });
  });
  let page = await client.graphQLClient
    .send(pageQuery)
    .then(({ data }) => data);
  return {
    props: {
      page: parseShopifyResponse(page),
    },
  };
};

export async function getStaticPaths() {
  // const collection = await shopifyClient.collection.fetchWithProducts('gid://shopify/Collection/292795383974',{productsFirst: 100})
  // const paths = collection.products.map((product) => ({
  //   params: { productHandle: product.id }
  // }))
  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths: [], fallback: true }
}
