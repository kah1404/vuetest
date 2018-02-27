import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:63463/api/';

const appService = {
  getPosts (countryId){
    return new Promise((resolve) => {
      axios.get(`company/${countryId}`)
        .then(response => {
          resolve(response.data);
        })
    })
  }
};

export default appService
