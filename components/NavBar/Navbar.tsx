import React from 'react';
import Link from "next/link"
const NavBar = () => {
    return (
        <div className="relative bg-white flex justify-center h-[100px] ">
            <img className="absolute left-0 top-0 h-full" src='/images/nav-bg.png' />
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