const  {User} = require('../models/User');

const validarUsername = async(req,res,next)=>{

    const user = await User.findOne({username : req.body.username})
    if(user){
        res.status(500).json({statusCode : 500, error : 'Usuario ya existente...'})
    }else{
        
        next();
    }
};

module.exports={validarUsername};