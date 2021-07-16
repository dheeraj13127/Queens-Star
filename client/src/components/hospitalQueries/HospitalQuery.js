import React,{useState} from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer';
import { getHospitalQuery1,getHospitalQuery2,getHospitalQuery3,getHospitalQuery4,getHospitalQuery5,getHospitalQuery6 } from '../../redux/actions';
function HospitalQuery() {
  const dispatch=useDispatch()
  const hospitalQuery1=useSelector(state=>state.hospitalQuery1)
  const hospitalQuery2=useSelector(state=>state.hospitalQuery2)
  const hospitalQuery3=useSelector(state=>state.hospitalQuery3)
  const hospitalQuery4=useSelector(state=>state.hospitalQuery4)
  const hospitalQuery5=useSelector(state=>state.hospitalQuery5)
  const hospitalQuery6=useSelector(state=>state.hospitalQuery6)
  const [auth,setAuth]=useState(false)
  const [q1Pid,setQ1Pid]=useState("")
  const [q3Pid,setQ3Pid]=useState("")
  const [q2DocName,setQ2DocName]=useState("")
  const [auth1,setAuth1]=useState(false)
  const [auth2,setAuth2]=useState(false)
 const myFunc=(e)=>{
   e.preventDefault()
   dispatch(getHospitalQuery1({p_id:q1Pid}))
 
 }
 const myFunc1=(e)=>{
  e.preventDefault()
  dispatch(getHospitalQuery2({doc_name:q2DocName}))
 }
 const myFunc2=(e)=>{
  e.preventDefault()
  dispatch(getHospitalQuery3({p_id:q3Pid}))
 }
 const myFunc3=()=>{
   dispatch(getHospitalQuery4())
 }
 const myFunc4=()=>{
  dispatch(getHospitalQuery5())
}
const myFunc5=()=>{
  dispatch(getHospitalQuery6())
}
 console.log(hospitalQuery1)
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query gives patient name, patient age and the ward type for the given patient id </span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth(!auth)}>Click</button>
            </div>
            {auth&&(
     <div className="mt-3 formContainer">
     <form onSubmit={myFunc} autoComplete="off">
       <div className="col-12 col-lg-4 col-md-4 offset-md-4">
       <div className="input-group mb-3">
     
       <input type="text" className="form-control"  placeholder="P_id"  aria-describedby="basic-addon1" onChange={(e)=>setQ1Pid(e.target.value)} value={q1Pid} required/>
     </div>
    
    
       </div>
         <div className="text-center">
           <button className="btn dataSelectBtn">Submit</button>
         </div>
     </form>
       </div>
            )}
       
            {hospitalQuery1&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">P_name</th>
                   <th scope="col">P_age</th>
                   <th scope="col">Ward_type</th>
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery1&&hospitalQuery1.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.p_name}</td>
                       <td>{data.p_age}</td>
                       <td>{data.ward_type}</td>
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>

          <div className="col-12 col-lg-6">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query gives nurse id and nurse name for the doctor assigned to them. </span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth1(!auth1)}>Click</button>
            </div>
            {auth1&&(
     <div className="mt-3 formContainer">
     <form onSubmit={myFunc1} autoComplete="off">
       <div className="col-12 col-lg-4 col-md-4 offset-md-4">
       <div className="input-group mb-3">
     
       <input type="text" className="form-control"  placeholder="Doc_name"  aria-describedby="basic-addon1" onChange={(e)=>setQ2DocName(e.target.value)} value={q2DocName} required/>
     </div>
    
    
       </div>
         <div className="text-center">
           <button className="btn dataSelectBtn">Submit</button>
         </div>
     </form>
       </div>
            )}
       
            {hospitalQuery2&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">N_id</th>
                   <th scope="col">N_name</th>
                
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery2&&hospitalQuery2.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.n_id}</td>
                       <td>{data.n_name}</td>
                      
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query gives medical store id ,medical store name and doctor name assigned to particular patient id.</span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth2(!auth2)}>Click</button>
            </div>
            {auth2&&(
     <div className="mt-3 formContainer">
     <form onSubmit={myFunc2} autoComplete="off">
       <div className="col-12 col-lg-4 col-md-4 offset-md-4">
       <div className="input-group mb-3">
     
       <input type="text" className="form-control"  placeholder="P_id"  aria-describedby="basic-addon1" onChange={(e)=>setQ3Pid(e.target.value)} value={q3Pid} required/>
     </div>
    
    
       </div>
         <div className="text-center">
           <button className="btn dataSelectBtn">Submit</button>
         </div>
     </form>
       </div>
            )}
       
            {hospitalQuery3&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">Ms_id</th>
                   <th scope="col">Ms_name</th>
                   <th scope="col">Doc_name</th>
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery3&&hospitalQuery3.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.ms_id}</td>
                       <td>{data.ms_name}</td>
                       <td>{data.doc_name}</td>
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>

          <div className="col-12 col-lg-6">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query  gives the total number of patients present in each type of ward. </span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc3}>Click</button>
            </div>
       
            {hospitalQuery4&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">Ward_type</th>
                   <th scope="col">No_of_patients</th>
                
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery4&&hospitalQuery4.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.ward_type}</td>
                       <td>{data.no_of_patients}</td>
                      
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query gives the patient id,patient name whose having the minimum total cost amongst all the patients . </span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc4}>Click</button>
            </div>
       
            {hospitalQuery5&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">P_id</th>
                   <th scope="col">P_name</th>
                
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery5&&hospitalQuery5.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.p_id}</td>
                       <td>{data.p_name}</td>
                      
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light"><span className="colSpanBold">This query gives the doctor id and name whose age is greater than 40 and having rating of 5. </span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc5}>Click</button>
            </div>
       
            {hospitalQuery6&&(
                 <div className="table-responsive mt-4">
                 <table className="table table-bordered">
                 <thead className="table-primary">
                   <tr>
                   <th scope="col">Doc_id</th>
                   <th scope="col">Doc_name</th>
                
                   </tr>
                 </thead>
                 <tbody className="table-primary">
                   {hospitalQuery6&&hospitalQuery6.map((data,i)=>{
                     return(
                       <tr key={i}>
                       <td>{data.doc_id}</td>
                       <td>{data.doc_name}</td>
                      
                       </tr>
                     )
                   })}
                 </tbody>
                 </table>
                 </div>
            )}
         
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer/>
      <Footer/>
    </div>
  )
}

export default HospitalQuery
