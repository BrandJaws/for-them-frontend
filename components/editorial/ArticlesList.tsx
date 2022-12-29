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
          className="border-2 border-black p-4 pb-10 cursor-pointer text-center flex flex-col items-center justify-between"
        >
          <div className="w-full h-full align-middle flex items-center justify-center overflow-hidden max-h-96 min-h-[24rem] xs:min-h-[16rem] mb-5">
            <Image
              src={src}
              alt={title}
              loading="lazy"
              className="product-image object-contain w-full h-full max-h-96 min-h-[24rem] xs:min-h-[16rem] object-top"
              width={300}
              height={300}
            />
          </div>
          <div className="text-small text-center mb-5">{blog.title}</div>
          <div className="subtitle-bold text-center lightFont mb-5">{title}</div>
          <div className="">
            <Link href={`/blog/news/articles/${handle}`}>
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
    <div className="">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
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
