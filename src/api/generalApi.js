import Api from "./Api"
const url = process.env.REACT_APP_URL

const getCoverItem = () => {
    return Api.get(url + '?sortbyid=-1&limit=3')
}

const getTopItem = () => {
    return Api.get(url)
}

const login = (body) => {
    return Api.post(url + "login", body)
}

const signUp = (body) => {
    return Api.post(url + "createUser", body)
}

const GeneralApi = {
    getCoverItem,
    getTopItem,
    login,
    signUp
}

export default GeneralApi