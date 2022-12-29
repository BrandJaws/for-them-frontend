import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/gift-image.png";
import Fade from 'react-reveal/Fade';
import ScrollAnimation from "react-animate-on-scroll"
import SectionHeader from "../common/SectionHeader";

const GiftSection = () => {
  return (
    <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding xs:pt-[30px] xs:pb-[0px]">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
          {/* <SectionHeader
            title="Gift Card"
            subtitle="The"
            description="The ultimate euphoria-inducing gift, delivered by email or text so they can choose their perfect fit."
          /> */}
          <Fade bottom><div className="subtitle-bold text-center">The</div></Fade>
          <div className="title-large text-center uppercase">Gift Card</div>
          <Fade left>
            <div className="text-small text-center">
              The ultimate euphoria-inducing
              <br className="sm:none xs:none" />
              gift, delivered by email or text so
              <br className="sm:none xs:none" />
              they can choose their perfect fit.
            </div>
          </Fade>
          <Fade bottom>
            <Link href="/shop">
              <button type="button" className="btn-primary">
                Shop now
              </button>
            </Link>
          </Fade>
        </div>
        <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
          <Fade right>
            <Image src={sectionImage} alt="hero image" />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
