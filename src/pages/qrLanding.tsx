import { useState } from "react";
import {
    ArrowUpOnSquareIcon,
    HeartIcon,
    MagnifyingGlassIcon,

} from "@heroicons/react/24/outline";

const QrLanding = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div>
            {/* Mobile Design */}
            <div className="block lg:hidden">
                <div
                    className="
        min-h-screen flex flex-col items-center text-white
        bg-cover bg-bottom md:bg-left
        bg-[url('/background/artistBGM.png')]
        md:bg-[url('/background/bg.png')]
        pt-10 pb-16 font-openSans
      "
                >
                    {/* Header */}
                    <h1 className="text-2xl font-bold mb-6">Tunefly</h1>

                    <hr className="w-[85%] border-t border-white/20 mb-6" />


                    {/* === Artist Card (image + overlays + blurred footer) === */}
                    <div className="w-full px-2 overflow-hidden shadow-xl">
                        {/* image + overlays */}
                        <div className="relative">
                            <img
                                src="/assets/Swift.svg"
                                alt="Taylor Swift"
                                className="w-full h-[240px] md:h-[260px] object-cover md:object-top"
                            />

                            {/* share / like – top‑right */}
                            <div className="absolute bottom-3 right-2 flex gap-2">
                                <div className="p-2 bg-black/30 backdrop-blur-sm rounded-full">
                                    <ArrowUpOnSquareIcon className="w-5 h-5 text-white" />
                                </div>
                                <div className="p-2 bg-black/30 backdrop-blur-sm rounded-full">
                                    <HeartIcon className="w-5 h-5 text-white" />
                                </div>
                            </div>


                            {/* verified + artist stats – top‑left */}
                            <div className="absolute bottom-[4.5rem] left-2 flex items-center gap-1 text-[10px]">
                                <img src="/assets/verified.svg" className="w-4 h-4" />
                                <span>Verified Artist</span>
                            </div>

                            {/* artist name + monthly streams – bottom‑left */}
                            <div className="absolute bottom-4 left-2">
                                <h2 className="text-xl font-semibold leading-tight">
                                    Taylor Swift
                                </h2>
                                <p className="text-[10px] text-gray-300 mt-2 leading-tight">
                                    100,000 monthly streamers
                                </p>
                            </div>
                        </div>

                        {/* blurred footer (song + button + icons) */}
                        <div className="backdrop-blur-sm bg-black/45 px-6 pt-4 pb-6 text-center">
                            {/* Track */}
                            <h3 className="text-3xl font-bold">Cruel Summer</h3>
                            <p className="text-lg text-gray-300 mb-4 mt-2">Taylor Swift</p>

                            {/* gradient‑outline button */}
                            <div className="bg-gradient-to-r from-pink-500 to-teal-400 p-[3px] rounded-full w-fit mx-auto">
                                <button className="bg-black/50 backdrop-blur-md text-white px-8 py-1 text-sm font-semibold rounded-full">
                                    Listen now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* platform icons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <img src="/assets/Spotify_icon.svg" className="w-10 h-10" />
                        <img src="/assets/itunes.svg" className="w-10 h-10" />
                        <img src="/assets/youtube.svg" className="w-10 h-10" />
                    </div>

                    {/* === Download section === */}
                    <div className="fixed bottom-2 left-0 w-full text-center z-10">
                        <p className="text-xs mb-3 text-white">DOWNLOAD MOBILE APP</p>
                        <div className="flex justify-center gap-3">
                            <img src="/assets/ios.svg" className="w-28" />
                            <img src="/assets/android.svg" className="w-28" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop / Laptop Layout */}
            <div className="hidden lg:block">
                <div
                    className="min-h-screen w-full text-white font-openSans bg-cover bg-right bg-[url('/background/ArtistBG.png')] flex flex-col"
                >
                    {/* ===== Top Header ===== */}
                    <header className="w-full flex items-center justify-between gap-4 px-8 xl:px-16 pt-8 pb-4 max-w-[1600px] mx-auto">
                        {/* Brand / Logo */}
                        <div className="flex items-center gap-2">
                            {/* Logo */}
                            <img
                                src="/assets/logo.svg"
                                alt="Tunefly"
                                className="h-16 w-auto"
                            />
                        </div>

                        {/* Search bar with MagnifyingGlassIcon */}
                        <div className="w-[32rem] rounded-full p-[1px] bg-gradient-to-r from-pink-600 to-teal-400">
                            <div
                                className="relative w-full rounded-full px-4 py-2 flex items-center bg-gradient-to-r from-[#1f1f1f]/60 to-[#111111]/60 backdrop-blur-md"
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-white/60 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="bg-transparent outline-none text-white placeholder:text-white/60 placeholder:text-sm w-full"
                                />
                            </div>
                        </div>

                        {/* User Avatar */}
                        <div className="h-16 w-16 rounded-full overflow-hidden border border-white/20 flex items-center justify-center text-sm">
                            <img
                                src="/profile/Profile.png"
                                alt="User"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </header>

                    {/* ===== Main Content Grid ===== */}
                    <div
                        className="w-full max-w-[1600px] mx-auto flex items-start justify-center gap-4 xl:gap-4 px-8 xl:px-16 pb-24"
                    >
                        {/* === LEFT: Main Artist Card === */}
                        <section
                            className="flex-1 w-full h-[40rem] 2xl:h-[50rem] bg-white/5 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                        >
                            {/* Hero Image */}
                            <div className="relative w-full overflow-hidden">
                                <img
                                    src="/assets/SwiftLg.png"
                                    alt="Taylor Swift Header"
                                    className="w-full"
                                />
                                {/* Verified flag top-left inside image */}
                                <div className="absolute bottom-4 left-3 gap-1">
                                    <div className="flex items-center">
                                        <img src="/assets/verified.svg" className="w-5 h-5" />
                                        <span className="text-xs">Verified Artist</span>
                                    </div>
                                    <div className="text-2xl font-bold leading-tight">Taylor Swift</div>
                                    <div className="text-white/70 text-xs mt-1">100,000 monthly streamers</div>
                                </div>
                            </div>

                            {/* Artist Meta Row */}
                            <div className="mt-8 px-8 flex justify-between items-center">
                                {/* === Left: Avatar + Follow + Dots === */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <img
                                        src="/assets/purpleSwift.png"
                                        alt="Avatar"
                                        className="w-7"
                                    />

                                    {/* Follow Button */}
                                    <button className="relative inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500 to-teal-400">
                                        <span className="absolute inset-[1px] rounded-full bg-black/80 backdrop-blur-md" />
                                        <span className="relative z-10">Follow</span>
                                    </button>

                                    {/* Three dots */}
                                    <div className="w-9 h-9 flex text-white text-xl">
                                        &#x2026; {/* HTML entity for … */}
                                    </div>
                                </div>

                                {/* === Right: Music Platforms === */}
                                <div className="flex gap-4">
                                    <img src="/assets/Spotify_icon.svg" className="w-8 h-8" />
                                    <img src="/assets/itunes.svg" className="w-8 h-8" />
                                    <img src="/assets/youtube.svg" className="w-8 h-8" />
                                </div>
                            </div>
                        </section>

                        {/* === RIGHT: Track Promo + Go Mobile === */}
                        <aside className="w-[344px] xl:w-[360px] shrink-0 flex flex-col items-stretch gap-8">
                            {/* === Track Promo Card === */}
                            <div className=" bg-[#1f1f21] shadow-[0_0_30px_rgba(0,0,0,0.6)] px-4 pt-1 pb-2 flex flex-col gap-4">
                                {/* === Top Bar: Two Icons (Optional dropdown + 3-dot) === */}
                                <div className="flex justify-between items-center">
                                    <img src="/assets/cardCollapseIcon.svg" className="w-4 h-4" />
                                    <div className="text-white text-xl">&#x2026;</div>
                                </div>

                                {/* === Image Block === */}
                                <div className="relative w-full overflow-hidden">
                                    <img
                                        src="/assets/Swift.svg"
                                        alt="Cruel Summer"
                                        className="w-full h-60 object-cover object-center rounded-md"
                                    />
                                </div>

                                {/* === Meta Block === */}
                                <div className="px-2 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-lg font-semibold">Cruel Summer</h3>
                                        <p className="text-white/60 text-xs mt-1">Taylor Swift</p>
                                    </div>

                                    {/* Play Button Gradient Circle */}
                                    <div className="bg-gradient-to-r from-pink-500 to-teal-400 rounded-full p-[2px]">
                                        <button className="p-2 rounded-full flex items-center justify-center">
                                            <svg
                                                fill="white"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5.25 5.653v12.693a.75.75 0 0 0 1.133.65l11.14-6.347a.75.75 0 0 0 0-1.3L6.383 4.999a.75.75 0 0 0-1.133.654Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* === Footer Icons: Share & Like === */}
                                <div className="flex justify-center">
                                    {/* Share Icon */}
                                    <button className="p-2 hover:border-white transition-all">
                                        <ArrowUpOnSquareIcon className="w-6 h-6 text-white" />
                                    </button>

                                    {/* Heart Icon */}
                                    <button
                                        onClick={() => setLiked(!liked)}
                                        className=" hover:border-white transition-all"
                                    >
                                        {liked ? (
                                            // Filled gradient SVG
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-6 h-6"
                                            >
                                                <defs>
                                                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#ec4899" />
                                                        <stop offset="100%" stopColor="#14b8a6" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    fill="url(#heartGradient)"
                                                    d="M11.998 20.728L10.828 19.65C5.604 14.825 2 11.576 2 7.714 
           2 4.76 4.432 2.5 7.25 2.5c1.54 0 3.04.752 3.998 1.938C12.71 
           3.252 14.21 2.5 15.75 2.5 18.568 2.5 21 4.76 21 7.714c0 
           3.862-3.604 7.111-8.828 11.936l-1.174 1.078z"
                                                />
                                            </svg>
                                        ) : (
                                            // Outline heart from Heroicons
                                            <HeartIcon className="w-6 h-6 text-white" />
                                        )}
                                    </button>


                                </div>

                            </div>

                            {/* === Go Mobile Section === */}
                            <div className="rounded-[24px] backdrop-blur-sm px-6 py-8 text-center text-white">
                                <p className="text-xs tracking-widest mb-4">GO MOBILE</p>
                                <div className="flex flex-col items-center gap-4">
                                    <img src="/assets/ios.svg" className="w-32" />
                                    <img src="/assets/android.svg" className="w-32" />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default QrLanding;
