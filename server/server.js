const express = require("express");
const app = express();


app.use(express.json());
app.listen(5000, () => {
    console.log("Server has started on port 5000");
  });
  app.post("/exoplanet-calculator", async (req, res) => {
    try{
const {R_star,L_star,T_eff,R_planet,M_planet,semi_major_axis, eccentricity,inclination,albedo,distance } = req.body
console.log("Received data:", req.body);
res.status(200).json({ message: "Data received successfully", data: req.body });
}
catch(err){
console.log(err);
}})
  
  
  
  
 