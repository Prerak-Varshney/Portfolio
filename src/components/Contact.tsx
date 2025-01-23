import { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';

import { Canvas } from '@react-three/fiber';

import Fox from '../Model/Fox.js';
import Loader from '../utils/Loader.js';


const Contact = () => {

    const formRef = useRef(null);
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');

    const nameRef: any = useRef(null);
    const emailRef: any = useRef(null);
    const messageRef: any = useRef(null);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Prerak",
                from_email: form.email,
                to_email: "prerak.var@gmail.com",
                message: form.message
            },

            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);

            setTimeout(() => {
                setCurrentAnimation('idle')
                setForm({name: '', email: '', message: ''});
            }, 3000)

        }).catch(() => {
            setIsLoading(false);
            setCurrentAnimation('idle');
        })
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleFocus = () => {setCurrentAnimation('walk')};
    const handleBlur = () => {setCurrentAnimation('idle')};

    return (
        <section className="relative max-container bg-transparent flex flex-col md:flex-row text-white">

            <div className='flex-center flex-col md:w-screen md:h-auto'>
                <div className='flex-1 min-w-[50%] flex flex-col'>
                    <h1 className='head-text'>Reach me out</h1>
                </div>

                <form
                    ref={formRef}
                    className="w-full flex flex-col gap-7"
                    onSubmit={handleSubmit}
                >
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            ref={nameRef}
                            id="name"
                            type="text"
                            name="name"
                            className='input outline-none'
                            placeholder='John'
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={() => nameRef.current.focus()}
                            required
                        />
                    </label>

                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            className='input outline-none'
                            placeholder='john@gmail.com'
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={() => emailRef.current.focus()}
                            required
                        />
                    </label>

                    <label className="text-black-500 font-semibold">
                        Message
                        <textarea
                            ref={messageRef}
                            name="message"
                            className='textarea outline-none'
                            rows={4}
                            placeholder='Let me know how can I help you!'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={() => messageRef.current.focus()}
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <div className='md:w-screen w-full md:h-auto h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        near: 0.1,
                        far: 100,
                        fov: 75
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]}/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact
