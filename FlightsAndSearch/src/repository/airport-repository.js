const { Airport } = require('../models/index')
const { Op } = require('sequelize');


class AirportRepository {

    static async createAirport({ airportDetails }) {
        console.log(airportDetails);
        try {
            const airport = await Airport.bulkCreate(
                airportDetails//[{name : } , {id : }]
            );
            return airport;
        } catch (error) {
            console.log("something went wrong in airport repository layer");
            throw { error };
        }
    }

    static async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in airport repository layer");
            throw { error };
        }
    }

    static async updateAirport(airportId, details) {

        try {
            console.log(airportId, details);
            const airport = await Airport.update(details , {
                where: {
                    id: airportId
                  }
            });
            return airport;

        } catch (err) {
            console.log("something went wrong in airport repository layer");
            throw { err };
        }
    }

    static async getAirport(airportId) { //gets a particular airport

        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (err) {
            console.log("something went wrong in airport repository layer");
            throw { err };
        }
    }

    static async getAllAirports(filter) { //gets airport according to query
        try {
            if (filter.name) {
                const airport = Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return airport;
            }
            const airport = await Airport.findAll();
            return airport;
        } catch (err) {
            console.log("something went wrong in airport repository layer");
            throw { err };
        }
    }
}

module.exports = AirportRepository;
