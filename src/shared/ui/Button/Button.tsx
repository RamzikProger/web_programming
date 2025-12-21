import React from "react";

interface ButtonProps{
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
}) => {
    const base = 
        'inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition';
    const variants = {
        primary:
            'bg-blue-600 text-white hover: bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        secondary:
            'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    };
    return(
        <button onClick={onClick} className="`${base} ${variants[variant]}`">
            {children}
        </button>
    );
};

export default Button;