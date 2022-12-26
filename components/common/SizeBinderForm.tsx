import * as React from "react";
import Fade from "react-reveal/Fade";
import { apexChest } from "../../utils/data";

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
            <div className="flex gap-4 flex-col flex-wrap justify-center items-start">
              <div className="text-large xs:text-center">
                Where you are on your binding journey?
              </div>
              <div className="lg:section-padding xl:section-padding w-full flex xl:gap-[50px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] xs:gap-[30px]">
                {bindingJourneyList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-box h-[160px] border-4 rounded-md border-black text-center w-full flex items-center justify-center"
                    >
                      <label
                        className={`binder-journey-box w-full h-full max-h-max items-center cursor-pointer px-[20px] py-[30px] relative ${
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
                        <span className="absolute top-0 right-0 left-0 bottom-0 inline-flex items-center justify-center px-[20px] py-[30px] text-center w-full text-[18px] leading-[22px]">
                          {item}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
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
                      className="binder-btn min-w-[200px]"
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
            <div className="flex gap-4 flex-col flex-wrap justify-center items-start">
              <div className="text-large xs:text-center">
                Measure your apex chest
              </div>
              <div className="font-monumentExtended font-[300] paragraph">
                Need help? Watch this <span className="underline">video</span>
              </div>
              <div className="lg:section-padding xl:section-padding w-full flex flex-wrap gap-2">
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
              <div className="flex gap-4 items-center justify-center">
                <div className="prev-btn">
                  <Fade>
                    <button
                      type="button"
                      className="binder-btn min-w-[200px]"
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
                      className="binder-btn min-w-[200px]"
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
            <div className="pt-16 pb-16">
              <div className="text-large xs:text-center">
                Your Binder size is
              </div>
              {chestSizeChartObj && (
                <div className="product-title uppercase">
                  {chestSizeChartObj.code}
                </div>
              )}
            </div>
          </Fade>
          <div className="flex gap-2 items-start justify-start">
            <Fade right>
              <button
                type="button"
                className="binder-btn max-w-max"
                onClick={handleBuyNow}
              >
                Buy now
              </button>
            </Fade>
            <Fade right>
              <button
                type="button"
                className="binder-btn max-w-max"
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
            <div className="xs:py-[8] py-16 ">
              <div className="subtitle-bold">Find your size</div>
              <div className="product-title uppercase">Size Finder</div>
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
