function Home(req, res) {
  res.render("index");
}

function About(req,res) {
  res.render("aboutPage",{title:"About Us"}) 
}

function Car(req,res) {
  res.render("carsPage",{title:"Cars"})     
}

function Contact(req,res) {
  res.render("contact",{title:"Contact Us"}) 
}

function Feature(req,res) {
  res.render("featurePage",{title:"Features"}) 
}

function Service(req,res) {
  res.render("servicePage",{title:"Services"}) 
}

function Testimonial(req,res) {
  res.render("testimonialPage",{title:"Testimonials"}) 
}

function Error(req,res) {
  res.render("404",{title:"404! Page Not Found"}) 
}

module.exports = { Home, About, Car, Contact, Feature, Service, Error, Testimonial};
