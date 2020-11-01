import axios from "axios";

const API_URL_OFFER = process.env.REACT_APP_API_URL + "scholarships";

const postOfferScholar = async (data: any) => {
  return axios.post(`${API_URL_OFFER}`, data);
};

export { postOfferScholar };
