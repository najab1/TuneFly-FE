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
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const faqData = [
    {
        question: "What is the referral program?",
        answer:
            "Maecenas malesuada tellus eu posuere vehicula. Nam nec dapibus nisi, quis efficitur ante. Duis nec bibendum eros. Proin euismod nulla a massa facilisis, non vestibulum augue auctor. Ut ornare at est ac ullamcorper.",
    },
    {
        question: "How it works?",
        answer: (
            <>
                Maecenas malesuada tellus eu posuere vehicula. Nam nec dapibus nisi, quis efficitur ante:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Tell your friends about Gastos Provider Club and register them on the app.</li>
                    <li>Complete all the steps of registration including payment for registration.</li>
                    <li>Go to the Manage Account Section in Settings page and enter your registered phone number and validate there.</li>
                    <li>You can check in your wallet that you have received Rs 150 in your wallet.</li>
                </ul>
            </>
        )
    },
    {
        question: "Where could I use these coins?",
        answer:
            "Navigate to Analytics in the sidebar. You’ll find detailed stats on impressions, clicks, and engagement.",
    },
    {
        question: "Is there a limit to how many campaigns I can run?",
        answer:
            "No, you can run as many campaigns as you'd like, but we recommend spacing them out to maximize engagement.",
    },
];

const Faqs = () => {
    const location = useLocation();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const navigate = useNavigate();

    return (
        <div
            className="
        min-h-screen flex flex-col md:flex-row text-white bg-cover bg-top md:bg-bottom
        bg-[url('/background/DashM.png')] md:bg-[url('/background/bg.png')]"
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
            <div className="flex-1 py-6 px-6 md:px-10 xl:px-14 2xl:px-20">
                {/* Mobile Header */}
                <div className="relative mb-6 md:hidden">
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)} />
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">FAQs</h1>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">Frequently Asked Questions</h1>
                        <div className="flex items-center gap-5">
                            <BellIcon className="w-6 h-6 text-white" />
                            <img
                                src="/profile/Profile.png"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-8 mb-8 w-full h-[1px] bg-gray-200/40" />
                </div>

                <div className="text-xs mb-6 hidden md:block text-center text-gray-300">Answers to most frequently asked questions by our users</div>

                {/* FAQ Section */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = expandedIndex === index;
                        return (
                            <div key={index}>
                                <div className="mx-4 md:mx-0 pb-6">
                                    <div
                                        onClick={() => setExpandedIndex(isOpen ? null : index)}
                                        className="flex justify-between items-center cursor-pointer"
                                    >
                                        <h3 className="text-white text-base font-medium">
                                            {item.question}
                                        </h3>
                                        <span className="text-teal-400 text-xl font-bold">
                                            {isOpen ? "×" : "+"}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <p className="text-gray-300 mt-3 text-sm">{item.answer}</p>
                                    )}
                                </div>

                                {/* Divider except after last item */}
                                {index < faqData.length - 1 && (
                                    <div className="border-t border-gray-400 mx-4 md:mx-0"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
