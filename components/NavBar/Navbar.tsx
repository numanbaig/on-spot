import React from 'react';
import Link from "next/link"
const NavBar = () => {
    return (
        <div className="bg-white flex justify-center">
            <div className="flex">
                {['Link 1', 'Link 2',].map((link) => (
                    <div key={link}>{link}</div>
                ))}
            </div>
            <img src="/assets/images/Logo.png" />
            <div className="flex">
                {['Link 1', 'Link 2',].map((link) => (
                    <div key={link}>{link}</div>
                ))}
            </div>
        </div>
    )
}
export default NavBar;