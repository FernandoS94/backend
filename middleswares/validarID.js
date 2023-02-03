const  {User} = require('../models/User');

const validarID = async(req,res,next)=>{

    const user = await User.findById(req.params.id)
    if(user){
        next();
    }else{
        res.status(500).json({statusCode : 500, error : 'ID no encontrado'})
    }
};

module.exports={validarID};