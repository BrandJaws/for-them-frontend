import * as React from "react";
import Fade from "react-reveal/Fade";
import { apexChest } from "../../utils/data";
import { useCookies } from "react-cookie";

const SizeBinderForm: React.FC<any> = ({
  setStep,
  step,
  apexChestNumber,
  handleApexChest,
  bindingJourney,
  handleBindingJourney,
  handleBuyNow,
  handleResetSizeFinder,
  sizeErrorMessage,
  chestSizeChartObj,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["size", "bindingJourney"]);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const bindingJourneyList = [
    "I'm new to binding + not sure where to start",
    "None of the binders out there are doing it for me",
    "I wear a binder daily + I'm looking to get a new one",
  ];
  switch (step) {
    case 1:
      return (
        <div>
          <Fade right>
            <div className="flex gap-4 flex-wrap justify-center flex-col items-start">
              <div className="text-large xs:text-center xs:text-[16px]">
                Where you are on your binding journey?
              </div>
              <div className="lg:section-padding xl:section-padding xs:m-auto w-full flex xl:gap-[30px] lg:gap-[30px] md:gap-[30px] sm:gap-[30px] xs:gap-[7.5px]">
                {bindingJourneyList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-box h-[160px] border-4 rounded-md border-black text-center w-full flex items-center justify-center xs:mb-4"
                    >
                      <label
                        className={`binder-journey-box w-full h-full max-h-max items-center cursor-pointer xs:px-[0px] px-[15px] py-[25px] relative ${
                          bindingJourney === item && "active"
                        }`}
                      >
                        <input
                          type="radio"
                          className="w-full h-full rounded-full opacity-0"
                          name="bindingJourney"
                          value={item}
                          onChange={(event) => handleBindingJourney(event)}
                        />
                        <span className="absolute top-0 right-0 left-0 bottom-0 inline-flex items-center justify-center px-[15px] xs:px-[7.5px] py-[25px] xs:py-[15px] text-center w-full text-[18px] md:text-[12px] xs:text-[12px] md:leading-[16px] leading-[22px] xs:leading-[16px]">
                          {item}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 items-center justify-between w-full">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[150px] xs:min-w-[100px] previousBtn"
                      onClick={prevStep}
                    >
                      prev
                    </button>
                  </Fade>
                </div>
                <div className="next-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[150px] xs:min-w-[100px] nextBtn"
                      onClick={nextStep}
                    >
                      next
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
    case 2:
      return (
        <div>
          <Fade right>
            <div className="xs:m-auto flex gap-4 xs:gap-2 flex-col flex-wrap justify-center items-center">
              <div className="text-large xs:text-center xs:text-[16px]">
                Measure your apex chest
              </div>
              <div className="font-monumentExtendedLight font-[100] paragraph">
                Need help? Watch this <span className="underline">video</span>
              </div>
              <div className="lg:section-padding xl:section-padding w-full flex flex-wrap gap-2 xs:gap-1 mt-5 justify-center mb-5 xs:mb-2 xs:mt-2">
                {apexChest.map((item, index) => {
                  return (
                    <div key={index} className="block">
                      <label
                        className={`checkbox-chest inline-flex items-center cursor-pointer relative ${
                          apexChestNumber === item && "active"
                        }`}
                      >
                        <input
                          type="radio"
                          className="w-6 h-6 rounded-full opacity-0"
                          name="chest"
                          value={item}
                          onChange={(event) => handleApexChest(event)}
                        />
                        <span className="absolute top-0 right-0 left-0 bottom-0 inline-flex items-center justify-center">
                          {item}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 items-center justify-between w-full">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[150px] xs:min-w-[100px] previousBtn"
                      onClick={prevStep}
                    >
                      prev
                    </button>
                  </Fade>
                </div>
                <div className="next-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[150px] xs:min-w-[100px] nextBtn"
                      onClick={nextStep}
                    >
                      next
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
    case 3:
      return (
        <div>
          <Fade right>
            <div className="pt-0 pb-16">
              <div className="text-large xs:text-center mb-6">
                Your Binder size is
              </div>
              {chestSizeChartObj && (
                <div className="product-title uppercase">
                  {chestSizeChartObj.code}
                </div>
              )}
            </div>
          </Fade>
          <div className="flex gap-2 items-start justify-center">
            {!cookies.hasOwnProperty("size") && (
              <Fade>
                <button
                  type="button"
                  className="binder-btn min-w-[150px] xs:min-w-[100px] previousBtn"
                  onClick={prevStep}
                >
                  prev
                </button>
              </Fade>
            )}
            <Fade right>
              <button
                type="button"
                className="binder-btn max-w-max "
                onClick={handleBuyNow}
              >
                Buy now
              </button>
            </Fade>
            <Fade right>
              <button
                type="button"
                className="binder-btn max-w-max previousBtn"
                onClick={handleResetSizeFinder}
              >
                Reset
              </button>
            </Fade>
            {sizeErrorMessage && (
              <p className="text text-red-500 font-[600]">{sizeErrorMessage}</p>
            )}
          </div>
        </div>
      );
    default:
      return (
        <div>
          <Fade left>
            <div className="xs:py-[8] py-5 ">
              <div className="subtitle-bold lightFont">Find your size</div>
              <div className="product-title uppercase ">Size Finder</div>
            </div>
          </Fade>
          <Fade bottom>
            <button
              type="button"
              className="binder-btn max-w-max"
              onClick={nextStep}
            >
              Get Started
            </button>
          </Fade>
        </div>
      );
  }
};

export default SizeBinderForm;
