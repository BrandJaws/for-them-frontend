import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import sectionImage from "../../assets/images/hero-image.png";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          <div>
            <Image src={sectionImage} alt="hero image" />
          </div>
          <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
            <div className="subtitle-bold">The</div>
            <div className="title-large text-center uppercase">Binder</div>
            <div className="text-small">
              For every day, all day comfort. The{" "}
              <br className="sm:none xs:none" />
              Binder moves and breathes with you.
              <br className="sm:none xs:none" /> Customize yours here.
            </div>
            <Link href="/shop">
              <button type="button" className="btn-primary">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
