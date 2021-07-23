import React,{useState} from 'react'
import NavbarLanding from '../NavbarLanding'
import signUpImg from '../images/signUp.jpg'
import Footer from '../Footer'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signUpAdmin } from '../../redux/actions';
function SignUp() {
  const dispatch=useDispatch()
  const history=useHistory()
  const [input,setInput]=useState({adminId:"",adminName:"",adminAge:"",adminEmail:"",password:"",password1:""})
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const onFormSubmit=(e)=>{
    e.preventDefault()
    if(input.password!==input.password1){
      NotificationManager.error('Passwords donot match', '', 2000)
    } 
    else{
      
      dispatch(signUpAdmin(input,history))
      setInput(inputs => ({...inputs,adminId:"",adminName:"",adminAge:"",adminEmail:"",password:"",password1:""}));
    
     
    }
    
  }
  return (
    <div>
      <NavbarLanding/>
      <div className="container-fluid signUpContainer">
        <div className="row bg-dark p-4">
         
          <div className="col-12 col-lg-5 col-md-5">
          <img src={signUpImg} alt="signUp" className="img-fluid signUpImg mt-5" />
          </div>
          <div className="col-12 col-lg-7 col-md-7 mt-2">
          <h4 className="text-center text-light"><span className="signSpan">Admin</span> SignUp</h4>
          <div className="mt-2 formBox">
          <form autoComplete="off" onSubmit={onFormSubmit}>
              <div className="col-12 col-lg-6 col-md-6 offset-md-3">
              <div className="input-group mb-3 mt-3">
              
              <input type="text" className="form-control" name="adminId" placeholder="Admin ID"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.adminId} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="text" className="form-control" name="adminName" placeholder="Admin Name"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.adminName} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="text" className="form-control" name="adminAge" placeholder="Admin Age"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.adminAge} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="email" className="form-control" name="adminEmail" placeholder="Admin Email"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.adminEmail} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="password" className="form-control" name="password" placeholder="Password"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.password} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="password" className="form-control" name="password1" placeholder="Confirm Password"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.password1} required/>
            </div>
              </div>
                <div className="text-center">
                  <button className="btn dataSelectBtn">Submit</button>
                </div>
            </form>
          </div>
          </div>
          
         
        </div>
      </div>
      <NotificationContainer/>
      <Footer/>
    </div>
  )
}

export default SignUp
