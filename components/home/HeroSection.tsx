import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import sectionImage from "../../assets/images/hero-image.png";
import Fade from 'react-reveal/Fade';
import SectionHeader from "../common/SectionHeader";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          <Fade left>
            <Image src={sectionImage} alt="hero image" />
          </Fade>
          <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
            <SectionHeader 
              title="Binder"
              subtitle="The"
              description="Your maximum healthy bind with comfort, breathability and style."
            />
            {/* <Fade right cascade>
              <div className="subtitle-bold text-center">The</div>
            </Fade>
            <div className="title-large text-center uppercase">Binder</div>
            <Fade right cascade>
              <div className="text-small">
                Your maximum healthy bind with{" "}
                <br className="sm:none xs:none" />
                comfort, breathability and style.
              </div>
            </Fade> */}
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
