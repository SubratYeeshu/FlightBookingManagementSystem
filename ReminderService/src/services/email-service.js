const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticket-repository')


const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}



const updateTicket = async (ticketId, data) => {
    try {
        const repo = new TicketRepository();
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const fetchPendingEmails = async (timestamp) => {
    try {
        //try getting from repository layer
        const repo = new TicketRepository();
        const response = await repo.get({ status: "PENDING" });

        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const repo = new TicketRepository();
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in service layer");
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}