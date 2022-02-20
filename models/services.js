import  mongoose  from "mongoose"

const ReviewSchema = new mongoose.Schema({
    content:{
        type: String,
        required:true,
        maxLength: [100, 'maximum 100 characters!']
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

const PlanSchema = new mongoose.Schema({
    planName: {
        type: String,
        required: true
    },
    planDetails: {
        type: [String],
        maxLength: 3,
        required: true
    },
    planPrice: {
        type: Number,
        required: true,
        min: [1, "minimum price is ₹1"],
    }
})

const ServiceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    plans: {
        type: [PlanSchema],
        required: true
    },
    reviews:{
        type: [ReviewSchema]
    },
    rating:{
        type : Number,
        default: 0
    },
    sampleImage:{
        type: [String]
    },
})

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema)