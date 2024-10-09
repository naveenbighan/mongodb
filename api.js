const mongodb=require('mongodb');

const dbConnect=require('./mongodb');

const express=require('express');
const bodyParser = require('body-parser');
const app=express();

/*app.get('/',async(req,res)=>{
    let data=await dbConnect();
    data=await data.find({}).toArray();
    res.send(data);
    

    
});*/
     
app.use(express.json());
app.use(bodyParser.json());

/*app.post('/',async(req,res)=>{

    let data=await dbConnect();
    let result=await data.insertOne(req.body);

    res.send(result)
});*/


/*app.put('/update/:id',async(req,res)=>{

    const{id}=req.params;
    const{name}=req.body;
    const objID= new mongodb.ObjectId(id);

    const data=await dbConnect();
    let result= await data.updateOne({_id:objID},{$set:{name:req.body.name}})
       

    
    res.json({message:"update sucessfully"})
})*/



app.delete("/:id", async(req,resp)=>{

    let data=await dbConnect();
let result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)     
})

resp.send(result)


})



app.listen(3000)




