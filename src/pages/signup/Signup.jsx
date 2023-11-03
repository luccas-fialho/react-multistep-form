import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import bgMobile from "../../assets/images/bg-sidebar-mobile.svg";
import bgDesktop from "../../assets/images/bg-sidebar-desktop.svg";

import Stages from "../../components/stages/Stages";
import PersonalInfo from "../../components/form/PersonalInfo";
import Footer from "../../components/footer/Footer";
import Plan from "../../components/form/Plan";
import AddOns from "../../components/form/AddOns";
import Finish from "../../components/form/Finish";
import Thanks from "../../components/form/Thanks";

export const AppContext = createContext();

const Signup = () => {
  let [stage, setStage] = useState(1);
  const [step, setStep] = useState(["/", "/plans", "/addons", "/finish"]);
  let [selectedBilling, setBilling] = useState(false);
  let [selectedPlan, setSelectedPlan] = useState({});
  let [selected, setSelected] = useState(0);
  let [selectedAddons, setSelectedAddons] = useState([]);

  return (
    <div>
      <AppContext.Provider
        value={{
          stage,
          setStage,
          step,
          setStep,
          selectedBilling,
          setBilling,
          selectedPlan,
          setSelectedPlan,
          selected,
          setSelected,
          selectedAddons,
          setSelectedAddons,
        }}
      >
        <Router>
          <div
            style={{
              "--bg-mobile": `url(${bgMobile})`,
              "--bg-desktop": `url(${bgDesktop})`,
            }}
            className="bg-[image:var(--bg-mobile)] h-[85dvh] min-w-fit bg-no-repeat bg-contain bg-[#EFF4FE] lg:bg-[image:var(--bg-desktop)]"
          >
            <Stages></Stages>
            <Routes>
              <Route path="/" element={<PersonalInfo />}></Route>
              <Route path="/plans" element={<Plan />}></Route>
              <Route path="/addons" element={<AddOns />}></Route>
              <Route path="/finish" element={<Finish />}></Route>
              <Route path="/thanks" element={<Thanks />}></Route>
            </Routes>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default Signup;
