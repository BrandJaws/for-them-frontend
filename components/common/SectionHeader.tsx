import React from "react";
import Fade from "react-reveal/Fade"

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  animation?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  animation
}) => {
  return (
    <>
      <div className="flex gap-4 flex-col flex-wrap justify-center items-center">
        <Fade top cascade>
          <div className="subtitle-bold">{subtitle}</div>
        </Fade>
        <div className="title-large text-center uppercase">{title}</div>
        <Fade top cascade>
          <div className="text-small xl:max-w-[480px] lg:max-w-[480px] md:max-w-[680px] sm:max-w-max xs:max-w-max xs:px-[15px]">
            {description}
            {/* Your maximum healthy bind without
            <br className="sm:none xs:none" />
            sacrificing comfort, breathability, or
            <br className="sm:none xs:none" />
            style. */}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default SectionHeader;
