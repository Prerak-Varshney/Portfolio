// import { Link } from "react-router-dom";

import {arrow} from '../assets/icons/index.tsx';
interface InfoBoxProps {
    text: string;
    link: string;
    btnText: string;
}

const InfoBox = ({text, link, btnText}: InfoBoxProps) => (
    <div className="info-box overflow-visible ">
        <p className="font-medium sm:text-xl text-center">{text}</p>      
        <div className="neo-brutalism-white neo-btn">{link}{btnText}
        <img src={arrow} className="w-4 h-4 object-contain" alt="arrow" />
        </div>  
    </div>
    
)

const renderContent: { [key: number]: JSX.Element } = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hello, I'm <span className="font-bold">Prerak</span>
        <br/>
        A Software Engineer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="Welcome to my portfolio. Have a look at my crazy stuff."
            link=""
            btnText="Explore Portfolio"
        />
    ),
    3: (
        <InfoBox
            text="Loved my chaos and want to reach me, I'm waiting!"
            link=""
            btnText="Reach Me"
        />
    ),
    4: (
        <InfoBox
            text="Recon me? No problem... go ahead!"
            link=""
            btnText="Start Recon"/>
    ),
}


interface ModelInfoProps {
    currentStage: number;
}

const ModelInfo = ({currentStage}: ModelInfoProps) => {
  return renderContent[currentStage] || null;
}

export default ModelInfo;
