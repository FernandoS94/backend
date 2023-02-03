const express = require('express');
const router = express.Router();

const {getUser, postUser, getUserbyID, editUer, deleteUser, getClima} =require('../controllers/userControllers');

const {validarID}=require('../middleswares/validarID');
const { validarUsername } = require('../middleswares/validarUsername');




/* GET users listing. */
router.get('/', getUser);
router.get("/:id([0-9a-fA-F]{24})",validarID, getUserbyID );

router.get("/clima", getClima);

router.post("/new",validarUsername,postUser );

router.put("/edit/:id([0-9a-fA-F]{24})",validarID, editUer);

router.delete("/delete/:id([0-9a-fA-F]{24})", validarID, deleteUser);
module.exports = router;
