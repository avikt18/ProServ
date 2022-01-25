import mongoose from 'mongoose';

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

const buyerSchema = mongoose.Schema({
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
    purchases:{
        type: [purchaseSchema]
    }

})

var Buyers = mongoose.model('Buyers', buyerSchema);

export default Buyers;