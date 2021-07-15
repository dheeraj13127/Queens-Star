import React from 'react'

function Footer() {
  return (
    <div>
       <footer>
   <div className="container-fluid bg-dark footerContainer text-light mt-5">
     <div className="row">
       <div className="col-12">
         
         <div className="d-flex align-items-center mt-3" style={{justifyContent:"space-around"}}>
           <div className="footerIconsBox">
            <a href="https://github.com/dheeraj13127/"><i className="fab fa-github  footerIcons"></i></a>
           </div>
           <div className="footerIconsBox">
            <a href="https://www.instagram.com/dheeraj_msdian/"><i className="fab fa-instagram footerIcons"></i></a>
           </div>
           <div className="footerIconsBox">
            <a href="https://twitter.com/Dheeraj93231271"><i className="fab fa-twitter footerIcons"></i></a>
           </div>
         </div>
         <div className="text-center mt-4">
          <h6 style={{fontWeight:"bolder"}}>&copy; &nbsp;Copyrights &nbsp;<i className="fas fa-stethoscope navLogo"></i>&nbsp;&nbsp;Queens Star Hospital</h6>
         </div>
       </div>
     </div>
   </div>

   </footer>
    </div>
  )
}

export default Footer
