export { getData };
import axios from "axios";

// const axios = require('axios');
const API_KEY = '35462785-e10514680457f20eb10f4047d';
const URL = "https://pixabay.com/api/";
// axios.defaults.baseURL = URL;
const searchParams = new URLSearchParams({
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
});

const getData = async (query, perPage, page) => {
  const { data } = await axios.get(`${URL}?key=${API_KEY}&q=${query}&${searchParams}&per_page=${perPage}&page=${page}`)
    .catch((error) => console.log(error));
  // console.log(data.hits);
  return data;
};