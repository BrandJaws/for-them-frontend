import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import sectionImage from "../../assets/images/hero-image.png";
import Fade from "react-reveal/Fade"

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
            <Fade right cascade>
              <div className="subtitle-bold">our</div>
            </Fade>
            <div className="title-large text-center capitalize">Offerings</div>
            <Fade bottom>
              <div className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[18px] xs:text-[16px] 
              xl:leading-[32px] lg:leading-[30px] md:leading-[28px] 
              sm:leading-[26px] xs:leading-[26px]">
                Feel at home in your body without compromise.
                <br className="sm:none xs:none" />
                Patented design and made from 100% recycled
                <br className="sm:none xs:none" />
                nylon that never curls, rolls, or pills.
              </div>
            </Fade>
            <Link href="/shop">
              <p className="font-monumentExtended font-[300] underline paragraph">
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
