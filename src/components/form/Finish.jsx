import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../pages/signup/Signup";

const Finish = () => {
  const { selectedPlan, selectedBilling, setStage } = useContext(AppContext);

  let totalAddOns = 0;

  selectedBilling
    ? selectedPlan.selectedAddons?.forEach(
        (addOn) => (totalAddOns += addOn.price.yearly)
      )
    : selectedPlan.selectedAddons?.forEach(
        (addOn) => (totalAddOns += addOn.price.monthly)
      );

  return (
    <div className="mx-4 border border-solid bg-white p-5 pt-8 rounded-xl">
      <h1 className="text-2xl font-bold">Finishing up</h1>
      <p className="mt-2 text-gray-400">
        Double check everything looks OK before confirming.
      </p>
      <div className="bg-[#F8F9FE] p-4">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <div>
            <p className="text-[#1E3358] font-bold">
              {selectedPlan.name} {selectedBilling ? "(Yearly)" : "(Monthly)"}
            </p>
            <Link
              className="text-base underline text-gray-400"
              to="/plans"
              onClick={() => setStage(2)}
            >
              Change
            </Link>
          </div>
          <div>
            <p className="text-[#1E3358] font-bold">
              {selectedBilling
                ? `$${selectedPlan.price.yearly}/yr`
                : `$${selectedPlan.price.monthly}/mo`}
            </p>
          </div>
        </div>
        <div className="mt-3">
          {selectedPlan.selectedAddons?.map((addOn) => {
            return (
              <div key={addOn.id} className="flex justify-between mt-3">
                <p className="text-gray-400">{addOn.name}</p>
                <p className="text-[#1E3358]">
                  {selectedBilling
                    ? `+$${addOn.price.yearly}/yr`
                    : `+$${addOn.price.monthly}/mo`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-gray-400">Total (per month)</p>
        <p className="text-[#493BC7] font-bold">
          {selectedBilling
            ? `$${selectedPlan.price.yearly + totalAddOns}/yr`
            : `$${selectedPlan.price.monthly + totalAddOns}/mo`}
        </p>
      </div>
    </div>
  );
};

export default Finish;
