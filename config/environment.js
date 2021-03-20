const fs = require('fs');
const rfs= require('rotating-file-stream');
const path= require('path');


const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory)  || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});
const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'yadavnitesh9920',
            pass: 'nitesh'
        }
    },
    google_client_id: "34251580183-eq5d1h00fsih8lua012qe6vafi3ocoar.apps.googleusercontent.com",
    google_client_secret: "nbV7k9w7K7WCZh0BSbuKe5uN",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
    morgan : {
        mode: 'dev',
        options:  {stream: accessLogStream}
    }
}


const production =  {
    name: 'production'
}



module.exports = development;