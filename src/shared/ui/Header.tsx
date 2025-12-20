import React, { useState } from "react";

interface HeaderProps{
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({isDark, setIsDark}) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return(
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 shadow-sm">

            <div className="container flex items-center justify-between h-16">
                <h1 className="text-xl font-bold">
                    Мой блог
                </h1>
            <button onClick={toggleTheme}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
                {isDark ? 'Светлая тема' : 'Темная тема'}
            </button>
            </div>
        </header>
    );
};
export default Header;