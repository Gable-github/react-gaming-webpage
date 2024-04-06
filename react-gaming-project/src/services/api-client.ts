import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '90958880bd0f418383bec06b32d33291'
    }
})