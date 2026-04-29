const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const doctors = [
  {
    id: 1,
    name: "Dr Anjali Verma",
    speciality: "Pediatrician",
    location: "Delhi",
    fee: 1000,
    rating: 4.7,
    reviews: "150+ reviews",
    image: "/dr-anjali.png",
  },
  {
    id: 2,
    name: "Dr Raghav Shukla",
    speciality: "Cardiologist",
    location: "Delhi",
    fee: 1000,
    rating: 4.7,
    reviews: "150+ reviews",
    image: "/dr-raghav.png",
  },
  {
    id: 3,
    name: "Dr Shikha Chawla",
    speciality: "Gynecologist",
    location: "Delhi",
    fee: 1000,
    rating: 4.7,
    reviews: "150+ reviews",
    image: "/dr-shikha.png",
  },
];

app.get("/", (req, res) => {
  res.send("HealthConnect Backend Running Successfully");
});

app.get("/api/doctors", (req, res) => {
  const { name, location } = req.query;
  let result = [];

  if (name) {
    result = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(name.toLowerCase())
    );
  } else if (location) {
    result = doctors.filter((doc) =>
      doc.location.toLowerCase().includes(location.toLowerCase())
    );
  } else {
    result = doctors;
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
