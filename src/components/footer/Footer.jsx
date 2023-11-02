import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../pages/signup/Signup";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { stage, setStage, setSelectedPlan, selectedPlan, selectedAddons } =
    useContext(AppContext);

  let location = useLocation();

  const handleClick = () => {
    setStage(stage + 1);
    setSelectedPlan({ ...selectedPlan, selectedAddons });
  };

  return (
    <div className="h-[15dvh] flex justify-between items-center px-4 py-5">
      {location.pathname === "/" ? (
        <button className="invisible h-2/3 w-1/3 rounded-sm text-center text-gray-500 px-3">
          <Link to="/" onClick={() => setStage(stage - 1)}>
            Go Back
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/plans" ? (
        <button className="h-2/3 w-1/3 rounded-sm text-center text-gray-500 px-3">
          <Link to="/" onClick={() => setStage(stage - 1)}>
            Go Back
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/addons" ? (
        <button className="h-2/3 w-1/3 rounded-sm text-center text-gray-500 px-3">
          <Link to="/plans" onClick={() => setStage(stage - 1)}>
            Go Back
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/finish" ? (
        <button className="h-2/3 w-1/3 rounded-sm text-center text-gray-500 px-3">
          <Link to="/addons" onClick={() => setStage(stage - 1)}>
            Go Back
          </Link>
        </button>
      ) : (
        ""
      )}

      {location.pathname === "/" ? (
        <button className="bg-[#172A57] h-2/3 w-1/3 rounded-md text-center text-white px-3">
          <Link to="/plans" onClick={() => setStage(stage + 1)}>
            Next Step
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/plans" ? (
        <button className="bg-[#172A57] h-2/3 w-1/3 rounded-md text-center text-white px-3">
          <Link to="/addons" onClick={() => setStage(stage + 1)}>
            Next Step
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/addons" ? (
        <button className="bg-[#172A57] h-2/3 w-1/3 rounded-md text-center text-white px-3">
          <Link to="/finish" onClick={() => handleClick()}>
            Next Step
          </Link>
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/finish" ? (
        <button className="bg-[#483FFD] h-2/3 w-1/3 rounded-md text-center text-white px-6">
          Confirm
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
