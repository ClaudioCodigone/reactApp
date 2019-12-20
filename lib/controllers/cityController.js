var city = require("../models/City");
const cors = require("cors");

module.exports = app => {
    app.get("/cities", cors(), async (req, res) => {

        city.find({}, (err, respuesta) => {
          if (err) return err;
          res.send(respuesta);
        });
      
      });

    // app.post('/cities', (req, res) => {
    //     const newCity = new city({
    //       name: req.body.name,
    //       country: req.body.country
    //     });
      
    //     city.find(
    //       {
    //         name: req.body.name,
    //         country: req.body.country
    //       },
    //       (err, respuesta) => {
    //         if (respuesta.length !== 0) {
      
    //           res.send("Ciudad Repetida")
      
    //         } else {
      
    //           newCity.save()
      
    //             .then(city => {
    //               res.send(city)
    //             })
      
    //             .catch(err => {
    //               res.status(500).send("Server error")
    //             })
    //         }
    //       }
    //     );
    //   });
}