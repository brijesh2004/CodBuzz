import contact from '@/style/contact.module.css';
export default function Contact(){
    return(
        <div className='bg-dark text-white'>
           <div className={contact.contact_main}>
             <h1>Contact Us</h1>
             <p>Name</p>
             <input type="text" placeholder="Enter the Name"/><br />
             <p>Email</p>
             <input type="email" placeholder="Enter Your Email"/><br />
             <p>Message</p>
             <textarea  cols="30" rows="6" placeholder="Enter Message"></textarea><br />
             <button className={contact.submit_btn}>Submit</button>
           </div>
        </div>
    )
}