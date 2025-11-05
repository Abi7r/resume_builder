import axios from "axios";

const commonApi = async (method, url, body) => {
  const configObject = {
    method,
    url,
    data: body,
  };
  return await axios(configObject)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default commonApi;
