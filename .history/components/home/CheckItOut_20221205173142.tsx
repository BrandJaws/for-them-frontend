import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/checkout-image.png";
import Fade from "react-reveal/Fade"

const CheckItOut = () => {
  return (
    <section className="">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        <div className="flex gap-10 flex-col flex-wrap justify-center items-center bg-primary4 section-padding">
          <Fade>
            <div className="text-large text-center">
              Come join the
              <br className="sm:none xs:none" />
              <span className="title-medium text-[var(--primary1)]">conversation</span>
            </div>
          </Fade>
          <Fade bottom>
            <Link href="/shop">
              <button type="button" className="btn-primary3">
                Check It Out
              </button>
            </Link>
          </Fade>
        </div>
        <div className="text-center">
          <Image src={sectionImage} alt="hero image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default CheckItOut;
