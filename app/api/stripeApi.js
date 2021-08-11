import apiObject from './apiObject';

const endpoint='/payment';

const getAccountLink = () => apiObject.get(endpoint+'/accountLink');

export default {
    getAccountLink,
}
