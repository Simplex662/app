import { v4 as uuidv4 } from 'uuid';

export const getUUID = () => {
    let uuid_token = localStorage.getItem("UUID");
    if (uuid_token){
        return uuid_token;
    }else {
        localStorage.setItem("UUID",uuidv4());
        uuid_token = localStorage.getItem("UUID");
        return uuid_token;
    }
};