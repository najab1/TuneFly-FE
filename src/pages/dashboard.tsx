import { useState } from "react";
import { FaMusic, FaSignal, FaUsers } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { BellIcon, Bars3Icon, XMarkIcon, SpeakerWaveIcon, MusicalNoteIcon, ChartBarSquareIcon, Cog6ToothIcon, QuestionMarkCircleIcon, PowerIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="min-h-screen w-full bg-cover bg-top md:bg-center px-4 py-6 text-white md:px-10"
            style={{ backgroundImage: "url('/background/DashM.png')" }}
        >

            {/* Top Header with Profile and Icons */}
            <div className="flex items-center justify-between mb-6">
                {/* Profile Info */}
                <div className="flex items-center gap-4">
                    <img
                        src="/profile/Profile.png"
                        alt="Profile"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm text-gray-300">Good Morning,</p>
                        <h2 className="text-lg font-semibold font-inter">James Smith</h2>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-3">
                    <BellIcon className="w-6 h-6 text-white" />
                    <button onClick={() => setIsOpen(true)}>
                        <Bars3Icon className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Drawer */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <div className="fixed right-0 top-4 h-full w-64 bg-[#111111] p-6 shadow-xl overflow-y-auto">
                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                        <button onClick={() => setIsOpen(false)}>
                            <XMarkIcon className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    {/* Sidebar Links */}
                    <ul className="text-white">
                        <li className="text-center font-bold text-xl pb-4">Menu</li>

                        <div className="divide-y divide-gray-600">
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <SpeakerWaveIcon className="w-5 h-5" />
                                New Campaigns
                            </li>
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <MusicalNoteIcon className="w-5 h-5" />
                                Asset Library
                            </li>
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <ChartBarSquareIcon className="w-5 h-5" />
                                Analytics
                            </li>
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <Cog6ToothIcon className="w-5 h-5" />
                                Settings
                            </li>
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <QuestionMarkCircleIcon className="w-5 h-5" />
                                FAQs
                            </li>
                            <li className="hover:text-pink-400 cursor-pointer py-4 px-1 flex items-center gap-3">
                                <PowerIcon className="w-5 h-5" />
                                Logout
                            </li>
                        </div>
                    </ul>
                </div>
            </Dialog>


            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Card 1 */}
                <div className="bg-[#1F1F21]/70 rounded-md border border-pink-500 p-4 flex flex-col items-start gap-2">
                    <p className="text-sm text-gray-300">Total Impressions</p>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-semibold">15</span>
                        <FaSignal className="text-teal-400 text-xl" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1F1F21]/70 rounded-md border border-teal-400 p-4 flex flex-col items-start gap-2">
                    <p className="text-sm text-gray-300">Total Music</p>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-semibold">06</span>
                        <FaMusic className="text-pink-500 text-xl" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1F1F21]/70 rounded-md border border-teal-400 p-4 flex flex-col items-start gap-2">
                    <p className="text-sm text-gray-300">Total Listeners</p>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-semibold">25</span>
                        <FaUsers className="text-pink-400 text-xl" />
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#1F1F21]/70 rounded-md border border-pink-400 p-4 flex flex-col items-start gap-2">
                    <p className="text-sm text-gray-300">Monthly Listeners</p>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-semibold">12</span>
                        <MdCalendarToday className="text-teal-400 text-xl" />
                    </div>
                </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-[#1F1F21]/80 rounded-md border border-pink-500 overflow-hidden">
                {/* Header */}
                <div className="bg-pink-500 text-center py-2 font-semibold text-sm">QR Code Scanned</div>

                {/* Data */}
                <div className="grid grid-cols-2 divide-x divide-gray-500 text-center py-4">
                    <div>
                        <p className="text-lg font-bold">27</p>
                        <p className="text-sm text-gray-300">Scanned</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">56</p>
                        <p className="text-sm text-gray-300">Listener Engagement</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
