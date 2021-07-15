import React, { useState } from 'react'
import Navbar from '../Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { deleteNurseData, fetchNurseData,insertNurseData } from '../../redux/actions'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer';
function Nurse() {
  const [auth,setAuth]=useState(false)
  const [input,setInput]=useState({n_id:"",n_name:"",n_age:"",doc_id:""})
  const [auth1,setAuth1]=useState(false)
  const [delNurId,setDelNurId]=useState("")
  const dispatch=useDispatch()
  const nurseData=useSelector(state=>state.nurseData)
  const myFunc1=()=>{
dispatch(fetchNurseData())
  }
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    dispatch(insertNurseData(input))
    setInput(inputs => ({...inputs,n_id:"",n_age:"",n_name:"",doc_id:""}));
  }
  const myFunc2=(e)=>{
    e.preventDefault()
    dispatch(deleteNurseData({n_id:delNurId}))
    setDelNurId("")
  }
  console.log(nurseData,"hi")
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="doctorCol bg-dark mt-4">
            <h5 className="text-center text-light">Click to select all data from the table <span className="colSpanBold">Nurse</span></h5>
            <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={myFunc1}>Click</button>
            </div>
            {nurseData&&(
              <div className="table-responsive mt-4">
            <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
              <th scope="col">N_id</th>
              <th scope="col">N_name</th>
              <th scope="col">N_age</th>
              <th scope="col">Doc_id</th>
              
              </tr>
            </thead>
            <tbody className="table-primary">
            {nurseData&&nurseData.map((data,i)=>{
              return(
                <tr key={i}>
                  <td>{data.n_id}</td>
                  <td>{data.n_name}</td>
                  <td>{data.n_age}</td>
                  <td>{data.doc_id}</td>
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
        <h5 className="text-center text-light">Click to insert data into table<span className="colSpanBold"> Nurse</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth(!auth)}>Click</button>
       </div>
       {auth&&(
 <div className="mt-3 formContainer">
 <form onSubmit={formSubmit} autoComplete="off">
   <div className="col-12 col-lg-4 col-md-4 offset-md-4">
   <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="n_id" placeholder="N_id"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.n_id} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="n_name" placeholder="N_name"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.n_name} required/>
 </div>
 <div className="input-group mb-3">

   <input type="text" className="form-control" name="n_age" placeholder="N_age"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.n_age} required/>
 </div>
 <div className="input-group mb-3">
 
   <input type="text" className="form-control" name="doc_id" placeholder="Doc_id" aria-describedby="basic-addon1" onChange={handleInputChange} value={input.doc_id} required/>
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
        <h5 className="text-center text-light">Click to delete data from table<span className="colSpanBold"> Nurse</span></h5>
        <div className="text-center mt-3">
              <button className="btn dataSelectBtn" onClick={()=>setAuth1(!auth1)}>Click</button>
       </div>
         {auth1&&(
            <div className="mt-3 formContainer">
            <form onSubmit={myFunc2} autoComplete="off">
              <div className="col-12 col-lg-4 col-md-4 offset-md-4">
              <div className="input-group mb-3">
              
              <input type="text" className="form-control"  placeholder="Enter n_id to be deleted"  aria-describedby="basic-addon1" onChange={(e)=>setDelNurId(e.target.value)} value={delNurId} required/>
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

export default Nurse
