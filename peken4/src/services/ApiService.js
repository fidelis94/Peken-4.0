import axios from 'axios';


class ApiService {

    fetchPost = (url, params, header = this.header()) => {
        console.log('request [POST]-', url, params, header)
        return axios.post(url,params,header)
        .then(response => {
            // console.log('response [POST]-', url, response)
            return response
        })
    }


    fetchGet = (url,params,header=this.header()) => {
        console.log('request [GET]-', url)
        return axios.get(url,params,header)
        .then(response => {
            // console.log('response [GET]-', url, response)
            return response
        })
    }

    fetchDelete = (url, params) => {
        console.log('request [DELETE]-', url, params)
        return axios.delete(url,params).
        then(response => {
            console.log('response [DELETE]-', url, response)
            return response
        })
    }

    fetchPut = (url, params) => {
        console.log('request [PUT]-', url, params)
        return axios.put(url,params).
        then(response => {
            console.log('response [PUT]-', url, response)
            return response
        })
    }

    header() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + Session.token,
            // 'Accept-Language': 'en',
        }
    }
}

export default new ApiService();
export  const baseUrl = 'https://pasar-gembira4-0.herokuapp.com';


// export const baseUrl = Config.API_URL