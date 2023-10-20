// import React from "react";
import Link from "next/link";

export default function Button({
    children,
    rounded,
    disabled,
    type,
    size,
    href,
    className,
    ...props
}) {
    let variantClass;
    switch (type) {
        case "green":
            variantClass = "bg-green border-green";
            break;
        case "light-pink":
            variantClass = "bg-light-pink border-light-pink";
            break;
    }
    if (href) {
        return (
            <Link
                {...props}
                href={href}
                disabled={disabled}
                className={`text-15 font-bold text-dark ${
                    size === "sm" ? `py-1 px-4` : `py-2 px-6`
                } ${
                    rounded ? `rounded-full` : `rounded`
                } ${className} ${variantClass}`}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                {...props}
                disabled={disabled}
                className={`text-15 font-bold text-dark ${
                    size === "sm" ? `py-1 px-4` : `py-2 px-6`
                } ${
                    rounded ? `rounded-full` : `rounded`
                } ${className} ${variantClass}`}
            >
                {children}
            </button>
        );
    }
}
