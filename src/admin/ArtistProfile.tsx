import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    // PencilIcon,
    MagnifyingGlassIcon,
    TrashIcon,
    ChevronRightIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ArtistProfile = () => {
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
                <img src="/assets/logo.svg" alt="Tunefly Logo" className="w-20 lg:w-24 items-center justify-center mx-auto mb-4" />
                <ul className="text-white text-base font-medium space-y-4">
                    {/* Home */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/dashboard' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/dashboard' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-9 w-2 bg-teal-400 rounded-r"></span>
                        )}
                        <HomeIcon className="w-5 h-5" />
                        <Link to="/dashboard">Home</Link>
                    </li>

                    {/* New Campaigns */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/campaigns' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/campaigns' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <SpeakerWaveIcon className="w-5 h-5" />
                        <Link to="/newCampaigns">New Campaigns</Link>
                    </li>

                    {/* Asset Library */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === "/AssetLibrary" ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === "/AssetLibrary" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <MusicalNoteIcon className="w-5 h-5" />
                        <Link to="/AssetLibrary">Asset Library</Link>
                    </li>

                    {/* Analytics */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/analytics' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/analytics' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <ChartBarSquareIcon className="w-5 h-5" />
                        <Link to="/analytics">Analytics</Link>
                    </li>

                    {/* Settings */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/settings' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/settings' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <Cog6ToothIcon className="w-5 h-5" />
                        <Link to="/settings">Settings</Link>
                    </li>

                    {/* FAQs */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/faqs' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/faqs' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                        <Link to="/faqs">FAQs</Link>
                    </li>
                </ul>

            </aside>

            {/* Main Content */}
            <div className="flex-1 py-6 md:px-10 xl:px-14 2xl:px-20">

                {/* Desktop Header */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">Asset Library</h1>
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

                {/* Mobile Header */}
                <div className="relative mb-6 md:hidden">
                    {/* Back Button */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)} />
                    </button>

                    {/* Title */}
                    <h1 className="text-[1.35rem] font-semibold text-white text-center mb-10">
                        Artist Profiles
                    </h1>

                    {/* Magnifying Glass Icon */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                {/* Driver Profile Cards */}
                <div className="px-5 md:px-0 space-y-4">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-lg p-[1px] bg-gradient-to-r from-pink-400 to-teal-400"
                        >
                            <div className="bg-[#1f1f21] rounded-lg p-4 flex items-center justify-between gap-4">
                                {/* Left: Profile image + text */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/assets/ArtistProfile.svg"
                                        alt="Driver"
                                        className="w-20 h-24 rounded-md object-cover"
                                    />
                                    <div>
                                        <h3 className="text-xl mb-2 font-semibold">Artist 1</h3>
                                        <p className="text-base mb-2 text-gray-300">artistname12</p>
                                        <p className="text-base text-gray-500">artist@mail.com</p>
                                    </div>
                                </div>

                                {/* Right: Action icons */}
                                <div className="flex flex-col justify-between items-end h-24">
                                    <TrashIcon className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer" />
                                    <Link to="/admin/ArtistAccount">
                                        <ChevronRightIcon className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistProfile;
