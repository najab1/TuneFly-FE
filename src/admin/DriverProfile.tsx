import {
    BellIcon,
    UserIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    MagnifyingGlassIcon,
    TrashIcon,
    ChevronRightIcon,
    UserGroupIcon,
    QrCodeIcon,
    CurrencyDollarIcon,
    PowerIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoutModal from "./modals/LogoutModal";
import { useState } from "react";

const DriverProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {

    };

    return (
        <div
            className="
        min-h-screen flex flex-col md:flex-row text-white bg-cover bg-top md:bg-bottom
        bg-[url('/background/DashM.png')] md:bg-[url('/background/bg.png')]
      "
        >
            {/* Sidebar (Desktop Only) */}
            <aside className="hidden md:flex flex-col justify-between h-screen w-64 bg-[#111111] p-6">
                {/* Top Section: Logo + Navigation */}
                <div>
                    <img
                        src="/assets/logo.svg"
                        alt="Tunefly Logo"
                        className="w-20 lg:w-24 mx-auto mb-12"
                    />

                    <ul className="text-white text-base font-medium space-y-4">
                        {/* Home */}
                        <li
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
          ${location.pathname === '/admin/dashboard' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                        >
                            {location.pathname === '/admin/dashboard' && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                            )}
                            <HomeIcon className="w-5 h-5" />
                            <Link to="/admin/dashboard">Home</Link>
                        </li>

                        {/* Driver Profiles */}
                        <li
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
          ${location.pathname === '/admin/driverProfile' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                        >
                            {location.pathname === '/admin/driverProfile' && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                            )}
                            <UserIcon className="w-5 h-5" />
                            <Link to="/admin/driverProfile">Driver Profiles</Link>
                        </li>

                        {/* Artist Profile */}
                        <li
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
          ${location.pathname === '/admin/artistProfile' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                        >
                            {location.pathname === '/admin/artistProfile' && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                            )}
                            <UserGroupIcon className="w-5 h-5" />
                            <Link to="/admin/artistProfile">Artist Profiles</Link>
                        </li>

                        {/* QR Code */}
                        <li
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
          ${location.pathname === '/admin/noQR' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                        >
                            {location.pathname === '/admin/noQR' && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                            )}
                            <QrCodeIcon className="w-5 h-5" />
                            <Link to="/admin/noQR">QR Codes</Link>
                        </li>

                        {/* Music Rates */}
                        <li
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-300 cursor-pointer
          ${location.pathname === '/admin/musicRates' ? 'bg-[#1F1F21] text-white' : 'hover:bg-[#1F1F21]/50'}`}
                        >
                            {location.pathname === '/admin/musicRates' && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r"></span>
                            )}
                            <CurrencyDollarIcon className="w-5 h-5" />
                            <Link to="/admin/musicRates">Music Rates</Link>
                        </li>
                        <li className="ml-4 pt-2">
                            <button
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
                            >
                                <PowerIcon className="w-5 h-5" />
                                <span className="text-base font-medium">Logout</span>
                            </button>
                        </li>
                    </ul>
                    {/* Reusable Logout Modal */}
                    <LogoutModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        onConfirm={handleLogout}
                    />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 py-6 md:px-10 xl:px-14 2xl:px-20">

                {/* Desktop Header */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">Driver Profiles</h1>
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
                        Driver Profiles
                    </h1>

                    {/* Magnifying Glass Icon */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                {/* Driver Profile Cards */}
                <div className="px-5 md:px-0 space-y-4 lg:hidden">
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
                                        <h3 className="text-xl mb-2 font-semibold">Driver 1</h3>
                                        <p className="text-base mb-2 text-gray-300">username12</p>
                                        <p className="text-base text-gray-500">driver@mail.com</p>
                                    </div>
                                </div>

                                {/* Right: Action icons */}
                                <div className="flex flex-col justify-between items-end h-24">
                                    <TrashIcon className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer" />
                                    <Link to="/admin/DriverAccount">
                                        <ChevronRightIcon className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table - Visible on lg and above */}
                <div className="hidden lg:block mt-8">
                    <div className="bg-gradient-to-r from-pink-500 to-teal-400 p-[1px] rounded-md">
                        <div className="overflow-x-auto rounded-md">
                            <table className="min-w-full text-left text-sm text-white">
                                <thead className="bg-[#c0c0c0] text-black text-xs">
                                    <tr>
                                        <th className="px-6 py-4">Sr No.</th>
                                        <th className="px-6 py-4">Driver Name</th>
                                        <th className="px-6 py-4">User Name</th>
                                        <th className="px-6 py-4">Email</th>
                                        <th className="px-6 py-4">Document</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gradient-to-b from-[#111112] to-[#1A1A1B]">
                                    {[1, 2, 3, 4].map((num, index) => (
                                        <tr key={index} className="border-t border-gray-700">
                                            <td className="px-6 py-4">{num}</td>
                                            <td className="px-6 py-4">Taylor Swift</td>
                                            <td className="px-6 py-4">taylor_swift</td>
                                            <td className="px-6 py-4">taylor@mail.com</td>
                                            <td className="px-6 py-4 underline text-teal-400">Driver's License</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;
