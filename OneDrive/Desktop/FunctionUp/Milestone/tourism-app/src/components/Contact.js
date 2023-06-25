import React, {useState} from "react";

const Contact = () => {
  const[userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
  });

  const [errors, setErrors] = useState({});


  let name,value;
  const postUserData =(event) =>{
   name=event.target.name;
   value= event.target.value;
    
   setUserData({...userData, [name]:value})
  };

  //Validation

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (userData.phone.trim() === '' || !phoneRegex.test(userData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.email.trim() === '' || !emailRegex.test(userData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* connect with firebase */

  const submitData=async(event)=>{
    event.preventDefault();
    if (validateForm()) {
      const { firstName, lastName, phone, email, address, message } = userData;

      // Perform form submission
      try {
        const res = await fetch('https://projectt-data-default-rtdb.firebaseio.com/userDataRecords.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message
          })
        });

        if (res.ok) {
          setUserData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            message: ''
          });
          alert('Data Stored');
        } else {
          alert('Failed to store data');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while submitting the form');
      }
    } else {
      alert('Please fill in all the required fields');
    }
  };
   
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Us <br/> For Detailed Info.
                  </h1>
                  <p className="main-hero-para">
                  Let us be your trusted companion in exploring Uttarakhand's enchanting landscapes and rich cultural heritage. Contact us today for personalized itineraries and a memorable journey. 
                  </p>
                  <figure>
                    <img src="./Images/bg1.jpg" alt="contactUsImg" />
                  </figure>
                </div>
                  <div className="contact-rightside col-12 col-lg-7">
                   <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                           type="text"
                           name="firstName"
                           id=""
                           className="form-control"
                           placeholder="First Name"
                           value={userData.firstName}
                           onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                           type="text"
                           name="lastName"
                           id=""
                           className="form-control"
                           placeholder="Last Name"
                           value={userData.lastName}
                           onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                           type="text"
                           name="phone"
                           id=""
                           className="form-control"
                           placeholder="Phone Number"
                           value={userData.phone}
                           onChange={postUserData}
                        />
                         {errors.phone && <span className="error">{errors.phone}</span>}
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                           type="text"
                           name="email"
                           id=""
                           className="form-control"
                           placeholder="Email ID"
                           value={userData.email}
                           onChange={postUserData}
                        />
                         {errors.email && <span className="error">{errors.email}</span>}
                      </div>
                    </div>
                        <div className="row">
                        <div className="col-12 contact-input-field">
                        <input  
                           type="text"
                           name="address"
                           id=""
                           className="form-control"
                           placeholder="Add Address"
                           value={userData.address}
                           onChange={postUserData}
                        />

                        </div>

                        </div>
                        <div className="row">
                        <div className="col-12 contact-input-field">
                        <input  
                           type="text"
                           name="message"
                           id=""
                           className="form-control"
                           placeholder="Enter Your Message"
                           value={userData.message}
                           onChange={postUserData}

                        />

                        </div>

                        </div>
                        <div class="form-check form-checkbox-style">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" className="main-hero-para">
                                    I agree that the this organization may contact me at the email address or phone number above.
                        </label>
                        </div>
                        <button className="btn btn-style w-100" onClick={submitData}>Submit</button>
                   </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
