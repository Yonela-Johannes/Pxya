const BASE_URL = 'http://localhost:5000';

export const PRODUCTS_URL = BASE_URL + '/api/products'
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/'
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/'

export const USER_LOGIN_URL = BASE_URL + "/api/users/login"
export const USER_REGISTER_URL = BASE_URL + "/api/users/register"

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
