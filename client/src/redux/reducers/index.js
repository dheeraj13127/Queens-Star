import {GET_DOCTOR_DATA,GET_HOSPITAL_ADMISSION_DATA,GET_MEDICAL_STORE_DATA,GET_NURSE_DATA,GET_PATIENT_DATA,GET_PATIENT_DISCHARGE_DATA,GET_HOSPITAL_QUERY_1,GET_HOSPITAL_QUERY_2,GET_HOSPITAL_QUERY_3,GET_HOSPITAL_QUERY_4,GET_HOSPITAL_QUERY_5,GET_HOSPITAL_QUERY_6} from '../constants/constants'
const initState={
  doctorData:"",
  patientData:"",
  nurseData:"",
  medicalStoreData:"",
  patientDischargeData:"",
  hospitalAdmissionData:"",
  hospitalQuery1:"",
  hospitalQuery2:"",
  hospitalQuery3:"",
  hospitalQuery4:"",
  hospitalQuery5:"",
  hospitalQuery6:""

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
    case GET_HOSPITAL_QUERY_1:{
      return Object.assign({},state,{
        hospitalQuery1:action.payload
      })
    }
    case GET_HOSPITAL_QUERY_2:{
      return Object.assign({},state,{
        hospitalQuery2:action.payload
      })
    }
    case GET_HOSPITAL_QUERY_3:{
      return Object.assign({},state,{
        hospitalQuery3:action.payload
      })
    }
    case GET_HOSPITAL_QUERY_4:{
      return Object.assign({},state,{
        hospitalQuery4:action.payload
      })
    }
    case GET_HOSPITAL_QUERY_5:{
      return Object.assign({},state,{
        hospitalQuery5:action.payload
      })
    }
    case GET_HOSPITAL_QUERY_6:{
      return Object.assign({},state,{
        hospitalQuery6:action.payload
      })
    }

    default:{
      return state
    }
  }
}
export default rootReducer