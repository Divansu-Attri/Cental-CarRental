const express = require("express")
const Controllers = require("../Controller/Controller")
const AdminControllers = require("../Controller/AdminController")

const router = express.Router()

router.route("/").get(Controllers.Home)

router.route("/about").get(Controllers.About)  
 
router.route("/car").get(Controllers.Car)                                
 
router.route("/contact").get(Controllers.Contact) 

router.route("/feature").get(Controllers.Feature) 

router.route("/service").get(Controllers.Service) 

router.route("/testimonial").get(Controllers.Testimonial) 

//Admin Routes: 
 
router.route("/admin").get(AdminControllers.AdminHome)

router.route("/admin/users").get(AdminControllers.Users)

router.route("/admin/users/create").get(AdminControllers.Create)

router.route("/admin/users/store").post(AdminControllers.Store)

router.route("/admin/users/delete/:_id").get(AdminControllers.Delete)

router.route("/admin/users/edit/:_id").get(AdminControllers.Edit)

router.route("/admin/users/update/:_id").post(AdminControllers.Update)


router.route("*").get(Controllers.Error) 

module.exports = router