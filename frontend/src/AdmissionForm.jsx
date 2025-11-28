import React, { useState } from 'react'
import ScrollAnimate from './ScrollAnimate';
import './effect.css';
// import Discover from './Discover';
 
function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    cityName: "",
    programCategory: "",
    programName: "",
    phone: "",
    email: ""
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8006/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        alert("Application submitted successfully! Check your email.");
        setFormData({ studentName: "", cityName: "", programCategory: "", programName: "", phone: "", email: "" });
      } else {
        alert(data.message || "Error submitting application");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application");
    }
  }
    return (
        <ScrollAnimate>
            <h1 className='text-center fw-semibold mb-2 mt-4'>Admission Open 2025</h1>
            <div className="d-flex my-3 flex-wrap align-items-center justify-content-center">
                <div className="container">
                    <div className="row p-2 mb-3">
                        <div className="col p-3 text-light me-1 rounded-3 mb-3" style={{
                            backgroundColor: '#372d42'
                        }}>
                            < img src="\media\assets\fs-university-logo.png" style={{ width: '50%', backgroundColor: '#fff', borderRadius: '10px' }} />
                            <div className=' mt-3'>
                                <h1 className='text-center'>How to Apply</h1>
                                <ol className='lh-lg '>
                                    <li>Fill the Application Form</li>
                                    <li>Confirm Programe/Specialisation</li>
                                    <li>Get your Application Number on your registered Email ID and Mobile Number</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col p-3 text-light rounded-3 mb-3" style={{ background: '#060e31ee' }}>
                            <h5>Please fill the form below :</h5>
                            <form >
                              <div className="row mb-3">
                                <label htmlFor="studentName" className="col-sm-4 col-form-label">Student Name</label>
                                <div className="col-sm-8">
                                  <input type="text"
                                   className="form-control" 
                                   id="studentName"
                                   name="studentName"
                                   value={formData.studentName}
                                   onChange={handleChange}/>
                                   
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label htmlFor="cityName" className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                  <input type="text" 
                                  className="form-control" 
                                  id="cityName"
                                  name="cityName"
                                  value={formData.cityName}
                                  onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label htmlFor="programCategory" className="col-sm-4 col-form-label">Program Category</label>
                                <div className="col-sm-8">
                                  <select className="form-select" aria-label="Default select example" id="programCategory" name="programCategory" value={formData.programCategory} onChange={handleChange}>
                                    <option value="">--select--</option>
                                    <option value="undergraduate">Under Graduation</option>
                                    <option value="postgraduate">Post Graduation</option>
                                    <option value="diploma">Diploma</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label htmlFor="programName" className="col-sm-4 col-form-label">Program</label>
                                <div className="col-sm-8">
                                  <input type="text" 
                                  className="form-control" 
                                  id="programName"
                                  name="programName"
                                  value={formData.programName}
                                  onChange={handleChange} />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label htmlFor="phone" className="col-sm-4 col-form-label">Mobile Number</label>
                                <div className="col-sm-8">
                                  <input type="tel" 
                                  className="form-control" 
                                  id="phone" 
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-4 col-form-label">E-mail </label>
                                <div className="col-sm-8">
                                  <input type="email" 
                                  className="form-control" 
                                  id="email" 
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <button type="submit" onClick={sendEmail} className="btn btn-light fw-semibold p-2" style={{ marginLeft: '40%' }} >Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Discover /> */}
        </ScrollAnimate >
    );
}

export default AdmissionForm;