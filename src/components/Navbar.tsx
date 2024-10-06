//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
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
                x: 2000,
                rotate: 180,
                duration: 1,
                ease: "sine",
                onComplete: () => {
	                setIsMenuOpen(true)
		            }
            })
            .from("#dropdown-home", {
                x: -1000,
                duration: 0.5,
                ease: "circ",
            })
            .from("#dropdown-portfolio", {
                x: 1000,
                duration: 0.5,
                ease: "circ"
            })
            .from("#dropdown-about", {
                x: -1000,
                duration: 0.5,
                ease: "circ"
            })
            .from("#dropdown-contact", {
                x: 1000,
                duration: 0.5,
                ease: "circ"
            });
    }, []);

    function handleDropdown() {
        if (!isMenuOpen) {
            dropdownTl.current.play();
        } else {
            dropdownTl.current.reverse();
            setIsMenuOpen(false);
        }
    }

    return (
        <div className="complete-navbar overflow-hidden">
            <nav id="navbar" className="w-screen h-20 bg-transparent flex justify-around items-center text-white fixed top-0 left-0 z-[100]">
                <span className="text-3xl">ChaosCoder</span>
                <ul className="hidden md:flex md:h-full md:w-1/2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="md:hidden flex flex-col justify-center items-end" onClick={handleDropdown}>
                    <span className="bg-white block h-0.5 w-8"></span>
                    <span className="bg-white block h-0.5 w-6 my-2"></span>
                </div>
            </nav>
            {/* { ¯\_(ツ)_/¯ } */}
            <ul id="dropdown" className="flex flex-col justify-center items-center bg-slate-950 w-full h-full text-white top-0 left-0 absolute z-50 overflow-hidden md:hidden">
                <li id="dropdown-home"><a href="#">Home</a></li>
                <li id="dropdown-portfolio"><a href="#">Portfolio</a></li>
                <li id="dropdown-about"><a href="#">About</a></li>
                <li id="dropdown-contact"><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;

//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯