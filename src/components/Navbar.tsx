//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
interface NavbarProps {
    homeButtonClicked?: () => void;
    portfolioButtonClicked?: () => void;
    aboutButtonClicked?: () => void;
    contactButtonClicked?: () => void;
}

const Navbar = ({ homeButtonClicked, portfolioButtonClicked, aboutButtonClicked, contactButtonClicked }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownTl = useRef(gsap.timeline({ paused: true }));

    useGSAP(() => {
        gsap.from("#navbar", {
            y: -100,
            duration: 1,
            ease: "bounce",
        });

        dropdownTl.current = gsap.timeline({ paused: true })
            .from("#dropdown", {
                y: -1000,
                duration: 1,
                ease: "sine",
                onComplete: () => {
	                setIsMenuOpen(true)
		        },
                onReverseComplete: () => {
                    setIsMenuOpen(false)
                }
            })
            .from("#dropdown-home", {
                x: "-100vw",
                duration: 0.2,
                ease: "sine",
            })
            .from("#dropdown-portfolio", {
                x: "100vw",
                duration: 0.2,
                ease: "sine"
            })
            .from("#dropdown-about", {
                x: "-100vw",
                duration: 0.2,
                ease: "sine"
            })
            .from("#dropdown-contact", {
                x: "100vw",
                duration: 0.2,
                ease: "sine"
            });
    }, []);


    function handleDropdown() {
        if (!isMenuOpen) {
            dropdownTl.current.play();
        } else {
            dropdownTl.current.reverse();
        }
    }

    return (
        <div className="complete-navbar overflow-hidden">
            <nav id="navbar" className="w-screen h-20 bg-transparent flex justify-around items-center text-white fixed top-0 left-0 z-[100]">
                <span className="text-3xl">ChaosCoder</span>
                <ul className="hidden md:flex md:h-full md:w-1/2">
                    <li>
                        <button onClick={homeButtonClicked}>Home</button>
                    </li>
                    <li>
                        <button onClick={portfolioButtonClicked}>Portfolio</button>
                    </li>
                    <li>
                        <button onClick={aboutButtonClicked}>About</button>
                    </li>
                    <li>
                        <button onClick={contactButtonClicked}>Contact</button>
                    </li>
                </ul>

                <div className="md:hidden flex flex-col justify-center items-end" onClick={handleDropdown}>
                    <span className="bg-white block h-0.5 w-8"/>
                    <span className="bg-white block h-0.5 w-6 my-2"/>
                </div>
            </nav>

            {/* { ¯\_(ツ)_/¯ } */}
            <ul id="dropdown" className="flex flex-col justify-center items-center bg-slate-950 w-full h-full text-white top-0 left-0 absolute z-50 overflow-hidden md:hidden">
                <li onClick={() => {dropdownTl.current.reverse()}} id="dropdown-home">
                    <button onClick={homeButtonClicked}>Home</button>
                </li>
                <li onClick={() => {dropdownTl.current.reverse()}} id="dropdown-portfolio">
                    <button onClick={portfolioButtonClicked}>Portfolio</button>
                </li>
                <li onClick={() => {dropdownTl.current.reverse()}} id="dropdown-about">
                    <button onClick={aboutButtonClicked}>About</button>
                </li>
                <li onClick={() => {dropdownTl.current.reverse()}} id="dropdown-contact">
                    <button onClick={contactButtonClicked}>Contact</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯