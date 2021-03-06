import Axios from "axios";

export const rootUrl = "http://api-laravel/";

export const Http = Axios.create({
  baseUrl: rootUrl,
});
