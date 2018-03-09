import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:63463/api/';

const showProspects = {
   async getPosts (){
    return await new Promise((resolve) => {
      axios.get('companies')
        .then(response => {
          resolve(response.data);
        })
    })
  }
};

export default showProspects
