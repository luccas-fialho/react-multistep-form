import React, { useContext, useState } from "react";
import { AppContext } from "../../pages/signup/Signup";

const AddOns = () => {
  let { selectedBilling, selectedAddons, setSelectedAddons } =
    useContext(AppContext);

  const [addOns] = useState([
    {
      id: 1,
      name: "Online Service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
      selected: false,
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
      selected: false,
    },
    {
      id: 3,
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
      selected: false,
    },
  ]);

  const handleClick = (addOn) => {
    addOn.selected = !addOn.selected;

    addOn.selected
      ? setSelectedAddons([...selectedAddons, addOn])
      : setSelectedAddons(
          selectedAddons.filter((addOn) => addOn.selected === true)
        );
  };

  return (
    <div className="mx-4 border border-solid bg-white p-5 pt-8 rounded-xl">
      <h1 className="text-2xl font-bold">Pick add-ons</h1>
      <p className="mt-2 text-gray-400">
        Add-ons help enhance your gaming experience
      </p>
      {addOns.map((addOn) => {
        return (
          <div
            key={addOn.id}
            className={
              addOn.selected
                ? `flex p-3 border border-solid border-purple-950 mt-3 rounded-md bg-gray-100 relative`
                : `flex p-3 border border-solid border-gray-300 mt-3 rounded-md relative`
            }
          >
            <div className="flex justify-center items-center">
              <input
                className="w-6"
                type="checkbox"
                checked={addOn.selected}
                name=""
                id=""
                onChange={() => handleClick(addOn)}
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">{addOn.name}</p>
              <p className="text-gray-400 text-xs">{addOn.description}</p>
            </div>
            <div className="ml-5 absolute right-5 top-6">
              {selectedBilling ? (
                <div>
                  <p className="text-[#493CFC] text-sm">
                    +${addOn.price.yearly}/yr
                  </p>
                </div>
              ) : (
                <p className="text-[#493CFC] text-sm">
                  +${addOn.price.monthly}/mo
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddOns;
