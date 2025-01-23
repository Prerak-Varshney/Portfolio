import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-black text-white w-screen h-screen overflow-hidden gap-16">
            <h1 className="text-8xl overflow-hidden">Bruh!</h1>
            <h2 className="text-5xl overflow-hidden">404 - You're lost.</h2>
            <Link to="/"><h3 className="text-xl overflow-hidden border border-white px-6 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">Home</h3></Link>
        </div>
        </>
    )
}

export default NotFound
