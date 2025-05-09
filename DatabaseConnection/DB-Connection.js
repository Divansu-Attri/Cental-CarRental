const mongoose = require("mongoose")
const URI = "mongodb+srv://Attri:Divansu1234@clu-ster.cddjgd6.mongodb.net/Cental?retryWrites=true&w=majority&appName=clu-"

async function DatabaseConnection() {
    try {
        await mongoose.connect(URI)
        console.log("Database Connection Successfull")
    } catch (error) {
        console.log(`Databse Connection Failed: ${error}`)
        process.exit(0)
    }
} 
module.exports = DatabaseConnection