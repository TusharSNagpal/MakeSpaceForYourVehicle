const ip = "172.20.10.3";
export const API_CUST_LOGIN = `http://${ip}:5001/api/customers/login`;
export const API_CUST_REGISTER = `http://${ip}:5001/api/customers/`;
export const API_CUST_GET = `http://${ip}:5001/api/customers/getCustomer`;

export const API_OWNER_LOGIN = `http://${ip}:5001/api/owners/login`;
export const API_PROPCUST_GET = `http://${ip}:5001/api/properties/getPropCust`;
export const API_PROP_DELETE = `http://${ip}:5001/api/properties/delete`;
export const API_PROP = `http://${ip}:5001/api/properties`;
export const API_OWNER_PROP = `http://${ip}:5001/api/properties/get`;
export const API_GET_OWNER = `http://${ip}:5001/api/owners/getOwner`;

export const API_NEW_BOOKING = `http://${ip}:5001/api/bookings/newBooking`;
export const API_CURR_BOOKING = `http://${ip}:5001/api/bookings/currentBooking`;
export const API_END_BOOKING = `http://${ip}:5001/api/bookings/out`;