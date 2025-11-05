import commonApi from "./commonApi";
import baseUrl from "./baseUrl";

export const addResume = async (resume) => {
  return await commonApi("POST", `${baseUrl}/resumes`, resume);
};

export const editResumeApi = async (id, resume) => {
  return await commonApi("PUT", `${baseUrl}/resumes/${id}`, resume);
};

export const addDownloadHistory = async (resume) => {
  return await commonApi("POST", `${baseUrl}/history`, resume);
};

export const getDownloadHistory = async () => {
  return await commonApi("GET", `${baseUrl}/history`, {});
};
export const deleteDownloadHistory = async (id) => {
  return await commonApi("DELETE", `${baseUrl}/history/${id}`, {});
};
export const getResumeApi = async (id) => {
  return await commonApi("GET", `${baseUrl}/resumes/${id}`, {});
};
