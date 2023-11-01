import React from "react";
import bgMobile from "../../assets/images/bg-sidebar-mobile.svg";
import bgDesktop from "../../assets/images/bg-sidebar-desktop.svg";

import Stages from "../../components/stages/Stages";
import PersonalInfo from "../../components/form/PersonalInfo";
import Footer from "../../components/footer/Footer";
import Plan from "../../components/form/Plan";

const Signup = () => {
  return (
    <div>
      <div
        style={{
          "--bg-mobile": `url(${bgMobile})`,
          "--bg-desktop": `url(${bgDesktop})`,
        }}
        className="bg-[image:var(--bg-mobile)] h-[85dvh] min-w-fit bg-no-repeat bg-contain bg-[#EFF4FE] lg:bg-[image:var(--bg-desktop)]"
      >
        <Stages></Stages>
        <Plan></Plan>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Signup;
