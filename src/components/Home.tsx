// /(ツ)_/¯

//{To Do  /(ツ)_/}
//Make Buttons Work.
//Add balloons and pop animation.
//Add stars 3d orbit with three.js.

// {Bugs ¯\_(ツ)_/¯ }
//Box animation shakes screen.
//Navbar (Dropdown) breaks below 768px

import {useState, useRef} from "react";

import { useGSAP } from "@gsap/react";
import {ScrollTrigger, TextPlugin} from "gsap/all";
import gsap from "gsap";

import coolplanet from '../images/cool3.jpg';
import coolplanet2 from '../images/cool2.jpg';
import coolplanet3 from '../images/lone5.jpg';

import Cards from "../utils/Cards";
import Model from "./Model";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {

    const landingPageTl = useRef(gsap.timeline()); 
    const aboutSectionTl = useRef(gsap.timeline({paused: true}));
    const explorePortfolioSectionTl = useRef(gsap.timeline({paused: true}));
    const contactMeTl = useRef(gsap.timeline({paused: true}));
    const boxesTl = useRef(gsap.timeline({paused: true}));
    const boxesOnButtonHoverTl = useRef(gsap.timeline({paused: true}));

    // let toggleBoxButtonAnimation = false;

    const [toggleBoxButtonAnimation, setToggleBoxButtonAnimation] = useState(false);
    
    useGSAP(() => {

        // {Landing Page Timeline /(シ)_/}
        landingPageTl.current = gsap.timeline()
        .from('.home', {
            x: 1000, 
            y: -1000, 
            duration: 3, 
            rotate: 720, 
            ease: 'bounce.out', 
            border: '50px solid white'
        }, 0)

        .from('.h-s-text', {
            x: -1000, 
            duration: 2, 
            ease: 'power2.inOut', 
            stagger: 0.5
        }, 1.5)

        .to('.hey-text', {
            rotate: 360,
            duration: 3
        }, 1)

        .to('.typed-text', {
            duration: 2, 
            text: "&lt;/Prerak>", 
            yoyo: true, 
            repeat: -1, 
            ease: 'back.out'
        }, 1)

        .to('.caret', {
            duration: 0.5, 
            opacity: 0, 
            yoyo: true, 
            repeat: -1, 
            ease: 'none'
        }, 1);
        
        // {About Section Timeline /(シ)_/}
        aboutSectionTl.current = gsap.timeline({paused: true})
        .from('.about', {
            x: 2000, 
            y: -2000, 
            duration: 1, 
            ease: 'sine.out', 
            rotate: 50,
            zIndex: 0,
            border: '50px solid white',
        },0)

        // {Expore Portfilio Section Timeline /(シ)_/}
        explorePortfolioSectionTl.current = gsap.timeline({paused: true})
        .from('.explore-portfolio', {
            x: -2000, 
            y: -2000, 
            duration: 1, 
            ease: 'sine.out', 
            rotate: -50,
            zIndex: 0,
            border: '50px solid white',
        },0)

        // {Contact Me Section Timeline /(シ)_/}
        contactMeTl.current = gsap.timeline({paused: true})
        .from('.contact-me', {
            y: 3000,  
            duration: 1, 
            ease: 'sine', 
            zIndex: 0,
            border: '50px solid white',
        },0)

        // {Boxes Timeline /(シ)_/}
        boxesTl.current = gsap.timeline({paused: true})
        .from('.desc-card-1', {
            x: 2000, 
            y: -2000, 
            duration: 3, 
            rotate: 1440, 
            ease: 'bounce'
        }, 0)
        .from('.desc-card-2', {
            x: -2000,
            y: -2000, 
            duration: 3, 
            rotate: -1440, 
            ease: 'bounce'
        }, 1)
        .from('.desc-card-3', {
            x: 2000,
            y: -2000, 
            duration: 3, 
            rotate: 1440, 
            ease: 'bounce', 
            onComplete: () => {setToggleBoxButtonAnimation(true)}
        }, 1)
        .from('.desc-card-4', {
            x: -2000, 
            y: -2000, 
            duration: 3, 
            rotate: -1440, 
            ease: 'bounce'
        }, 0)

        .pause();

        // {Boxes On Button Hover Animation /(シ)_/}
        boxesOnButtonHoverTl.current = gsap.timeline({paused: true})
        .to('.l-s-desc-cards', {rotate: -45}, 0)
        .to('.r-s-desc-cards', {rotate: 45}, 0)

        boxesOnButtonHoverTl.current.pause();

    }, [])

    //{Wheel Event /(シ)_/}
    const handleWheelHome = (event: { deltaY: number; }) => {
        if (event.deltaY > 0) {
            setToggleBoxButtonAnimation(false);
            aboutSectionTl.current.play();
            boxesTl.current.play();
        }
    };

    const handleWheelAbout = (event: { deltaY: number; }) => {
        setToggleBoxButtonAnimation(false);
        if (event.deltaY > 0) {
            explorePortfolioSectionTl.current.play();
            aboutSectionTl.current.reverse();
            boxesTl.current.reverse();

        } else {
            aboutSectionTl.current.reverse();
            boxesTl.current.reverse();
        }
    };
    const handleWheelExplorePortfolio = (event: { deltaY: number; }) => {
        if (event.deltaY < 0) {
            setToggleBoxButtonAnimation(false);
            explorePortfolioSectionTl.current.reverse();
            aboutSectionTl.current.play();
            boxesTl.current.play();
        }else{
            explorePortfolioSectionTl.current.reverse();
            contactMeTl.current.play();
        }
    };
    const handleWheelContact = (event: { deltaY: number; }) => {
        if (event.deltaY < 0) {
            contactMeTl.current.reverse();
            explorePortfolioSectionTl.current.play();
        }
    };

    //Button Event /(ツ)_/
    const buttonOnMouseOver = () => {
        if(toggleBoxButtonAnimation){
            boxesOnButtonHoverTl.current.play();
        }
    }

    const buttonOnMouseLeave = () => {
        if(toggleBoxButtonAnimation){
            boxesOnButtonHoverTl.current.reverse();
        }
    }

    const aboutButtonClicked = () => {
        setToggleBoxButtonAnimation(false);
        explorePortfolioSectionTl.current.play();
        aboutSectionTl.current.reverse();
        boxesTl.current.reverse();
    }
    
    return (
    
        <div className="w-screen h-screen relative overflow-hidden bg-slate-950">

            {/* {Home}  /(シ)_/ */}
            <div className="home bg-slate-950 w-screen h-screen flex flex-col md:justify-start md:items-start justify-start items-center pt-36 md:pl-32 text-center overflow-hidden z-10 absolute" onWheel={handleWheelHome}>
                <img className="absolute w-full h-full top-0 left-0" src={coolplanet} alt="cool planet" />
                <span className="hey-text h-s-text text-outline text-9xl font-extrabold overflow-hidden h-40">Hey!</span>

                <div className="h-s-text text-white text-7xl font-extrabold overflow-hidden">I'am <br className="sm:hidden"/><span className="typed-text text-orange-500"></span><span className="caret font-thin">_</span></div>
            </div>

            {/* About me  /(シ)_/ */ }
            <div className="about bg-slate-950 w-screen h-screen overflow-hidden flex-center flex-col absolute top-0 left-0 z-20" onWheel={handleWheelAbout}>

                <img className="absolute w-full h-full top-0 left-0" src={coolplanet2} alt="cool planet" />

                <div className="w-full h-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 place-items-center">
                    <Cards card_number={1} box_sides={"l"} description="Looking for somebody who won’t mind making some cool and fancy web designs, I’ am your men."/>
                    
                    <Cards card_number={2} box_sides={"r"} description='Haven’t got enough time to get involved with complex code stuff, don’t worry I got your back.'/>

                    <Cards card_number={3} box_sides={"l"} description='Bored with 2D, and looking for some juicy 3D stuff, ‘I will be there for you’.'/>

                    <Cards card_number={4} box_sides={"r"} description='Still don’t trust me, you will definitely find something below, that will make you at-least say ‘hmm’.'/>
                </div>

                <button id='about-button' className="md:block w-32 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:shadow-orange-500 shadow-2xl hover:border-orange-500 transition-all duration-300 md:absolute md:top:[50%] md:left:[50%] text-white hidden" onClick={aboutButtonClicked} onMouseOver={buttonOnMouseOver} onMouseLeave={buttonOnMouseLeave}>Explore</button>

                <button id='about-button' className="w-32 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:shadow-orange-500 shadow-2xl relative hover:border-orange-500 transition-all duration-300 md:absolute md:top:[50%] md:left:[50%] text-white md:hidden block mb-20" onClick={aboutButtonClicked}>Explore</button>
            </div>

            {/* Explore Portfolio  /(シ)_/ */}
            <div className="explore-portfolio bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-30" onWheel={handleWheelExplorePortfolio}>
                <img className="absolute w-full h-full top-0 left-0" src={coolplanet3} alt="cool planet" />

                <Model/>

            </div>

            {/* Contact me  /(シ)_/ */}
            <div className="contact-me bg-black w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-40" onWheel={handleWheelContact}>

            </div>

        </div>
    )
}

export default Home;

//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯