import React from "react";
import { motion } from "framer-motion";
import { UilAt, UilLockAlt, UilUser } from "@iconscout/react-unicons"; // Example icon library

const AuthCard = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900">
      {/* Login/Signup Card */}
      {/* <div className="w-full max-w-xl md:max-w-lg lg:max-w-2xl">
        <div className="relative">
          <input className="" type="checkbox" id="reg-log" name="reg-log" />
          <label htmlFor="reg-log">dsdsd</label> */}

      <div className="relative w-full h-full">
        <motion.div className="relative">
          <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
            {/* Toggle between Log In and Sign Up */}
            <h6 className="text-white text-lg font-bold mb-4">
              <span className="cursor-pointer">Log In</span> |{" "}
              <span className="cursor-pointer">Sign Up</span>
            </h6>

            {/* Form */}

            {/* Log In */}
            <div>
              <h4 className="text-yellow-400 text-xl font-semibold mb-4">
                Log In
              </h4>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="logemail"
                  className=" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  placeholder="Your Email"
                />
                <UilAt className="absolute top-0 left-3 text-yellow-400 h-8 w-8" />
              </div>
              <div className="relative mb-4">
                <input
                  type="password"
                  name="logpass"
                  className=" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  placeholder="Your Password"
                />
                <UilLockAlt className="absolute top-0 left-3 text-yellow-400 h-8 w-8" />
              </div>
              <button className="btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg">
                Submit
              </button>
              <p className="text-sm mt-4 text-center text-gray-400">
                <a href="#0" className="hover:text-yellow-400">
                  Forgot your password?
                </a>
              </p>
            </div>

            {/* Sign Up */}
            <div className="hidden">
              <h4 className="text-yellow-400 text-xl font-semibold mb-4">
                Sign Up
              </h4>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="logname"
                  className=" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  placeholder="Your Full Name"
                />
                <UilUser className="absolute top-0 left-3 text-yellow-400 h-8 w-8" />
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="logemail"
                  className=" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  placeholder="Your Email"
                />
                <UilAt className="absolute top-0 left-3 text-yellow-400 h-8 w-8" />
              </div>
              <div className="relative mb-4">
                <input
                  type="password"
                  name="logpass"
                  className=" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none"
                  placeholder="Your Password"
                />
                <UilLockAlt className="absolute top-0 left-3 text-yellow-400 h-8 w-8" />
              </div>
              <button className="btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthCard;
