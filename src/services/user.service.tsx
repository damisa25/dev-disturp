import axios from "axios";

const API_URL_OFFER = process.env.REACT_APP_API_URL + "scholarships";

const postOfferScholar = async (data: any) => {
  return axios.post(`${API_URL_OFFER}`, data);
};

const getScolarshipById = async (id: string) => {
  return axios.get(`${API_URL_OFFER}/${id}`);
};

export { postOfferScholar, getScolarshipById };
