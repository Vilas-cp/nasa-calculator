const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.listen(5000, () => {
    console.log("Server has started on port 5000");
  });
  app.post("/habitable-exoplanet-calculator", async (req, res) => {
    try{
const {R_star,L_star,T_eff,R_planet,M_planet,semi_major_axis, eccentricity,inclination,albedo,distance,D_telescope,wavelength,IWA,OWA,contrast_limit } = req.body
console.log("Received data:", req.body);
res.status(200).json({ message: "Data received successfully", data: req.body });
}
catch(err){
console.log(err);
}})
  
  
  
  
 