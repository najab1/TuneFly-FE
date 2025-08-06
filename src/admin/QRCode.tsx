import {
    BellIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    MagnifyingGlassIcon,
    UserIcon,
    UserGroupIcon,
    QrCodeIcon,
    CurrencyDollarIcon,
    PowerIcon
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QRCode = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div
            className="
                min-h-screen flex flex-col md:flex-row text-white bg-cover bg-top md:bg-bottom
                bg-[url('/background/DashM.png')]   // Mobile
                md:bg-[url('/background/bg.png')]   // Tablet
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
                                //   onClick={handleLogout}
                                className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
                            >
                                <PowerIcon className="w-5 h-5" />
                                <span className="text-base font-medium">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 px-4 py-6 lg:px-10 xl:px-14 2xl:px-20">
                {/* Top Header */}
                <div className="relative mb-6 md:hidden">
                    {/* Back Button */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)} />
                    </button>

                    {/* Title */}
                    <h1 className="text-[1.35rem] font-semibold text-white text-center mb-10">
                        QR Codes
                    </h1>

                    {/* Magnifying Glass Icon */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                {/* QR Code Grid for Mobile */}
                <div className="md:hidden px-3 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="bg-[#0F0F0F] rounded-md overflow-hidden shadow-md">
                            {/* QR Section */}
                            <div className="flex items-center justify-center py-">
                                <img
                                    src="/assets/QR.svg"
                                    alt="QR Code"
                                    className="w-[12rem] h-36 object-cover"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="bg-[#1B1B1B] px-3 py-2 flex flex-col items-center gap-2">
                                {/* Username */}
                                <div className="flex items-center gap-1 mt-1">
                                    <UserIcon className="w-4 h-4 text-white" />
                                    <span className="text-sm font-medium text-white">John Doe</span>
                                </div>

                                {/* Assigned / Not Assigned Tag */}
                                <span
                                    className={`text-xs rounded-md mb-2
                                            px-[1px] py-[1px] inline-block bg-gradient-to-r 
                                            ${i === 3
                                            ? 'from-pink-500 to-teal-400'
                                            : 'from-pink-500 to-teal-400'
                                        }`}
                                >
                                    <span className="flex items-center gap-1 px-4 py-[2px] rounded-md bg-[#0F0F0F] text-white">
                                        <span className={`text-sm ${i === 3 ? 'text-pink-500' : 'text-teal-400'}`}>
                                            • <span className=""></span>
                                            {i === 3 ? 'Not Assigned' : 'Assigned'}
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Header (desktop) */}
                <div className="hidden md:block mb-6">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                        {/* Left: Dashboard title */}
                        <h1 className="text-2xl font-semibold text-white">QR Codes</h1>

                        {/* Right: Bell + Profile */}
                        <div className="flex items-center gap-5">
                            <BellIcon className="w-6 h-6 text-white" />
                            <img
                                src="/profile/Profile.png"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Divider line below header */}
                    <div className="mt-8 mb-12 w-full h-[1px] bg-gray-200/40" />

                    {/* QR Code Grid for Laptop */}
                    <div className="px-3 grid grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="bg-[#0F0F0F] rounded-md overflow-hidden shadow-md">
                                {/* QR Section */}
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/assets/LaptopQR.svg"
                                        alt="QR Code"
                                        className="w-[12rem] xl:w-[16rem] 2xl:w-[23rem] h-36 xl:h-52 2xl:h-72 object-cover"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="bg-[#1B1B1B] px-3 py-2 flex flex-col items-center gap-2">
                                    {/* Username */}
                                    <div className="flex items-center gap-1 mt-1">
                                        <UserIcon className="w-4 h-4 text-white" />
                                        <span className="text-sm font-medium text-white">John Doe</span>
                                    </div>

                                    {/* Assigned / Not Assigned Tag */}
                                    <span
                                        className={`text-xs rounded-md mb-2
                                            px-[1px] py-[1px] inline-block bg-gradient-to-r 
                                            ${i === 3
                                                ? 'from-pink-500 to-teal-400'
                                                : 'from-pink-500 to-teal-400'
                                            }`}
                                    >
                                        <span className="flex items-center gap-1 px-4 py-[2px] rounded-md bg-[#0F0F0F] text-white">
                                            <span className={`text-xs ${i === 3 ? 'text-pink-500' : 'text-teal-400'}`}>
                                                {i === 3 ? 'Not Assigned' : 'Assigned'}
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* Floating + Button (Mobile Only) */}
            <button
                onClick={() => navigate('/admin/qrGenerator')}
                className="
    fixed bottom-6 right-6 lg:right-11 xl:right-16 2xl:right-20 z-50 
    w-12 h-12 rounded-xl
    bg-gradient-to-r from-pink-500 to-teal-400
    flex items-center justify-center
    shadow-lg hover:scale-105 transition-transform duration-200
  "
            >
                <PlusIcon className="w-8 h-8 text-white" />
            </button>
        </div>
    );
};

export default QRCode;
