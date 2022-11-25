import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation";
import Nav from "../../components/Nav";
import ProductsList from "../../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";

export default function CollectionPage({ products, collectionName }) {
  return (
    <div>
      <Nav />
      <div>
        <BreadcrumbsNavigation collection={collectionName} />
        <ProductsList products={products} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { collectionName } = params;
  // Fetch all the collections
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
  const collections = parseShopifyResponse(collectionsData);
  // Get the right one
  const collection = collections.find(
    (collection) => collection.handle === collectionName
  );

  return {
    props: {
      collectionName,
      products: collection.products,
    },
  };
};
