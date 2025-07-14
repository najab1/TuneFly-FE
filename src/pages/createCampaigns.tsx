import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    CloudArrowUpIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const CreateCampaigns = () => {
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
            <div className="flex-1 py-6 md:px-10 xl:px-14 2xl:px-20">
                {/* Mobile Header */}
                <div className="relative mb-6 md:hidden">
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-white" />
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">Create a Campaign</h1>
                </div>

                {/* Mobile Form */}
                <div className="md:hidden flex justify-center mt-10 px-6">
                    <div className="w-full max-w-full flex flex-col gap-6">

                        {/* Artist/Band Name */}
                        <div className="flex flex-col">
                            <label htmlFor="artistName" className="text-white text-sm mb-2">Artist/Band Name</label>
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <input
                                    type="text"
                                    id="artistName"
                                    placeholder="e.g. Taylor Swift"
                                    className="w-full bg-[#1f1f21] bg-opacity-100 text-white placeholder-gray-400 placeholder:text-xs placeholder-3 px-4 py-3 rounded-md outline-none"
                                />
                            </div>
                        </div>

                        {/* Song Name */}
                        <div className="flex flex-col">
                            <label htmlFor="songName" className="text-white text-sm mb-2">Song Name</label>
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <input
                                    type="text"
                                    id="songName"
                                    placeholder="e.g. Cruel Summer"
                                    className="w-full bg-[#1f1f21] bg-opacity-100 text-white placeholder-gray-400 placeholder:text-xs px-4 py-3 rounded-md outline-none"
                                />
                            </div>
                        </div>

                        {/* Genre Dropdown */}
                        <div className="flex flex-col">
                            <label htmlFor="genre" className="text-white text-sm mb-2">Genre</label>
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <select
                                    id="genre"
                                    className="w-full bg-[#1f1f21] bg-opacity-100 text-white px-4 py-3 rounded-md outline-none"
                                >
                                    <option value="" className="bg-black">Select Genre</option>
                                    <option value="pop" className="bg-black">Pop</option>
                                    <option value="rock" className="bg-black">Rock</option>
                                    <option value="hiphop" className="bg-black">Hip-Hop</option>
                                    <option value="indie" className="bg-black">Indie</option>
                                    <option value="other" className="bg-black">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Country Dropdown */}
                        <div className="flex flex-col">
                            <label htmlFor="country" className="text-white text-sm mb-2">Targeted Country</label>
                            <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                <select
                                    id="country"
                                    className="w-full bg-[#1f1f21] bg-opacity-100 text-white px-4 py-3 rounded-md outline-none"
                                >
                                    <option value="" className="bg-black">Select Country</option>
                                    <option value="pk" className="bg-black">Pakistan</option>
                                    <option value="us" className="bg-black">United States</option>
                                    <option value="uk" className="bg-black">United Kingdom</option>
                                </select>
                            </div>
                        </div>

                        {/* Upload Track */}
                        <div className="flex flex-col">
                            <label className="text-white text-sm mb-2">Upload Track</label>
                            <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="rounded-lg bg-black bg-opacity-80 px-4 py-6 flex flex-col items-center justify-center text-white text-sm text-center">
                                    <CloudArrowUpIcon className="h-12 w-12 text-white mb-3" />

                                    <p className="font-semibold">Select song to upload</p>
                                    <p className="text-xs text-gray-300 mt-1 mb-4">
                                        Supported Format: MP3, WAV, AAC
                                    </p>

                                    <button className="text-sm bg-white text-black px-4 py-[6px] rounded-full font-medium">
                                        Select File
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Rights Checkbox */}
                        <div className="flex items-center gap-2 text-sm text-white">
                            <input type="checkbox" id="rights" className="accent-pink-500" />
                            <label htmlFor="rights">Own full rights to this song</label>
                        </div>

                        {/* Create Campaign Button */}
                        <button className="w-full bg-gradient-to-r from-pink-500 to-teal-400 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md transition-all hover:brightness-110">
                            Create Campaign
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

export default CreateCampaigns;
