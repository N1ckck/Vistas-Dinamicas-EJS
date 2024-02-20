const express=requiere('express')
const router=express.Router()
const menuControllers=require("../controllers")
router.get("/detalle/:id",menuControllers.getMenu)
router.get("/",menuControllers.index)

module.exports=router