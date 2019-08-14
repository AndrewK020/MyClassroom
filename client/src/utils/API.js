import axios from "axios";

export default {

    createUser: (request) => {
        const user = {
            username: request.username.trim(),
            password: request.password
        };
        return axios.post("/api/users", user);
    }


};