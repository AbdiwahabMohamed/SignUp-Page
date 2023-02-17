import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import './App.css'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className=" bg-white shadow-lg rounded-md w-96 p-6 ">
        <h1 className="text-center font-semibold">SignUp</h1>
        <div className="flex flex-row">
          <div className="w-1/2 mr-1">
            <input
              className="rounded-full w-full border  
            focus:outline-none focus:ring-1 focus:border-blue-200 "
              type="text"
              placeholder="your Full name"
            />
          </div>
          <div className="w-1/2">
            <input
              className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
              type="text"
              placeholder="your Username"
            />
          </div>
        </div>
        <div>
          <div className="mt-2">
            <input
              className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
              type="Email"
              placeholder="your Email"
            />
            <div className="mt-2">
              <input
                className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
                type="password"
                placeholder="your password"
              />
              <div className="mt-2">
                <input
                  className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
                  type="password"
                  placeholder="confirm your password"
                />
              </div>
              <div className="mt-2">
                <input
                  className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
                  type="date"
                  placeholder="your birthDay"
                />
              </div>
              <div className="mt-2">
                <input
                  className="rounded-full w-full border 
            focus:outline-none focus:ring-1 focus:border-blue-200 "
                  type="tel"
                  placeholder="your phone"
                />
              </div>
              <div className="mt-2">
                <button
                  className="rounded-3xl w-24 text-white justify-items-center
                   bg-blue-500"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
