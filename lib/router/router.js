const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController')
const activityController = require('../controllers/activityController')

module.exports = (app) => {
    cityController(app);
    itineraryController(app);
    usersController(app);
    authController(app);
    activityController(app);
}