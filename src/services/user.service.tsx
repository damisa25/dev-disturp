import axios from "axios";

const API_URL_OFFER = process.env.REACT_APP_API_URL + "scholarships";
const API_URL_DONERS = process.env.REACT_APP_API_URL + "donors";
const API_URL_STUDENTS = process.env.REACT_APP_API_URL + "students";
const API_URL_APPLICATIONS = process.env.REACT_APP_API_URL + "applications";

const postOfferScholar = async (data: any) => {
  return axios.post(`${API_URL_OFFER}`, data);
};

const getAllScholars = async () => {
  return axios.get(`${API_URL_OFFER}`);
};

const getScholarByStudentID = async (id: String) => {
  return axios.get(`${API_URL_STUDENTS}/${id}/scholarships`);
};

const getOfferByDonor = async (id: String) => {
  return axios.get(`${API_URL_DONERS}/${id}/scholarships`);
};

const getScolarshipById = async (id: string) => {
  return axios.get(`${API_URL_OFFER}/${id}`);
};

const postSubmitApplication = async (studentId: string, sholarshipId: string) => {
  return axios.post(`${API_URL_APPLICATIONS}`, {
    scholarship: sholarshipId,
    student: studentId,
    state: 'pending',
    createdDate: Date.now(),
    updatedDate: Date.now(),
    note: ''
  });
};

export {
  postOfferScholar,
  getAllScholars,
  getScholarByStudentID,
  getOfferByDonor,
  getScolarshipById,
  postSubmitApplication,
};
