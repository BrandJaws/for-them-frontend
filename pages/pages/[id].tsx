import Layout from "../../components/Layout";
import { client, parseShopifyResponse } from "../../lib/shopify";
import _ from "lodash";

export default function SinglePage({ page }) {
  const { title, body } = page?.page;
  return (
    <Layout title={title}>
      {body && (
        <div
          className="container mx-auto section-padding page-content"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
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
      // page.add("metafields", { args: { first: 200 } }, (metafield: any) => {
      // metafield.add("namespace");
      // metafield.add("key");
      // metafield.add("value");
      // metafield.add("type");
      // metafield.add("createdAt");
      // metafield.add("description");
      // metafield.add("id");
      // metafield.add("key");
      // metafield.add("namespace");
      // metafield.add("parentResource");
      // metafield.add("reference");
      // metafield.add("references");
      // metafield.add("type");
      // metafield.add("updatedAt");
      // metafield.add("value");
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
