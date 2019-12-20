const itinerary = require("../models/Itinerary");
const activity = require("../models/Activity");
const cors = require("cors");

module.exports = app => {
    app.get("/activities/:_id", cors(), async (req, res) => {
        activity.find({ _id: req.params._id }, (err, respuesta) => {
          itinerary.populate(respuesta, { path: "itineraryID" }, function (err, resp) {
            if (err) return err;
            res.send(resp);
          });
        });
      });
      
}