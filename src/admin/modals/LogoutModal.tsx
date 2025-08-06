import React from "react";

interface LogoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-[#1F1F21] w-[90%] max-w-md rounded-lg p-6 text-center shadow-lg border border-[#444]">
                {/* Trash Icon with gradient */}
                <div className="flex justify-center mb-4">
                    <div className="">
                        <img
                            src="/assets/Baltiiii.svg"
                            alt="Delete"
                            className="h-24 w-24"
                        />
                    </div>
                </div>

                <h2 className="text-white text-xl font-semibold mb-2">Logout?</h2>
                <p className="text-gray-400 text-sm mb-6">
                    Are you sure you want to logout? You'll have to sign in again.
                </p>

                <div className="flex justify-center gap-4">
                    <div className="bg-gradient-to-r from-pink-500 to-teal-400 p-[1px] rounded-md">
                        <button
                            onClick={onClose}
                            className="w-full px-5 py-2 rounded-md text-white bg-[#111111] text-xs hover:bg-[#2a2a2a]"
                        >
                            Cancel
                        </button>
                    </div>

                    <button
                        onClick={onConfirm}
                        className="bg-gradient-to-r from-pink-500 to-teal-400 px-4 py-2 rounded-md text-white text-xs"
                    >
                        Yes, logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
