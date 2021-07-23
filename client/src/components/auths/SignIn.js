import React,{useState} from 'react'
import NavbarLanding from '../NavbarLanding'
import signInImg from '../images/signIn.jpg'
import Footer from '../Footer'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signInAdmin } from '../../redux/actions';

function SignIn() {
  const dispatch=useDispatch()
  const history=useHistory()
  const [input,setInput]=useState({adminEmail:"",password:""})
  const handleInputChange = (e) => {
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const onFormSubmit=(e)=>{
    e.preventDefault()
  
      setInput(inputs => ({...inputs,adminEmail:"",password:""}));
     
      dispatch(signInAdmin(input,history))
  }
  return (
    <div>
      <NavbarLanding/>
      <div className="container-fluid signUpContainer">
        <div className="row bg-dark p-4">
         
          <div className="col-12 col-lg-5 col-md-5">
          <img src={signInImg} alt="signUp" className="img-fluid signUpImg mt-5" />
          </div>
          <div className="col-12 col-lg-7 col-md-7 mt-2">
          <h4 className="text-center text-light"><span className="signSpan">Admin</span> SignIn</h4>
          <div className="mt-4 formBox">
          <form autoComplete="off" onSubmit={onFormSubmit}>
              <div className="col-12 col-lg-6 col-md-6 offset-md-3">
           
            <div className="input-group mb-3 mt-3">
              
              <input type="email" className="form-control" name="adminEmail" placeholder="Admin Email"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.adminEmail} required/>
            </div>
            <div className="input-group mb-3 mt-3">
              
              <input type="password" className="form-control" name="password" placeholder="Password"  aria-describedby="basic-addon1" onChange={handleInputChange} value={input.password} required/>
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

export default SignIn
