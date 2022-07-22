const nodeMailer = require('nodemailer');
const myMail = 'favian80@ethereal.email';
/**
 * 
 *  user: 'emile.greenholt63@ethereal.email',
        pass: 'RDQSHxZBDUpKZnNsqg'
*/
let mailConfig;
mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'domenica.walker25@ethereal.email',
        pass: 'AhQ75nNTzWv5842C5s'
    }
};
module.exports = nodeMailer.createTransport(mailConfig);