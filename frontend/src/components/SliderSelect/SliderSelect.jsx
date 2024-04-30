import React from "react";
import SliderComponenet from "../common/SliderComponenet";


const SliderSelect = ({ data, setData }) => {
  console.log(data);
  return (
    <>
      <SliderComponenet
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          })
        }
        label="Home Value"
        unit="$"
        amount={data.homeValue}
      />

      <SliderComponenet
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }
        label={"Down Payment"}
        unit="$"
        amount={data.downPayment}
      />

      <SliderComponenet
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={100}
        value={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }
        label={"Loan Amount"}
        unit="$"
        amount={data.loanAmount}
      />

      <SliderComponenet
        min={2}
        max={18}
        defaultValue={data.intrestRate}
        value={data.intrestRate}
        step={1}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value.toFixed(0),
          })
        }
        label={"Intrest Rate"}
        unit="%"
        amount={data.intrestRate}
      />

      
     
    </>
  );
};

export default SliderSelect;
