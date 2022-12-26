import * as React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { setActiveSizeFinderModal } from "../../reducers/shopify";
import { useDispatch, useSelector } from "react-redux";
import SizeBinderForm from "./SizeBinderForm";
import { SizeChartProps } from "../../interfaces";
import { apexSizeChart } from "../../utils/data";
import { useCookies } from "react-cookie";
import { RootState } from "../../stores/store";
import Slide from "react-reveal/Slide";
import { useRouter } from "next/router";

const SizeFinderModal: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState<number>(0);
  const [apexChestNumber, setApexChestNumber] = useState<string>("");
  const [bindingJourney, setBindingJourney] = useState<string>("");
  const [sizeErrorMessage, setSizeErrorMessage] = useState<string>("");
  const [chestSizeChartObj, setChestSizeChartObj] = useState<any | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(["size", "bindingJourney"]);
  const router = useRouter();
  const { isSizeFinderModal } = useSelector(
    (state: RootState) => state.shopifyReducer
  );
  const handleApexChest = (e: any) => {
    setApexChestNumber(e.target.value);
  };
  const handleBindingJourney = (e: any) => {
    setBindingJourney(e.target.value);
  };
  const handleBuyNow = () => {
    if (apexChestNumber !== "") {
      let isExistsChestNumber = apexSizeChart.find(
        (o: SizeChartProps, index: number) => {
          let isCheckNumberExists = o.measurements.find(
            (num: string) => num === apexChestNumber
          );
          return isCheckNumberExists;
        }
      );
      if (isExistsChestNumber) {
        setChestSizeChartObj(isExistsChestNumber);
        setCookie("size", isExistsChestNumber.code, { path: "/" });
        setCookie("bindingJourney", bindingJourney, { path: "/" });
        setStep(3);
        setApexChestNumber("");
        setSizeErrorMessage("");
        if (isSizeFinderModal) {
          dispatch(setActiveSizeFinderModal(false));
        }
      }
      router.push("/shop");
    } else {
      setChestSizeChartObj(null);
      setSizeErrorMessage("Size does not exists.");
    }
  };
  const handleResetSizeFinder = () => {
    setStep(0);
    removeCookie("size", { path: "/" });
    removeCookie("bindingJourney", { path: "/" });
  }
  return (
    <>
      <div className="overlay"></div>
      <Slide top>
        <div
          className="size-finder-modal absolute bg-white top-0 right-0 left-0 bottom-0 mx-auto my-auto shadow-primary "
          id="size-finder"
        >
          <div className="modal flex flex-col justify-start">
            <div className="cart-header p-4 border-b text-left flex justify-between items-center pb-4">
              <h1 className="text-medium">Size Finder Modal</h1>
              <span
                className="cursor-pointer"
                onClick={() => dispatch(setActiveSizeFinderModal(false))}
              >
                <FaTimes className="w-6 h-6" />
              </span>
            </div>
            <div className="modal-body p-4">
              <SizeBinderForm
                setStep={setStep}
                step={step}
                apexChestNumber={apexChestNumber}
                handleApexChest={handleApexChest}
                bindingJourney={bindingJourney}
                handleBindingJourney={handleBindingJourney}
                handleBuyNow={handleBuyNow}
                handleResetSizeFinder={handleResetSizeFinder}
                sizeErrorMessage={sizeErrorMessage}
                chestSizeChartObj={chestSizeChartObj}
              />
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default SizeFinderModal;