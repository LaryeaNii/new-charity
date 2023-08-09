import './Contact.css';
import LeafletMap from './LeafMap';

const Contact = () => {
    return ( 
    <div className="contact-main">
        <div className="contact-section">
            <div className="contact-title">
            <h1>Get In Touch With Us</h1>
            <p>Please contact us with the information below.</p>
            </div>
           
            <div className="details-container">
                <div className="detail-item-section">
                    <img src="./location.svg" alt="pin" />
                    <p> <b>Location </b><br /> Aburi Akuapem, Eastern Region, Ghana</p>
                </div>  
                <div className="detail-item-section">
                    <img src="./mail.svg" alt="mail" />
                    <p> <b>Send Us</b> <br />zionfoundation@gmail.com</p>
                </div>  
                <div className="detail-item-section">
                    <img src="./phone.svg" alt="mail" />
                    <p><b>Call Us</b> <br />+233247890987</p>
                </div>  
        </div>    
        </div>
        <div className='bottom-contact-section'>
            <div className="contact-form">
            <div className='form-title'>
            <h2>Send Us A Message</h2>
            <p>We would love to hear from you. 
            We try our best to get back to everyone who contacts us.</p>
            </div>
            <form className='form'>             
                <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
                <div className='input-container'> <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/></div>
               
                <button className='form-button'>Send</button>
            </form>
            </div>
    
            <LeafletMap /> 
           
         
        </div>   
        


    </div>  );
}
 
export default Contact;