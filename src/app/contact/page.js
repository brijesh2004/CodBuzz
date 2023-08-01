import contact from '@/style/contact.module.css';
export default function Contact(){
    return(
        <div>
           <div className={contact.contact_main}>
             <h1>Contact Us</h1>
             <input type="text" placeholder="Enter the Name"/><br />
             <input type="email" placeholder="Enter Your Email"/><br />
             <textarea  cols="30" rows="6" placeholder="Enter Message"></textarea><br />
             <button className={contact.submit_btn}>Submit</button>
           </div>
        </div>
    )
}