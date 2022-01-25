import mongoose from 'mongoose';
import serviceSchema from './services';


const addressSchema = mongoose.Schema({
    houseNumber: String,
    street: String,
    city: String,
    state: String,
  });

const sellerSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true,
    },
    email:{
        type : String,
        required : true,
        trim: true,
        unique: true
    },
    password:{
        type : String,
        required : true
    },
    profilephoto:{
        type:String
    },
    address:{
        type: addressSchema,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    services:{
        type: [serviceSchema]
    }

})

var Sellers = mongoose.model('Sellers', sellerSchema);

export default Sellers;