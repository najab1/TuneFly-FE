import { useState } from "react";
import {
    BellIcon,
    SpeakerWaveIcon,
    MusicalNoteIcon,
    ChartBarSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    ArrowLeftCircleIcon,
    ChevronRightIcon,
    UserIcon,
    LockClosedIcon,
    TrashIcon
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const location = useLocation();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    // Clickable routes
    const settingsOptions = [
        {
            icon: <UserIcon className="w-9 h-9 p-2 rounded-full text-white bg-[#402334]" />,
            label: "Integrated Accounts",
            route: "/integratedAccounts",
        },
        {
            icon: <LockClosedIcon className="w-9 h-9 p-2 rounded-full text-white bg-[#402334]" />,
            label: "Change Password",
            route: "/changePassword",
        },
        {
            icon: <TrashIcon className="w-9 h-9 p-2 rounded-full text-white bg-[#402334]" />,
            label: "Delete Account",
            onClick: () => setShowDeleteModal(true),
        },
    ];

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
                <div className="relative mb-6 md:hidden flex items-center justify-between px-4">
                    <button>
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)}/>
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white">Settings</h1>
                    <button
                        className="text-gray-300 text-sm font-medium"
                        onClick={() => setShowLogoutModal(true)}
                    >
                        Logout
                    </button>
                </div>

                {/* Settings Content */}
                <div className="px-4 md:px-0 flex flex-col items-center text-center">
                    {/* Profile Image with Gradient Border */}
                    <div className="rounded-full w-24 h-24 mb-6">
                        <img
                            src="/profile/Profile.png"
                            alt="User"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/* Name + Email */}
                    <h2 className="text-xl font-semibold">James Smith</h2>
                    <p className="text-gray-400 text-[0.85rem] mb-6">james.smith@mail.com</p>

                    {/* Edit Profile Button */}
                    <button className="bg-gradient-to-r from-pink-500 to-teal-400 rounded-full px-6 py-2 text-sm font-semibold mb-10">
                        <Link to="/editProfile">Edit Profile</Link>
                    </button>

                    {/* Settings Links */}
                    <div className="w-full max-w-md -space-y-3 text-left">
                        {settingsOptions.map((item, idx) => {
                            const content = (
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <p className="text-sm">{item.label}</p>
                                </div>
                            );

                            return item.route ? (
                                <Link
                                    to={item.route}
                                    key={idx}
                                    className="flex items-center justify-between px-2 py-4 rounded-lg hover:bg-[#2a2a2c] transition duration-200"
                                >
                                    {content}
                                    <ChevronRightIcon className="w-5 h-5 text-white" />
                                </Link>
                            ) : (
                                <div
                                    key={idx}
                                    onClick={item.onClick}
                                    className="flex items-center justify-between px-2 py-4 rounded-lg hover:bg-[#2a2a2c] transition duration-200 cursor-pointer"
                                >
                                    {content}
                                    <ChevronRightIcon className="w-5 h-5 text-white" />
                                </div>
                            );
                        })}
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

            {/* Delete modal */}
            {
                showDeleteModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                        <div className="bg-[#1f1f21] text-white rounded-xl p-6 w-80 text-center shadow-lg">

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full bg-gradient-to-r from-pink-500 to-teal-400 flex items-center justify-center">
                                    <img
                                        src="/assets/Baltiiii.svg"
                                        alt="Delete Icon"
                                        className="w-14 h-14"
                                    />
                                </div>
                            </div>

                            {/* Heading & Text */}
                            <h2 className="text-2xl font-bold mb-2">Are you sure?</h2>
                            <p className="text-sm text-gray-300 mb-5">You want to delete your account permanently?</p>

                            {/* Stacked Buttons */}
                            <div className="flex flex-col space-y-px w-full">
                                {/* Logout / Delete Button */}
                                <button
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        console.log("Account deleted");
                                    }}
                                    className="w-full py-3 text-sm font-semibold text-white"
                                >
                                    Delete
                                </button>

                                {/* Divider Line */}
                                <div className="h-px bg-gray-600 w-full"></div>

                                {/* Cancel Button */}
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="w-full py-3 text-sm text-white"
                                >
                                    Keep Account
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }

            {/* Logout Modal */}
            {
                showLogoutModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                        <div className="bg-[#1f1f21] text-white rounded-xl p-6 w-80 text-center shadow-lg">

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full bg-gradient-to-r from-pink-500 to-teal-400 flex items-center justify-center">
                                    <img
                                        src="/assets/Logout.svg"
                                        alt="Logout Icon"
                                        className="w-14 h-14"
                                    />
                                </div>
                            </div>

                            {/* Heading & Text */}
                            <h2 className="text-2xl font-bold mb-2">Logout?</h2>
                            <p className="text-sm text-gray-300 mb-5">Are you sure you want to logout?</p>

                            {/* Button Stack */}
                            <div className="flex flex-col space-y-px w-full">
                                <button
                                    onClick={() => {
                                        setShowLogoutModal(false);
                                        console.log("User logged out");
                                        // Add your logout logic here like clearing token or redirect
                                    }}
                                    className="w-full py-3 text-sm font-semibold text-white"
                                >
                                    Logout 
                                </button>

                                <div className="h-px bg-gray-600 w-full"></div>

                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="w-full py-3 text-sm text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Settings;
