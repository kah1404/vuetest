import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:63463/api/';

const showAppLeads = {
  async getPosts (){
    return await new Promise((resolve) => {
      axios.get('AppLeads/3')
        .then(response => {
          resolve(response.data);
        })
    })
  }
};

export default showAppLeads
