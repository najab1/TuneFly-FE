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
import { useNavigate } from "react-router-dom";

const Analytics = () => {
    const location = useLocation();
    const navigate = useNavigate();

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
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)}/>
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">Analytics</h1>
                </div>

                {/* Analytics Cards Section */}
                <div className="px-4 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Song played", value: 15, icon: <MusicalNoteIcon className="w-6 h-6 text-pink-400" /> },
                        { label: "Song scanned", value: 6, icon: <ChartBarSquareIcon className="w-6 h-6 text-teal-400" /> },
                        { label: "Total Listeners", value: 25, icon: <SpeakerWaveIcon className="w-6 h-6 text-teal-400" /> },
                        { label: "Monthly Listeners", value: 12, icon: <Cog6ToothIcon className="w-6 h-6 text-pink-400" /> },
                    ].map((stat, idx) => (
                        <div key={idx} className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-teal-400">
                            <div className="bg-[#1f1f21] rounded-lg px-4 py-5 flex flex-col justify-between space-y-3">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-sm">{stat.label}</p>
                                    {stat.icon}
                                </div>
                                <p className="text-2xl font-semibold">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Location Analytics */}
                <div className="px-4 md:px-0 mt-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Location</h2>
                        <p className="text-sm text-gray-300">This Month ▼</p>
                    </div>

                    {[
                        { name: "US", value: 15 },
                        { name: "UK", value: 10 },
                        { name: "Canada", value: 8 },
                        { name: "China", value: 5 },
                    ].map((loc, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span>{loc.name}</span>
                                <span>{loc.value}</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded">
                                <div className="h-1 rounded bg-teal-400" style={{ width: `${(loc.value / 15) * 100}%` }}></div>
                            </div>
                        </div>
                    ))}
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

export default Analytics;
