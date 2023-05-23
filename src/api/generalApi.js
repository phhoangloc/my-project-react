import Api from "./Api"
const url = "http://localhost:4000/"

const getCoverItem = () => {
    return Api.get(url + '?sortbyid=-1&limit=3')
}

const getTopItem = () => {
    return Api.get(url)
}

const GeneralApi = {
    getCoverItem,
    getTopItem
}

export default GeneralApi