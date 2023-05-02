import Api from './Api'
const url = "http://localhost:4000/"
const Login = (body) => {
    return Api.post(url + "login", body)
}

const GeneralApi = { Login }

export default GeneralApi