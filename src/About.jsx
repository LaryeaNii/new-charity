import './About.css'


const About = () => {


    return ( 

     <div className='about-section'> 
        <div className='top-section'>
        <div className="about-image"><img src="./profile1.jpg" alt="image" /></div>
        <div className="about-statement">
            <h1>About</h1>
            <h3>We're glad you want to learn more about us</h3>
            <p>"We are a passionate team dedicated to making a positive impact. 
            With a shared vision of creating meaningful change, 
            we strive to empower communities and individuals 
            through our innovative solutions. 
            Join us on our journey towards a brighter future."</p>
        </div>
       </div>
       <div className="middle-section">
        <div className="values">
              <div className="value-card">
                 <h3>Our Mission</h3>
                 <p>Our mission is to alleviate suffering and create lasting change. 
                    We're dedicated to improving lives by providing essential resources
                    to those in need, fostering education, healthcare,
                    and sustainable development. Through our humanitarian efforts, 
                    we aim to bring hope and build resilient communities, 
                    united in the spirit of compassion.</p>
              </div>
              <div className="value-card">
                <h3>Our Vision</h3>
                <p>Our vision is a world where compassion and kindness prevail.
                We envision a society free from hunger, ignorance, and injustice. 
                By mobilizing resources and engaging communities, 
                we strive to uplift the marginalized, empower the vulnerable,
                and inspire a global movement of generosity and support for a brighter 
                future.</p>
              </div>
              <div className="value-card">
                <h3>Our Values</h3>
                <p>We believe in the importance of a healthy, 
                    inclusive, and equitable society. We believe in the 
                    importance of a healthy, inclusive, and equitable 
                    society. We believe in the importance of a healthy, 
                    inclusive, and equitable society. We believe in the 
                    importance of a healthy, inclusive, and equitable 
                    society. We believe in the importance of a healthy, 
                    inclusive, and equitable society.</p>
              </div>
        </div>
       </div>
       <div className="bottom-section">
          <h2>Meet Our Leaders</h2>
          <div className="all-team">
          <div className='team-card'>
            <img src="./profile1.jpg" alt="pic1" />
            <p>John Doe</p>
            <p>Founder</p>
            <div className='socials'></div>
          </div>
          <div className='team-card'>
            <img src="./profile2.jpg" alt="pic1" />
            <p>John Doe</p>
            <p>Founder</p>
            <div className='socials'></div>
          </div>
          <div className='team-card'>
            <img src="./profile3.jpg" alt="pic1" />
            <p>John Doe</p>
            <p>Founder</p>
            <div className='socials'></div>
          </div>
          <div className='team-card'>
            <img src="./profile1.jpg" alt="pic1" />
            <p>John Doe</p>
            <p>Founder</p>
            <div className='socials'></div>
          </div>
         
          </div>
       </div>



      </div>
          

    );
}
 
export default About;