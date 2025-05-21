import axios from "axios";

//Rota para teste local
// const URL = "/api";

const URL = "https://mynfy.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
console.log(responseArtists);
