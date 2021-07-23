import React from 'react'
import NavbarLanding from './NavbarLanding'
import { Parallax } from 'react-parallax';
import img1 from './images/hospital8.png'
import doctor from './images/doctorimg.jpg'
import img2 from './images/hospital1.jpg'
import nurse from './images/nurses.jpg'
import img3 from './images/hosptial2.png'
import patient from './images/patients.jpg'
import Footer from './Footer';
function Landing() {
  return (
    <div>
      <NavbarLanding/>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12 bg-dark mt-4 landingCol1">
          <h1 className="text-center text-light"><i className="fas fa-stethoscope navLogo"></i>&nbsp;&nbsp;Queens Star Hospital</h1>
          <div className="text-start text-dark mt-4 bg-light p-4">
            <p className="hospitalInfo">Queens Star Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease. for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. To better serve the wide-ranging needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services.<br/> In addition, “bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the facility for short appointments. They may also stay for treatment in surgical or medical units for part of a day or for a full day, after which they are discharged for follow-up by a primary care health provider</p>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Parallax  bgImage={img1} bgImageAlt="img1" strength={300}>
        <div style={{ height: '350px' }} />
        </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 col-md-5 bg-dark mt-3 landingCol1">
            <div className="text-center">
              <img src={doctor} alt="doctor" className="img-fluid" style={{width:"350px",height:"350px"}} />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-7 bg-dark mt-3 landingCol1">
          <h3 className="text-light">Queens Star <span className="navLogo">Doctors</span></h3>
          <p className="text-light mt-3">
          This one-liner said by an anonymous person is something we all have felt at some point or the other in our lives. Indeed, doctors play a significant role in our lives. The absolute first and the last event of a human are both certified by doctors, in maternity hospitals and morgue. A doctor is a person with extensive knowledge in the domain of medical science, who applies and dedicates his knowledge to identify the medical problem faced by the patient and then uses his skill to prevent or cure it.
          On this very special event of Doctor’s Day, we are proud to say that Queens Star Hospital house some of the most talented medical professionals in the country. These doctors are fully capable of dealing with any kind of medical emergencies, and thus, we feel that it is our privilege to be one of the best hospitals in Bangalore.
          </p>
         </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Parallax  bgImage={img2} bgImageAlt="img1" strength={300}>
        <div style={{ height: '350px' }} />
        </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 col-md-5 bg-dark mt-3 landingCol1">
            <div className="text-center">
              <img src={nurse} alt="doctor" className="img-fluid" style={{width:"350px",height:"350px"}} />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-7 bg-dark mt-3 landingCol1">
          <h3 className="text-light">Queens Star <span className="navLogo">Nurses</span></h3>
          <p className="text-light mt-3">
          Nurses advocate for health promotion, educate patients and the public on the prevention of illness and injury, provide care and assist in cure, participate in rehabilitation, and provide support. No other health care professional has such a broad and far-reaching role.

          Nurses help families learn to become healthy by helping them understand the range of emotional, physical, mental and cultural experiences they encounter during health and illness. Nurses help people and their families cope with illness, deal with it, and if necessary live with it, so that other parts of their lives can continue.

          Nurses do more than care for individuals. They have always have been at the forefront of change in health care and public health.

          
          </p>
         </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Parallax  bgImage={img3} bgImageAlt="img1" strength={300}>
        <div style={{ height: '350px' }} />
        </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 col-md-5 bg-dark mt-3 landingCol1">
            <div className="text-center">
              <img src={patient} alt="doctor" className="img-fluid" style={{width:"350px",height:"350px"}} />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-7 bg-dark mt-3 landingCol1">
          <h3 className="text-light">Queens Star <span className="navLogo">Patients</span></h3>
          <p className="text-light mt-3">
          An patient is a patient who attends an outpatient clinic with no plan to stay beyond the duration of the visit. Even if the patient will not be formally admitted with a note as an outpatient, their attendance are still registered, and the provider will usually give a note explaining the reason for the visit, tests or procedure/surgery, which should include the names and titles of the participating personnel, the patient's name and date of birth, signature of informed consent, estimated pre- and post-service time for a history and exam (before and after), any anesthesia, medications or future treatment plans needed, and estimated time of discharge absent any (further) complications. Treatment provided in this fashion is called ambulatory care. 
          </p>
         </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Landing
