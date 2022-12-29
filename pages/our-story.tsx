import _ from "lodash";
import { client, parseShopifyResponse } from "../lib/shopify";

export default function OurStory({ page }) {
  const { body } = page?.page;
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

export const getStaticProps = async () => {
  // Fetching Footer Connect Nav
  const pageQuery = client.graphQLClient.query((root: any) => {
    root.add("page", { args: { handle: "our-story" } }, (page: any) => {
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
