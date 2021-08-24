 import jwt from 'jsonwebtoken';

 const auth = async (req,res,next)=>{
     try{
         const token = req.headers.Authorization.split(" ")[1];

         let decodedData;
         if(token){
             decodedData = jwt.verify(token,'test');
             req.userId = decodedData ?. id;
         }
         next();
     }catch(error){
         console.log(error); 
     }
 }

 export default auth;