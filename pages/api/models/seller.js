import mongoose from 'mongoose';


const addressSchema = mongoose.Schema({
    houseNumber: String,
    street: String,
    city: String,
    state: String,
  });

const sellerDetailsSchema = mongoose.Schema({
    address:{
        type: addressSchema,
        required: true
    },
    contact:{
        type: Number,
        required: true
    }

})


export default sellerDetailsSchema;