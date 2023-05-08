const winston = require('winston')
const winstonRotate = require('winston-daily-rotate-file')

async function getLogger(){
    try{
        return winston.createLogger({
            transports: [
                new winston.transports.DailyRotateFile({
                    filename: "logger.log",
                    frequency: "1m",
                    datePattern: "YYYY-MM-DD-HH-mm",
                    maxSize: "1k",
                    maxFiles: 2,
                    dirname: "./logs"
                })
            ]
        })
    }
    catch (error){
        console.log("error in getLogger(): " + error.message)
    }
}

module.exports = {getLogger};