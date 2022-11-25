import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export const Product = ({product, goToProductPage}) => {
  const { id, title, images, variants, handle, description } = product
  const { src: productImage } = images[0]
  const { price } = variants[0]
  console.log(product, "SIngle Product");
  return (
    <>
      <div
        className="p-4 cursor-pointer text-center flex flex-col flex-wrap gap-4 items-center justify-center"
        onClick={() => goToProductPage(handle)}>
        <div className="lg:h-[300px] lg:w-[300px] xs:w-full xs:h-full align-middle flex items-center justify-center">
          <Image
            src={productImage}
            alt={title}
            loading="lazy"
            className="product-image object-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="subtitle-bold">Shop</div>
        <div className="text-large uppercase">
          {title}
        </div>
        <div className="text break-before-all break-words w-full text-clip h-14 overflow-hidden">{description}</div>
        <Link href={`/products/${handle}`}>
          <button type="button" className="btn-primary">
            Shop now
          </button>
        </Link>
      </div>
    </>
  )
}

export default function ProductsList({ products }) {
  const router = useRouter()
  // Navigate to product's page
  const goToProductPage = productHandle => router.push(`/products/${productHandle}`)
  return (
    <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        {products && products.length > 0 ? products.map((product) => (
          <Product
            key={product.handle}
            product={product}
            goToProductPage={goToProductPage}
          />
        )) : <p>There are no products in this collection</p>}
      </div>
    </div>
  );
}
