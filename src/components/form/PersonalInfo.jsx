import React from "react";

const PersonalInfo = () => {
  return (
    <div className="mx-4 border border-solid bg-white p-5 pt-8 rounded-xl">
      <h1 className="text-2xl font-bold">Personal info</h1>
      <p className="mt-2 text-gray-400">
        Please provide your name, email, address, and phone number.
      </p>
      <form className="flex flex-col mt-5" action="">
        <label htmlFor="name">Name</label>
        <input
          className="border border-solid border-gray-300 p-2 rounded-md"
          type="text"
          name="name"
          placeholder="e.g.Stephen King"
        />
        <label className="mt-3" htmlFor="email">
          Email Address
        </label>
        <input
          className="border border-solid border-gray-300 p-2 rounded-md"
          type="email"
          name="email"
          placeholder="e.g.stephenking@lorem.com"
        />
        <label className="mt-3" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border border-solid border-gray-300 p-2 rounded-md"
          type="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
