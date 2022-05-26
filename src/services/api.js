import axios from "axios";

const musicClubShopApi = axios.create({
  baseURL: "https://api-music-club-shop.herokuapp.com/",
});

export default musicClubShopApi;
