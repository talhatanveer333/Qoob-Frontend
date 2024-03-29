import {create} from 'apisauce';
import AuthStore from '../auth/authStorage';

const apiObject=create({
    baseURL:'http://10.206.11.160:3000/api',
})

apiObject.addAsyncRequestTransform(async (request)=>{
    const token=await AuthStore.getToken();
    if(!token) return;
    request.headers['x-auth-token']=token;
});

export default apiObject;