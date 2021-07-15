const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const db=mysql.createPool({
  host:"localhost",
  user:"root", 
  password:"password",
  database:"hospital"
 })

router.post('/create',(req,res)=>{
  const name=req.body.name
 const age=req.body.age
 const id=req.body.id
 db.query("INSERT INTO patient (id,name,age) values (?,?,?)",[id,name,age],(err,result)=>{
   if(err){
     console.log(err)
   } 
   else{
     console.log("values inserted")
   }
 })
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
module.exports=router