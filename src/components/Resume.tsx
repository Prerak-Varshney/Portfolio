import Navbar from "./Navbar.tsx";
import PrerakResume from "../images/resume.pdf";

const Resume = () => {
    return (
        <div className="w-full h-screen bg-black">
            <Navbar />
            <div className="mt-20 fixed w-full h-[calc(100%-5rem)] text-white flex items-center justify-center">
                <iframe
                    className="w-full h-full max-w-[90%] max-h-[90%] rounded-md shadow-lg"
                    src={PrerakResume}
                    title="Prerak's Resume"
                />
            </div>
        </div>
    );
};

export default Resume;
