import React from "react";
import iconThankYou from "../../assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <div className="mx-4 border border-solid bg-white p-5 pt-8 rounded-xl flex flex-col">
      <img src={iconThankYou} alt="" className="h-16 mt-10" />
      <h1 className="text-center text-2xl font-bold mt-5">Thank you</h1>
      <p className="mt-2 text-gray-400 text-center mb-20">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
