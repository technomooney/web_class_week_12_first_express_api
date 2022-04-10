import axios from "axios";
// let url = 'http://127.0.0.1:3000/api'
let base = 'api'
export default {
    getHelloMessage() {
        let test =  axios.get(base).then(response => {
            console.log(response)
            return response.data
        }).catch(function (reason) {
            console.log(reason)
        })
        console.log(test)
        return test
    }
}