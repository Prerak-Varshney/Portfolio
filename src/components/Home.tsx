//Animate the Boxes
//Animate the cursor
//Make Buttons Work
//Try to improve the animations
//Add balloons and pop animation
//Add stars 3d orbit with three.js


import { useGSAP } from "@gsap/react";
import {ScrollTrigger, TextPlugin} from "gsap/all";
import gsap from "gsap";
import coolplanet from '../images/cool3.jpg';
import coolplanet2 from '../images/cool2.jpg';
import coolplanet3 from '../images/lone5.jpg';

import Cards from "./utils/Cards";
// import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {

    const landingPageTl = gsap.timeline();
    const aboutSectionTl = gsap.timeline();
    const explorePortfolioSectionTl = gsap.timeline();
    const contactMeTl = gsap.timeline();
    const boxesTl = gsap.timeline();
    const boxesOnButtonHoverTl = gsap.timeline();

    let toggleBoxButtonAnimation = false;
    
    useGSAP(() => {

        // Language Page Timeline
        landingPageTl.from('.home', {y: -1000, x: 1000, duration: 3, rotate: 720, ease: 'bounce.out', border: '50px solid white'}, 0)

        landingPageTl.from('.h-s-text', {x: -1000, duration: 2, ease: 'power2.inOut', stagger: 0.5}, 1.5)

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
            ease: 'sine', 
            zIndex: 0,
            border: '50px solid white',
        },0)

        contactMeTl.pause();

        // {Boxes Timeline /(シ)_/}
        boxesTl.from('.desc-card-1', {x: 2000, y: -2000, duration: 3, rotate: 1440, ease: 'bounce'})
        boxesTl.from('.desc-card-2', {x: -2000, y: -2000, duration: 3, rotate: -1440, ease: 'bounce'})
        boxesTl.from('.desc-card-3', {x: 2000, y: -2000, duration: 3, rotate: 1440, ease: 'bounce'})
        boxesTl.from('.desc-card-4', {x: -2000, y: -2000, duration: 3, rotate: -1440, ease: 'bounce', onComplete: () => {toggleBoxButtonAnimation = true}})

        boxesTl.pause();

        // {Boxes On Button Hover Animation /(シ)_/}
        boxesOnButtonHoverTl.to('.l-s-desc-cards', {rotate: -45}, 0)
        boxesOnButtonHoverTl.to('.r-s-desc-cards', {rotate: 45}, 0)

        boxesOnButtonHoverTl.pause();

    }, [])

    //{Wheel Event /(シ)_/}
    const handleWheelHome = (event: { deltaY: number; }) => {
        if (event.deltaY > 0) {
            toggleBoxButtonAnimation = false;
            aboutSectionTl.play();
            boxesTl.play();
        }
    };

    const handleWheelAbout = (event: { deltaY: number; }) => {
        if (event.deltaY > 0) {
            toggleBoxButtonAnimation = false;
            explorePortfolioSectionTl.play();
            boxesTl.reverse();

        } else {
            toggleBoxButtonAnimation = false;
            aboutSectionTl.reverse();
            boxesTl.reverse();
        }
    };
    const handleWheelExplorePortfolio = (event: { deltaY: number; }) => {
        if (event.deltaY < 0) {
            toggleBoxButtonAnimation = false;
            explorePortfolioSectionTl.reverse();
            boxesTl.play();
        }else{
            contactMeTl.play();
        }
    };
    const handleWheelContact = (event: { deltaY: number; }) => {
        if (event.deltaY < 0) {
            contactMeTl.reverse();
        }
    };


    //Button Event /(ツ)_/
    const buttonOnMouseOver = () => {
        if(toggleBoxButtonAnimation){
            boxesOnButtonHoverTl.play();
        }
    }

    const buttonOnMouseLeave = () => {
        if(toggleBoxButtonAnimation){
            boxesOnButtonHoverTl.reverse();
        }
    }
    
    return (
    

        <div className="relative overflow-hidden bg-slate-950">

            {/* {Home}  /(シ)_/ */}
            <div className="home bg-slate-950 w-screen h-screen flex flex-col md:justify-start md:items-start justify-start items-center pt-36 md:pl-32 text-center overflow-hidden z-10" onWheel={handleWheelHome}>
                <img className="absolute w-full h-full top-0 left-0" src={coolplanet} alt="cool planet" />
                <span className="hey-text h-s-text text-outline text-9xl font-extrabold overflow-hidden h-40">Hey!</span>

                <div className="h-s-text text-white text-7xl font-extrabold overflow-hidden">I'am <br className="sm:hidden"/><span className="typed-text text-orange-500"></span><span className="caret font-thin">_</span></div>
            </div>

            {/* About me  /(シ)_/ */ }
            <div className="about bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-20" onWheel={handleWheelAbout}>

                <img className="absolute w-full h-full top-0 left-0" src={coolplanet2} alt="cool planet" />

                <div className="w-full h-full grid grid-cols-2 grid-rows-2 place-items-center">
                    <Cards card_number={1} box_sides={"l"} description="Looking for somebody who won’t mind making some cool and fancy web designs, I’ am your men."/>
                    
                    <Cards card_number={2} box_sides={"r"} description='Haven’t got enough time to get involved with complex code stuff, don’t worry I got your back.'/>

                    <Cards card_number={3} box_sides={"l"} description='Bored with 2D, and looking for some juicy 3D stuff, ‘I will be there for you’.'/>

                    <Cards card_number={4} box_sides={"r"} description='Still don’t trust me, you will definitely find something below, that will make you at-least say ‘hmm’.'/>
                </div>

                <button id='about-button' className="min-[900px]:block w-32 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 absolute top:[50%] left:[50%] text-white" onClick={() => console.log("clicked")} onMouseOver={buttonOnMouseOver} onMouseLeave={buttonOnMouseLeave}>Explore</button>
            </div>

            {/* Explore Portfolio  /(シ)_/ */}
            <div className="explore-portfolio bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-30" onWheel={handleWheelExplorePortfolio}>
                <img className="absolute w-full h-full top-0 left-0" src={coolplanet3} alt="cool planet" />
            </div>

            {/* Contact me  /(シ)_/ */}
            <div className="contact-me bg-black w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-40" onWheel={handleWheelContact}></div>

        </div>
    )
}

export default Home;


//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯