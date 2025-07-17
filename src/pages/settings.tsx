import { useState, useMemo } from "react";
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
    TrashIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    EyeIcon,
    EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import countryList from 'react-select-country-list';

const Settings = () => {
    const location = useLocation();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const countryOptions = useMemo(() => countryList().getData(), []);
    const [countryOpen, setCountryOpen] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
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
            <div className="flex-1 py-6 md:px-10 xl:px-14 2xl:px-20">

                {/* Desktop Header (optional) */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">Settings</h1>
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
                <div className="relative mb-6 md:hidden flex items-center justify-between px-4">
                    <button>
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)} />
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
                <div className="px-4 md:px-0 flex flex-col items-center text-center lg:hidden">
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
                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col gap-12">

                    {/* Row 1: Picture + Buttons */}
                    <div className="flex justify-between items-start">
                        {/* Left: Profile Picture + Label */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-28 h-28 rounded-full overflow-hidden">
                                <img
                                    src="/profile/Profile.png"
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-center text-base text-white">
                                Profile Picture<br />
                                <div className="text-gray-400 text-sm">PNG, JPEG under 15MB</div>
                            </p>
                        </div>

                        {/* Right: Upload / Delete Buttons */}
                        <div className="flex flex-col items-end gap-3 mt-12">
                            <div className="flex gap-3">
                                {/* Outlined gradient button */}
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <button className="bg-[#1f1f21] text-white font-medium text-xs px-4 py-2 rounded-md">
                                        Upload new picture
                                    </button>
                                </div>

                                {/* Solid gradient button */}
                                <button className="bg-gradient-to-r from-pink-500 to-teal-400 text-white font-medium text-xs px-4 py-2 rounded-md">
                                    Delete picture
                                </button>
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <button
                                    onClick={() => setShowDeleteModal(true)}
                                    className="text-xs text-red-400 underline"
                                >
                                    Delete account permanently
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Profile Heading + Fields */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold">Profile</h2>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Username */}
                            <div className="flex flex-col">
                                <label htmlFor="username" className="text-sm mb-2">Username</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type="text"
                                        id="username"
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm mb-2">Email</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-sm mb-2">Phone Number</label>
                                <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div className="flex flex-col">
                                <label htmlFor="country" className="text-sm mb-2">Country</label>
                                <div className="relative p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <select
                                        id="country"
                                        value={selectedCountry}
                                        onChange={e => setSelectedCountry(e.target.value)}
                                        onFocus={() => setCountryOpen(true)}
                                        onBlur={() => setCountryOpen(false)}
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none appearance-none pr-8"
                                    >
                                        <option value="" disabled>Choose your country</option>
                                        {countryOptions.map(c => (
                                            <option key={c.value} value={c.value}>
                                                {c.label}
                                            </option>
                                        ))}
                                    </select>

                                    {/* chevron */}
                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        {countryOpen
                                            ? <ChevronUpIcon className="w-4 h-4 text-gray-400" />
                                            : <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 w-full h-[1px] bg-gray-200/40" />
                    </div>
                    {/* …then your Password & Integrated Accounts sections as before… */}
                    <div className="">
                        <h2 className="text-2xl font-semibold">Password</h2>
                        <div className="text-xs text-gray-400 mt-2 mb-8">Modify your current password</div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="currentPassword" className="text-sm mb-2">Current Password</label>
                                <div className="relative p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type={showCurrent ? "text" : "password"}
                                        id="currentPassword"
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrent(o => !o)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                                        aria-label={showCurrent ? "Hide password" : "Show password"}
                                    >
                                        {showCurrent
                                            ? <EyeSlashIcon className="w-5 h-5" />
                                            : <EyeIcon className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="flex flex-col">
                                <label htmlFor="newPassword" className="text-sm mb-2">New Password</label>
                                <div className="relative p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                    <input
                                        type={showNew ? "text" : "password"}
                                        id="newPassword"
                                        className="w-full px-4 py-3 rounded-md bg-[#1f1f21] text-white text-sm outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNew(o => !o)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                                        aria-label={showNew ? "Hide password" : "Show password"}
                                    >
                                        {showNew
                                            ? <EyeSlashIcon className="w-5 h-5" />
                                            : <EyeIcon className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 w-full h-[1px] bg-gray-200/40" />
                    </div>

                    {/* Row 4: Integrated Accounts */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold">Integrated Accounts</h2>
                        <div className="text-xs text-gray-400 mt-2 mb-8">Manage your current integrated accounts</div>

                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                            {/* Spotify */}
                            <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="flex items-center justify-between px-4 py-3 bg-[#1f1f21] rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/assets/Spotify_icon.svg"
                                            alt="Spotify"
                                            className="w-14 h-14"
                                        />
                                        <span>Spotify</span>
                                    </div>
                                    {/* Gradient‑border “Connected” pill */}
                                    <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                        <span className="block bg-[#1f1f21] text-xs text-white px-3 py-1 rounded-md">
                                            Connected
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Apple Music */}
                            <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="flex items-center justify-between px-4 py-3 bg-[#1f1f21] rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/assets/AMusic_icon.svg"
                                            alt="Apple Music"
                                            className="w-14 h-14"
                                        />
                                        <span>Apple Music</span>
                                    </div>

                                    {/* Gradient‑border “Connected” pill */}
                                    <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                        <span className="block bg-[#1f1f21] text-xs text-white px-3 py-1 rounded-md">
                                            Connected
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Paste your link */}
                            <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-teal-400">
                                <div className="flex items-center justify-between px-4 py-3 bg-[#1f1f21] rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/Clip.svg" alt="Link" className="w-14 h-14" />
                                        <span>Paste your link</span>
                                    </div>
                                    {/* Gradient‑border “Connected” pill */}
                                    <div className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 to-teal-400">
                                        <span className="block bg-[#1f1f21] text-xs text-white px-3 py-1 rounded-md">
                                            Connected
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
