import React, { useContext } from "react";
import { AppContext } from "../../pages/signup/Signup";

const Stages = () => {
  const { stage } = useContext(AppContext);

  return (
    <div className="flex justify-center gap-4 py-8">
      <button
        className={
          stage === 1
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
      >
        1
      </button>
      <button
        className={
          stage === 2
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
      >
        2
      </button>
      <button
        className={
          stage === 3
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
      >
        3
      </button>
      <button
        className={
          stage === 4
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
      >
        4
      </button>
    </div>
  );
};

export default Stages;
