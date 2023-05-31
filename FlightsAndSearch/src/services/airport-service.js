const AirportRepository = require('../repository/airport-repository');

class AirportService {

    static async createAirport(data) {
        try {
            const airport = await AirportRepository.createAirport(data);
            return airport;
        } catch (err) {
            console.log("Something went wrong in service layer");
            throw { err };
        }
    }

    static async deleteAirport(airportId) {
        try {
            const deleted = await AirportRepository.deleteAirport(airportId);
            return deleted;
        } catch (err) {
            console.log("Something went wrong in service layer");
            throw { err };
        }
    }

    static async updateAirport(airportId, details) {
        try {
            // console.log(details , "inside service")
            const airport = await AirportRepository.updateAirport(airportId, {
                name: details.name,
                cityId: details.cityId
            });
            return airport;
        } catch (err) {
            console.log("Something went wrong in service layer");
            throw { err };
        }
    }

    static async getAirport(airportId) {
        try {
            const airport = await AirportRepository.getAirport(airportId);
            return airport;
        } catch (err) {
            console.log("Something went wrong in service layer");
            throw { err };
        }
    }

    static async getAllAirports(filter) {
        try {
            const airport = await AirportRepository.getAllAirports(filter);
            return airport;
        } catch (err) {
            console.log("Something went wrong in service layer");
            throw { err };
        }
    }

}


module.exports = AirportService;
