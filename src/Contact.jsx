import './Contact.css';
import LeafletMap from './LeafMap';
import { useState, useEffect, useRef  } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {

    const [activeIndex, setActiveIndex] = useState(null);
     
    const location = useLocation();
    const faqSectionRef = useRef(null);


    useEffect(() => {
        if (location.state && location.state.fromContact) {
          if (faqSectionRef.current) {
            faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

    const faqItems = [
        {
            question: "What is your foundation about?",
            answer: "Our foundation is dedicated to supporting various charitable causes."
        },
        {
            question: "How can I contribute to your projects?",
            answer: "You can contribute by donating funds or volunteering your time."
        },
        {
            question: "Where are your projects located?",
            answer: "Our projects are located in various regions across the country."
        },
        {
            question: "Are donations tax-deductible?",
            answer: "Yes, we are a registered nonprofit organization, and donations are tax-deductible."
        },
        {
            question: "How can I get involved as a volunteer?",
            answer: "To become a volunteer, you can fill out the volunteer form on our website."
        },
        {
            question: "What types of events do you organize?",
            answer: "We organize a variety of events, including fundraising galas, community workshops."
        },
        {
            question: "Can I suggest a project for your foundation?",
            answer: "Yes, we welcome project suggestions from the community. You can submit your idea."
        },

    ];
    
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


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
      
       <div ref={faqSectionRef} className="faq-section">
                <div className="faq-title">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
        </div>
        </div>
        
        


    </div>  );
}
 
export default Contact;