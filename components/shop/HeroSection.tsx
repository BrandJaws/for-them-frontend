import * as React from "react";
import Fade from "react-reveal/Fade"
import { useDispatch } from "react-redux";
import { setActiveSizeFinderModal } from "../../reducers/shopify";

const HeroSection = () => {
  const dispatch = useDispatch();
  return (
    <>
      <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
            <Fade right cascade>
              <div className="subtitle-bold text-center lightFont">our</div>
            </Fade>
            <Fade top cascade>
              <div className="shop-heading text-center capitalize">PRODUCTS</div>
            </Fade>
            <Fade bottom>
              <div className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[18px] xs:text-[16px]
              xl:leading-[32px] lg:leading-[30px] md:leading-[28px]
              sm:leading-[26px] xs:leading-[26px] text-center">
                Feel at home in your body without
                <br className="sm:hidden xs:hidden lg:block" />
                compromise. Patented design and
                <br className="sm:hidden xs:hidden lg:block" />
                made from 100% recycled nylon
                <br className="sm:hidden xs:hidden lg:block" />
                that never curls, rolls, or pills.
              </div>
            </Fade>
            <a type="button" className="cursor-pointer" onClick={() => dispatch(setActiveSizeFinderModal(true))}>
              <p className="font-monumentExtended font-[400] underline paragraph">
                find your size
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
