const express=require('express');
const router=express.Router();
const nodemailer=require('nodemailer');
const { myEmail, pass }=require('./env-config');

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:myEmail,
        pass:pass
    },
})

transporter.verify(err=>{

    if(err){
        console.log(err);
    }else{
        console.log("Ready to send email");
    }
});

router.post("/sendMail", (req, res)=>{

    let {sender, email, message}=req.body;

    let mailOptions={
        from:sender,
        to:myEmail,
        subject:`New Message From Portfolio Contact Form`,
        text:`Name:${sender} \n Email: ${email} \n Message: ${message}`
    }

    transporter.sendMail(mailOptions, err=>{

        if(err){
            console.log(err);
            res.sendStatus(503);
        }else{
            res.sendStatus(200);
        }
    })
});
module.exports=router;