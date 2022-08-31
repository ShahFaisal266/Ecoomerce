import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDVlZDU5NTc4ZjlhOTExNzdmNmU1OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjE0MTc3NTIsImV4cCI6MTY2MTY3Njk1Mn0.5ZFfM_hUsEIZ0rTgN830TOww_YvAUWyqGe924tPHbyM";

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}`},

});
