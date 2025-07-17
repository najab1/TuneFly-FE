import {
    ArrowUpTrayIcon,
    HeartIcon,
    CheckBadgeIcon
} from "@heroicons/react/24/outline";

const QrLanding = () => {
    return (
        <div
            className="
        min-h-screen flex flex-col items-center justify-center text-white
        bg-cover bg-top md:bg-left
        bg-[url('/background/DashM.png')]   /* Mobile */
        md:bg-[url('/background/bg.png')]   /* Tablet/Desktop */
      "
        >
            {/* Header */}
            <h1 className="text-2xl font-semibold mb-4">Tunefly</h1>
            <hr className="w-24 border-gray-400/50 mb-6" />

            {/* Card + Song Info */}
            <div className="w-full max-w-sm bg-[#1f1f21] rounded-xl overflow-hidden shadow-lg">
                {/* Image + Overlay */}
                <div className="relative">
                    <img
                        src="/assets/Swift.svg"
                        alt="Taylor Swift"
                        className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4">
                        {/* Top Icons */}
                        <div className="flex justify-end gap-2">
                            <ArrowUpTrayIcon className="w-5 h-5 text-white" />
                            <HeartIcon className="w-5 h-5 text-white" />
                        </div>
                        {/* Artist Info */}
                        <div>
                            <div className="inline-flex items-center text-xs text-white mb-1">
                                <CheckBadgeIcon className="w-4 h-4 mr-1 text-white" />
                                Verified Artist
                            </div>
                            <h2 className="text-lg font-semibold text-white">Taylor Swift</h2>
                            <p className="text-xs text-gray-400">100,000 monthly streamers</p>
                        </div>
                    </div>
                </div>

                {/* Song Details */}
                <div className="px-6 py-6 text-center space-y-4">
                    <h3 className="text-xl font-semibold">Cruel Summer</h3>
                    <p className="text-sm text-gray-400">Taylor Swift</p>

                    {/* Listen now (gradient border) */}
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-pink-500 to-teal-400">
                        <button className="bg-[#1f1f21] w-full px-6 py-2 rounded-full text-sm font-medium">
                            Listen now
                        </button>
                    </div>

                    {/* Platforms */}
                    <div className="flex justify-center gap-6">
                        <img src="/assets/spotify.svg" alt="Spotify" className="w-6 h-6" />
                        <img src="/assets/apple.svg" alt="Apple Music" className="w-6 h-6" />
                        <img src="/assets/youtube.svg" alt="YouTube" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrLanding;
