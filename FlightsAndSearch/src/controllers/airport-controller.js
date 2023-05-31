const AirportService = require('../services/airport-service')



//POST MULTIPLE Airports

const createAll = async (req, res) => {

    try {

        const airport = await AirportService.createAirport(req.body);
        res.status(201).json({
            data: airport,
            success: true,
            message: " Airports created successfully ",
            error: {}
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: " Not able to create airports ",
            error: error
        });
    }
}


//DELETE -
const destroy = async (req, res) => {
    try {
        const response = await AirportService.deleteAirport(req.params.id);
        res.status(201).json({
            deleted: response,
            message: "successfully deleted a airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            deleted: response,
            message: "unable to delete airport",
            error: error
        })
    }
}

//Patch - data will be recieved from req.body
const update = async (req, res) => {
    try {
        const airport = await AirportService.updateAirport(req.params.id, req.query);
        res.status(201).json({
            data: airport,
            success: true,
            message: "Succesefully updated the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete airport",
            error: error
        })
    }
}


//Get request
const get = async (req, res) => {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        res.status(201).json({
            data: airport,
            success: true,
            message: "Succesefully fetched the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get city",
            error: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const airport = await AirportService.getAllAirports(req.query);
        res.status(200).json({
            data: airport,
            success: true,
            message: "Succesefully fetched ALL THE CITIES",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get any city",
            error: error
        })
    }
}

module.exports = {
    createAll,
    destroy,
    update,
    get,
    getAll,
    createAll
}
