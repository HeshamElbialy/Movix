import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.APP_TMDB_TOKEN;
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE0NjA0Mzk4MjNmMDNiYTJjOTFmOWVmYTEyMDcyNSIsInN1YiI6IjY0NDdmYzIwYzUxYWNkMDRiNmE5NTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ZR8E1dl_Xq30Ywe_ZOMhEFtgx0MG62Zux5S0OUO5z4";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
    
  }
};
