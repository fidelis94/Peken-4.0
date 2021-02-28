import ApiService, {baseUrl} from './ApiService';

class AuthService {

  getListMarket = () => {
    let url = baseUrl + '/toko/';
    return ApiService.fetchGet(url).then((response) => {
      // console.log(`[GET] ${url}`, response);
      return response;
    });
  };

  getDataStore = (idstore) => {
    let url = baseUrl + `/products/${idstore}/show_b`;
    return ApiService.fetchGet(url).then((response) => {
      // console.log(`[GET] ${url}`, response);
      return response;
    });
  };

  getDetailStore = (idbarang)=>{
      let url = baseUrl + `/products/${idbarang}/show_detail`;
      return ApiService.fetchGet(url).then((response) => {
        // console.log(`[GET] ${url}`, response);
        return response;
      });
  }
}

export default new  AuthService();
