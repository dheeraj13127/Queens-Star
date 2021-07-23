import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Doctor from './components/doctor/Doctor'
import Patient from './components/patient/Patient'
import Nurse from './components/nurse/Nurse'
import MedicalStore from './components/medicalStore/MedicalStore'
import PatientDischarge from './components/patientDischarge/PatientDischarge'
import HospitalAdmission from './components/hospitalAdmission/HospitalAdmission'
import HospitalQuery from './components/hospitalQueries/HospitalQuery'
import Dashboard from './components/Dashboard'
import SignUp from './components/auths/SignUp'
import SignIn from './components/auths/SignIn'
import Landing from './components/Landing'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Landing}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/doctor" exact component={Doctor}/>
      <Route path="/patient" exact component={Patient}/>
      <Route path="/nurse" exact component={Nurse}/>
      <Route path="/medicalStore" exact component={MedicalStore}/>
      <Route path="/patientDischarge" exact component={PatientDischarge}/>
      <Route path="/hospitalAdmission" exact component={HospitalAdmission}/>
      <Route path="/hospitalQuery" exact component={HospitalQuery}/>
      <Route path="/signUp" exact component={SignUp}/>
      <Route path="/signIn" exact component={SignIn}/>
      </Router>
    </div>
  )
}

export default App
