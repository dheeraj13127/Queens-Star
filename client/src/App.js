import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Landing from './components/Landing'
import Doctor from './components/doctor/Doctor'
import Patient from './components/patient/Patient'
import Nurse from './components/nurse/Nurse'
import MedicalStore from './components/medicalStore/MedicalStore'
import PatientDischarge from './components/patientDischarge/PatientDischarge'
import HospitalAdmission from './components/hospitalAdmission/HospitalAdmission'
import HospitalQuery from './components/hospitalQueries/HospitalQuery'

function App() {
  return (
    <div>
      <Router>
      <Route path="/" exact component={Landing}/>
      <Route path="/doctor" exact component={Doctor}/>
      <Route path="/patient" exact component={Patient}/>
      <Route path="/nurse" exact component={Nurse}/>
      <Route path="/medicalStore" exact component={MedicalStore}/>
      <Route path="/patientDischarge" exact component={PatientDischarge}/>
      <Route path="/hospitalAdmission" exact component={HospitalAdmission}/>
      <Route path="/hospitalQuery" exact component={HospitalQuery}/>
      </Router>
    </div>
  )
}

export default App
