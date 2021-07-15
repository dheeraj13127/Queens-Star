import React, { useState } from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { deleteHospitalAdmissionData, fetchHospitalAdmissionData, insertHospitalAdmissionData } from '../../redux/actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer';
function HospitalAdmission() {
  const [auth,setAuth]=useState(false)
  const [input,setInput]=useState({ha_id:"",p_id:"",doc_id:"",ms_id:"",ward_type:""})
  const [auth1,setAuth1]=useState(false)
  const [delHaId,setDelHaId]=useState("")
  const dispatch=useDispatch()
  const hospitalAdmissionData=useSelector(state=>state.hospitalAdmissionData)
  const myFunc1=()=>{
dispatch(fetchHospitalAdmissionData())
  }
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    dispatch(insertHospitalAdmissionData(input))
    setInput(inputs => ({...inputs,ha_id:"",p_id:"",doc_id:"",ms_id:"",ward_type:""}));
  }
  const myFunc2=(e)=>{
    e.preventDefault()
    dispatch(deleteHospitalAdmissionData({ha_id:delHaId}))
    setDelHaId("")
  }
  console.log(hospitalAdmissionData,"hi")
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light">Click to select all data from the table <span className="colSpanBold">Hospital Admission</span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc1}>Click</button>
            </div>
            {hospitalAdmissionData&&(
              <div className="table-responsive mt-4">
            <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
              <th scope="col">Ha_id</th>
              <th scope="col">P_id</th>
              <th scope="col">Doc_id</th>
              <th scope="col">Ms_id</th>
              <th scope="col">Ward_type</th>
              </tr>
            </thead>
            <tbody className="table-primary">
            {hospitalAdmissionData&&hospitalAdmissionData.map((data,i)=>{
              return(
                <tr key={i}>
                  <td>{data.ha_id}</td>
                  <td>{data.p_id}</td>
                  <td>{data.doc_id}</td>
                  <td>{data.ms_id}</td>
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
      </div>
      <div className="row mt-4">
        <div className="col-12-col-lg-12">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Click to insert data into table<span className="colSpanBold"> Hospital Admission</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth(!auth)}>Click</button>
       </div>
       {auth&&(
 <div className="mt-3 formContainer">
 <form onSubmit={formSubmit} autoComplete="off">
   <div className="col-12 col-lg-4 col-md-4 offset-md-4">
   <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="ha_id" placeholder="Ha_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.ha_id} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="p_id" placeholder="P_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.p_id} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="doc_id" placeholder="Doc_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_id} required/>
 </div>
 <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="ms_id" placeholder="Ms_id" aria-describedby="basic-addon1" onChange={handleInputChange} value={input.ms_id} required/>
 </div>
 <div className="input-group mb-3">
 
 <input type="text" className="form-control" name="ward_type" placeholder="Ward_type" aria-describedby="basic-addon1" onChange={handleInputChange} value={input.ward_type} required/>
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
        <h5 className="text-center text-light">Click to delete data from table<span className="colSpanBold"> Hospital Admission</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth1(!auth1)}>Click</button>
       </div>
         {auth1&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc2} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter ha_id to be deleted"  aria-describedby="basic-addon1" onChange={(e)=>setDelHaId(e.target.value)} value={delHaId} required/>
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

export default HospitalAdmission
