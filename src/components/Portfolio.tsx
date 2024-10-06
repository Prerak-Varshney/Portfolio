import { useGSAP } from "@gsap/react";
import {ScrollTrigger, TextPlugin} from "gsap/all";
import gsap from "gsap";
// import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {

    const landingPageTl = gsap.timeline();
    const aboutSectionTl = gsap.timeline();
    const explorePortfolioSectionTl = gsap.timeline();
    const contactMeTl = gsap.timeline();
    
    useGSAP(() => {

        // Language Page Timeline
        landingPageTl.from('.home', {y: -1000, x: 1000, duration: 3, rotate: 720, ease: 'bounce.out'}, 0)

        landingPageTl.from('.h-s-text', {x: -1000, duration: 2, ease: 'power2.inOut', stagger: 0.5}, 1)

        landingPageTl.to('.hey-text', {rotate: 360, duration: 3}, 1)

        landingPageTl.to('.typed-text', {duration: 2, text: "&lt;/Prerak>", yoyo: true, repeat: -1, ease: 'back.out'}, 1)

        landingPageTl.to('.caret', {duration: 0.5, opacity: 0, yoyo: true, repeat: -1, ease: 'none'}, 1);
        
        // About Section Timeline
        aboutSectionTl.from('.about', {
            y: -2000, 
            x: 2000, 
            duration: 1, 
            ease: 'sine.out', 
            rotate: 50,
            zIndex: 0,
            border: '50px solid white',
        },0)

        aboutSectionTl.pause();

        // Expore Portfilio Section Timeline
        explorePortfolioSectionTl.from('.explore-portfolio', {
            y: -2000, 
            x: -2000, 
            duration: 1, 
            ease: 'sine.out', 
            rotate: -50,
            zIndex: 0,
            border: '50px solid white',
        },0)

        explorePortfolioSectionTl.pause();

        // Contact Me Section Timeline
        contactMeTl.from('.contact-me', {
            y: 3000,  
            duration: 1, 
            ease: 'sine.out', 
            zIndex: 0,
            border: '50px solid white',
        },0)

        contactMeTl.pause();

    }, [])

    const handleWheelHome = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            aboutSectionTl.play();
        }
    };

    const handleWheelAbout = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            explorePortfolioSectionTl.play();

        } else {
            aboutSectionTl.reverse();
        }
    };
    const handleWheelExplorePortfolio = (event: WheelEvent) => {
        if (event.deltaY < 0) {
            explorePortfolioSectionTl.reverse();
        }else{
            contactMeTl.play();
        }
    };
    const handleWheelContact = (event: WheelEvent) => {
        if (event.deltaY < 0) {
            contactMeTl.reverse();
        }
    };
    
    return (
    

        <div className="relative overflow-hidden">

            {/* {Home}  /(シ)_/ */}
            <div className="home bg-slate-950 w-screen h-screen flex flex-col md:justify-start md:items-start justify-start items-center pt-36 md:pl-32 text-center overflow-hidden z-10" onWheel={handleWheelHome}>
                <span className="hey-text h-s-text text-outline text-9xl font-extrabold overflow-hidden h-40">Hey!</span>

                <div className="h-s-text text-white text-7xl font-extrabold overflow-hidden">I'am <br className="sm:hidden"/><span className="typed-text text-orange-500"></span><span className="caret font-thin">_</span></div>
            </div>


            {/* About me  /(シ)_/ */ }
            {/* <div className="about bg-slate-300 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-20" onWheel={handleWheelAbout}></div> */}


            {/* Explore Portfolio  /(シ)_/ */}
            {/* <div className="explore-portfolio bg-blue-500 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-30" onWheel={handleWheelExplorePortfolio}></div> */}

            
            {/* <div className="contact-me bg-orange-500 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-40" onWheel={handleWheelContact}></div> */}







            <div className="about bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-20" onWheel={handleWheelAbout}></div>

            <div className="explore-portfolio bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-30" onWheel={handleWheelExplorePortfolio}></div>

            {/* Contact me  /(シ)_/ */}
            <div className="contact-me bg-stone-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-40" onWheel={handleWheelContact}></div>

        </div>
    )
}

export default Home


//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯ 