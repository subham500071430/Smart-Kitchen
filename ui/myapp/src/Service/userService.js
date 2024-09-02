import axios from "axios";

const api = "http://localhost:8080/api/validateUser"

const getUser = async () => {

      const response = await axios.get(api)

      const data = await response.data

      console.log(data)
}

const validateUser = async (jsonData) => {

      const response = await axios.post(api, jsonData,
            {
                  headers: {
                        'Content-Type': 'application/json'
                  }
            }
      ).then(response => {
            console.log('Response:', response.data);
      }).catch(error => {
            console.error('Error:', error);
      });

      console.log(response);
}


export default validateUser