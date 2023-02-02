import connection from '../../../Database/conn'
import {getusers,createuser,updateuser,deleteuser} from '../../../Database/controller'

export default async function(req,res)
{
 connection().catch(error=>{res.status(400).send({msg:error})});

 switch (req.method) {
 case 'POST':
  // res.status(200).json({ name: "Post request" });
  // console.log("Post request");

  //passing it to controller
  createuser(req,res);
  break;
 case 'GET':
  // res.status(200).json({ name: "Get request" });
  // console.log("Get request");
  getusers(req,res);
  break;
 case 'PUT':
  // res.status(200).json({ name: "Put request" });
  // console.log("Put request");
  updateuser(req,res);
  break;
 case 'DELETE':
  // res.status(200).json({ name: "Delete request" });
  // console.log("Delete request");
  deleteuser(req,res);
  break;

  default:
  res.status(200).json({ name: "Post,Put,Get,Delete" });
}

};