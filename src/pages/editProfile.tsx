import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    PencilIcon,
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import countryList from 'react-select-country-list'
import { useMemo, useState } from 'react'

const EditProfile = () => {
    const location = useLocation();
    const [selectedCountry, setSelectedCountry] = useState('');
    const countryOptions = useMemo(() => countryList().getData(), []);

    return (
        <div
            className="
        min-h-screen flex flex-col md:flex-row text-white bg-cover bg-top md:bg-bottom
        bg-[url('/background/DashM.png')] md:bg-[url('/background/bg.png')]
      "
        >
            {/* Sidebar (Desktop Only) */}
            <aside className="hidden md:flex flex-col w-64 bg-[#111111] p-6 space-y-6">
                <img
                    src="/assets/logo.svg"
                    alt="Tunefly Logo"
                    className="w-20 lg:w-24 items-center justify-center mx-auto mb-4"
                />
                <ul className="text-white text-base font-medium space-y-4">
                    {/* Home */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/dashboard"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/dashboard" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-9 w-2 bg-teal-400 rounded-r"></span>
                        )}
                        <HomeIcon className="w-5 h-5" />
                        Home
                    </li>

                    {/* New Campaigns */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/campaigns"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/campaigns" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <SpeakerWaveIcon className="w-5 h-5" />
                        New Campaigns
                    </li>

                    {/* Asset Library */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/library"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/library" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <MusicalNoteIcon className="w-5 h-5" />
                        Asset Library
                    </li>

                    {/* Analytics */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/analytics"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/analytics" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <ChartBarSquareIcon className="w-5 h-5" />
                        Analytics
                    </li>

                    {/* Settings */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/settings"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/settings" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <Cog6ToothIcon className="w-5 h-5" />
                        Settings
                    </li>

                    {/* FAQs */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
              ${location.pathname === "/faqs"
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                            }`}
                    >
                        {location.pathname === "/faqs" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                        FAQs
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 pt-6 md:px-10 xl:px-14 2xl:px-20">
                {/* Mobile Header */}
                <div className="relative mb-6 md:hidden">
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" />
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">Edit Profile</h1>
                </div>

                <div className="w-full flex flex-col items-center px-4 pb-10">
                    {/* Profile Image with Gradient Border + Pen Icon */}
                    <div className="relative rounded-full w-24 h-24 mb-10">
                        <img
                            src="/profile/Profile.png"
                            alt="User"
                            className="w-full h-full rounded-full object-cover"
                        />
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 p-[1px] bg-gradient-to-r from-pink-500 to-teal-400 rounded-full">
                            <div className="bg-[#1f1f21] p-[6px] rounded-full">
                                <PencilIcon className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Input Fields */}
                    <div className="w-full max-w-[370px] space-y-6">
                        {[
                            {
                                label: "Username",
                                icon: <UserIcon className="w-5 h-5 text-white opacity-70" />,
                            },
                            {
                                label: "Email",
                                icon: <EnvelopeIcon className="w-5 h-5 text-white opacity-70" />,
                            },
                            {
                                label: "Phone Number",
                                icon: <PhoneIcon className="w-5 h-5 text-white opacity-70" />,
                            },
                            {
                                label: "Country",
                                icon: <GlobeAltIcon className="w-5 h-5 text-white opacity-70" />,
                                isDropdown: true,
                            },
                        ].map((field, idx) => (
                            <div key={idx}>
                                <label className="block mb-1 text-sm text-gray-300">{field.label}</label>
                                <div className="flex items-center border-b border-white pb-2">
                                    <div className="mr-3">
                                        {field.icon}
                                    </div>
                                    {field.isDropdown ? (
                                        <select
                                            value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}
                                            className="bg-transparent text-white text-sm w-full focus:outline-none"
                                        >
                                            <option value="">Select Country</option>
                                            {countryOptions.map((country, idx) => (
                                                <option key={idx} value={country.label} className="text-black">
                                                    {country.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            className="bg-transparent text-white text-sm w-full focus:outline-none"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Save Button */}
                    <button className="w-full max-w-[340px] mt-52 bg-gradient-to-r from-pink-500 to-teal-400 text-white py-3 rounded-lg font-semibold text-sm">
                        Save
                    </button>
                </div>

                {/* Desktop Header (optional) */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">Campaigns</h1>
                        <div className="flex items-center gap-5">
                            <BellIcon className="w-6 h-6 text-white" />
                            <img
                                src="/profile/Profile.png"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-8 mb-12 w-full h-[1px] bg-gray-200/40" />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
