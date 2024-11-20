const express = require("express");
const { SmartHomeFacade } = require("./lib/smartHome");

const app = express();
const port = 3001;

const smartHome = new SmartHomeFacade();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Smart Home API is running!" });
});

app.post("/activate_security", (req, res) => {
  smartHome.activateSecuritySystem();
  res.send({ status: "Security system activated" });
});

app.post("/set_climate/:temperature", (req, res) => {
  const temperature = req.params.temperature;
  smartHome.setClimateControl(temperature);
  res.send({ status: `Climate set to ${temperature}°C` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
