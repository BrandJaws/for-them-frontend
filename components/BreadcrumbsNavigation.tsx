import Link from "next/link";

export default function BreadcrumbsNavigation({ collection }) {
  return (
    <div>
      <div aria-label="breadcrumb">
        <Link key="1" color="inherit" href="/">
          Products
        </Link>
        <h2>
          {collection && collection.replace(/^\w/, (c) => c.toUpperCase())}
        </h2>
      </div>
    </div>
  );
}
