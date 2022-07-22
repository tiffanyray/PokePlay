import { requests } from "../index";

export const Pokemon = {
    list: (take, skip) => requests.get(`/pokemon/?limit=${take}&offset=${skip}`),
    one: (id) => requests.get(`/pokemon/${id}`)
};