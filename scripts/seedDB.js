const models = require("../models");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/catapolis");

const cats = [
  {
    name: "Chester",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/Chester_Cheetah.png",
    description: "Likes the cheetossss",
    adopted: false,
    age: 73,
    breed: "Cheetah",
    gender: "Male",
  },
  {
    name: "Tony",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/c/c8/Tony_the_Tiger_%28Kellogg%27s_Frosted_Flakes%27_mascot%29.jpg",
    description: "They're greeaeattt!",
    adopted: false,
    age: 69,
    breed: "Tiger",
    gender: "Male",
  },
  {
    name: "Nala",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/d/de/The_Lion_King%27s_Nala.jpg",
    description: "Friend of Simba",
    adopted: false,
    age: 32,
    breed: "Lion",
    gender: "Female",
  },
];

const promises = cats.map((cat) => models.Cat.create(cat));

Promise.all(promises)
  .then((results) => {
    console.log(results);
    process.exit(0);
  })
  .catch(console.error);
