import axios from "axios";

const Instance = axios.create({
	baseURL: "https://imdb-top-100-movies.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "cf880f2cbemsh335480ddc0b7b2dp1f5dafjsn7906860714b7",
		"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
	},
});

export default Instance;
