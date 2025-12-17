import React, { useState } from "react";

const Header = ({isDark, setIsDark}) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return(
        <header className="container">
            <h1>Мой блог</h1>
            <button onClick={toggleTheme}>
                {isDark ? 'Светлая тема' : 'Темная тема'}
            </button>
        </header>
    );
};
export default Header;