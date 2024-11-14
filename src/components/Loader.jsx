import React from 'react';

const Loader = () => {
    return (
        <div className="loader w-screen h-screen flex items-center justify-center">
            <div className="flex-col gap-4 flex items-center justify-center">
                <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Loader;
