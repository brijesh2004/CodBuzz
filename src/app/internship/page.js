"use client"
import { useState ,useEffect,useRef} from 'react';
import contact from '@/style/contact.module.css';
import Animation from '../Animation';
import '../internship/intern.css';
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
export default function Internship(){
    return (
        <div className='bg-dark text-white'>
        <FadeInSection>
        <div className="our_internship">
          <Animation><h1>Our Internship</h1></Animation> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Similique nisi officiis itaque nobis velit dolore pariatur
            voluptatibus quo? Magnam, enim? Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Perferendis quod sed corrupti 
             suscipit ipsam deserunt sunt. Officia praesentium ut sequi.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              saepe debitis numquam odit illo maxime non quae totam voluptatem quo.</p>
        </div>
        </FadeInSection>
       <br /><br /><br /><br /><br />
      
       <Animation>   <center><h1>Internship Position</h1></center></Animation>
            <div className='position'>
            <FadeInSection>
                <div className='position_box'>
                    <h3>Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div>
                </FadeInSection>
                <FadeInSection>
                <div className='position_box'>
                    <h3>App Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div>
                </FadeInSection><FadeInSection>
                <div className='position_box'>
                    <h3>Java Programming</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div></FadeInSection><FadeInSection>
                <div className='position_box'>
                
                <h3>C++ Programming</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div></FadeInSection><FadeInSection>
                <div className='position_box'>
                
                <h3>Python Programming</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div></FadeInSection><FadeInSection>
                <div className='position_box'>
                
                    <h3>Data Science</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div></FadeInSection>  <FadeInSection>
                <div className='position_box'>
               
                    <h3>Machine Learning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab in obcaecati? Dicta quo rem quia recusandae fugit placeat, porro quis officiis dolorem sed id voluptates, nihil totam nesciunt possimus!</p>
                    <button className={contact.submit_btn1}>Apply Now</button>
                </div></FadeInSection>
            </div>
        </div>
    )
}