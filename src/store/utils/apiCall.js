import axios from 'axios';

const apiCall = async (api) => {
  try {
    const response = await axios.get(api)
    return response.data
  }
  catch (error) {
    return error
  }
}

export default apiCall;