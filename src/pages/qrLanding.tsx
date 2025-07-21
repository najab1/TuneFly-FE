import {
    ArrowUpOnSquareIcon,
    HeartIcon
} from "@heroicons/react/24/outline";

const QrLanding = () => {
    return (
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
                        className="w-full h-[240px] object-cover" /* no radius */
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
            <div className="fixed bottom-6 left-0 w-full text-center z-10">
                <p className="text-xs mb-3 text-white">DOWNLOAD MOBILE APP</p>
                <div className="flex justify-center gap-6">
                    <img src="/assets/ios.svg" className="w-32" />
                    <img src="/assets/android.svg" className="w-32" />
                </div>
            </div>
        </div>
    );
};

export default QrLanding;
