import {GET_DOCTOR_DATA,GET_HOSPITAL_ADMISSION_DATA,GET_MEDICAL_STORE_DATA,GET_NURSE_DATA,GET_PATIENT_DATA,GET_PATIENT_DISCHARGE_DATA} from '../constants/constants'
const initState={
  doctorData:"",
  patientData:"",
  nurseData:"",
  medicalStoreData:"",
  patientDischargeData:"",
  hospitalAdmissionData:""

}

function rootReducer(state=initState,action){
  switch(action.type){
    case GET_DOCTOR_DATA:{
      return Object.assign({},state,{
        doctorData:action.payload
      })
    }
    case GET_PATIENT_DATA:{
      return Object.assign({},state,{
        patientData:action.payload
      })
    }
    case GET_NURSE_DATA:{
      return Object.assign({},state,{
        nurseData:action.payload
      })
    }
    case GET_MEDICAL_STORE_DATA:{
      return Object.assign({},state,{
        medicalStoreData:action.payload
      })
    }
    case GET_HOSPITAL_ADMISSION_DATA:{
      return Object.assign({},state,{
        hospitalAdmissionData:action.payload
      })
    }
    case GET_PATIENT_DISCHARGE_DATA:{
      return Object.assign({},state,{
        patientDischargeData:action.payload
      })
    }

    default:{
      return state
    }
  }
}
export default rootReducer