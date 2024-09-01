import axios from "axios";

const API = "http://localhost:8080/api/getAllUsers";

function userService(){
   
       return axios.get(API);

}

export default userService;