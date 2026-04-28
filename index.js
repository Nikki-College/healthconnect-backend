const express = require("express");
const cors = require("cors");

const app = express();

const port = 3000;
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

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

app.get("/api/doctors", (req, res) => {
  const { name, location } = req.query;
  let result = [];
  if (name) {
    result = doctors.filter((doc) => doc.name.toLowerCase().includes(name));
  } else if (location) {
    result = doctors.filter((doc) =>
      doc.location.toLowerCase().includes(location)
    );
  } else {
    result = doctors;
  }
  res.json(result);
});
// app.use("/images", express.static(path.join(__dirname, "public/images")));
