import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Fade from "react-reveal/Fade";

export const Article = ({ key, product, goToProductPage }) => {
  const { title, image, handle, content, blog } = product;
  const { src } = image;
  return (
    <>
      <Fade bottom>
        <div
          key={key}
          className="p-4 cursor-pointer text-center flex flex-col items-center justify-between xl:gap-[50px] lg:gap-[42px] md:gap-[34px] sm:gap-[26px] xs:gap-[26px] xl:mb-[50px] lg:mb-[42px] md:mb-[34px] sm:mb-[26px] xs:mb-[26px]"
        >
          <div className="xl:h-[300px] lg:h-[300px] xl:w-[300px] lg:w-[300px] xs:w-full xs:h-full align-middle flex items-center justify-center overflow-hidden">
            <Image
              src={src}
              alt={title}
              loading="lazy"
              className="product-image object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="text-small text-center">{blog.title}</div>
          <div className="subtitle-bold text-center">{title}</div>
          <div className="">
            <Link href={`/blog/${blog.handle}/articles/${handle}`}>
              <button type="button" className="binder-btn">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default function ArticlesList({ articles }) {
  const router = useRouter();
  // Navigate to product's page
  const goToProductPage = (articleHandle: string) =>
    router.push(`/articles/${articleHandle}`);
  return (
    <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <Article
              key={article.handle}
              product={article.node}
              goToProductPage={goToProductPage}
            />
          ))
        ) : (
          <p>There are no articles in the website.</p>
        )}
      </div>
    </div>
  );
}
