import React, { useContext } from "react";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { AppContext } from "../../pages/signup/Signup";

const Plan = () => {
  let { selectedBilling, setBilling, setSelectedPlan, selected, setSelected } =
    useContext(AppContext);

  let plans = [
    {
      id: 1,
      name: "Arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
      icon: arcadeIcon,
    },
    {
      id: 2,
      name: "Advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
      icon: advancedIcon,
    },
    {
      id: 3,
      name: "Pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
      icon: proIcon,
    },
  ];

  const handlePlan = (id) => {
    setSelected(id);
    let aux = plans.filter((plan) => plan.id === id);
    setSelectedPlan(aux[0]);
  };

  return (
    <div className="mx-4 border border-solid bg-white p-5 pt-8 rounded-xl">
      <h1 className="text-2xl font-bold">Select your plan</h1>
      <p className="mt-2 text-gray-400">
        You have the option of monthly or yearly billing.
      </p>
      {plans.map((plan) => {
        return (
          <div
            key={plan.id}
            className={
              plan.id === selected
                ? `flex p-3 border-2 border-solid border-[#564B96] mt-3 rounded-md`
                : `flex p-3 border border-solid border-gray-300 mt-3 rounded-md`
            }
            onClick={() => handlePlan(plan.id)}
          >
            <div>
              <img src={plan.icon} alt="" />
            </div>
            <div className="ml-4">
              <p className="font-bold">{plan.name}</p>
              {selectedBilling ? (
                <div>
                  <p className="text-gray-400">${plan.price.yearly}/yr</p>
                  <p className="text-sm text-[#172A57] font-bold">
                    2 months free
                  </p>
                </div>
              ) : (
                <p className="text-gray-400">${plan.price.monthly}/mo</p>
              )}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center gap-5 mt-6">
        <p className="text-[#172A57] font-bold">Monthly</p>
        <div className="flex">
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={selectedBilling}
              readOnly
            />
            <div
              onClick={() => {
                setBilling(!selectedBilling);
              }}
              className="w-11 h-6 bg-[#172A57] rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#172A57]"
            ></div>
            <span className="ml-2 text-sm font-medium text-gray-900"></span>
          </label>
        </div>
        <p className="text-gray-400 font-bold">Yearly</p>
      </div>
    </div>
  );
};

export default Plan;
