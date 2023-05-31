const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
// const { sendBasicEmail } = require('./services/email-service')
const jobs = require('./utils/job')
const TicketController = require('./controllers/ticket-controller')

const setupAndStartServer = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.post('/api/v1/tickets' , TicketController.create);
    jobs();
    app.listen(PORT, () => {
        console.log(`Reminder Service up and running at port ${PORT}`)

    })

    // cron.schedule('*/2 * * * *', () => {
    //     console.log('running a task every two minutes');
    // });

}

setupAndStartServer();
