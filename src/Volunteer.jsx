import React, { useState } from 'react';
import './Volunteer.css';
import supabase from "./config/supabaseclient";

const Volunteer = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [volunteerReasons, setVolunteerReasons] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('volunteer-form')
        .insert([
          { full_name: fullName, email, phone_number: phoneNumber, volunteer_reasons: volunteerReasons }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        alert(error.message);
      } else {
        console.log('Form submitted successfully:', data);
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setVolunteerReasons('');
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="larger-container">
      <div className="volunteer-container">
        <h2 className="volunteer-heading">Become a Volunteer</h2>
        <p className="volunteer-description">
          Join our efforts to make a positive impact in the community. Your contribution matters!
        </p>
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <textarea placeholder="Tell us why you want to volunteer" value={volunteerReasons} onChange={(e) => setVolunteerReasons(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
