import React, { useState } from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { deletePatientDischargeData, fetchPatientDischargeData, insertPatientDischargeData } from '../../redux/actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer'
function PatientDischarge() {
  const [auth,setAuth]=useState(false)
  const [input,setInput]=useState({p_id:"",p_name:"",total_cost:""})
  const [auth1,setAuth1]=useState(false)
  const [delPId,setDelPId]=useState("")
  const dispatch=useDispatch()
  const patientDischargeData=useSelector(state=>state.patientDischargeData)
  const myFunc1=()=>{
dispatch(fetchPatientDischargeData())
  }
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    dispatch(insertPatientDischargeData(input))
    setInput(inputs => ({...inputs,p_id:"",p_name:"",total_cost:""}));
  }
  const myFunc2=(e)=>{
    e.preventDefault()
    dispatch(deletePatientDischargeData({p_id:delPId}))
    setDelPId("")
  }
  console.log(patientDischargeData,"hi")
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light">Click to select all data from the table <span className="colSpanBold">Patient Discharge</span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc1}>Click</button>
            </div>
            {patientDischargeData&&(
              <div className="table-responsive mt-4">
            <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
              <th scope="col">P_id</th>
              <th scope="col">P_name</th>
              <th scope="col">Total_cost</th>
            
              
              </tr>
            </thead>
            <tbody className="table-primary">
            {patientDischargeData&&patientDischargeData.map((data,i)=>{
              return(
                <tr key={i}>
                  <td>{data.p_id}</td>
                  <td>{data.p_name}</td>
                  <td>{data.total_cost}</td>
              
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
      <div className="row mt-4">
        <div className="col-12-col-lg-12">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Click to insert data into table<span className="colSpanBold"> Patient Discharge</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth(!auth)}>Click</button>
       </div>
       {auth&&(
 <div className="mt-3 formContainer">
 <form onSubmit={formSubmit} autoComplete="off">
   <div className="col-12 col-lg-4 col-md-4 offset-md-4">
   <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="p_id" placeholder="P_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.p_id} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="p_name" placeholder="P_name"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.p_name} required/>
 </div>

 <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="total_cost" placeholder="Total_cost" aria-describedby="basic-addon1" onChange={handleInputChange} value={input.total_cost} required/>
 </div>

   </div>
     <div className="text-center">
       <button className="btn dataSelectBtn">Submit</button>
     </div>
 </form>
   </div>
       )}
         
        </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12-col-lg-12">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Click to delete data from table<span className="colSpanBold"> Patient Discharge</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth1(!auth1)}>Click</button>
       </div>
         {auth1&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc2} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter p_id to be deleted"  aria-describedby="basic-addon1" onChange={(e)=>setDelPId(e.target.value)} value={delPId} required/>
            </div>
              </div>
                <div className="text-center">
                  <button className="btn dataSelectBtn">Submit</button>
                </div>
            </form>
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

export default PatientDischarge
