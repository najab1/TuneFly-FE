import {
    BellIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    UserIcon,
    CurrencyDollarIcon,
    UserGroupIcon,
    QrCodeIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QRGenerator = () => {
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
            <aside className="hidden md:flex flex-col w-64 bg-[#111111] p-6 space-y-6">
                <img src="/assets/logo.svg" alt="Tunefly Logo" className="w-20 lg:w-24 items-center justify-center mx-auto mb-4" />
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
                </ul>
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
                        QR Generator
                    </h1>
                </div>

                {/* QR Code Generator for Mobile */}
                <div className="md:hidden flex flex-col items-center text-center px-6 mt-40">
                    {/* QR Logo */}
                    <img
                        src="/assets/qrSkeleton.svg"
                        alt="QR Icon"
                        className="w-40 h-40 mb-6"
                    />

                    {/* Instruction Text */}
                    <p className="text-white text-sm mb-6">
                        Enter the link and click generate to get QR code
                    </p>

                    {/* Input Field */}
                    <div className="w-full mb-6 relative rounded-lg p-[1px] bg-gradient-to-r from-pink-500 to-teal-400">
                        <input
                            type="text"
                            placeholder="Enter the link"
                            className="
      w-full py-3 px-4
      rounded-lg
      bg-[#1F1F21] text-white
      placeholder-gray-400
      focus:outline-none focus:ring-2 focus:ring-pink-500
    "
                        />
                    </div>


                    {/* Generate Button */}
                    <button
                        className="
      w-full py-3
      bg-gradient-to-r from-pink-500 to-teal-400
      text-white text-base font-semibold rounded-lg
      shadow-md hover:brightness-110 transition
    "
                    >
                        Generate QR
                    </button>
                </div>


                {/* Header (desktop) */}
                <div className="hidden md:block mb-6">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                        {/* Left: Dashboard title */}
                        <h1 className="text-2xl font-semibold text-white">QR Code Generator</h1>

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

                    {/* Empty state content for laptop */}
                    <div className="md:block flex mt-12 lg:mt-16 xl:mt-14 2xl:mt-20 flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-6">
                        {/* QR Code Generator for Laptop */}
                        <div className="flex flex-col items-center text-center px-6 mt-32 2xl:mt-48">
                            {/* QR Logo */}
                            <img
                                src="/assets/qrSkeleton.svg"
                                alt="QR Icon"
                                className="w-40 h-40 mb-6"
                            />

                            {/* Instruction Text */}
                            <p className="text-white text-sm mb-6">
                                Enter the link and click generate to get QR code
                            </p>

                            {/* Input Field */}
                            <div className="w-full lg:w-96 mb-6 relative rounded-lg p-[1px] bg-gradient-to-r from-pink-500 to-teal-400">
                                <input
                                    type="text"
                                    placeholder="Enter the link"
                                    className="
      w-full py-3 px-4
      rounded-lg
      bg-[#1F1F21] text-white
      placeholder-gray-400
      focus:outline-none focus:ring-2 focus:ring-pink-500
    "
                                />
                            </div>


                            {/* Generate Button */}
                            <button
                                className="
      w-full lg:w-96 py-3
      bg-gradient-to-r from-pink-500 to-teal-400
      text-white text-base font-semibold rounded-lg
      shadow-md hover:brightness-110 transition
    "
                            >
                                Generate QR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRGenerator;
