import React from "react";
import ThemeToggle from "../../shared/ui/ThemeToggle.tsx/ThemeToggle";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, setIsDark }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Мой блог
        </h1>

        <ThemeToggle
          isDark={isDark}
          onToggle={() => setIsDark(!isDark)}
        />
      </div>
    </header>
  );
};

export default Header;
