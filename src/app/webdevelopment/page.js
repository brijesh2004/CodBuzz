"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Web_developer from '@/Images/web_development.gif';
import app from '@/style/app.module.css';
function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default function Webdeveloper() {
    return (
        <div className='bg-dark text-white'>
        <div className={app.app_main}>
            <FadeInSection>
                <h1>Do You Want Website or Web Application For Your Business</h1>
                <p>Contact with us  , if You Want to Build a Website or web application for Your Business or Personal</p>
            </FadeInSection>
        </div> 
            <div className={app.app_flex}>
                <div className={app.app_left}>
                    <FadeInSection>
                        <Image src={Web_developer} alt="app_image" width={300} height={300} />
                    </FadeInSection>
                </div>
                <div className={app.app_right}>
                    <FadeInSection>
                        <p>Grow Your Business To Next Level</p>
                        <p>With Online</p>
                        <p>Contact Us if you Have any Query or </p>
                        <p>if You Want to Contact the Developer</p>
                        <button>Contact Us</button>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}