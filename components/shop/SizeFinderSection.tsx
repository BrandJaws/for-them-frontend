import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import sectionImage from "../../assets/images/hero-image.png";

const SizeFinderSection = () => {
  return (
    <>
      <section className="bg-primary5 section-padding">
        <div className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px]">
          <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
              <div className="text-large uppercase">Offerings</div>
              <div className="text-small xs:text-center">
                <strong>Kylo</strong>, where you are on your binding journey?
              </div>
              <div className="grid xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[50px] lg:section-padding xl:section-padding">
                <div className="col-span-1"></div>
                <div className="text-box col-span-2 p-5 border rounded-md border-black max-w-[200px] text-center">
                  <p>I&apos;m new to binding + not sure where to start</p>
                </div>
                <div className="text-box col-span-2 p-5 border rounded-md border-black max-w-[200px] text-center">
                  <p>None of the binders out there are doing it for me</p>
                </div>
                <div className="text-box col-span-2 p-5 border rounded-md border-black max-w-[200px] text-center">
                  <p>
                    I wear a binder daily + I&apos;m looking to get a new one
                  </p>
                </div>
                <div className="col-span-1"></div>
              </div>
              <Link href="/shop">
                <button type="button" className="btn-primary4 min-w-[200px]">
                  next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SizeFinderSection;
