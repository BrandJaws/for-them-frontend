import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Fade from "react-reveal/Fade";

export const ProductShop = ({ product, goToProductPage }) => {
  const { title, images, handle, description } = product;
  const { src: productImage } = images.length > 1 ? images[1] : images[0];
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
          <div className="subtitle-bold text-center">Shop</div>
          <div className="product-title uppercase">{title.includes("GIFT") ? "GIFTCARD" : "BINDERS"}</div>
          <div className="">
            <Link href={`/products/${handle}`}>
              <button type="button" className="binder-btn">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default function ProductsListShop({ products }) {
  const router = useRouter();
  // Navigate to product's page
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);
  return (
    <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductShop
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