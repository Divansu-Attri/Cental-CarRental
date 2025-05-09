const hbs = require("hbs")

hbs.registerHelper("isLoggIn",function (options) {
    return localStorage.getItem("login") ?? false
})
 
hbs.registerHelper('adminName', function () {
    return localStorage.getItem("name") ?? ""
});

hbs.registerHelper('checkRole', function (selectedRole,role) {
    return selectedRole===role ? "selected" : ""
});