import mongoose from 'mongoose';
import sellerDetailsSchema from './seller';

const purchaseSchema = mongoose.Schema({
    service:{
        type: String,
        required: true,
    },
    purchasedAt:{
        type: Date,
        default: Date.now()
    },
    seller:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    isPayed:{
        type: Boolean,
        required: true,
        default: false,
    }
    

})

const userSchema = mongoose.Schema({
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
    purchases:{
        type: [purchaseSchema]
    },
    isSeller:{
        type: Boolean,
        default: false 
    },
    sellerDetails:{
        type: sellerDetailsSchema,
        required: function(){
            return this.isSeller
        }
    }

})

var Users = mongoose.model('Users', userSchema);

export default Users;