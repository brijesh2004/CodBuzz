"use client"
import { useState, useEffect } from "react";
import about from '@/style/about.module.css';
import contact from '@/style/contact.module.css';
import Image from "next/image";
import Web_developer from '@/Images/web_development.gif';
import App_developer from '@/Images/app_development.gif';
import home from '@/style/home.module.css';
import Animation from "./Animation";

import { useRef } from "react";
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
export default function Home() {
  return (
    <div className="bg-dark text-white">
      <FadeInSection>
        <div className='main_div'>
          <br /><br /><br />
          <h1>Take Your Career to the Next Level with CodeBuzz</h1><br />
          <h3>Join Our Internship Program</h3><br /><br />
          <button className={contact.submit_btn}>Apply</button>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="who_we_are_main">
          <div className='who_we_are'>
            <h1>Who We Are</h1>
            <p className={about.paragraph}>Welcome to CodBuzz a top Company to offer Internship in many Field of technology.
              We provide internship in Web Developer (frontend , backend and full Stack ) , App Developer , Machine Learning , Data science
              , C++ programming, Java programming, Python programming and many more.
              our internship program offers hands-on learning
              , where students work on real projects under the guidance of experienced mentors.
              Through the CodBuzz Internship Program Developer (Students ) hava a chance to Show his/her Skills in the real time project
            </p>
          </div>
        </div>
      </FadeInSection>


      <div >
        <center> <h1>Service for the Client</h1></center> <br /><br />
       <Animation><center>  <h2 style={{ textDecoration: 'underline' }}>Web Development</h2></center><br /><br /><br /></Animation> 
        <div className={home.web_developer}>
          <div className={home.web_right_part}>
            <FadeInSection>
              <Image src={Web_developer} width={200} height={200} alt="Image" /></FadeInSection>
          </div>
          <div >
            <FadeInSection>
              <h3>Need Website For Your Business</h3>
              <p>Are You Want a website for your business</p>
              <p>In the Present era every things gone online . </p>
              <p>do you also want to grow your business Online</p>
              <p>Let's contact with us and grow your business Online</p>
              <button className={contact.submit_btn1}>Contact Us</button>
            </FadeInSection>
          </div>
        </div><br /><br /><br />
      <Animation> <center>  <h2 style={{ textDecoration: 'underline' }}>App Development</h2></center><br /><br /><br /></Animation> 
        <div className={home.web_developer}>
          <div className={home.web_right_part}>
            <FadeInSection>
              <h3>Need App For Your Business</h3>
              <p>Are You Want an App for your business</p>
              <p>In the Present era every things gone online . </p>
              <p>do you also want to grow your business Online</p>
              <p>Let's contact with us and grow your business Online</p>
              <button className={contact.submit_btn1}>Contact Us</button>
              </FadeInSection>
          </div>
          <div>
            <FadeInSection>
              <Image src={App_developer} width={200} height={200} alt="Image" />
            </FadeInSection>
          </div>
        </div>
      </div>
   <br /><br /><br /><br /><br />
    </div>
  )
}
