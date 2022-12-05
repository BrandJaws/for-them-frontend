import Link from "next/link";
import * as React from "react";
import Fade from "react-reveal/Fade";
import Animation from "react-reveal/Animation";

const SizeFinderSection = () => {
  return (
    <>
      <section className="bg-primary5 section-padding">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
              <div className="section-title uppercase">Offerings</div>
              <div className="text-small xs:text-center">
                <strong>Kylo</strong>, where you are on your binding journey?
              </div>
              <div className="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[30px] lg:section-padding xl:section-padding w-full">
                <div className="xl:col-span-3 lg:col-span-1"></div>
                <div className="text-box xl:col-span-2 lg:col-span-2 px-[20px] py-[30px] border rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[19px]">
                      I&apos;m new to binding + not sure where to start
                    </p>
                  </Fade>
                </div>
                <div className="text-box xl:col-span-2 lg:col-span-2 px-[20px] py-[30px] border rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[19px]">
                      None of the binders out there are doing it for me
                    </p>
                  </Fade>
                </div>
                <div className="text-box xl:col-span-2 lg:col-span-2 px-[20px] py-[30px] border rounded-md border-black text-center w-full flex items-center justify-center">
                  <Fade>
                    <p className="text-[18px] leading-[19px]">
                      I wear a binder daily + I&apos;m looking to get a new one
                    </p>
                  </Fade>
                </div>
                <div className="xl:col-span-3 lg:col-span-1"></div>
              </div>
              <Fade bottom>
                <Link href="/shop">
                  <button type="button" className="btn-primary4 min-w-[200px]">
                    next
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SizeFinderSection;
