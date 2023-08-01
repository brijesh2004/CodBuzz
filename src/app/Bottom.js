"use client"
import bottom from '@/style/bottom.module.css';
import { useState,useRef,useEffect } from 'react';
import Link from 'next/link';
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
const Bottom = () => {
    return (
        <div className={bottom.bottom}>
        <FadeInSection>
            <div className={bottom.bottom_main}>
                <div>
                  <h2>Use Full Link</h2>
               <p>  <Link href="/about">About</Link></p> 
               <p>  <Link href="/internship">Internship</Link></p> 
               <p>  <Link href="/contact">Contact Us</Link></p> 
                </div>
                <div>
                   <h2>Contact Info</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <p>contact@codbuzz.in</p>
                </div>
            </div>
            <div>
             
              <div className={bottom.follow}>
              <h1>Follow Us</h1>
                <a href="" className={bottom.follow_img}><img src="https://pngimg.com/uploads/instagram/instagram_PNG10.png" alt="" width={30} height={30}/></a>
                <a href="" className={bottom.follow_img}><img src="https://th.bing.com/th/id/R.21fba12531ac377e1642a01921db9fbd?rik=ErbH90Kfy3L6tg&riu=http%3a%2f%2fencomium.ng%2fwp-content%2fuploads%2f2016%2f01%2fLinkedIn-Logo.png&ehk=qo9l10kLERwTTr5WEWyHeVR%2bKIWh4CchVBnnAxyz3ic%3d&risl=&pid=ImgRaw&r=0" alt="" width={30} height={30}/></a>
                {/* <a href="" className={bottom.follow_img}><img src="https://th.bing.com/th/id/R.2edafddf8e2854f5ebad42c3aa7e5f24?rik=R3dP1m63WjkW6Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmail-png-hd-email-at-sign-icon-vector-free-icons-intended-for-mail-icon-clipart-hd-18614-4096.png&ehk=TTCEyTE3mI%2fhLfAlInI3ytwsW4dpg%2f7%2bAxaH9UP5pcI%3d&risl=&pid=ImgRaw&r=0" alt="" width={30} height={30} /></a> */}
                <a href="" className={bottom.follow_img}><img src="https://www.forexnewsnow.com/wp-content/uploads/2018/04/Telegram-logo.png" alt="" width={30} height={30}/></a>
              </div>
            </div>
            <br /><br />
            <center><p className={bottom.h2}>Copyright ©2023 CODBUZZ. All Rights Reserved Designed By Team CODBUZZ</p></center>
        </FadeInSection>
        </div>
    )
}

export default Bottom
