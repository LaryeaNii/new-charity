import React, { useState, useEffect, useRef } from 'react';
import PaymentFormModal from './PaymentFormModal';
import './homeStyle.css';
import { Link } from 'react-router-dom';
import supabase from "./config/supabaseclient";



const Home = () => {

  const [fetchError, setFetchError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [fetchCharityError, setFetchCharityError] = useState(null);
  const [charity, setCharity] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select();

        if (error) {
          setFetchError('Could not fetch blogs');
          console.log(error);
        } else {
          setBlogs(data || []);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

   useEffect(() => {
      const fetchCharity = async () =>{
        try{
          const {data, error} = await supabase
          .from('charity')
          .select();

        if(error){
          setFetchCharityError('Could not fetch charity');
          console.log(error); 
        }
        else{
          setCharity(data || []);
          setFetchCharityError(null);
        }
      }catch(error){
          console.error('Error fetching charity:', error); 
      }
    };
      fetchCharity();
   },[]);
  



  const [donateAmount, setDonateAmount] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const lastThreeBlogs = blogs.slice(-3);

  const toggleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  const handleSelectAmount = (amount) => {
    setDonateAmount(parseFloat(amount));
  };

  const videoModalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (videoModalRef.current && !videoModalRef.current.contains(event.target)) {
        setIsVideoModalOpen(false);
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVideoModalOpen]);

  const projectContainerRef = useRef(null);

  const scrollLeft = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const togglePaymentModal = () => {
    setIsPaymentModalOpen(!isPaymentModalOpen);
  };

  const handlePaymentSubmit = (paymentDetails) => {
    // Implement secure payment processing using a payment gateway (e.g., Stripe)
    // For example:
    // SomePaymentService.processPayment(paymentDetails)
    //   .then((response) => {
    //     console.log('Payment successful:', response);
    //     // Do something after successful payment
    //   })
    //   .catch((error) => {
    //     console.error('Payment failed:', error);
    //     // Handle payment failure
    //   });

    // For demonstration purposes, we'll log the payment details to the console.
    console.log('Payment Details:', paymentDetails);
  };

  return (
    <div>
      {/*////////////////////////////////////////////// Section 1 ///////////////////////////////////////////////////// */}
      <div className="first">
        <div className="title">
          <h1>Charity springs from a tender Heart</h1>
          <p>
            Our charity organization is dedicated to making a positive impact
            in the lives of those in need. Through various initiatives, we
            provide support, hope, and opportunities to create lasting change
            in communities worldwide.
          </p>
          <div className="additional">
          <Link to="/donate">
              <button>Donate Now</button>
           </Link>
            <img
              src="./play-circle-svgrepo-com.svg"
              alt="play"
              onClick={toggleVideoModal}
              className='play-button'
            />
            <p style={{ fontWeight: 'bold' }}>Watch Video</p>
          </div>
        </div>

        <div className="donate-card">
          <h2>Donate now!</h2>
          <p>Donate now to help us make a positive impact in the lives of those in need.</p>
          <div className="money-grid">
            <div className="amount" onClick={() => handleSelectAmount('10')}>₵10</div>
            <div className="amount" onClick={() => handleSelectAmount('25')}>₵25</div>
            <div className="amount" onClick={() => handleSelectAmount('50')}>₵50</div>
            <div className="amount" onClick={() => handleSelectAmount('75')}>₵75</div>
            <div className="amount" onClick={() => handleSelectAmount('100')}>₵100</div>
            <div className="amount" onClick={() => handleSelectAmount('125')}>₵125</div>
          </div>
          <div class="form-container">
            <label for="donate-input">Amount:</label>
            <input
              type="text"
              id="donate-input"
              class="donate-input"
              placeholder="₵"
              value={`₵${donateAmount}`}
            />
            <button id="short-donate" onClick={togglePaymentModal}>Donate Now</button>
          </div>
        </div>
      </div>

      {/*////////////////////////////////////////////// Section 2 ///////////////////////////////////////////////////// */}
      <div className="second">
        <div className="stats">
          <div className="stat-description">
            <img className="stat-icon" src="./white-partners.svg" alt="partners" />
            <p>
              <span className="enlarge">70+</span> Businesses Revived
            </p>
          </div>
          <div className="stat-description">
            <img className="stat-icon" src="./white-commission.svg" alt="donation" />
            <p>
              <span className="enlarge">GH₵300k</span> Donated
            </p>
          </div>
          <div className="stat-description">
            <img className="stat-icon" src="./white-community.svg" alt="leadership" />
            <p>
              <span className="enlarge">5K+</span> Beneficiaries
            </p>
          </div>
          <div className="stat-description">
            <img className="stat-icon" src="./white-trophy.svg" alt="champion" />
            <p>
              <span className="enlarge">40+</span> Projects Completed
            </p>
          </div>
        </div>
      </div>
      {/*////////////////////////////////////////////// Blog Section  ///////////////////////////////////////////////////// */}
     
      <div className="blog-section">
      {fetchError && <h1>{fetchError}</h1>}
      <div className="title" id="blog-title">
        <h1> Read our latest news and updates.</h1>
        <Link to="./blogs">
          <p>Read All</p>
        </Link>
      </div>
      <div className="blog-container">
        <div className="left-container">
          {lastThreeBlogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.blogcoverimage} alt="blog pic" />
              <div>
                <p>{blog.blogheadline}</p>
                <Link to={`/blogreader/${blog.id}`}>
                  <p className="blog-link">Read More →</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


     
     
     
     
     
     
     
     
      {/*////////////////////////////////////////////// Section 3 ///////////////////////////////////////////////////// */}
      <div className="third">
        <div className="title" id="mission-title">
          <h1>The mission & goals of our organization</h1>
          <p>
            This is how we choose to empower the individuals and communities
            around us. Ranging from supporting orphanages, gift giving to the
            needy, and supporting students without the resources to continue
            with their education
          </p>
          <div className="additional">
            <Link to="/donate">
              <button>Donate Now</button>
            </Link>
          </div>
        </div>

        <div className="categories">
          <div className="mission-category">
            <img src="./food-svgrepo-com.svg" alt="food icon" className="stat-icon" />
            <p className="category-text">Food Donation</p>
          </div>

          <div className="mission-category">
            <img src="./books-svgrepo-com.svg" alt="books icon" className="stat-icon" />
            <p className="category-text">Education Aid</p>
          </div>

          <div className="mission-category">
            <img src="./hospital-chart-style-s-svgrepo-com.svg" alt="hospital icon" className="stat-icon" />
            <p className="category-text">Medical Care</p>
          </div>

          <div className="mission-category">
            <img src="./gift-svgrepo-com.svg" alt="gift icon" className="stat-icon" />
            <p className="category-text">Gift Giving</p>
          </div>
        </div>
      </div>

      {/*////////////////////////////////////////////// Section 4 ///////////////////////////////////////////////////// */}
      <div className="scroll-section">
        <div className="flex-text">
          <div className="current-project">Our Current Projects</div>
          <div className="arrows">
            <img src="./icons8-back-50.png" alt="back" className="click" onClick={scrollLeft} />
            <img src="./icons8-forward-50.png" alt="forward" className="click" onClick={scrollRight} />
          </div>
        </div>

        <div className="project-container" ref={projectContainerRef}>
          {fetchCharityError && <h1>{fetchCharityError}</h1>}
          {charity.map((project) => (
            <div className="projects" key={project.id}>
              <img className="proj-img" src={project.img} alt={`Project ${project.id}`} />
              <p className="card-project-title">{project.title}</p>
              <p className="card-project-description">{project.description}</p>
              <div className="card-custom-progress">
                <progress value={project.amountreceived} max={project.amountneeded} />
              </div>
              <p className="card-current-amount">₵{project.amountreceived}/{project.amountneeded}</p>
            </div>
          ))}
        </div>
      </div>

      {/*////////////////////////////////////////////// Section 5 ///////////////////////////////////////////////////// */}
      <div className="volunteer-section">
        <div className="title" id="volunteer-title">
          <h1>Our Volunteers</h1>
          <p>
            The volunteers of our foundation are the heartbeat of our mission
            and the driving force behind our impact. Their dedication,
            passion, and unwavering commitment are what make our programs
            and initiatives successful. These remarkable individuals
            selflessly contribute their time, skills, and energy to support
            our cause, making a tangible difference in the lives of those we serve.
          </p>
          <Link to="/volunteer">
            <button>Apply as volunteer</button>
          </Link>
        </div>

        <div className="testimony">
          <div className="testimony-card">
            <p>
              "From the moment I joined as a volunteer, I knew I had found my place.
              The dedication of this foundation to its mission is unwavering,
              and I'm humbled to contribute my time and skills to such a worthy cause."
            </p>
            <div className="profile">
              <img src="./profile1.jpg" alt="pic" className="stat-icon" id="profile-icon" />
              <p>Lily</p>
            </div>
          </div>
          <div className="testimony-card">
            <p>
              "I am incredibly honored to be part of this foundation's volunteer team.
              The work we do here truly touches lives and brings hope to those in need.
              The sense of purpose I feel when I see the people's smiles."
            </p>
            <div className="profile">
              <img src="./profile2.jpg" alt="pic" className="stat-icon" id="profile-icon" />
              <p>Sarah</p>
            </div>
          </div>
          <div className="testimony-card">
            <p>
              "Volunteering with this foundation has been a transformative experience for me.
              I initially joined hoping to contribute to a good cause, but it turned out to be so much more."
            </p>
            <div className="profile">
              <img src="./profile3.jpg" alt="pic" className="stat-icon" id="profile-icon" />
              <p>Emily</p>
            </div>
          </div>
        </div>
      </div>

      {/*////////////////////////////////////////////// Section 6 ///////////////////////////////////////////////////// */}
      <div className="sixth-plea">
        <div className="plea">
          <div className="plea-small-container">
            <h1>It takes a small change to make a big difference.</h1>
          </div>
          <div className="plea-button-container">
            <Link to="./donate">
              <button className="plea-donate-button">Donate Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal">
          <div className="video-container" ref={videoModalRef}>
            <button onClick={toggleVideoModal} className="close-button">
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rr8klHIsLlY"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {isPaymentModalOpen && (
        <PaymentFormModal
          donateAmount={donateAmount}
          onClose={togglePaymentModal}
          onSubmit={handlePaymentSubmit}
        />
      )}

    </div>
  );
};

export default Home;
