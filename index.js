const express = require("express");
const hbs = require("hbs");
const Routes = require("./Routes/Routes");
const DatabaseConnection = require("./DatabaseConnection/DB-Connection");

const app = express();
app.set("view engine", "hbs");
app.use(express.static("./public"));
hbs.registerPartials("./views/partials");

require("./Helpers/Helpers"); 

app.use(express.urlencoded({ extended: true }));
app.use(Routes);

DatabaseConnection().then(() => {
  const PORT = 4000;
  app.listen(
    PORT,
    console.log(`Server is running at http://localhost:${PORT}`)
  );
});
