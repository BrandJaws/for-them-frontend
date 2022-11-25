import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import sectionImage from "../../assets/images/hero-image.png";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
            <div className="subtitle-bold">our</div>
            <div className="title-large text-center capitalize">Offerings</div>
            <div className="text-small">
              Feel at home in your body without compromise.
              <br className="sm:none xs:none" />
              Patented design and made from 100% recycled
              <br className="sm:none xs:none" />
              nylon that never curls, rolls, or pills.
            </div>
            <Link href="/shop">
              <p className="font-monumentExtended font-[300] underline">
                find your size
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
