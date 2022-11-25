import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import wellness1 from "../../assets/images/wellness/wellness-1.png";
import wellness2 from "../../assets/images/wellness/wellness-2.png";
import wellness3 from "../../assets/images/wellness/wellness-3.png";
import wellness4 from "../../assets/images/wellness/wellness-4.png";
import wellness5 from "../../assets/images/wellness/wellness-5.png";
import wellness6 from "../../assets/images/wellness/wellness-6.png";
import wellness7 from "../../assets/images/wellness/wellness-7.png";
import wellness8 from "../../assets/images/wellness/wellness-8.png";
import wellness9 from "../../assets/images/wellness/wellness-9.png";
import { WellnessProps } from "../../interfaces";

export const WellnessComponent = ({ item }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mb-4">
        <Image src={item.url} alt="wellness image" />
        <h3 className="text">{item.title}</h3>
      </div>
    </>
  );
};

const Wellness = () => {
  const WellnessData: Array<WellnessProps> = [
    {
        title: 'Wellness 1',
        url: wellness1
    },
    {
        title: 'Wellness 2',
        url: wellness2
    },
    {
        title: 'Wellness 3',
        url: wellness3
    },
    {
        title: 'Wellness 4',
        url: wellness4
    },
    {
        title: 'Wellness 5',
        url: wellness5
    },
    {
        title: 'Wellness 6',
        url: wellness6
    },
    {
        title: 'Wellness 7',
        url: wellness7
    },
    {
        title: 'Wellness 8',
        url: wellness8
    },
    {
        title: 'Wellness 9',
        url: wellness9
    }
  ];

  return (
    <section className="container mx-auto md:px-[15px] sm:px-[15px] xs:px-[15px] section-padding">
      <div className="text-medium text-center">
        9 dimensions of
        <br className="sm:none xs:none" />
        <span className="title-medium text-[var(--primary1)]">
          wellness
        </span>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 py-8">
        {WellnessData.length > 0 && WellnessData.map((item, index) => {
            return (
                <WellnessComponent item={item} key={index} />
            )
        })}
      </div>
    </section>
  );
};

export default Wellness;
