import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGIxYmRkMGFiY2RhNmUxNTZiMzI3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjAwNzY0NSwiZXhwIjoxNjYyMjY2ODQ1fQ.Lkfu5b8Ch0He-IVwN4uw7RNb4IxGDUJtNmXc0fbkqdc";
export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}`},

});
