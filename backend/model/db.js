const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/registeruser")


.then(()=>{
    console.log("database connected");
})

.catch((err)=>
{
    console.log("error in connecting database"+err);

})