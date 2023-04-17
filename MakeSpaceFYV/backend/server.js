const express = require('express');
const colors = require('colors')
const cors = require('cors');

require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware');

//database connection function:
const mongoDB = require('./config/db');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.raw({extended: false}));

app.use('/api/properties', require('./routes/propertyRoutes'))
app.use('/api/owners', require('./routes/ownerRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))
app.use('/api/customers', require('./routes/customerRoutes'))


app.use(errorHandler);

mongoDB();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});