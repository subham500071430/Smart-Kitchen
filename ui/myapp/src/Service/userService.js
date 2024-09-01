import axios  from "axios";

const api =  "http://localhost:8080/api/validateUser"

const getUser = async ()=>{
        
      const respone  = await axios.get(api)

      const data = await respone.data

      console.log(data)
}


export default getUser