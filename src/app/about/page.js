"use client"
import about from '@/style/about.module.css'
import { useState,useRef,useEffect } from 'react';
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
export default function About(){
    return(
      <div className='bg-dark text-white'>
        <div className={about.about_page}>
        <FadeInSection>
            <h1>Who We Are ?</h1>
            <p className={about.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Adipisci, illum distinctio id mollitia nemo asperiores error 
             quia vitae ab, reprehenderit aperiam ut modi maiores unde placeat
              temporibus iure consectetur perspiciatis. Nemo, architecto voluptates. 
              Fugiat amet esse consequuntur nam obcaecati quo dolor ducimus, 
              accusantium minima expedita, distinctio sit? Alias adipisci iste
               distinctio consectetur nesciunt a ad, voluptate quos accusamus!
                Assumenda dignissimos nisi voluptate impedit, delectus quisquam
                 esse aspernatur eaque sequi? Voluptas temporibus blanditiis 
                 quibusdam culpa consectetur sed minima quasi magni natus incidunt
                  vel id mollitia quisquam, obcaecati, ratione molestias. Laborum
                   nihil placeat atque voluptate animi aut et minus quisquam repellendus eos.
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda 
                   rem aspernatur natus commodi quos, inventore tenetur ex aliquam excepturi.
                    Amet nulla dolore a harum nihil iusto, provident quo maxime! Quidem
                     ipsa aliquam ipsam harum vitae maxime, minima, labore corporis qui,
                      assumenda itaque cum. Eos, dolor? Aperiam laboriosam impedit harum?</p>
                   </FadeInSection>
        </div>
        </div>
    )
}