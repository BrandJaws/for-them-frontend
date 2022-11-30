import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Fade from "react-reveal/Fade"

export const Product = ({ product, goToProductPage }) => {
  const { title, images, handle, description } = product;
  const { src: productImage } = images[0];
  return (
    <>
      <Fade bottom>
        <div
          className="p-4 cursor-pointer text-center flex flex-col items-center justify-between xl:gap-[50px] lg:gap-[42px] md:gap-[34px] sm:gap-[26px] xs:gap-[26px] xl:mb-[50px] lg:mb-[42px] md:mb-[34px] sm:mb-[26px] xs:mb-[26px]"
          onClick={() => goToProductPage(handle)}
        >
          <div className="xl:h-[300px] lg:h-[300px] xl:w-[300px] lg:w-[300px] xs:w-full xs:h-full align-middle flex items-center justify-center">
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
          <div className="product-title uppercase">{title}</div>
          <div className="text break-before-all break-words w-full text-clip xl:h-16 lg:h-16 md:h-16 sm:h-16 xs:h-20 overflow-hidden">
            {description}
          </div>
          <Link href={`/products/${handle}`}>
            <button type="button" className="btn-primary">
              Shop now
            </button>
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default function ProductsList({ products }) {
  const router = useRouter();
  // Navigate to product's page
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);
  return (
    <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.handle}
              product={product}
              goToProductPage={goToProductPage}
            />
          ))
        ) : (
          <p>There are no products in this collection</p>
        )}
      </div>
    </div>
  );
}
