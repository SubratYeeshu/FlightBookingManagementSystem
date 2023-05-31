const { City } = require('../models/index')
const { Op } = require('sequelize');

class CityRepository {

    async createCity({ name }) { //destructuring object using {}

        try {
            // console.log(name);
            const city = await City.create({
                name: name
            });
            return city;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }


    async createCities({ names }) { //recieves a names array
        try {
            // console.log(names);

            const cities = await City.bulkCreate(
                names
            );
            return cities;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }



    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }

    }

    async updateCity(cityId, { name }) {

        try {
            const city = await City.update({ name: name }, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }
    }

    async getCity(cityId) {

        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }
    }


    async getAllCities(filter) {
        try {
            if (filter.name) {
                const city = City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return city;
            }
            const city = await City.findAll();
            return city;
        } catch (err) {
            console.log("something went wrong in repository layer");
            throw { err };
        }
    }


}

module.exports = CityRepository;
