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

const faqData = [
    {
        question: "How do I make changes to my music?",
        answer:
            "Updates to release dates, track or album titles, and text formatting must be provided to Tunefly by your distributor or label.",
    },
    {
        question: "Can I update my artist profile picture?",
        answer:
            "Yes, go to Settings > Profile and upload a new image. Please ensure the image is square and under 5MB.",
    },
    {
        question: "How can I track campaign performance?",
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
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-[#111111] p-6 space-y-6">
                <img
                    src="/assets/logo.svg"
                    alt="Tunefly Logo"
                    className="w-20 lg:w-24 mx-auto mb-4"
                />
                <ul className="text-white text-base font-medium space-y-4">
                    {[
                        { icon: HomeIcon, label: "Home", path: "/dashboard" },
                        { icon: SpeakerWaveIcon, label: "New Campaigns", path: "/campaigns" },
                        { icon: MusicalNoteIcon, label: "Asset Library", path: "/library" },
                        { icon: ChartBarSquareIcon, label: "Analytics", path: "/analytics" },
                        { icon: Cog6ToothIcon, label: "Settings", path: "/settings" },
                        { icon: QuestionMarkCircleIcon, label: "FAQs", path: "/faqs" },
                    ].map(({ icon: Icon, label, path }) => (
                        <li
                            key={label}
                            className={`relative flex items-center gap-3 px-4 py-2 rounded-r-full cursor-pointer transition-all duration-300 ${location.pathname === path
                                ? "bg-[#1F1F21] text-white"
                                : "hover:bg-[#1F1F21]/50"
                                }`}
                        >
                            {location.pathname === path && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-teal-400 rounded-r" />
                            )}
                            <Icon className="w-5 h-5" />
                            {label}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 py-6 px-6 md:px-10 xl:px-14 2xl:px-20">
                {/* Mobile Header */}
                <div className="relative mb-6 md:hidden">
                    <button className="absolute left-4 top-1/2 -translate-y-1/2">
                        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-400" onClick={() => navigate(-1)}/>
                    </button>
                    <h1 className="text-[1.35rem] font-semibold text-white text-center">FAQs</h1>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block mb-6 mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">FAQs</h1>
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

                {/* FAQ Section */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = expandedIndex === index;
                        return (
                            <div key={index}>
                                <div className="mx-4 pb-6">
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
                                    <div className="border-t border-gray-400 mx-4"></div>
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
