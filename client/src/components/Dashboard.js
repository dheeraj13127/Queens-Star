import React,{useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
function Dashboard() {
  const history=useHistory()
useEffect(()=>{
const auth=localStorage.getItem("authSuccess")
if(auth==="false"){
history.push('/signIn')
}
},[])
  return (
    <div>
      <Navbar/>
<div className="container-fluid">
      <div className="row">
        
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
         <div className="text-center">
           <h3>Doctor</h3>
           <i className="fas fa-user-md hospitalLogoIcon"></i><br />
           <a href="/doctor" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Patient</h3>
           <i className="fas fa-user-injured hospitalLogoIcon"></i><br />
           <a href="/patient" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Nurse</h3>
           <i className="fas fa-user-nurse hospitalLogoIcon"></i><br />
           <a href="/nurse" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Medical Store</h3>
           <i className="fas fa-clinic-medical hospitalLogoIcon"></i><br />
           <a href="/medicalStore" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Hospital Admission</h3>
           <i className="far fa-address-card hospitalLogoIcon"></i><br />
           <a href="/hospitalAdmission" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 hospitalCol">
          <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Patient Discharge</h3>
           <i className="fas fa-home hospitalLogoIcon"></i><br />
           <a href="/patientDischarge" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
        </div>
       <div className="col-12 hospitalCol">
       <div className="hospitalBox bg-dark">
          <div className="text-center">
           <h3>Hospital Queries</h3>
           <i className="fas fa-hospital hospitalLogoIcon"></i><br />
           <a href="/hospitalQuery" className="btn hospitalBtn">Explore</a>
         </div>
          </div>
       </div>
      </div>
     
    </div>
    <Footer/>
    </div>
    
  )
}

export default Dashboard
