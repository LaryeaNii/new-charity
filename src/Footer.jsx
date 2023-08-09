import { Link } from "react-router-dom";
import './footerStyle.css';

const Footer = () => {
    return ( 
        <div>
            <footer>
        <div className="footer-container">
            <div className='message'>
              <img src="./charity-svgrepo-com.svg" alt="logo" className="stat-icon" />
              <p>We will distrubute your 
                assistance to anyone in need out there, anytime and anywhere.</p>
            </div>

            <div className='grid'>
                <div className='grid-item'>
                    <h3>About</h3>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to="/team">Team</Link></li>
                    </ul>
                </div>
                <div className='grid-item'>
                    <h3>Help</h3>
                    <ul>
                        <li><Link to="/donate">Donate</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/team">Team</Link></li>
                    </ul>
                </div>
                <div className='grid-item'>
                    <h3>Social</h3>
                    <ul>
                        <li><Link to="/donate">Twitter</Link></li>
                        <li><Link to="/faq">Facebook</Link></li>
                        <li><Link to="/team">Instagram</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className='request'>
                <p><b>Be the hero that changes lives</b></p>
                <Link to="/donate">
          <button className="footer-button">Donate Today ↗</button>
        </Link> 
        </div>


        
        </div>

        <div className='copyright-container'>
            <hr />
            <p className='copyright'>Copyright © 2023 Charity.
             All rights reserved.</p>
       
        </div>
            

       
     </footer>
        </div>
     );
}
 
export default Footer;