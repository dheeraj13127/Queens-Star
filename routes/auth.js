const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const db=mysql.createPool({
  host:"localhost",
  user:"root", 
  password:"password",
  database:"hospital"
 })


router.get('/doctor/data',(req,res)=>{
  db.query("SELECT * FROM doctor",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.get('/patient/data',(req,res)=>{
  db.query("SELECT * FROM patient",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})

router.get('/nurse/data',(req,res)=>{
  db.query("SELECT * FROM nurse",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})

router.get('/medicalStore/data',(req,res)=>{
  db.query("SELECT * FROM medicalstore",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})


router.get('/patientDischarge/data',(req,res)=>{
  db.query("SELECT * FROM patientdischarge",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})


router.get('/hospitalAdmission/data',(req,res)=>{
  db.query("SELECT * FROM hospitaladmission",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})



router.post('/doctor/insert',(req,res)=>{

  const {doc_id,doc_name,doc_age,doc_type,rating}=req.body
  
  db.query("INSERT INTO doctor (doc_id,doc_name,doc_age,doc_type,rating) values (?,?,?,?,?)",[doc_id,doc_name,doc_age,doc_type,rating],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})
router.post('/patient/insert',(req,res)=>{
  const {p_id,p_name,p_age,p_phone}=req.body
  
  db.query("INSERT INTO patient (p_id,p_name,p_age,p_phone) values (?,?,?,?)",[p_id,p_name,p_age,p_phone],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})

router.post('/nurse/insert',(req,res)=>{
  const {n_id,n_name,n_age,doc_id}=req.body
  
  db.query("INSERT INTO nurse (n_id,n_name,n_age,doc_id) values (?,?,?,?)",[n_id,n_name,n_age,doc_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})

router.post('/medicalStore/insert',(req,res)=>{
  const {ms_id,ms_name,doc_id}=req.body
  
  db.query("INSERT INTO medicalstore (ms_id,ms_name,doc_id) values (?,?,?)",[ms_id,ms_name,doc_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})
router.post('/hospitalAdmission/insert',(req,res)=>{
  const {ha_id,p_id,doc_id,ms_id,ward_type}=req.body
  
  db.query("INSERT INTO hospitaladmission (ha_id,p_id,doc_id,ms_id,ward_type) values (?,?,?,?,?)",[ha_id,p_id,doc_id,ms_id,ward_type],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})

router.post('/patientDischarge/insert',(req,res)=>{
  const {p_id,p_name,total_cost}=req.body
  
  db.query("INSERT INTO patientdischarge (p_id,p_name,total_cost) values (?,?,?)",[p_id,p_name,total_cost],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a row"})
    }
  })
})
router.post('/doctor/delete',(req,res)=>{
  const {doc_id}=req.body
 
  db.query("DELETE FROM doctor WHERE doc_id=?",[doc_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/patient/delete',(req,res)=>{
  const {p_id}=req.body

  db.query("DELETE FROM patient WHERE p_id=?",[p_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/nurse/delete',(req,res)=>{
  const {n_id}=req.body

  db.query("DELETE FROM nurse WHERE n_id=?",[n_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/medicalStore/delete',(req,res)=>{
  const {ms_id}=req.body

  db.query("DELETE FROM medicalstore WHERE ms_id=?",[ms_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/hospitalAdmission/delete',(req,res)=>{
  const {ha_id}=req.body

  db.query("DELETE FROM hospitaladmission WHERE ha_id=?",[ha_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/patientDischarge/delete',(req,res)=>{
  const {p_id}=req.body

  db.query("DELETE FROM patientdischarge WHERE p_id=?",[p_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted"})
    }
  })
})
router.post('/hospitalQuery/q1',(req,res)=>{
  const {p_id}=req.body

  db.query("SELECT P.p_name,P.p_age,H.ward_type from doctor D,patient P,hospitaladmission H where H.p_id=P.p_id and H.doc_id=D.doc_id and H.p_id=?",[p_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.post('/hospitalQuery/q2',(req,res)=>{
  const {doc_name}=req.body

  db.query("SELECT N.n_id,N.n_name from nurse N,doctor D where N.doc_id=D.doc_id and D.doc_name=?",[doc_name],(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.post('/hospitalQuery/q3',(req,res)=>{
  const {p_id}=req.body

  db.query("SELECT M.ms_id,M.ms_name,D.doc_name from doctor D,patient P,hospitaladmission H,medicalstore M where H.p_id=P.p_id and M.ms_id=H.ms_id and D.doc_id=H.doc_id and P.p_id=?",[p_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.get('/hospitalQuery/q4',(req,res)=>{
 

  db.query("SELECT h.ward_type,count(*) as no_of_patients from hospitaladmission h group by h.ward_type",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.get('/hospitalQuery/q5',(req,res)=>{


  db.query("SELECT p.p_id,p.p_name from patientdischarge p where p.total_cost in (select min(total_cost) from patientdischarge)",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})
router.get('/hospitalQuery/q6',(req,res)=>{
  

  db.query("SELECT d.doc_id,d.doc_name from doctor d where d.doc_age>40 and d.rating=5;",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })
})

router.post('/nurse/update',(req,res)=>{
  const {doc_id,n_id}=req.body

  db.query("UPDATE nurse SET doc_id=? WHERE n_id=?",[doc_id,n_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully Updated"})
    }
  })
})
router.post('/hospitalAdmission/update_doc_id/',(req,res)=>{
  const {doc_id,ha_id}=req.body

  db.query("UPDATE hospitaladmission SET doc_id=? WHERE ha_id=?",[doc_id,ha_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully Updated"})
    }
  })
})
router.post('/hospitalAdmission/update_ward_type/',(req,res)=>{
  const {ward_type,ha_id}=req.body

  db.query("UPDATE hospitaladmission SET ward_type=? WHERE ha_id=?",[ward_type,ha_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully Updated"})
    }
  })
})
router.post('/hospitalAdmission/update_ms_id/',(req,res)=>{
  const {ms_id,ha_id}=req.body

  db.query("UPDATE hospitaladmission SET ms_id=? WHERE ha_id=?",[ms_id,ha_id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully Updated"})
    }
  })
})
module.exports=router
