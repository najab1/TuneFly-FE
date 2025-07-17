import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-10 pb-10 lg:pt-0 lg:pb-0">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: "url('/background/bg.png')" }}
            ></div>

            {/* Main content */}
            <div className="relative z-20 w-[90%] xl:w-[70%] lg:w-[80%] max-w-6xl flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between">
                {/* Left Section */}
                <div className="w-[10rem] lg:w-[12rem] lg:flex lg:items-center lg:justify-center">
                    <div className="text-center">
                        <img src="/assets/logo.svg" alt="Tunefly Logo" className="w-24 lg:w-36 md:w-32 mx-auto mb-4" />
                        <h1 className="text-3xl text-white font-semibold hidden lg:block">Tunefly</h1>
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden lg:block w-[1px] h-[55rem] xl:h-[45rem] 2xl:h-[52rem] lg:h-[45rem] bg-gray-500 mx-6" />

                {/* Right Section */}
                <div className="w-full lg:w-1/2 md:w-full flex items-center justify-center">
                    <div className="w-[80%] max-w-md">
                        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center text-white mb-10">
                            Create an Account
                        </h2>

                        {/* Input fields */}
                        <div className="space-y-4">
                            {["Name", "Email", "Phone number (optional)", "Username"].map((placeholder, idx) => (
                                <div key={idx} className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type="text"
                                        placeholder={placeholder}
                                        className="w-full px-4 py-4 xl:py-3 lg:py-2 md:py-3 bg-[#1F1F21] text-white placeholder-gray-300 rounded-md focus:outline-none text-sm md:text-sm xl:text-sm"
                                    />
                                </div>
                            ))}

                            {/* Country Field with Chevron Icon */}
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="flex items-center bg-[#1F1F21] rounded-md px-4 py-4 xl:py-3 lg:py-2 md:py-3">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm md:text-sm xl:text-sm"
                                    />
                                    <ChevronDownIcon className="w-5 h-5 text-white ml-2" />
                                </div>
                            </div>

                            {/* Password Field with Eye Icon */}
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="flex items-center bg-[#1F1F21] rounded-md px-4 py-4 xl:py-3 lg:py-2 md:py-3">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm md:text-sm xl:text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="ml-2 text-white"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-2 mt-4 mb-6">
                            <hr className="flex-grow border-gray-400" />
                            <span className="text-xs text-gray-400">OR</span>
                            <hr className="flex-grow border-gray-400" />
                        </div>

                        {/* Social Logins */}
                        <div className="flex justify-center gap-6 text-2xl mb-6">
                            {[FaGoogle, FaFacebookF, FaApple].map((Icon, idx) => (
                                <div key={idx} className="p-[1px] rounded-full bg-gradient-to-r from-pink-500 to-teal-400">
                                    <div className="rounded-full p-3 bg-[#1F1F21] overflow-hidden backdrop-blur-md">
                                        <Icon className="text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Signup Button */}
                        <button className="w-full py-2 xl:py-1 lg:py-1 md:py-2 mt-2 font-semibold text-white rounded-md bg-gradient-to-r from-pink-500 to-teal-400 hover:opacity-90">
                            SIGN UP
                        </button>

                        {/* Login Link */}
                        <p className="text-sm text-center text-gray-400 mt-6">
                            Have an account?{" "}
                            <Link to="/login" className="text-pink-400 underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
