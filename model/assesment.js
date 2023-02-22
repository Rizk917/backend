const mongoose = require("mongoose");
const assesmentSchema=mongoose.Schema({



    title:{
        type:String,
    },
  
    description:{
        type:String,
        require:true
    },
   
    
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("assesment", assesmentSchema);