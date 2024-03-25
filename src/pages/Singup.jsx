import React from "react";
import Helment from "../components/Helment/Helment";
import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
export default function Singup() {
  return (
    <Helment title="singup">
      <div className="flex flex-col">
        <CommonSaction title="singup " />
        <div className="flex justify-center items-center p-7">
          <div className="w-[50%] flex flex-col gap-3 p-5  bg-slate-900 text-white rounded-md m-10">
            <form action="#" className="w-full flex flex-col gap-5 p-4">
              <input
                type="text"
                placeholder="Enter your user name "
                className="text-black p-3 bg-white rounded-lg outline-0 text-sm"
              />
              <input
                type="email"
                placeholder="Enter your user email "
                className="text-black p-3 bg-white rounded-lg outline-0 text-sm"
              />
              <input
                type="password"
                placeholder="Enter your user password "
                className="text-black p-3 bg-white rounded-lg outline-0 text-sm"
              />
              <input
                type="file"
                className=" p-3 bg-transparent text-white rounded-lg outline-0 text-sm cursor-pointer "
              />
              <button
                type="submit"
                className="bg-white px-1 py-3 rounded-md text-black duration-200 hover:scale-110 w-[40%] self-center"
              >
                Create an Account
              </button>
              <div className="flex gap-5 items-center p-2">
                <p>Aleardy have an account?</p>
                <p className="duration-200 hover:underline cursor-pointer cursor-pointer">
                  Login
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Helment>
  );
}
