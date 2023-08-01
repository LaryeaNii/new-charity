import { useState } from 'react';
import './homeStyle.css'
import { Link } from 'react-router-dom';

const Home = () => {


   const [donateAmount, setDonateAmount] = useState('');

   const handleSelectAmount =(amount)=>{
    setDonateAmount(amount);
   } 
   

    return (
    <div>

          
        {/*////////////////////////////////////////////// Section 1 ///////////////////////////////////////////////////// */}

        <div className="first">
            <div className="title">
              <h1>Charity springs from a tender Heart</h1> 
              <p>Our charity organization is dedicated to 
                making a positive impact in the lives of those in need. Through various initiatives,
                we provide support, hope, and opportunities to create lasting change in communities worldwide.</p>
             <div className="additional">
             <Link to="/donate"> 
          <button>Donate Now </button>
            </Link>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="./play-circle-svgrepo-com.svg" alt="play" />
            </a> 
            <p style={{ fontWeight: 'bold' }}>Watch Video</p>
             </div>
            </div>
        
        <div className='donate-card'>
               <h2>Donate now!</h2>
               <p>Donate now to help us make a positive impact in the lives of those in need.</p>
               <div className="money-grid">
                    <div className='amount' onClick={()=>{handleSelectAmount('10')}}>₵10</div>
                    <div className='amount'onClick={()=>{handleSelectAmount('25')}}>₵25</div>
                    <div className='amount'onClick={()=>{handleSelectAmount('50')}}>₵50</div>
                    <div className='amount'onClick={()=>{handleSelectAmount('75')}}>₵75</div>
                    <div className='amount'onClick={()=>{handleSelectAmount('100')}}>₵100</div>
                    <div className='amount'onClick={()=>{handleSelectAmount('125')}}>₵125</div>
               </div>
               <div class="form-container">
                    <label for="donate-input">Amount:</label>
                    <input type="text" id="donate-input" class="donate-input" placeholder='₵' value={`₵${donateAmount}`}/>
                    <button id='short-donate'>Donate Now</button>
                </div>
        </div>
              
              
        {/*////////////////////////////////////////////// Section 2 ///////////////////////////////////////////////////// */}

        </div>
        <div className="second">
            <div className='stats'>   
                <div className='stat-description'> 
                    <img className='stat-icon' src="./white-partners.svg" alt="partners" />
                    <p><span className='enlarge'>70+</span> Businesses Revived</p>
                </div>
                <div className='stat-description'>
                    <img className='stat-icon' src="./white-commission.svg" alt="donation" />
                    <p><span className='enlarge'>GH₵300k</span> Donated</p>
                </div>
                <div className='stat-description'>
                     <img className='stat-icon' src="./white-community.svg" alt="leadership" />
                     <p> <span className='enlarge'>5K+</span> Beneficiaries</p>
                </div>
                <div className='stat-description'>
                   <img className='stat-icon' src="./white-trophy.svg" alt="champion" />
                   <p><span className='enlarge'>40+</span> Projects Completed</p>
                </div>
            </div>
               
        </div>

        {/*////////////////////////////////////////////// Section 3 ///////////////////////////////////////////////////// */}
        
        <div className="third">
            <div className="title" id='mission-title'>
              <h1>The mission & goals of our organization</h1> 
              <p>This is how we choose to empower the individuals and communities around us. 
                Ranging from supporting orphanages, gift giving to the needy, 
                and supporting students without the resources to continue with their education</p>
             <div className="additional">
             <Link to="/donate"> 
          <button>Donate Now </button>
            </Link> 
           </div>
           </div>
        
        <div className="categories">
                    <div className="mission-category">
                        <img src="./food-svgrepo-com.svg" alt="food icon" className='stat-icon' />
                        <p className='category-text'>Food Donation</p>
                    </div>

                    <div className="mission-category">
                        <img src="./books-svgrepo-com.svg" alt="books icon" className='stat-icon' />
                        <p className='category-text'>Education Aid</p>
                    </div>
            
                    <div className="mission-category">
                            <img src="./hospital-chart-style-s-svgrepo-com.svg" alt="hospital icon" className='stat-icon' />
                            <p className='category-text'>Medical Care</p>
                       </div>                       
                    <div className="mission-category">
                        <img src="./gift-svgrepo-com.svg" alt="gift icon" className='stat-icon' />
                        <p className='category-text'>Gift Giving</p>
                       </div>
        </div>

        </div>

    </div> );
}
 
export default Home;