import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/all';
import Cards from './utils/Cards';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutContainer = useRef(null);
    
    gsap.fromTo('#about-button',{
      opacity: 0,
    },{
      opacity: 1, 
      duration: 1, 
      scrollTrigger:{
        trigger: aboutContainer.current, 
        start: 'top top',
        markers: true,
      }
    })
  // }, []);

  function onMouseEnterTheExploreButton(){
    gsap.to('.l-s-desc-cards', {rotate: -45})
    gsap.to('.r-s-desc-cards', {rotate: 45})
    
  }

  function onMouseLeaveTheExploreButton(){
    gsap.to('.l-s-desc-cards', {rotate: 0,})
    gsap.to('.r-s-desc-cards', {rotate: 0,})
  }

  return (
    <div ref={aboutContainer} className="about-section w-screen h-auto min-[900px]:h-[120vh] bg-slate-950 flex flex-col max-[900px]:gap-10 min-[900px]:flex-row min-[900px]:justify-evenly justify-center items-center text-white z-20  ">
      <div className='h-full w-full flex flex-col justify-center items-center gap-11 z-20'>
      
        <Cards card_number={1} box_sides={"l"} description="Looking for somebody who won’t mind making some cool and fancy web designs, I’ am your men."/>
        <Cards card_number={2} box_sides={"l"} description='Haven’t got enough time to get involved with complex code stuff, don’t worry I got your back.'/>
       
      </div>

      <button id='about-button' className="min-[900px]:block w-56 h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hidden z-10 top:[50]">Explore</button>

      <div className='h-full w-full flex flex-col justify-center items-center gap-11 z-20'>

        <Cards card_number={3} box_sides={"r"} description='Bored with 2D, and looking for more and more and fancy and juicy 3D stuff, ‘I will be there for you’.'/>
        <Cards card_number={4} box_sides={"r"} description='Still don’t trust me, you will definitely find something below, that will make you at-least say ‘hmm’.'/>

      </div>

      <button className="max-[900px]:block hidden w-full h-10 bg-transparent border rounded-2xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">Explore</button>
    </div>
    
  )
}

export default About
