const winston = require('winston')
const { ElasticsearchTransport } = require('winston-elasticsearch');

async function getLogger(){
  transports: [
    new ElasticsearchTransport({
      level: 'info',
      index: 'logs',
      clientOpts: {
        node: 'http://localhost:9200/',
        
      },
    }),
  ]
}

module.exports = {getLogger};