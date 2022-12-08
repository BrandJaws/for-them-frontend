import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/checkout-image.png";
import Fade from "react-reveal/Fade";

const BinderCallToActionSection = () => {
  return (
    <section className="section-padding binderCallToActionSection xl:h-[800px] lg:h-[800px] md:h-[650px] sm:h-[600px] xs:h-[500px]">
      <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 h-full">
        <div className="flex gap-10 flex-col flex-wrap justify-center items-center section-padding h-full">
          <div className="flex gap-4 flex-col justify-center items-center">
            <Fade top cascade>
              <div className="subtitle-bold">The</div>
            </Fade>
            <div className="title-large text-center uppercase">Binder</div>
          </div>
          <Fade bottom>
            <Link href="/shop">
              <button type="button" className="section-btn">
                Shop now
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default BinderCallToActionSection;
