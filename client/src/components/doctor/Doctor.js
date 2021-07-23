import React, { useState } from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { fetchDoctorData,insertDoctorData,deleteDoctorData } from '../../redux/actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer';
function Doctor() {
  const [auth,setAuth]=useState(false)
  const [auth1,setAuth1]=useState(false)
  const [delDocId,setDelDocId]=useState("")
  const [input,setInput]=useState({doc_id:"",doc_name:"",doc_age:"",doc_type:"",rating:""})
  
  const dispatch=useDispatch()
  const doctorData=useSelector(state=>state.doctorData)
  const myFunc1=()=>{
dispatch(fetchDoctorData())
  }
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    dispatch(insertDoctorData(input))
    setInput(inputs => ({...inputs,doc_id:"",doc_age:"",doc_name:"",doc_type:"",rating:""}));
  }
  const myFunc2=(e)=>{
    e.preventDefault()
    dispatch(deleteDoctorData({doc_id:delDocId}))
    setDelDocId("")
  }
  console.log(doctorData,"hi")
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light">Click to retrieve data from the table <span className="colSpanBold">Doctor</span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc1}>Click</button>
            </div>
            {doctorData&&(
              <div className="table-responsive mt-4">
            <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
              <th scope="col">Doc_id</th>
              <th scope="col">Doc_name</th>
              <th scope="col">Doc_age</th>
              <th scope="col">Doc_type</th>
              <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody className="table-primary">
            {doctorData&&doctorData.map((data,i)=>{
              return(
                <tr key={i}>
                  <td>{data.doc_id}</td>
                  <td>{data.doc_name}</td>
                  <td>{data.doc_age}</td>
                  <td>{data.doc_type}</td>
                  <td>{data.rating}</td>
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
        <h5 className="text-center text-light">Click to insert data into table<span className="colSpanBold"> Doctor</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth(!auth)}>Click</button>
       </div>
       {auth&&(
 <div className="mt-3 formContainer">
 <form onSubmit={formSubmit} autoComplete="off">
   <div className="col-12 col-lg-4 col-md-4 offset-md-4">
   <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="doc_id" placeholder="Doc_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_id} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="doc_name" placeholder="Doc_name"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_name} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="doc_age" placeholder="Doc_age"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_age} required/>
 </div>
 <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="doc_type" placeholder="Doc_type" aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_type} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="rating" placeholder="Rating"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.rating} required/>
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
        <h5 className="text-center text-light">Click to delete data from table<span className="colSpanBold"> Doctor</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth1(!auth1)}>Click</button>
       </div>
         {auth1&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc2} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control" name="doc_id" placeholder="Enter doc_id to be deleted"  aria-describedby="basic-addon1" onChange={(e)=>setDelDocId(e.target.value)} value={delDocId} required/>
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

export default Doctor
