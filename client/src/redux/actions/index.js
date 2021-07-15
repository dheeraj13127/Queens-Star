import {GET_DOCTOR_DATA,GET_HOSPITAL_ADMISSION_DATA,GET_MEDICAL_STORE_DATA,GET_NURSE_DATA,GET_PATIENT_DATA,GET_PATIENT_DISCHARGE_DATA,INSERT_DOCTOR_DATA,INSERT_HOSPITAL_ADMISSION_DATA,INSERT_MEDICAL_STORE_DATA,INSERT_NURSE_DATA,INSERT_PATIENT_DATA,INSERT_PATIENT_DISCHARGE_DATA} from '../constants/constants'
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
import axios from 'axios'

export const fetchDoctorData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/doctor/data')
  .then(res=>dispatch({
    type:GET_DOCTOR_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const fetchPatientData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/patient/data')
  .then(res=>dispatch({
    type:GET_PATIENT_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const fetchNurseData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/nurse/data')
  .then(res=>dispatch({
    type:GET_NURSE_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const fetchMedicalStoreData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/medicalStore/data')
  .then(res=>dispatch({
    type:GET_MEDICAL_STORE_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const fetchHospitalAdmissionData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/hospitalAdmission/data')
  .then(res=>dispatch({
    type:GET_HOSPITAL_ADMISSION_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const fetchPatientDischargeData=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/patientDischarge/data')
  .then(res=>dispatch({
    type:GET_PATIENT_DISCHARGE_DATA,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertDoctorData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/doctor/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertPatientData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/patient/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertNurseData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/nurse/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertMedialStoreData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/medicalStore/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertHospitalAdmissionData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/hospitalAdmission/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const insertPatientDischargeData=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/patientDischarge/insert',data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deleteDoctorData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/doctor/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deletePatientData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/patient/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deleteNurseData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/nurse/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deleteMedicalStoreData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/medicalStore/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deleteHospitalAdmissionData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/hospitalAdmission/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const deletePatientDischargeData=(data)=>async(dispatch,getState)=>{
  await axios.post("http://localhost:5000/auths/patientDischarge/delete",data)
  .then(res=>NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}