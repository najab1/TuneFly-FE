import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    GlobeAltIcon,
    TrashIcon,
    DocumentIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DriverAccount = () => {
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
                        {location.pathname === '/newCampaigns' && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                        )}
                        <SpeakerWaveIcon className="w-5 h-5" />
                        <Link to="/newCampaigns">New Campaigns</Link>
                    </li>

                    {/* Asset Library */}
                    <li
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
    ${location.pathname === '/library' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                    >
                        {location.pathname === '/library' && (
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
            <div className="flex-1 pt-6 md:px-10 xl:px-14 2xl:px-20">
                {/* Mobile Header */}
                <div className="relative flex items-center justify-center mb-6 md:hidden h-14">
                    {/* Back button - left */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)} />
                    </button>

                    {/* Title - center */}
                    <h1 className="text-[1.35rem] font-semibold text-white">Driver Profile</h1>

                    {/* Trash icon - right */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                        <TrashIcon className="h-7 w-7 text-pink-500" />
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

                <div className="w-full flex flex-col items-center px-4 pb-10">
                    {/* Profile Image with Gradient Border */}
                    <div className="relative rounded-full w-24 h-24 mb-3">
                        <img
                            src="/profile/Profile.png"
                            alt="Driver"
                            className="w-full h-full rounded-full object-cover"
                        />

                    </div>
                    <div className="font-semibold text-xl mb-3">James Smith</div>

                    {/* Input Fields */}
                    <div className="w-full max-w-[370px] mx-auto space-y-6">
                        {/* Info Fields */}
                        <div>
                            <label className="block mb-1 text-sm text-gray-300 font-medium">Username</label>
                            <div className="flex items-center gap-3 pb-2">
                                <UserIcon className="w-5 h-5 text-white opacity-70" />
                                <p className="text-white text-sm">james.smith001</p>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-300 font-medium">Email</label>
                            <div className="flex items-center gap-3  pb-2">
                                <EnvelopeIcon className="w-5 h-5 text-white opacity-70" />
                                <p className="text-white text-sm">james.smith@mail.com</p>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-300 font-medium">Phone Number</label>
                            <div className="flex items-center gap-3 pb-2">
                                <PhoneIcon className="w-5 h-5 text-white opacity-70" />
                                <p className="text-white text-sm">+1 408 128 2563</p>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-300 font-medium">Document</label>
                            <div className="flex items-center gap-3 pb-2">
                                <DocumentIcon className="w-5 h-5 text-white opacity-70" />
                                <a
                                    href="#"
                                    className="text-sm text-teal-400 underline underline-offset-2 hover:text-teal-300 transition"
                                >
                                    Driver’s license
                                </a>
                            </div>
                        </div>


                        <div>
                            <label className="block mb-1 text-sm text-gray-300 font-medium">Country</label>
                            <div className="flex items-center gap-3 pb-2">
                                <GlobeAltIcon className="w-5 h-5 text-white opacity-70" />
                                <p className="text-white text-sm">US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverAccount;
