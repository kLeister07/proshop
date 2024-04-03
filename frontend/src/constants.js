export const BASE_URL = process.env.Node_ENV === 'development' ? 'http://localhost:5001' : '';
// export const BASE_URL = process.env.Node_ENV === 'development' ? '' : process.env.SERVER_URL;

export const PRODUCTS_URL = `/api/products`;
export const USERS_URL = `/api/users`;
export const ORDERS_URL = `/api/orders`;
export const PAYPAL_URL = `/api/config/paypal`;

