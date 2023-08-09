
import './Volunteer.css';

const Volunteer = () => {
  return (
    <div className="larger-container">
        <div className="volunteer-container">
      <h2 className="volunteer-heading">Become a Volunteer</h2>
      <p className="volunteer-description">
        Join our efforts to make a positive impact in the community. Your contribution matters!
      </p>
      <form className="volunteer-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Tell us why you want to volunteer"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default Volunteer;
