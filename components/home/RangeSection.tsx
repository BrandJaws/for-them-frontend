import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/range-image.png";
import Fade from "react-reveal/Fade"

const RangeSection = () => {
  return (
    <section className="min-h-full">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        <div className="">
          <Image src={sectionImage} alt="hero image" className="w-full" />
        </div>
        <div className="section-padding flex gap-10 flex-col flex-wrap justify-center items-center bg-primary3">
          <Fade>
            <div className="text-medium text-left">
              For every day, all day
              <br className="sm:none xs:none" />
              comfort. The Binder
              <br className="sm:none xs:none" />
              moves and breathes
              <br className="sm:none xs:none" />
              with you. Customize
              <br className="sm:none xs:none" />
              yours here.
            </div>
          </Fade>
          <Fade bottom>
            <Link href="/shop">
              <button type="button" className="btn-primary2">
                Our range
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
