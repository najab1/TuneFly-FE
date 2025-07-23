import { useState } from "react";

function VerifyScreen() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    // Handle OTP change
    const handleChange = (value: string, index: number) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input
            if (value && index < 5) {
                const next = document.getElementById(`otp-${index + 1}`);
                if (next) next.focus();
            }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: "url('/background/bg.png')" }}
            ></div>

            {/* Main content */}
            <div className="relative z-20 w-[90%] xl:w-[70%] lg:w-[80%] max-w-6xl flex flex-col items-center lg:flex-row lg:justify-between">
                {/* Left Section */}
                <div className="w-[10rem] lg:w-[12rem] lg:flex lg:items-center lg:justify-center">
                    <div className="text-center">
                        <img src="/assets/logo.svg" alt="Tunefly Logo" className="w-24 lg:w-36 md:w-32 mx-auto mb-4" />
                        <h1 className="text-3xl text-white font-semibold hidden lg:block">Tunefly</h1>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-[1px] h-[40rem] xl:h-[45rem] 2xl:h-[50rem] bg-gray-500 mx-6" />

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="w-[90%] max-w-md text-center">
                        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-6 md:mb-8">Email Verification</h2>

                        {/* Card Box */}
                        {/* Gradient Border Wrapper */}
                        <div className="p-[1px] rounded-3xl bg-gradient-to-r from-pink-500 to-teal-400 mb-6">
                            {/* Inner Card */}
                            <div className="rounded-3xl bg-[#1f1f21] backdrop-blur-md p-6 md:p-8">
                                <div className="flex justify-center mb-4">
                                    <img src="/assets/Mail.svg" alt="Mail Icon" className="w-12 h-12" />
                                </div>

                                <h3 className="text-white text-xl mb-2">Check your Email</h3>
                                <p className="text-sm text-gray-300 mb-6">
                                    Enter the unique code we sent below
                                </p>

                                {/* OTP Boxes */}
                                <div className="flex justify-center gap-2 mb-5">
                                    {otp.map((digit, index) => (
                                        <div
                                            key={index}
                                            className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400"
                                        >
                                            <input
                                                id={`otp-${index}`}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleChange(e.target.value, index)}
                                                className="w-8 h-10 md:w-10 md:h-12 text-center text-xl text-white bg-[#1F1F21] rounded-md focus:outline-none"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-300 mb-5">
                                    Didn’t receive it?{" "}
                                    <span className="text-teal-400 cursor-pointer hover:underline">Send again</span>
                                </p>

                                {/* Next Button */}
                                <button className="w-full py-2 font-semibold text-white rounded-md bg-gradient-to-r from-pink-500 to-teal-400 hover:opacity-90">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyScreen;
