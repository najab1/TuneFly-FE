import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const IntegratedAccount = () => {
    const location = useLocation();

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
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">Integrated Accounts</h1>
                </div>

                <div className="w-full flex flex-col items-center px-1 pb-10">
                    <div className="w-full flex flex-col items-center px-4 pb-10">
                        <div className="w-full max-w-[375px] text-left space-y-6">
                            <div>
                                <h2 className="text-sm text-gray-300 mb-1 text-center">Manage your current integrated accounts</h2>
                            </div>
                            {/* Spotify */}
                            <div>
                                <label htmlFor="spotify" className="text-sm mb-2 block">Spotify</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <div className="flex items-center bg-[#1f1f21] rounded-md px-4">
                                        <input
                                            type="text"
                                            id="spotify"
                                            className="w-full py-3 text-white outline-none placeholder-gray-400 bg-transparent"
                                        />
                                        <img
                                            src="/assets/Spotify_icon.svg"
                                            alt="Spotify"
                                            className="w-8 h-8 ml-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Apple Music */}
                            <div>
                                <label htmlFor="appleMusic" className="text-sm mb-2 block">Apple Music</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <div className="flex items-center bg-[#1f1f21] rounded-md px-4">
                                        <input
                                            type="text"
                                            id="appleMusic"
                                            className="w-full py-3 text-white outline-none placeholder-gray-400 bg-transparent"
                                        />
                                        <img
                                            src="/assets/AMusic_icon.svg"
                                            alt="Apple Music"
                                            className="w-8 h-8 ml-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Custom Link */}
                            <div>
                                <label htmlFor="customLink" className="text-sm mb-2 block">Paste your link</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <div className="flex items-center bg-[#1f1f21] rounded-md px-4">
                                        <input
                                            type="text"
                                            id="customLink"
                                            className="w-full py-3 text-white outline-none placeholder-gray-400 bg-transparent"
                                        />
                                        <img
                                            src="/assets/Clip.svg"
                                            alt="Link"
                                            className="w-8 h-8 ml-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button className="w-full max-w-[340px] mt-[19rem] bg-gradient-to-r from-pink-500 to-teal-400 text-white py-3 rounded-lg font-semibold text-sm">
                            Save
                        </button>
                    </div>
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

export default IntegratedAccount;
