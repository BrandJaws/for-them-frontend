import Link from "next/link";
import * as React from "react";
import Fade from "react-reveal/Fade"

const StorySection = () => {
  return (
    <>
      <section className="section-padding homeStorySection">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div className="col-span-6">
              {/* <Image src={sectionImage} alt="hero image" /> */}
              <Fade>
                <h2 className="title-medium text-[var(--primary2)] xl:pl-8 lg:pl-6 md:pl-4 sm:pl-4 xs:pl-0">
                  We are human
                  <br className="sm:none md:none" />
                  beings forever in
                  <br className="sm:none md:none" />
                  flux, radically
                  <br className="sm:none md:none" />
                  changing, evolving,
                  <br className="sm:none md:none" />
                  blooming. It&apos;s
                  <br className="sm:none md:none" />
                  nature in the
                  <br className="sm:none md:none" />
                  purest form
                </h2>
              </Fade>
            </div>
            <div className="col-span-2 flex gap-4 flex-col flex-wrap lg:justify-center lg:items-center xl:justify-center xl:items-center">
              <Link href="/shop">
                <button
                  type="button"
                  className="bg-primary xl:text-[18px] lg:text-[12px] md:text-[16px] sm:text-[14px] xs:text-[12px] xl:leading-[22px] lg:leading-[20px] md:leading-[20px] sm:leading-[18px] xs:leading-[16px] xl:px-[60px] lg:px-[40px] md:px-[50px] sm:px-[40px] 
                  xs:px-[30px] py-2 xl:min-h-[220px] lg:min-h-[200px] md:min-h-[180px] sm:min-h-[160px] xs:min-h-[120px] 
                  rounded-lg font-monumentExtended font-[800]"
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;
