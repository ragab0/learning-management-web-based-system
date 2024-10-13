import React from "react";

export default function Telescope(props) {
    return (
        <svg
            width="24" // Adjusted width for better visibility
            height="24" // Adjusted height for better visibility
            viewBox="0 0 24 24" // Maintain the viewBox for scaling
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2ZM11 10H13V12H11V10ZM6.74 13.74C7.04 14.03 7.5 14.2 7.9 14.2C8.31 14.2 8.75 14.04 9.06 13.74L10.99 11.81C11.29 11.51 11.29 11.02 10.99 10.72C10.69 10.42 10.2 10.42 9.9 10.72L8.18 12.44C7.76 12.87 7.13 12.87 6.74 13.74ZM18 17H6V19H18V17ZM18 14H6V16H18V14ZM16 10H6V12H16V10Z"
                fill="#3b82f6" 
            />
        </svg>
    );
}
