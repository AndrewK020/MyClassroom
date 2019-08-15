import axios from "axios";

export default {

    createUser: (request) => {
        const user = {
            username: request.username.trim(),
            password: request.password
        };
        return axios.post("/api/users", user);
    },
    loginUser: (request) => {
        const user = {
            username: request.username,
            password: request.password
        };
        return axios.post("/api/users/login", user);

    },
 
    getUserInfo:(request) => {
            const user = {
                username: "",
                quizes: [],
            };
            user.username = request.username;
    
            return axios.get(`/api/users/${user.username}`);
        },
    getQuizInfo: (request) => {
        const quizes = request.quizes;
            console.log(quizes);
           return Promise.all( quizes.map(quizId => {
            console.log(quizId);
            return axios.get(`/api/quizes/${quizId}`);
        }));
    }
};