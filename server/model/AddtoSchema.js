const mongoose=require('mongoose')
const AddtoCartSchema=mongoose.Schema({
    
    productName:{
        type:String,
        required:true
    },
    productUrl:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    

})
const AddtoCartModel=mongoose.model('AddtoCart',AddtoCartSchema)
module.exports=AddtoCartModel;