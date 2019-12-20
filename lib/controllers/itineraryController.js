const city = require("../models/City");
const itinerary = require("../models/Itinerary");
const cors = require("cors");

module.exports = app => {
    app.get("/itinerarios/:id", cors(), async (req, res) => {
        itinerary.find({ cityID: req.params.id }, (err, respuesta) => {
          city.populate(respuesta, { path: "cityID" }, function (err, resp) {
            if (err) return err;
            res.send(resp);
          });
        });
      });
}