import React, { useState } from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { deleteHospitalAdmissionData, fetchHospitalAdmissionData, insertHospitalAdmissionData,updateHospitalAdmissionDocData,updateHospitalAdmissionMsData,updateHospitalAdmissionWardData } from '../../redux/actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer';
function HospitalAdmission() {
  const [auth,setAuth]=useState(false)
  const [input,setInput]=useState({ha_id:"",p_id:"",doc_id:"",ms_id:"",ward_type:""})
  const [auth1,setAuth1]=useState(false)
  const [auth2,setAuth2]=useState(false)
  const [auth3,setAuth3]=useState(false)
  const [auth4,setAuth4]=useState(false)
  const [upDocId,setUpDocId]=useState("")
  const [upMsId,setUpMsId]=useState("")
  const [upWardType,setUpWardType]=useState("")
  const [upHaId1,setUpHaId1]=useState("")
  const [upHaId2,setUpHaId2]=useState("")
  const [upHaId3,setUpHaId3]=useState("")
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
  const myFunc3=(e)=>{
    e.preventDefault()
    dispatch(updateHospitalAdmissionDocData({
      doc_id:upDocId,
      ha_id:upHaId1}))
    setDelHaId("")
  }
  const myFunc4=(e)=>{
    e.preventDefault()
    dispatch(updateHospitalAdmissionMsData({
      ms_id:upMsId,
      ha_id:upHaId2}))
    setDelHaId("")
  }
  const myFunc5=(e)=>{
    e.preventDefault()
    dispatch(updateHospitalAdmissionWardData({
      ward_type:upWardType,
      ha_id:upHaId3}))
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
        <div className="col-12 col-lg-4 col-md-4">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Update doc_id to given h_id for table<span className="colSpanBold"> Hospital Admission</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth2(!auth2)}>Click</button>
       </div>
         {auth2&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc3} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              <input type="text" className="form-control"  placeholder="Enter doc_id to be updated"  aria-describedby="basic-addon1" onChange={(e)=>setUpDocId(e.target.value)} value={upDocId} required/>
            </div>
              <div className="input-group mb-3">
              <input type="text" className="form-control"  placeholder="Enter ha_id"  aria-describedby="basic-addon1" onChange={(e)=>setUpHaId1(e.target.value)} value={upHaId1} required/>
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
        <div className="col-12 col-lg-4 col-md-4">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Update ms_id to given h_id for table<span className="colSpanBold"> Hospital Admission</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth3(!auth3)}>Click</button>
       </div>
         {auth3&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc4} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter ms_id to be updated"  aria-describedby="basic-addon1" onChange={(e)=>setUpMsId(e.target.value)} value={upMsId} required/>
            </div>
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter ha_id "  aria-describedby="basic-addon1" onChange={(e)=>setUpHaId2(e.target.value)} value={upHaId2} required/>
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
        <div className="col-12 col-lg-4 col-md-4">
        <div className="doctorCol bg-dark mt-4">
        <h5 className="text-center text-light">Update ward_type to given h_id for table<span className="colSpanBold"> Hospital Admission</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth4(!auth4)}>Click</button>
       </div>
         {auth4&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc5} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter ward_type to be updated"  aria-describedby="basic-addon1" onChange={(e)=>setUpWardType(e.target.value)} value={upWardType} required/>
            </div>
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter ha_id"  aria-describedby="basic-addon1" onChange={(e)=>setUpHaId3(e.target.value)} value={upHaId3} required/>
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
