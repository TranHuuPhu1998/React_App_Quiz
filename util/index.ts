import axios from "axios";
import * as Config from "../constants/Config";

const callAPI = (endpoint :any, REmethod:any = 'GET', body:any) => {
        return axios({
            method: REmethod,
            url: `${Config.API_URL}/${endpoint}`,
            data: body,
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(data => {
                if (!data.data) {
                    return false;
                } else {
                    return data;
            }
        })
        .catch(err => {
                console.log(err.err);
        });
    
}

export default callAPI;