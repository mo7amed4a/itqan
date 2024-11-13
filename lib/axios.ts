import axios from "axios";


export const api = axios.create({
    baseURL: "https://itqanedu.ivadso.com/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAcceptLanguage = (language: string) => {
    api.defaults.headers['Accept-Language'] = language;
};
