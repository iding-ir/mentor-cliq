import axios from "axios";

import { csvToJson } from "../../utils/csvToJosn";

const api = process.env.REACT_APP_API;

export const getEmployees = async () => {
  const response = await axios.get(`${api}`);

  const json = csvToJson(response.data);

  return JSON.parse(json);
};
