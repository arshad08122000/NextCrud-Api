

import users from '../model/schema';

export async function getusers(req,res)
{
 try{
  const listusers=await users.find({});
  if(listusers)
  {
   console.log("List of Users : ",listusers);
   res.status(200).json(listusers);
  }
  else
  {
   console.log("Failed to fecth users");
   res.status(400).send({ msg: "Error while fetching Users" });
  }

 }
 catch(error)
 {
  console.log("Error : ",error);
  res.status(404).send({ msg: error });

 }
};

export async function getuser(req,res)
{
  try{
    const {id}=req.query;
    console.log("User Id : ",id)
    const status=await users.findOne(id);
    if(status)
    {
      console.log("User : ",status);
      return res.status(200).send(status);
    }
    else
    {
      console.log("Failed to find user");
      return res.status(400).send({msg:"No User Avaliable"});
    }
  }
  catch(error)
  {
    console.log("Error : ",error);
    res.status(404).send({msg:error});
  }
}

export async function createuser(req,res)
{
 try{
   const presentuser=req.body;
   console.log(presentuser);
   const status=await users.create(presentuser);
   if(status)
   {
    console.log("Added Successfull");
    return res.status(200).send(status);
   }
   else
   {
    console.log("Failed to Add User");
    return res.status(200).send({msg:"failed to Add data"});
   }
   
 }
 catch (error)
 {
  console.log("Connection Error : ",error);
  res.status(404).send({msg:error});
 }
};


export async function updateuser(req,res)
{
  try
  {
    const  { id } = req.query;
    const  presentuser =req.body;

    console.log("Parameter : ",id,"User Details need to updated : ",presentuser);
    const status=await users.findByIdAndUpdate(id,presentuser);
    if(status)
    {
      console.log("Updated Successfull");
      return res.status(200).send({status});
    }
    else
    {
      console.log("Failed to update user");
      return res.status(200).send({msg:"Failed to update"});
    }
  }
  catch(error)
  {
    console.log("Error : ",error);
    res.status(404).send({msg:error});
  }
}


export async function deleteuser(req,res)
{
  try
  {
    const {id}=req.query;
    await users.findByIdAndDelete(id);
    
    console.log("Deleted Sucessfully");
    res.status(200).send({msg:"Deleted Successfully"});
  }
  catch(error)
  {
    console.log(error);
    res.status(404).send({msg:error});
  }
}