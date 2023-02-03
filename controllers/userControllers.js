
const {User}=require('../models/User');
const {default : axios } = require("axios");

const getClima = async(req,res)=>{
    axios.get("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=5709b5854d1e8c2b500996ede3582e45") 
    .then((repuesta)=>res.status(200).json({clima: respuesta.data, statuscode : 200, error : null}))
    .catch((error)=>console.log(error.message));
};


const getUser= async (req, res)=>{
    try{
    const users = await User.find();
    res.status(200).json({usuarios : users, statuscode : 200, error : null})
    ;}
    catch(error){
        res.status(500).json({
            statuscode:500,
            error: `Error: {error.mesage} `,
        })

    }

    
};

const postUser = async (req,res)=>{
    try{
    const user = new User(req.body)
    await user.save();

    res
        .status(201)
        .json({username: user.username, statuscode :201, error:null});}
    catch(error){
        res.status(500).json({
            statuscode:500,
            error: `Error: {error.mesage} `,
        })

        

    }};

    const getUserbyID = async (req,res)=>{
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
   
    };

    const editUer = async (req,res)=>{
        try{
            await User.findByIdAndUpdate(req.params.id, req.body);
            res
            .status(200)
            .json({msj: `Usuario de id ${req.params.id} actualizado....`, statuscode : 200, error: null});

        }catch(error){
            res.status(500).json({
            statuscode:500,
            error: `Error: {error.mesage} `,
        })
            

        }
    };

    const deleteUser = async (req,res)=>{
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res
            .status(200)
            .json({msj: `Usuario de id ${user.username} eliminado....`, statuscode : 200, error: null});


        }catch(error){
            res
            .status(500)
            .json({
                statuscode:500,
                error: `Error: {error.mesage} `,
            })


        }

    };



//const getUser=(req, res)=>{
//    res.json([
//        {
//            usuarios: [
//                {
//                    id: 1,
//                    nombre: 'fernando',
//                },
//                {
//                    id:2,
//                    nombre:'martin'
//                },
//           ],
//       },
//    ]);
//};

module.exports={getUser, postUser, getUserbyID, editUer,deleteUser, getClima};