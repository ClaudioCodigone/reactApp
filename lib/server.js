const express = require('express');
let mongoose = require('mongoose');
var app = express();
const cors = require('cors');
const router = require('./router/router');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

mongoose.connect("mongodb+srv://dbAdminUser:Loquillo9@cluster0-tvama.mongodb.net/cities?retryWrites=true&w=majority",

  { useNewUrlParser: true, useUnifiedTopology: true }


)
  .then(res => {
    console.log("Connect to mongoDB");
  })
  .catch(err => {
    console.log("catch " + err);
  })

app.get("/googleLogin", cors(), async (req, res) => {
  res.send('Logueando con google...')
});

app.listen(port, () => console.log(`Listening on port ${port}`));

///////////////INSERT MANY/////////////////


// app.use("/activities/add", cors(), async (req, res) => {
//   activity.find({}, (err, respuesta) => {
//     if (err) return err;
//     res.send(respuesta);
//   });

//   activity.insertMany(
//     [
//       {
//         title: "Antic Teatre",
//         location: "Carrer de Verdaguer i Callís, 12, 08003 Barcelona",
//         duration: 2,
//         price: "€ 10.50",
//         description: "Cute theatre hidden in a bar, didn't understand a thing but it was a lot of fun.",
//         itineraryID: "5de05c98ec87ec27bc100fe6"
//       },

//       {
//         title: "Antic Teatre",
//         location: "Carrer de Verdaguer i Callís, 12, 08003 Barcelona",
//         duration: 2,
//         price: "€ 15,00",
//         description: "The beer garden after the show is really nice and filled with people, hard to find a table but I had a lot of fun.",
//         itineraryID: "5de05c98ec87ec27bc100fe6"
//       },
//     ],
//   )
// }

// );