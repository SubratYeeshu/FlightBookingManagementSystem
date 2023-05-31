const { Airplane } = require('../models/index')

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("error in airplane repository");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;
