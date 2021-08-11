import apiObject from './apiObject';

const endpoint='/qoob';

const getQoobs = () => apiObject.get(endpoint)

export default{
    getQoobs,
}