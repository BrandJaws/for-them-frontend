import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/gift-image.png";
import Fade from 'react-reveal/Fade';

const GiftSection = () => {
  return (
    <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
          <Fade bottom><div className="subtitle-bold">Gift a</div></Fade>
          <div className="title-large text-center uppercase">Binder</div>
          <div className="text-small">
            Give the gift of a comfortable bind.
            <br className="sm:none xs:none" />
            This gift card is delivered by email or
            <br className="sm:none xs:none" /> text to your loved one so they
            can
            <br className="sm:none xs:none" />
            customize the size and fabric of
            <br className="sm:none xs:none" />
            their Binder
          </div>
          <Fade bottom>
            <Link href="/shop">
              <button type="button" className="btn-primary">
                Shop now
              </button>
            </Link>
          </Fade>
        </div>
        <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
          <Image src={sectionImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
