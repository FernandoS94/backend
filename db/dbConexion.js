const mongoose=require('mongoose');

const connect = async()=>{
    try{
        await mongoose.connect  (
            'mongodb+srv://fernando:fernando1234@db1.9pvcags.mongodb.net/?retryWrites=true&w=majority');
    console.log('conectado a la base de datos');

    }catch(error){
        throw new Error ('No se pudo conectar a la base de datos');
       // console.log(error.message);

    }
};

module.exports ={ connect };