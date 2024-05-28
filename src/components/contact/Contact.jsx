import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(
      JSON.stringify(
        {
          name: formData.name, 
          mobile_number: formData.mobile_number,
          budget: formData.budget
        }
      )
    )
  };

  const URL = 'https://script.google.com/macros/s/AKfycbxWzaV0WGP1fo1VtKS7SktMZbc4a_S-cTKlkDFZhgcUYJv_uXQDDsodtmaQgmm5kuxE/exec'
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      URL, 
      {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name, 
          mobile_number: formData.mobile_number,
          location: formData.location
        }),
        headers: {
          "Content-Type": "text/plain",
        }
      }
    ).then(
        res => {
          setFormData({
            name: "",
            mobile_number: "",
            location: ""
          });
          return res.json()
        }
      )
      .then(
        (data)=>{
          console.log(data);
          alert(data.msg)
        }
      )
      .catch(err => console.log(err))
  };

  return (
    <section className='contact mb'>
      
      <div className='container'>
        <form className='shadow' onSubmit={handleSubmit}>
          <h4>End up your search. Step into a new home.</h4> <br />
          <div class="input-container">
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
          </div>
          <div class="input-container">
          <input
            type='text'
            name='mobile_number'
            placeholder='Mobile Number'
            value={formData.mobile_number}
            onChange={handleChange}
          />
          </div>
          <div class="input-container">
          <input
            type='text'
            name='location'
            placeholder='Location'
            value={formData.location}
            onChange={handleChange}
          />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
