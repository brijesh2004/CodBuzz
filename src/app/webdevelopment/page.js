"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Web_developer from '@/Images/web_development.gif';
import app from '@/style/app.module.css';
import  html  from '@/Images/html.png';
import css from '@/Images/css.png';
import js from '@/Images/JavaScript.png';
import node from '@/Images/Node.png';
import mongoDB from '@/Images/MongoDB.png';
import php from '@/Images/php.png';
import Animation from '../Animation';
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

            <div className={app.usetech}>
            <h3>Major Technology Used for WebDevelopment</h3>
             <div className={app.imagelist}>
             <Animation>  <Image  src={html} width={200} height={200} alt='html'/></Animation> 
                 <Animation><Image  src={css} width={200} height={200} alt='cs'/></Animation> 
                 <Animation><Image  src={js} width={200} height={200} alt='JavaScript'/></Animation> 
                 <Animation><Image  src={node} width={200} height={200} alt='Node js'/></Animation> 
                 <Animation><Image  src={php} width={200} height={200} alt='php'/></Animation> 
                 <Animation><Image  src={mongoDB} width={200} height={200} alt='MongoDB'/></Animation> 
             </div>
           </div> 
        </div>
    )
}