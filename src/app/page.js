"use client"
import { useState,useEffect } from "react";
import about from '@/style/about.module.css';
import contact from '@/style/contact.module.css';
import Image from "next/image";
import Web_developer from '@/Images/web_development.gif';
import App_developer from '@/Images/app_development.gif';
import home from '@/style/home.module.css';

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
    <p className={about.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Minima debitis error, asperiores, aliquam saepe officia eum
      consequatur labore porro illum accusamus. Dolor commodi 
      blanditiis laboriosam nulla eius iure incidunt vel quasi 
      sapiente! Quisquam tempore, non recusandae accusantium 
      necessitatibus nihil quo quae dolorem voluptatibus quibusdam 
      ipsum quis, officia, a nesciunt culpa accusamus eum et maiores
       dolorum nobis! Eius quaerat aperiam labore quae itaque nostrum
        repudiandae perferendis quo veritatis, explicabo voluptatem 
        delectus earum voluptatibus ducimus. Tempore officia, accusamus
         nulla quae tempora laboriosam assumenda delectus magnam ducimus
          cupiditate doloribus labore veniam error ipsa atque quod maiores,
           eos dolor! Enim ipsa accusantium nemo cupiditate?</p>
        </div>
        </div>
  </FadeInSection>

  
    <div >
     <center> <h1>Service for the Client</h1></center> <br /><br />
     <center>  <h2 style={{textDecoration:'underline'}}>Web Development</h2></center><br /><br /><br />
      <div className={home.web_developer}>
      <div>
       <FadeInSection>
        <Image src={Web_developer} width={200} height={200} alt="Image"/></FadeInSection>
        </div>
        <div className={home.web_right_part}>
        <FadeInSection>
        <h3>Need Website For Your Business</h3>
        <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Magnam praesentium fugiat
         repellendus sint aut quaerat accusantium, 
         reprehenderit deleniti mollitia sequi cumque
          laboriosam, obcaecati officia architecto odit 
          eum dolores esse delectus?</p>
          <button className={contact.submit_btn1}>Contact Us</button>
          </FadeInSection>
        </div>
      </div><br /><br /><br />
      <center>  <h2 style={{textDecoration:'underline'}}>App Development</h2></center><br /><br /><br />
      <div className={home.web_developer}>
       
        <div className={home.web_right_part}>
        <FadeInSection>
        <h3>Need App For Your Business</h3>
        <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Magnam praesentium fugiat
         repellendus sint aut quaerat accusantium, 
         reprehenderit deleniti mollitia sequi cumque
          laboriosam, obcaecati officia architecto odit 
          eum dolores esse delectus?</p>
          <button className={contact.submit_btn1}>Contact Us</button></FadeInSection>
        </div>
        <div>
        <FadeInSection>
        <Image src={App_developer} width={200} height={200} alt="Image"/></FadeInSection>
        </div>
      </div>
    </div>
  
</div>
  )
}
