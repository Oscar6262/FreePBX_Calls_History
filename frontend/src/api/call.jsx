// import { method } from 'lodash'
import { BASE_API } from "../utils/constants";

export async function getCallsApi(form) {
  try {
    const url = `${BASE_API}/calls_d`;
    const params = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
