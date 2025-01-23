// /(ツ)_/¯

//{To Do  /(ツ)_/}
//Add touch screen.
//Add 404 page.
//Add balloons and pop animation.
//Add stars and 3d orbit with three.js inside contact.

// {Bugs ¯\_(ツ)_/¯ }
//Box animation shakes screen.
//Home has got a little scroll on small devices.
//Contact input works only on clicking label.
//Contact from hover sucks.

import {useState, useRef, Suspense} from "react";

import { useGSAP } from "@gsap/react";
import {ScrollTrigger, TextPlugin} from "gsap/all";
import gsap from "gsap";

import coolplanet from '../images/cool3.jpg';
import coolplanet2 from '../images/cool2.jpg';
import coolplanet3 from '../images/lone5.jpg';
import cool5 from '../images/cool5.jpeg';

import Cards from "./Cards";
// import Cursor from "../utils/Cursor";
import Loader from "../utils/Loader";
import ModelInfo from "./ModelInfo"
import Contact from "./Contact.tsx";
import Navbar from "./Navbar.tsx";

import Island from "../Model/Island";
import Sky from "../Model/Sky";
import Bird from "../Model/Bird";
import Plane from "../Model/Plane";

import {Canvas} from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home = () => {
    const [currentStage, setCurrentStage] = useState<number | null>(1);

    // #3D models /(シ)_/
    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale: [number, number, number] | null = null;
        let screenPosition: [number, number, number] = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }else{
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale: [number, number, number] | null;
        let screenPosition: [number, number, number];
        if(window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }else{
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize() as [
        [number, number, number],
        [number, number, number],
        [number, number, number]
    ];

    const [planeScale, planePosition] = adjustPlaneForScreenSize();


    //Pages Timeline  /(シ)_/
    const landingPageTl = useRef(gsap.timeline()); 
    const aboutSectionTl = useRef(gsap.timeline({paused: true}));
    const explorePortfolioSectionTl = useRef(gsap.timeline({paused: true}));
    const contactMeTl = useRef(gsap.timeline({paused: true}));
    const boxesTl = useRef(gsap.timeline({paused: true}));
    const boxesOnButtonHoverTl = useRef(gsap.timeline({paused: true}));

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
        .to('.about-button', {
            opacity: 1,
            duration: 1,
            ease: 'sine',
        }, 0)

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

        .from('.islandCanvas', {
            duration: 2,
            opacity: 0,
            ease: 'sine',
        }, 1)

        .from('.model-info-box', {
            duration: 1,
            opacity: 0,
            ease: 'sine',
        }, 1)

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


        // {Boxes On Button Hover Animation /(シ)_/}
        boxesOnButtonHoverTl.current = gsap.timeline({paused: true})
        .to('.l-s-desc-cards', {rotate: -45}, 0)
        .to('.r-s-desc-cards', {rotate: 45}, 0)

    }, [])

    //Scroll Events /(シ)_/
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

    //About Explore Button Event /(シ)_/
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
        console.log("About called")
    }

    //Nav Button Events /(シ)_/
    const navHomeButtonClicked = () => {
        explorePortfolioSectionTl.current.reverse();
        contactMeTl.current.reverse();
        aboutSectionTl.current.reverse();
        boxesTl.current.reverse();
    };
    const navPortfolioButtonClicked = () => {
        explorePortfolioSectionTl.current.play();
        contactMeTl.current.reverse();
        aboutSectionTl.current.reverse();
        boxesTl.current.reverse();
    };
    const navAboutButtonClicked = () => {
        aboutSectionTl.current.play();
        contactMeTl.current.reverse();
        explorePortfolioSectionTl.current.reverse();
        boxesTl.current.play();
    }
    const navContactButtonClicked = () => {
        contactMeTl.current.play();
        explorePortfolioSectionTl.current.reverse();
        aboutSectionTl.current.reverse();
        boxesTl.current.reverse();
    };
    
    return (
    <>
        {/* <Cursor/> */}

        <Navbar homeButtonClicked={navHomeButtonClicked} portfolioButtonClicked={navPortfolioButtonClicked} aboutButtonClicked={navAboutButtonClicked} contactButtonClicked={navContactButtonClicked}/> 

        <div className="w-screen h-screen relative overflow-hidden bg-slate-950">

            {/* {Home}  /(シ)_/ */}
            <div className="home bg-slate-950 w-screen h-screen flex flex-col md:justify-start md:items-start justify-start items-center pt-36 md:pl-32 text-center overflow-hidden z-10 absolute top-0 left-0" onWheel={handleWheelHome}>
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

                <button className="about-button opacity-0 md:block w-32 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:shadow-orange-500 shadow-2xl hover:border-orange-500 transition-all duration-300 md:absolute md:top:[50%] md:left:[50%] text-white hidden" onClick={aboutButtonClicked} onMouseOver={buttonOnMouseOver} onMouseLeave={buttonOnMouseLeave}>Explore</button>

                <button className="w-32 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:shadow-orange-500 shadow-2xl relative hover:border-orange-500 transition-all duration-300 md:absolute md:top:[50%] md:left:[50%] text-white md:hidden block mb-20" onClick={aboutButtonClicked}>Explore</button>
            </div>

            {/* Explore Portfolio  /(シ)_/ */ }
            <div className="explore-portfolio bg-slate-950 w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-30" onWheel={handleWheelExplorePortfolio}>
                <img className="absolute w-full h-full top-0 left-0" src={coolplanet3} alt="cool planet" />

                <div className="model-info-box absolute top-28 left-0 right-0 z-30 flex-center overflow-visible">
                    {currentStage && <ModelInfo currentStage={currentStage}/>}
                </div>

                <Canvas className={`islandCanvas bg-white w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far: 1000}}>
                    <Suspense fallback={<Loader/>}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <hemisphereLight groundColor='#000000' intensity={1}/>
                        <Bird/>
                        <Sky isRotating = {isRotating}/>
                        <Island
                            scale={islandScale}
                            position = {islandPosition}
                            rotation = {islandRotation}
                            isRotating = {isRotating}
                            setIsRotating = {setIsRotating}
                            setCurrentStage={setCurrentStage}
                        />
                        <Plane
                            isRotating = {isRotating}
                            scale = {planeScale}
                            position = {planePosition}
                            rotation = {[0, 20, 0]}
                        />
                    </Suspense>
                </Canvas>

            </div>

            {/* Contact me  /(シ)_/ */}
            <div className="contact-me bg-white w-screen h-screen overflow-hidden flex-center absolute top-0 left-0 z-40" onWheel={handleWheelContact}>
                <img className="absolute w-full h-full top-0 left-0 brightness-50" src={cool5} alt="cool planet" />
                <Contact/>
            </div>

        </div>
    </>
    )
}

export default Home;

//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯