import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "36b55bde5ed84a3792f06088dc3c65e3",
    },
});
  