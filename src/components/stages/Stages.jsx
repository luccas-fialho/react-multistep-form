import React, { useContext } from "react";
import { AppContext } from "../../pages/signup/Signup";
import { Link } from "react-router-dom";

const Stages = () => {
  const { stage, setStage } = useContext(AppContext);

  return (
    <div className="flex justify-center gap-4 py-8">
      <button
        className={
          stage === 1
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
        onClick={() => setStage(1)}
      >
        <Link to="/">1</Link>
      </button>
      <button
        className={
          stage === 2
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
        onClick={() => setStage(2)}
      >
        <Link to="/plans">2</Link>
      </button>
      <button
        className={
          stage === 3
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
        onClick={() => setStage(3)}
      >
        <Link to="/addons">3</Link>
      </button>
      <button
        className={
          stage === 4
            ? `rounded-full border border-solid border-slate-100 w-10 h-10 text-black bg-[#C2E5FB]`
            : `rounded-full border border-solid border-slate-100 w-10 h-10 text-slate-50`
        }
        onClick={() => setStage(4)}
      >
        <Link to="/finish">4</Link>
      </button>
    </div>
  );
};

export default Stages;
