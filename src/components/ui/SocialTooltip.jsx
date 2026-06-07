import React from "react";

export default function SocialTooltip({ platformName, iconSvg, link }) {
    return (
        <div className="tooltip-container">
            <span className="tooltip">{platformName}</span>
            <span className="text">
                <a href={link} target="_blank" rel="noopener noreferrer" className="borde-back">
                    <div className="icon">
                        {iconSvg}
                    </div>
                </a>
            </span>
        </div>
    );
}