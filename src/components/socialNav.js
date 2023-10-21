// import React from 'react'
import { iconsMap } from "./icons";
import { socialNav } from "@/data/navigations";

export default function SocialNav({ className, isHeader }) {
    return (
        <div className={className}>
            <ul className="flex items-center">
                {socialNav.map((social, sindex) => {
                    const IconComponent = iconsMap[social.icon];
                    return (
                        <li key={sindex}>
                            <a href={social.link} className={`py-2 ${isHeader?`px-5`:`px-2`} text-15 block`}>
                                <IconComponent className="block text-22" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
