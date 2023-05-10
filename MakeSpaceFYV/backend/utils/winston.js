const winston = require('winston')
const { ElasticsearchTransport } = require('winston-elasticsearch');

async function getLogger(){
    try{
        return winston.createLogger({
            transports: [
                new ElasticsearchTransport({
                    level: 'info',
                    index: 'logs',
                    clientOpts: {
                        node: 'https://major-project-spe.es.us-central1.gcp.cloud.es.io:9243',
                        auth: {
                          username: 'elastic',
                          password: 'H56uiC5QxpbQCyX0k3FkwRAy'
                        },
                        cloud: {
                            id: 'Major_Project_SPE:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQ4NWM1NTZkMDNjNWE0YWI3OTIwNjIzYTNiNTk1NDgzYiRmZTZiMjVjZWJkZjg0NjYxOTNhNmU1NmU4NTA2NTBiNw=='
                        }
                      },
                  }),
            ]
        })
    }
    catch (error){
        console.log("error in getLogger(): " + error.message)
    }
}

module.exports = {getLogger};