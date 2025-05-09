const User = require("../Model/Users")
const schema = require("../PasswordValidator/ValidatorSchema")

function AdminHome(req, res) {
  res.render("../views/Admin/AdminHome/AdminHome.hbs", { title: "Admin Home Page",});
}

async function Users(req, res) {
  let data = await User.find().sort({_id:-1})
  res.render("../views/Admin/User/Users.hbs", { title: "Admin Users Page", data:data });
}

function Create(req, res) {
  res.render("../views/Admin/User/Create.hbs", { title: "Users Create Page", errorMessage: {} });
}
 
async function Store(req, res) {
   try {
   if(req.body.password === req.body.cpassword){
    var data = new User(req.body) 
   if(schema.validate(req.body.password)){
    await data.save()
    res.redirect("/admin/users")
   }else{
     data =  User(req.body)
    res.render("../views/Admin/User/Create.hbs", { data:data, errorMessage: {
      password: "Invalid Password. It must contains atleast 1 Upper Case Character,1 Lower Case Character, 1 Digit and Length Must be withing 8-100" 
    }})
   }
   }else{
     data =  User(req.body)
    res.render("../views/Admin/User/Create.hbs", { data:data, errorMessage: {
      password:"Password and Confirm Password doesn't Match"
    } })
   }
  } catch (error) {
    console.log(error)
    errorMessage = {}
    error.keyValue && error.keyValue.username? (errorMessage['username'] = "Username is Already Taken"): ""
    error.keyValue && error.keyValue.email? (errorMessage['email'] = "email is Already Taken"):
    error.errors?.name ? (errorMessage['name'] = error.errors?.name.message) : ""
    error.errors?.username ? (errorMessage['username'] = error.errors?.username.message) : ""
    error.errors?.email ? (errorMessage['email'] = error.errors?.email.message) : ""
    error.errors?.phone ? (errorMessage['phone'] = error.errors?.phone.message) : ""
    res.render("../views/Admin/User/Create.hbs", { errorMessage: errorMessage,data:data})
   } 
}

async function Edit(req, res) {
  let data = await User.findOne({_id:req.params._id})
  res.render("../views/Admin/User/Edit.hbs", { title: "Admin Users Page", data:data });
}

async function Update(req, res) {
  try {
   var data = await User.findOne({_id:req.params._id}) 
   data.name = req.body.name
   data.username = req.body.username
   data.email = req.body.email
   data.phone = req.body.phone
   data.role = req.body.role

   await data.save()
   res.redirect("/admin/users")
  
 } catch (error) {
   console.log(error)
   errorMessage = {}
   error.keyValue && error.keyValue.username? (errorMessage['username'] = "Username is Already Taken"): ""
   error.keyValue && error.keyValue.email? (errorMessage['email'] = "email is Already Taken"):
   error.errors?.name ? (errorMessage['name'] = error.errors?.name.message) : ""
   error.errors?.username ? (errorMessage['username'] = error.errors?.username.message) : ""
   error.errors?.email ? (errorMessage['email'] = error.errors?.email.message) : ""
   error.errors?.phone ? (errorMessage['phone'] = error.errors?.phone.message) : ""
   res.render("../views/Admin/User/Edit.hbs", { errorMessage: errorMessage,data:data})
  } 
}

async function Delete(req, res) {
  try {
    let data = await User.findOne({_id:req.params._id})
    await data.deleteOne()
    res.redirect("/admin/users") 
  } catch (error) {
    console.log(error)  
  }
}


module.exports = { AdminHome, Users, Create, Store, Delete, Edit, Update };
