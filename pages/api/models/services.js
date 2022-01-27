import  mongoose  from "mongoose"

const reviewSchema = mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    writtenBy:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
}) 

const serviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true
    },
    price:{
        type: [Number],
        required: true
    },
    reviews:{
        type: [reviewSchema]
    },
    rating:{
        type : Number,
        default: 0
    },
    sampleImage:{
        type: String
    },
    sales:{
        type: Number,
        default: 0
    },
    sellerId:{
        type: mongoose.Types.ObjectId,
        required : true
    }

})

var Services = mongoose.model('Services',serviceSchema);

export default Services