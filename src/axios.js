import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://asia-south1-challenge-ac537.cloudfunctions.net/api'
});

export default instance;


