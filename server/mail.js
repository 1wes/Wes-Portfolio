const express=require('express');
const app=express();
const router=express.Router();
const cors=require('cors');
const { port }=require('./env-config');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({}));

router.post("/sendMail", (req, res)=>{

   res.send("Am working well naw");
});

app.use("/", router);

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
});