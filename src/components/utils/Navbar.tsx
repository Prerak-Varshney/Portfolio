import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        gsap.fromTo("#navbar",
          { y: -100 },
          { y: 0, duration: 1, ease: "power2.inOut" }
        );
        gsap.fromTo("#dropdown", { x: '100%' }, { x: '100%', duration: 1, ease: "power2.inOut" });
      }, []);
    
      useGSAP(() => {
        if(isMenuOpen){
            gsap.to("#dropdown", { x: 0, duration: 2, ease: "power2.inOut" });
        }else{
            gsap.to("#dropdown", { x: '100%', duration: 2, ease: "power2.inOut" });
        }
        }, [isMenuOpen]);

        const toggleMenu = () => {
            setIsMenuOpen((prev) => !prev);
        };

  return (
    <>
        <nav id="navbar" className="w-full h-20 bg-transparent flex justify-around items-center text-white fixed top-0 left-0 z-50">
            <span className="text-3xl">ChaosCoder</span>
            <ul className="hidden md:flex md:h-full md:w-1/2">
                <li><a href="#">Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="md:hidden flex flex-col justify-center items-end" onClick={() => setIsMenuOpen((prev) => !prev)}>
                <span className="bg-white block h-0.5 w-8"></span>
                <span className="bg-white block h-0.5 w-6 my-2"></span>
            </div>
        </nav>
        <ul id="dropdown" className="flex flex-col justify-around items-center bg-slate-500 w-full h-[calc(100vh-5rem)] top-[5rem] absolute z-10 md:hidden">
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </>
  )
}

export default Navbar;
