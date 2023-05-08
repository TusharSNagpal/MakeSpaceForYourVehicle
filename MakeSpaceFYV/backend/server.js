const express = require('express');
const colors = require('colors')
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs')
const path = require('path')

const accessLogStream = fs.createWriteStream(
	path.join(__dirname, './logs/access.log'),
	{ flags: 'a' }
)

// const logger = require('./utils/logger')
// const {getLogger} = require('./utils/winston')
require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware');

// let logger;

// const funLogger = async() => {
// 	 logger = await getLogger();
// } 

// funLogger();

//database connection function:
const mongoDB = require('./config/db');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.raw({extended: false}));

app.use(morgan('tiny', { stream: accessLogStream }))
app.use('/api/properties', require('./routes/propertyRoutes'))
app.use('/api/owners', require('./routes/ownerRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))
app.use('/api/customers', require('./routes/customerRoutes'))


app.use(errorHandler);

// morgan.token('data', request => {
// 	if (request.body.password)
// 		request.body.password = ''
// 	return JSON.stringify(request.body)
// })


mongoDB().then(() => {
	console.log('Successfully connected to MongoDB')
    // logger.info('Successfully connected to MongoDB')
})
.catch((error) => {
	console.log(`Failed to connect to MongoDB: ${error.message}`)
    // logger.error(`Failed to connect to MongoDB: ${error.message}`)
});

// if (process.env.NODE_ENV === 'production')
// 	app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms :data', {
// 		stream: fs.createWriteStream('./backend/logs/access.log', {flags: 'a'})
// 	}))
// if (process.env.NODE_ENV === 'production')
// 	app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms :data'))


module.exports = app