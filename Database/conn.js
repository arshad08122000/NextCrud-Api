const mongoose=require("mongoose");
const connection=async()=>{
 try{
  const conn = await mongoose.connect(process.env.MongoURI,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
  });
  console.log(`MongoDb Connected : ,${conn.connection.host}`);
 }
 catch(error)
 { 
  console.log("DB connection Error : ",error);
  process.exit();
 }
};

module.exports=connection;