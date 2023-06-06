import axios from "axios";

const baseurl=axios.create({
    baseURL:'/'
})
export default baseurl;
