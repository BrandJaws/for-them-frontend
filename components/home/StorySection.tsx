import Image from "next/image";
import * as React from "react";
import img1 from "../../assets/images/story-icons/TRANSCEND-WHITE-1.svg"
import img2 from "../../assets/images/story-icons/DWELL-WHITE-1.svg"
import img3 from "../../assets/images/story-icons/BLOOM-WHITE-1.svg"
import img4 from "../../assets/images/story-icons/BELONG-WHITE-1.svg"
import img5 from "../../assets/images/story-icons/SHARE-WHITE-1.svg"
import img6 from "../../assets/images/story-icons/CONNECT-WHITE-1.svg"
import img7 from "../../assets/images/story-icons/EMBODY-WHITE-1.svg"
import img8 from "../../assets/images/story-icons/CULTIVATE-WHITE-1.svg"
import img9 from "../../assets/images/story-icons/NOURISH-WHITE-1.svg"
import Link from "next/link";

const StorySection = () => {
  return (
    <>
      <section className="section-padding homeStorySection">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xl:gap-[70px]
            lg:gap-[70px] md:gap-[60px] sm:gap-[50px] xs:gap-[40px]">
            <div className="flex flex-row xs:flex-wrap gap-2 justify-around items-center">
              <Image src={img1} alt="story icon 1" />
              <Image src={img2} alt="story icon 2" />
              <Image src={img3} alt="story icon 3" />
              <Image src={img4} alt="story icon 4" />
              <Image src={img5} alt="story icon 5" />
              <Image src={img6} alt="story icon 6" />
              <Image src={img7} alt="story icon 7" />
              <Image src={img8} alt="story icon 8" />
              <Image src={img9} alt="story icon 9" />
            </div>
            <div className="story-title">
              Supporting the ecosystem within you, because your evolution  is the revolution
            </div>
            <div className="story-btn text-center">
              <Link href="/pages/our-story">
                <button
                  type="button"
                  className="btn-primary5"
                >
                  Our Story
                </button>
              </Link>
            </div>
            {/* <div className="col-span-6">
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
                  className="bg-primary xl:text-[18px] lg:text-[12px] md:text-[16px] sm:text-[14px] xs:text-[12px] xl:leading-[22px]
                  lg:leading-[20px] md:leading-[20px] sm:leading-[18px] xs:leading-[16px] xl:px-[60px] lg:px-[40px] md:px-[50px] sm:px-[40px]
                  xs:px-[30px] py-2 xl:min-h-[220px] lg:min-h-[200px] md:min-h-[180px] sm:min-h-[160px] xs:min-h-[120px]
                  rounded-lg font-monumentExtended font-[800]"
                >
                  Our Story
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;
