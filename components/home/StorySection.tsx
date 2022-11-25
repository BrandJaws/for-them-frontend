import Link from "next/link";
import * as React from "react";

const StorySection = () => {
  return (
    <>
      <section className="section-padding homeStorySection">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid lg:grid-cols-8 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div className="col-span-6">
              {/* <Image src={sectionImage} alt="hero image" /> */}
              <h2 className="title-medium text-[var(--primary2)]">
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
            </div>
            <div className="col-span-2 flex gap-4 flex-col flex-wrap lg:justify-center lg:items-center">
              <Link href="/shop">
                <button
                  type="button"
                  className="bg-primary lg:px-[60px] md:px-[50px] sm:px-[40px] xs:px-[30px] py-2 lg:min-h-[220px] md:min-h-[180px] sm:min-h-[160px] xs:min-h-[140px] rounded-lg font-monumentExtended font-[800]"
                >
                  Shop now
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
