import mongoose  from "mongoose";

async function Connection(){

  try {
   await mongoose.connect("mongodb://127.0.0.1:27017/Record",{ useUnifiedTopology: true });
   console.log('Connected to MongoDB successfully.');
  }
  catch(err) {
    console.log('Failed to connect  MongoDB ');
   }
}
 


export default Connection;


