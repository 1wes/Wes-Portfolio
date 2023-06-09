const express=require('express');
const app=express();
const cors=require('cors');
const { port }=require('./env-config');
const projects=require('./projects');
const sendMail=require('./mail');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({}));

app.use("/", sendMail);
app.use('/', projects)

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
});