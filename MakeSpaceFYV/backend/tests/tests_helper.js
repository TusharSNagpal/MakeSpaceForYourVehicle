const mongoose = require('mongoose')
const Owner = require('../models/ownerModel')
const Customer = require('../models/customerModel')
const Booking = require('../models/bookingsModel')
const Property = require('../models/propertiesModel')

const initialOwners = [
    {
        'name': 'Gaurav',
        'phone': '9558342619',
        'address': 'IIITB',
        'password': '$2a$10$UDGGLBRXE8nHCR1WadpiAOIuaf0w5xMy1SN0Ce6SF7hQe4eXbfd.S'
    },
    {
        'name': 'Tushar',
        'phone': '9650817131',
        'address': 'IIITB',
        'password': '$2a$10$iXaLSnhgNr2bIu1YbIPlN.c5sL0m7N46/TWv/Kqy3qbTofvNFILQe'
    }
]

const initialCustomers = [
    {
        'name': 'Gaurav',
        'phone': '9558342619',
        'address': 'IIITB',
        'pincode': '390006',
        'vehicle': '8140',
        'password': '$2a$10$UDGGLBRXE8nHCR1WadpiAOIuaf0w5xMy1SN0Ce6SF7hQe4eXbfd.S'
    },
    {
        'name': 'Tushar',
        'phone': '9650817131',
        'address': 'IIITB',
        'pincode': '390006',
        'vehicle': '4132',
        'password': '$2a$10$iXaLSnhgNr2bIu1YbIPlN.c5sL0m7N46/TWv/Kqy3qbTofvNFILQe'
    }
]

const loginOwner = {
    'phone': '9558342619',
    'password': 'gaurav'
}

const loginCustomer = {
    'phone': '9558342619',
    'password': 'gaurav'
}

const ownersInDb = async() => {
    const owners = await Owner.find({})
    return owners.map(owner => owner.toJSON())
}

const customersInDb = async() => {
    const customers = await Customer.find({})
    return customers.map(customer => customer.toJSON())
}

module.exports = {
    initialOwners,
    loginOwner,
    ownersInDb,
    initialCustomers,
    loginCustomer,
    customersInDb,
}