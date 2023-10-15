// import React from "react";

export default function IconMinus({ className }) {
    return (
        <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[1em] h-[1em] ${className}`}
        >
            <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
        </svg>
    );
}
