const cron = require('node-cron');
const emailService = require('../services/email-service')
const sender = require('../config/emailConfig')

/**
 * Check pending emails which were expected to be sent by now but are pending.
 * Send those emails
 */


const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        // console.log('running a task every two minutes');
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {

            try {
                sender.sendMail({
                    from: "service@booking.com",
                    to: email.recepientEmail,
                    subject: email.subject,
                    text: email.content
                }, async (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        await emailService.updateTicket(email.id , {status: "SUCCESS"});
                    }
                });
            } catch (error) {
                console.log(error);
                throw error;
            }

        })

        console.log(response);
        return response;
    })
}

module.exports = setupJobs;
